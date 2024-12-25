import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'vergins',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.css',
      format: 'esm',
    },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: false,
      },
    }),
    css({
      output: 'dist/bundle.css',
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
    }),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
