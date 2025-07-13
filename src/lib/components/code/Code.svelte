<script lang="ts">
  import * as Prism from 'prismjs';

  export let lang: string = 'javascript';
  export let codeProps: CodeProps = defaultCodeProps;

  const copiedIcon = codeProps.copiedIcon;
  const notCopiedIcon = codeProps.notCopiedIcon;
  let formattedCode: string = '';
  let copied: boolean = false;
  let code: string = '';

  import { onMount } from 'svelte';
  import {
    defaultCodeProps,
    defaultInTransition,
    defaultOutTransition,
    type CodeProps
  } from './props';
  import { performTransition } from '../transitions';
  onMount(() => {
    const slot = document.querySelector('.code-slot');
    if (slot) {
      code = slot.textContent || '';
      formattedCode = Prism.highlight(code, Prism.languages[lang], lang);
    }
  });

  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(() => {
      copied = true;
      setTimeout(() => (copied = false), 2000);
    });
  }
</script>

<div class="code">
  <div style="display: none;" class="code-slot">
    <slot />
  </div>
  {#if formattedCode !== ''}
    <div
      class="code-container"
      in:performTransition={defaultInTransition}
      out:performTransition={defaultOutTransition}
    >
      <button class="code-copy-button" on:click={copyToClipboard}>
        {#if copied}
          <img src={copiedIcon} alt="Tick icon" width="20" height="20" />
        {:else}
          <img src={notCopiedIcon} alt="Copy icon" width="20" height="20" />
        {/if}
      </button>
      <pre class="code-block">
        <code class="code-{lang}">{@html formattedCode}</code>
      </pre>
    </div>
  {/if}
</div>

<style>
  .code {
    height: var(--code-height);
    width: var(--code-width);
  }

  .code-container {
    position: relative;
  }

  .code-copy-button {
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  pre.code-block {
    background-color: var(--code-bg);
    color: var(--code-color);
    border-radius: var(--code-border-radius);
    font-family: var(--code-font-family);
    height: var(--code-height);
    width: var(--code-width);
    overflow: auto;
  }

  .code-copy-button img {
    width: var(--code-button-size);
    height: var(--code-button-size);
  }

  code {
    font-size: var(--code-font-size);
  }
</style>
