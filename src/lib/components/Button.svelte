<!-- src/components/Button.svelte -->
<script lang="ts">
  export let onClick: () => void;
  export let size: 'small' | 'medium' | 'large' | 'fill' = 'medium';
  export let componentClass: string = '';
</script>

<button on:click={onClick} class={`btn ${size} ${componentClass}`}>
  <slot></slot>
</button>

<style>
  .btn {
    background-color: var(--button-background-color);
    color: var(--button-text-color);
    border: none;
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    cursor: pointer;
    transition: background-color var(--button-transition-speed);
    height: auto;
  }

  .btn:hover {
    background-color: var(--button-hover-color);
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
</style>
