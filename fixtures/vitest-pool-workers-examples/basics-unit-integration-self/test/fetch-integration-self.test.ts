import { SELF } from "cloudflare:test";
import { expect, it } from "vitest";
import "../src/"; // Currently required to automatically rerun tests when `main` changes

it("dispatches fetch event", async () => {
	// `SELF` here points to the worker running in the current isolate.
	// This gets its handler from the `main` option in `vitest.config.ts`.
	// Importantly, it uses the exact `import("../src").default` instance we could
	// import in this file as its handler.
	const response = await SELF.fetch("http://example.com");
	expect(await response.text()).toBe("👋 http://example.com");
});
