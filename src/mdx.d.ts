declare module '*.mdx' {
  import type { SvelteComponent } from 'svelte';
  export default class extends SvelteComponent {}
}
