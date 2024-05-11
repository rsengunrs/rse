import fs from "node:fs";
import path from "node:path";
import type { BundleResult, SourceMapMetadata } from "./bundle";
import type { CfModule, CfWorkerSourceMap } from "./worker";
import type { RawSourceMap } from "source-map";

/**
 * Loads source maps that appear in the given build output.
 */
export function loadSourceMaps(
	main: CfModule,
	modules: CfModule[],
	bundle: Partial<BundleResult>
): CfWorkerSourceMap[] {
	const { sourceMapPath, sourceMapMetadata } = bundle;
	if (sourceMapPath && sourceMapMetadata) {
		// This worker was bundled by Wrangler, so we already know where
		// the source map is located.
		return loadSourceMap(main, sourceMapPath, sourceMapMetadata);
	} else {
		// Don't know where source maps are located, so need to find
		// them by scanning the contents of the user-specified modules.
		return scanSourceMaps([main, ...modules]);
	}
}

/**
 * Load and normalize a source map emitted by Wrangler using the given path and
 * directory metadata.
 */
function loadSourceMap(
	{ name, filePath }: CfModule,
	sourceMapPath: string,
	{ entryDirectory }: SourceMapMetadata
): CfWorkerSourceMap[] {
	if (filePath === undefined) {
		return [];
	}
	const map = JSON.parse(
		fs.readFileSync(sourceMapPath, "utf8")
	) as RawSourceMap;
	// Overwrite the file property of the source map to match the name of the
	// main module in the multipart upload.
	map.file = name;
	if (map.sourceRoot) {
		// Remove the temporary directory prefix generated by Wrangler that appears
		// in the source root path.
		const sourceRootPath = path.dirname(
			path.join(entryDirectory, sourceMapPath)
		);
		map.sourceRoot = stripPathPrefix(sourceRootPath, map.sourceRoot);
	}
	map.sources = map.sources.map((source) => {
		const originalPath = path.join(path.dirname(filePath), source);
		// Remove the temporary build directory prefix generated by Wrangler
		// that appears in the source path.
		return stripPathPrefix(entryDirectory, originalPath);
	});
	return [
		{
			name: name + ".map",
			content: JSON.stringify(map),
		},
	];
}

/**
 * Find source maps by scanning module contents for special `//#
 * sourceMappingURL=` comments pointing to source map files.
 */
function scanSourceMaps(modules: CfModule[]): CfWorkerSourceMap[] {
	const maps: CfWorkerSourceMap[] = [];
	for (const module of modules) {
		const commentPrefix = "//# sourceMappingURL=";
		const lastLine = module.content.toString().split("\n").pop();
		if (
			lastLine === undefined ||
			!lastLine.startsWith(commentPrefix) ||
			module.filePath === undefined
		) {
			continue;
		}
		// Assume the source map path in the comment is relative to the
		// generated file it appears in.
		const commentPath = stripPrefix(commentPrefix, lastLine).trim();
		if (commentPath.startsWith("data:")) {
			throw new Error(
				`Unsupported source map path in ${module.filePath}: expected file path but found data URL.`
			);
		}
		// Convert source map path to an absolute path that we can read.
		const wranglerPath = path.join(path.dirname(module.filePath), commentPath);
		if (!fs.existsSync(wranglerPath)) {
			throw new Error(
				`Invalid source map path in ${module.filePath}: ${wranglerPath} does not exist.`
			);
		}
		const map = JSON.parse(
			fs.readFileSync(wranglerPath, "utf8")
		) as RawSourceMap;
		// Overwrite the file property of the sourcemap to match the name of the
		// corresponding module in the multipart upload.
		map.file = module.name;
		if (map.sourceRoot) {
			map.sourceRoot = cleanPathPrefix(map.sourceRoot);
		}
		map.sources = map.sources.map(cleanPathPrefix);
		maps.push({
			name: module.name + ".map",
			content: JSON.stringify(map),
		});
	}
	return maps;
}

/**
 * Removes leading "." and ".." segments from the given file path.
 */
function cleanPathPrefix(filePath: string): string {
	// Don't assume that the path separator matches the current OS.
	return stripPrefix(
		"..\\",
		stripPrefix("../", stripPrefix(".\\", stripPrefix("./", filePath)))
	);
}

function stripPathPrefix(prefix: string, filePath: string): string {
	// Don't assume that the path separator matches the current OS.
	return stripPrefix(
		prefix,
		stripPrefix(prefix + "\\", stripPrefix(prefix + "/", filePath))
	);
}

function stripPrefix(prefix: string, input: string): string {
	let stripped = input;
	while (stripped.startsWith(prefix)) {
		stripped = stripped.slice(prefix.length);
	}
	return stripped;
}
