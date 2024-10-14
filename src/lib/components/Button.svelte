<!-- src/components/Button.svelte -->
<script lang="ts">
    export let onClick: () => void;
    export let size: "small" | "medium" | "large" = "medium"; // Default size
</script>

<button on:click={onClick} class={`btn ${size}`}>
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
        height: auto; /* Height will be determined by padding */
    }

    .btn:hover {
        background-color: var(--button-hover-color);
    }

    /* Size variations */
    .btn.small {
        padding: var(--button-size-small);
    }

    .btn.medium {
        padding: var(--button-size-medium);
    }

    .btn.large {
        padding: var(--button-size-large);
    }
</style>
