<script lang="ts">
  export let placeholder: string = 'Enter text';
  export let value: string = '';
  export let onInput: (e: Event) => void = () => {};
  export let onChange: (e: Event) => void = () => {};
  export let type: string = 'text';
</script>

<div class="input-container">
  {#if type === 'file'}
    <input
      type="file"
      bind:value
      on:input={onInput}
      on:change={onChange}
      class="input input-file"
      placeholder=" "
    />
  {:else if type === 'number'}
    <input
      type="number"
      bind:value
      on:input={onInput}
      on:change={onChange}
      class="input"
      placeholder=" "
    />
  {:else if type === 'password'}
    <input
      type="password"
      bind:value
      on:input={onInput}
      on:change={onChange}
      class="input"
      placeholder=" "
    />
  {:else}
    <input
      type="text"
      bind:value
      on:input={onInput}
      on:change={onChange}
      class="input"
      placeholder=" "
    />
  {/if}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="input-floating-label">{placeholder}</label>
</div>

<style>
  .input-container {
    position: relative;
    width: 100%;
  }

  .input {
    width: 100%;
    padding: var(--input-padding);
    height: var(--input-height);
    border: var(--input-border) var(--input-border-color);
    border-radius: var(--input-border-radius);
    font-family: var(--input-font-family);
    transition: border-color 0.3s ease-in-out;
    background: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .input:focus {
    border-color: var(--input-focus-color);
  }

  .input-floating-label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--input-navigation-font-size);
    color: var(--input-border-color);
    transition:
      top 0.2s ease-in-out,
      font-size 0.2s ease-in-out,
      color 0.2s ease-in-out;
    pointer-events: none;
  }

  .input:focus + .input-floating-label,
  .input:not(:placeholder-shown) + .input-floating-label {
    top: -8px;
    font-size: 12px;
    color: var(--input-focus-color);
  }
</style>
