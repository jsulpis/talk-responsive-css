import { defineConfig } from "astro/config";
import * as fs from 'fs';

import react from "@astrojs/react";

const base64Loader= {
	name: "base64-loader",
	transform(_, id) {
		const [path, query] = id.split("?");
		if (query != "base64") return null;

		const data = fs.readFileSync(path);
		const base64 = data.toString("base64");

		return `export default '${base64}';`;
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://talk-responsive-css.vercel.app",
	integrations: [react()],
	vite: {
		plugins: [base64Loader]
	}
});
