<!-- src/components/Button.svelte -->
<script lang="ts">
  export let onClick: () => void;
  export let size: 'small' | 'medium' | 'large' | 'fill' = 'medium';
  export let type: 'filled' | 'outlined' = 'filled';
  export let componentClass: string = '';
</script>

<button on:click={onClick} class={`btn ${size} ${type} ${componentClass}`}>
  <slot />
</button>

<style>
  .btn {
    border: none;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    height: auto;
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
    border: 1px solid var(--button-background-color);
  }

  .btn.outlined:hover {
    color: var(--button-hover-color);
    border: 1px solid var(--button-hover-color);
  }
</style>
