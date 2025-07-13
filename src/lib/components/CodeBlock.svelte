<script lang="ts">
  export let code: string;
  export let language: string = 'svelte';

  const copy = async () => {
    await navigator.clipboard.writeText(code);
  };
</script>

<div class="relative">
  <pre class={`language-${language}`}>
    <code>{code}</code>
  </pre>
  <button on:click={copy} class="absolute top-2 right-2 text-sm bg-gray-100 px-2 py-1 rounded">
    Copy
  </button>
</div>

<style>
  pre {
    padding: 1rem;
    background: #f7f7f8;
    border-radius: 8px;
    overflow-x: auto;
  }
</style>
