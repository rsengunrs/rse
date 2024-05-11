import { runFrameworkGenerator } from "helpers/command";
import { compatDateFlag } from "helpers/files";
import { detectPackageManager } from "helpers/packages";
import type { C3Context, FrameworkConfig } from "types";

const { npm } = detectPackageManager();

const generate = async (ctx: C3Context) => {
	await runFrameworkGenerator(ctx, [ctx.project.name, "classic"]);
};

const config: FrameworkConfig = {
	id: "docusaurus",
	platform: "pages",
	displayName: "Docusaurus",
	generate,
	getPackageScripts: async () => ({
		"pages:dev": `wrangler pages dev ${await compatDateFlag()} --proxy 3000 -- ${npm} run start`,
		"pages:deploy": `${npm} run build && wrangler pages deploy ./build`,
	}),
	testFlags: [`--package-manager`, npm],
};
export default config;
