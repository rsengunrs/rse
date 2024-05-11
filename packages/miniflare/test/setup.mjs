import Module from "node:module";
import {
	_initialiseInstanceRegistry,
	_enableControlEndpoints,
} from "../dist/src/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.resolve(__dirname, "..");

// Monkeypatch Node's resolver to require built `miniflare` package when we call
// `require("miniflare")`. We could fix this by adding `miniflare` as a
// dev dependency of itself, but Turborepo doesn't allow this.
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (spec, ...args) {
	if (spec === "miniflare") spec = pkgRoot;
	return originalResolveFilename.call(this, spec, ...args);
};

const registry = _initialiseInstanceRegistry();
const bigSeparator = "=".repeat(80);
const separator = "-".repeat(80);

_enableControlEndpoints();

// `process.on("exit")` is more like `worker_thread.on(`exit`)` here. It will
// be called once AVA's finished running tests and `after` hooks. Note we can't
// use an `after` hook here, as that would run before `miniflareTest`'s
// `after` hooks to dispose their `Miniflare` instances.
process.on("exit", () => {
	if (registry.size === 0) return;

	// If there are Miniflare instances that weren't disposed, throw
	const s = registry.size === 1 ? "" : "s";
	const was = registry.size === 1 ? "was" : "were";
	const message = `Found ${registry.size} Miniflare instance${s} that ${was} not dispose()d`;
	const stacks = Array.from(registry.values()).join(`\n${separator}\n`);
	console.log(
		[bigSeparator, message, separator, stacks, bigSeparator].join("\n")
	);
	throw new Error(message);
});
