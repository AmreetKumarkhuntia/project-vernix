<!-- Breadcrumb.svelte -->
<script lang="ts">
    import type { BreadcrumbItem } from "./props";

    export let items: BreadcrumbItem[] = [];
    export let separator: string = "----------------";
    export let onClick: (breadCrumb: BreadcrumbItem) => void = () => {};

    let activeIndex: number | null = null;

    function handleBreadcrumbsClick(index: number, item: BreadcrumbItem) {
        activeIndex = index;
        onClick(item);
    }
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
    {#each items as item, index}
        {#if activeIndex !== null && index < activeIndex}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="breadcrumbs-item active"
                on:click={() => handleBreadcrumbsClick(index, item)}
            >
                <span class="breadcrumbs-item-id active">
                    {index}
                </span>
                <span class="breadcrumbs-item-text active">
                    {item.text}
                </span>
            </div>
        {:else if activeIndex !== null && index === activeIndex}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="breadcrumbs-item"
                on:click={() => handleBreadcrumbsClick(index, item)}
            >
                <span class="breadcrumbs-item-id">
                    {index}
                </span>
                <span class="breadcrumbs-item-text">
                    {item.text}
                </span>
            </div>
        {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="breadcrumbs-item backlight"
                on:click={() => handleBreadcrumbsClick(index, item)}
            >
                <span class="breadcrumbs-item-id">
                    {index}
                </span>
                <span class="breadcrumbs-item-text">
                    {item.text}
                </span>
            </div>
        {/if}

        {#if index < items.length - 1}
            <div
                class="breadcrumbs-separator {activeIndex !== null &&
                index < activeIndex
                    ? 'active'
                    : ''}"
                aria-hidden="true"
            >
                {separator}
            </div>
        {/if}
    {/each}
</nav>

<style>
    .breadcrumbs {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: var(--breadcrumb-width);
        padding: var(--breadcrumb-padding);
        border-radius: 5px;
        font-size: var(--breadcrumb-font-size);
        background-color: var(--breadcrumb-background);
        font-family: var(--breadcrumb-font-family);
    }

    .breadcrumbs-item {
        display: flex;
        align-items: center;
        margin: var(--breadcrumb-item-margin);
        transition:
            transform 0.3s,
            color 0.3s;
        cursor: pointer;
    }

    .breadcrumbs-item:hover {
        transform: scale(1.1);
    }

    .breadcrumbs-item.active {
        color: var(--breadcrumb-active-color);
    }

    .breadcrumbs-item-id {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--breadcrumb-item-id-size);
        width: var(--breadcrumb-item-id-size);
        margin: var(--breadcrumb-item-text-margin);
        border: var(--breadcrumb-item-id-border);
        border-radius: 100%;
        font-weight: var(--breadcrumb-font-weight-normal);
        color: var(--breadcrumb-text-color);
        transition: color 0.3s;
    }

    .breadcrumbs-item-id.active {
        background-color: var(--breadcrumb-active-color);
        border-color: var(--breadcrumb-active-color);
        font-weight: bold;
    }

    .breadcrumbs-item-text {
        color: var(--breadcrumb-text-color);
        font-weight: var(--breadcrumb-font-weight-normal);
        margin: var(--breadcrumb-item-text-margin);
        font-size: var(--breadcrumb-item-text-font-size);
        transition: color 0.3s;
    }

    .breadcrumbs-item-text.active {
        color: var(--breadcrumb-active-color);
        font-weight: bold;
    }

    .breadcrumbs-separator {
        margin: var(--breadcrumb-item-link-margin);
        color: var(--breadcrumb-separator-color);
        transition: color 0.3s;
        position: relative;
        overflow: hidden;
    }

    .breadcrumbs-separator::after {
        content: "";
        position: absolute;
        left: 0;
        right: 100%;
        top: 50%;
        height: 2px;
        background-color: var(--breadcrumb-active-color);
        transition: right 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    .breadcrumbs-separator.active::after {
        right: 0;
    }

    .breadcrumbs-item.backlight {
        opacity: 0.5;
    }
</style>
