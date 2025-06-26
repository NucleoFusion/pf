import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from "@poppanator/sveltekit-svg";

export default defineConfig({
	server: {
		host: true,
		allowedHosts: true,
		port: 5173,
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		svg(),
		devtoolsJson()
	]
});
