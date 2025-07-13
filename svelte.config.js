import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = defineConfig({
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.mdx'],
    }),
  ],
  extensions: ['.svelte', '.md', '.mdx'],
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib',
      $configuration: 'src/lib/configuration',
      $components: 'src/lib/components',
      $utils: 'src/lib/utils',
      $server: 'src/lib/server',
      $client: 'src/lib/client',
      $session: 'src/lib/session',
      $types: 'src/lib/types',
      $css: 'src/css',
      $siteCss: 'src/siteCss',
    },
  },
});

export default config;
