import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const isPackageBuild = process.env.BUILD_TARGET === 'package';

/** @type {import('@sveltejs/kit').Config} */
export default {
  plugins: [sveltekit()],
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    files: {
      routes: isPackageBuild ? 'src/lib' : 'src/routes',
    },
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
        $configuration: path.resolve('./src/lib/configuration'),
        $utils: path.resolve('./src/lib/utils'),
        $server: path.resolve('./src/lib/server'),
        $client: path.resolve('./src/lib/client'),
        $session: path.resolve('./src/lib/session'),
        $types: path.resolve('./src/lib/types'),
        $css: path.resolve('./src/css'),
        $siteCss: path.resolve('./src/siteCss'),
      },
    },
  },
};
