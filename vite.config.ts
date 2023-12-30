import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [
		sveltekit(),
		// TODO: maybe I have to use injectManifest to handle SPA
		SvelteKitPWA({
			manifest: {
				icons: [
					{
						src: '/favicon.png',
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: '/favicon2.png',
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
});
