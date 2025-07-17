<script lang="ts">
  import * as Prism from 'prismjs';

  import { onMount } from 'svelte';
  import { defaultInTransition, defaultOutTransition } from './props';
  import { performTransition, type TransitionWrapper } from '../transitions';
  import Copy from '../svgs/Copy.svelte';
  import Correct from '../svgs/Correct.svelte';

  export let lang: string = 'javascript';
  export let grammars: Prism.Languages | undefined = undefined;
  export let inTransition: TransitionWrapper = defaultInTransition;
  export let outTransition: TransitionWrapper = defaultOutTransition;
  export let copyIconsColor: string = '#000';
  export let copyDuration: number = 2000;
  export let code: string = '';

  let formattedCode: string = '';
  let copied: boolean = false;

  onMount(() => {
    let finalLanguage: Prism.Grammar | undefined = undefined;
    if (grammars !== undefined) {
      finalLanguage = grammars[lang];
    } else {
      finalLanguage = Prism.languages[lang];
    }
    if (finalLanguage !== undefined) {
      formattedCode = Prism.highlight(code, finalLanguage, lang);
    }
  });

  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(() => {
      copied = true;
      setTimeout(() => (copied = false), copyDuration);
    });
  }
</script>

<div class="code">
  {#if formattedCode !== ''}
    <div
      class="code-container"
      in:performTransition={inTransition}
      out:performTransition={outTransition}
    >
      <button class="code-copy-button" on:click={copyToClipboard}>
        {#if copied}
          <Correct fillColor={copyIconsColor} strokeColor={copyIconsColor} />
        {:else}
          <Copy fillColor={copyIconsColor} />
        {/if}
      </button>
      <pre class="code-block">
        <code class="code-{lang} code-block-code">{@html formattedCode}</code>
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
    top: var(--code-copy-button-top, 20px);
    right: var(--code-copy-button-right, 20px);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  pre.code-block {
    background-color: var(--code-bg);
    color: var(--code-color);
    border: var(--code-border, 1px solid #ccc);
    border-radius: var(--code-border-radius);
    font-family: var(--code-font-family);
    height: var(--code-height);
    width: var(--code-width);
    padding: var(--code-padding, 20px);
    overflow: auto;

    display: var(--code-pre-display, flex);
  }

  code {
    display: var(--code-codeblock-display, block);
    font-size: var(--code-font-size);
    height: var(--code-height);
    width: var(--code-width);
  }
</style>
