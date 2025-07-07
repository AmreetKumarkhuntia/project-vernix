<!-- src/components/Button.svelte -->
<script lang="ts">
  export let onClick: () => void;
  export let size: 'small' | 'medium' | 'large' | 'fill' = 'medium';
  export let type: 'filled' | 'outlined' = 'filled';
  export let componentClass: string = '';
  export let disabled: boolean = false;
</script>

<button
  on:click={onClick}
  class:disabled
  class={`btn ${size} ${disabled ? '' : type} ${componentClass}`}
  {disabled}
>
  <slot />
</button>

<style>
  .btn {
    border: var(--button-border, none);
    border-radius: var(--button-border-radius);
    cursor: pointer;
    height: var(--button-height, auto);
    width: var(--button-width, auto);
    padding: var(--button-padding);
    transition: all var(--button-transition-speed);
  }

  .btn.small {
    padding: var(--button-size-small);
  }

  .btn.medium {
    padding: var(--button-size-medium);
  }

  .btn.fill {
    height: 100%;
    width: 100%;
  }

  .btn.large {
    padding: var(--button-size-large);
  }

  .btn.filled {
    background-color: var(--button-background-color);
    color: var(--button-text-color);
  }

  .btn.filled:hover {
    background-color: var(--button-hover-color);
  }

  .btn.outlined {
    background-color: transparent;
    color: var(--button-background-color);
    border: var(
      --button-outlined-border,
      1px solid var(--button-background-color)
    );
  }

  .btn.outlined:hover {
    color: var(--button-hover-color);
    border: 1px solid var(--button-hover-color);
  }

  .btn.disabled {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    color: var(--button-text-color-disabled, #ccc);
    border: var(--button-border-disabled, 1px solid #ccc);
    cursor: not-allowed;
  }
</style>
