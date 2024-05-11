import { printWranglerBanner } from "..";
import { readConfig } from "../config";
import { logger } from "../logger";
import * as metrics from "../metrics";
import openInBrowser from "../open-in-browser";

import type {
	CommonYargsArgv,
	StrictYargsOptionsToInterface,
} from "../yargs-types";

const argToUrlHash = {
	d1: "d1",
	docs: "docs",
	init: "init",
	generate: "generate",
	dev: "dev",
	publish: "publish",
	delete: "delete",
	"kv:namespace": "kvnamespace",
	"kv:key": "kvkey",
	"kv:bulk": "kvbulk",
	"r2 bucket": "r2-bucket",
	"r2 object": "r2-object",
	secret: "secret",
	"secret:bulk": "secretbulk",
	tail: "tail",
	pages: "pages",
	login: "login",
	logout: "logout",
	whoami: "whoami",
	types: "types",
	deployments: "deployments",
};

export function docsOptions(yargs: CommonYargsArgv) {
	return yargs.positional("command", {
		describe: "Enter the wrangler command you want to know more about",
		type: "string",
		// requiresArg: true,
		choices: [
			"docs",
			"init",
			"generate",
			"dev",
			"publish",
			"delete",
			"tail",
			"secret",
			"secret:bulk",
			"kv:namespace",
			"kv:key",
			"kv:bulk",
			"pages",
			// "queues", //TODO: Undocumented
			"r2 object",
			"r2 bucket",
			// "dispatch-namespace", // TODO: Undocumented - Workers for Platforms
			"d1",
			// "pubsub", //TODO: Undocumented
			"login",
			"logout",
			"whoami",
			"types",
			"deployments",
			"api",
		],
	});
}

function isValidParam(k: string): k is keyof typeof argToUrlHash {
	return k in argToUrlHash;
}

export async function docsHandler(
	args: StrictYargsOptionsToInterface<typeof docsOptions>
) {
	let urlToOpen =
		"https://developers.cloudflare.com/workers/wrangler/commands/";

	if (args.command === "api") {
		//if api, take them to the API docs
		urlToOpen = "https://developers.cloudflare.com/workers/wrangler/api/";
	} else if (args.command && isValidParam(args.command)) {
		//otherwise, they get the wrangler commands page
		urlToOpen += `#${argToUrlHash[args.command]}`;
	}

	await printWranglerBanner();

	logger.log(`Opening a link in your default browser: ${urlToOpen}`);
	await openInBrowser(urlToOpen);
	const config = readConfig(undefined, args);
	await metrics.sendMetricsEvent("view docs", {
		sendMetrics: config.send_metrics,
	});
}
