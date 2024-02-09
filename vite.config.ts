import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import {posix} from "path";
import config from "./svelte.config";

// Redeclared b/c $lib/path imports $app/paths, which is undefined here
const absJoin = (...paths: string[]) => posix.join("/", config.kit!.paths!.base ?? "", ...paths);

export default defineConfig({
	plugins: [
		sveltekit(),
		// TODO: maybe I have to use injectManifest to handle SPA
		SvelteKitPWA({
			manifest: {
				icons: [
					{
						src: absJoin('favicon.png'),
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: absJoin('favicon2.png'),
						sizes: '256x256',
						type: 'image/png',
					},
				],
			},
		})
	],
	resolve: {
		alias: {
			path: "path-browserify",
		},
	},
	build: {
		sourcemap: true,
	},
});
