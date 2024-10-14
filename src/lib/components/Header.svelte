<script lang="ts">
    export let hLevel: number = 1; // Default to H1

    // Ensure hLevel is within valid range (1-6)
    const level = Math.min(Math.max(hLevel, 1), 6);
</script>

{#if level === 1}
    <h1 class="header-one">
        <slot />
    </h1>
{:else if level === 2}
    <h2 class="header-two">
        <slot />
    </h2>
{:else if level === 3}
    <h3 class="header-three">
        <slot />
    </h3>
{:else if level === 4}
    <h4 class="header-four">
        <slot />
    </h4>
{:else if level === 5}
    <h5 class="header-five">
        <slot />
    </h5>
{:else}
    <h6 class="header-six">
        <slot />
    </h6>
{/if}

<style>
    .header-one {
        font-size: var(--header-one-font-size);
        color: var(--header-one-font-color);
    }

    .header-two {
        font-size: var(--header-two-font-size);
        color: var(--header-two-font-color);
    }

    .header-three {
        font-size: var(--header-three-font-size);
        color: var(--header-three-font-color);
    }

    .header-four {
        font-size: var(--header-four-font-size);
        color: var(--header-four-font-color);
    }

    .header-five {
        font-size: var(--header-five-font-size);
        color: var(--header-five-font-color);
    }

    .header-six {
        font-size: var(--header-six-font-size);
        color: var(--header-six-font-color);
    }
</style>
