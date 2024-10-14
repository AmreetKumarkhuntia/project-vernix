import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$configuration: 'src/lib/configuration',
			$components: 'src/lib/components',
			$utils: 'src/lib/utils',
			$server: 'src/lib/server',
			$client: 'src/lib/client',
			$session: 'src/lib/session',
			$types: 'src/lib/types',
			$css: 'src/css'
		}
	}
};

export default config;
