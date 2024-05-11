import * as path from "node:path";
import chalk from "chalk";
import onExit from "signal-exit";
import { bundleWorker } from "../deployment-bundle/bundle";
import { getBundleType } from "../deployment-bundle/bundle-type";
import { dedupeModulesByName } from "../deployment-bundle/dedupe-modules";
import { findAdditionalModules as doFindAdditionalModules } from "../deployment-bundle/find-additional-modules";
import {
	createModuleCollector,
	getWrangler1xLegacyModuleReferences,
	noopModuleCollector,
} from "../deployment-bundle/module-collection";
import { runCustomBuild } from "../deployment-bundle/run-custom-build";
import { getBoundWorkers, RegistryHandle } from "../dev-registry";
import { logger } from "../logger";
import { getWranglerTmpDir } from "../paths";
import { getWorkerDefinition, localPropsToConfigBundle } from "./local";
import { MiniflareServer } from "./miniflare";
import { startRemoteServer } from "./remote";
import { validateDevProps } from "./validate-dev-props";
import type { Config } from "../config";
import type { DurableObjectBindings } from "../config/environment";
import type { Entry } from "../deployment-bundle/entry";
import type { CfModule } from "../deployment-bundle/worker";
import type { UpdatableWorkerRegistry } from "../dev-registry";
import type { DevProps } from "./dev";
import type { LocalProps } from "./local";
import type { EsbuildBundle } from "./use-esbuild";

export async function startDevServer(
	props: DevProps & {
		local: boolean;
		disableDevRegistry: boolean;
	}
) {
	validateDevProps(props);

	if (props.build.command) {
		const relativeFile =
			path.relative(props.entry.directory, props.entry.file) || ".";
		await runCustomBuild(props.entry.file, relativeFile, props.build).catch(
			(err) => {
				logger.error("Custom build failed:", err);
			}
		);
	}

	//implement a react-free version of useTmpDir
	const directory = setupTempDir(props.projectRoot);
	if (!directory) {
		throw new Error("Failed to create temporary directory.");
	}

	//start the worker registry
	let workerRegistry: UpdatableWorkerRegistry = {
		workers: {},
		async update() {},
	};
	let workerRegistryHandle: RegistryHandle | undefined;
	logger.log("disableDevRegistry: ", props.disableDevRegistry);
	if (!props.disableDevRegistry && props.local) {
		try {
			const handle = new RegistryHandle(props.name, () => {});
			workerRegistryHandle = handle;
			const workers = await handle.query();
			const boundWorkers = getBoundWorkers(
				workers,
				props.bindings.services,
				props.bindings.durable_objects
			);
			workerRegistry = {
				workers: boundWorkers,
				update: handle.update.bind(handle),
			};
		} catch (err) {
			logger.error("failed to start worker registry", err);
		}
	}

	//implement a react-free version of useEsbuild
	const bundle = await runEsbuild({
		entry: props.entry,
		destination: directory,
		jsxFactory: props.jsxFactory,
		processEntrypoint: props.processEntrypoint,
		additionalModules: props.additionalModules,
		rules: props.rules,
		jsxFragment: props.jsxFragment,
		serveAssetsFromWorker: Boolean(
			props.assetPaths && !props.isWorkersSite && props.local
		),
		tsconfig: props.tsconfig,
		minify: props.minify,
		legacyNodeCompat: props.legacyNodeCompat,
		nodejsCompat: props.nodejsCompat,
		define: props.define,
		noBundle: props.noBundle,
		findAdditionalModules: props.findAdditionalModules,
		assets: props.assetsConfig,
		testScheduled: props.testScheduled,
		local: props.local,
		doBindings: props.bindings.durable_objects?.bindings ?? [],
		projectRoot: props.projectRoot,
	});

	if (props.local) {
		const { stop } = await startLocalServer({
			name: props.name,
			bundle: bundle,
			format: props.entry.format,
			compatibilityDate: props.compatibilityDate,
			compatibilityFlags: props.compatibilityFlags,
			bindings: props.bindings,
			assetPaths: props.assetPaths,
			initialPort: props.initialPort,
			initialIp: props.initialIp,
			rules: props.rules,
			inspectorPort: props.inspectorPort,
			runtimeInspectorPort: props.runtimeInspectorPort,
			localPersistencePath: props.localPersistencePath,
			liveReload: props.liveReload,
			crons: props.crons,
			queueConsumers: props.queueConsumers,
			localProtocol: props.localProtocol,
			localUpstream: props.localUpstream,
			inspect: props.inspect,
			onReady: props.onReady,
			enablePagesAssetsServiceBinding: props.enablePagesAssetsServiceBinding,
			usageModel: props.usageModel,
			workerRegistry,
			sourceMapPath: bundle?.sourceMapPath,
		});

		return {
			stop: async () => {
				workerRegistryHandle?.dispose();
				stop();
			},
			// TODO: inspectorUrl,
		};
	} else {
		const { stop } = await startRemoteServer({
			name: props.name,
			bundle: bundle,
			format: props.entry.format,
			accountId: props.accountId,
			bindings: props.bindings,
			assetPaths: props.assetPaths,
			isWorkersSite: props.isWorkersSite,
			port: props.initialPort,
			ip: props.initialIp,
			localProtocol: props.localProtocol,
			inspectorPort: props.inspectorPort,
			inspect: props.inspect,
			compatibilityDate: props.compatibilityDate,
			compatibilityFlags: props.compatibilityFlags,
			usageModel: props.usageModel,
			env: props.env,
			legacyEnv: props.legacyEnv,
			zone: props.zone,
			host: props.host,
			routes: props.routes,
			onReady: props.onReady,
			sourceMapPath: bundle?.sourceMapPath,
			sendMetrics: props.sendMetrics,
		});
		return {
			stop: async () => {
				workerRegistryHandle?.dispose();
				stop();
			},
			// TODO: inspectorUrl,
		};
	}
}

function setupTempDir(projectRoot: string | undefined): string | undefined {
	try {
		const dir = getWranglerTmpDir(projectRoot, "dev");
		return dir.path;
	} catch (err) {
		logger.error("Failed to create temporary directory to store built files.");
	}
}

async function runEsbuild({
	entry,
	destination,
	jsxFactory,
	jsxFragment,
	processEntrypoint,
	additionalModules,
	rules,
	assets,
	serveAssetsFromWorker,
	tsconfig,
	minify,
	legacyNodeCompat,
	nodejsCompat,
	define,
	noBundle,
	findAdditionalModules,
	testScheduled,
	local,
	doBindings,
	projectRoot,
}: {
	entry: Entry;
	destination: string | undefined;
	jsxFactory: string | undefined;
	jsxFragment: string | undefined;
	processEntrypoint: boolean;
	additionalModules: CfModule[];
	rules: Config["rules"];
	assets: Config["assets"];
	define: Config["define"];
	serveAssetsFromWorker: boolean;
	tsconfig: string | undefined;
	minify: boolean | undefined;
	legacyNodeCompat: boolean | undefined;
	nodejsCompat: boolean | undefined;
	noBundle: boolean;
	findAdditionalModules: boolean | undefined;
	testScheduled?: boolean;
	local: boolean;
	doBindings: DurableObjectBindings;
	projectRoot: string | undefined;
}): Promise<EsbuildBundle | undefined> {
	if (!destination) return;

	if (noBundle) {
		additionalModules = dedupeModulesByName([
			...((await doFindAdditionalModules(entry, rules)) ?? []),
			...additionalModules,
		]);
	}

	const entryDirectory = path.dirname(entry.file);
	const moduleCollector = noBundle
		? noopModuleCollector
		: createModuleCollector({
				wrangler1xLegacyModuleReferences: getWrangler1xLegacyModuleReferences(
					entryDirectory,
					entry.file
				),
				entry,
				findAdditionalModules: findAdditionalModules ?? false,
				rules,
		  });

	const bundleResult =
		processEntrypoint || !noBundle
			? await bundleWorker(entry, destination, {
					bundle: !noBundle,
					additionalModules,
					moduleCollector,
					serveAssetsFromWorker,
					jsxFactory,
					jsxFragment,
					tsconfig,
					minify,
					legacyNodeCompat,
					nodejsCompat,
					define,
					checkFetch: true,
					assets,
					// disable the cache in dev
					bypassAssetCache: true,
					targetConsumer: "dev", // We are starting a dev server
					local,
					testScheduled,
					doBindings,
					projectRoot,
			  })
			: undefined;

	return {
		id: 0,
		entry,
		path: bundleResult?.resolvedEntryPointPath ?? entry.file,
		type: bundleResult?.bundleType ?? getBundleType(entry.format),
		modules: bundleResult ? bundleResult.modules : additionalModules,
		dependencies: bundleResult?.dependencies ?? {},
		sourceMapPath: bundleResult?.sourceMapPath,
		sourceMapMetadata: bundleResult?.sourceMapMetadata,
	};
}

export async function startLocalServer(props: LocalProps) {
	if (!props.bundle || !props.format) return Promise.resolve({ stop() {} });

	// Log warnings for experimental dev-registry-dependent options
	if (props.bindings.services && props.bindings.services.length > 0) {
		logger.warn(
			"⎔ Support for service bindings in local mode is experimental and may change."
		);
	}
	const externalDurableObjects = (
		props.bindings.durable_objects?.bindings || []
	).filter((binding) => binding.script_name);
	if (externalDurableObjects.length > 0) {
		logger.warn(
			"⎔ Support for external Durable Objects in local mode is experimental and may change."
		);
	}

	logger.log(chalk.dim("⎔ Starting local server..."));

	const config = await localPropsToConfigBundle(props);
	return new Promise<{ stop: () => void }>((resolve, reject) => {
		const server = new MiniflareServer();
		server.addEventListener("reloaded", async (event) => {
			await props.workerRegistry?.update(getWorkerDefinition(event));
			props.onReady?.(event.url.hostname, parseInt(event.url.port));
			// Note `unstable_dev` doesn't do anything with the inspector URL yet
			resolve({
				stop: () => {
					abortController.abort();
					logger.log("⎔ Shutting down local server...");
					// Initialization errors are also thrown asynchronously by dispose().
					// The `addEventListener("error")` above should've caught them though.
					server.onDispose().catch(() => {});
					removeMiniflareServerExitListener();
				},
			});
		});
		server.addEventListener("error", ({ error }) => {
			logger.error("Error reloading local server:", error);
			reject(error);
		});
		const removeMiniflareServerExitListener = onExit(() => {
			logger.log(chalk.dim("⎔ Shutting down local server..."));
			void server.onDispose();
		});
		const abortController = new AbortController();
		void server.onBundleUpdate(config, { signal: abortController.signal });
	});
}
