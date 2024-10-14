<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import type { NavbarAlignment, NavigationOptions } from "./props";

    export let navbarAlignment: NavbarAlignment = "horizontal";
    export let navigationOptions: NavigationOptions[] = [];
    export let onClick: (
        navigationOption: NavigationOptions,
    ) => void = () => {};

    let activeTabId = "";

    function handleNavigationEvent(navigationOption: NavigationOptions): void {
        activeTabId = navigationOption.id;
        onClick(navigationOption);
    }
</script>

<div class={`navbar-menu ${navbarAlignment}`}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#each navigationOptions as navigationOption}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class={`navbar-item ${activeTabId === navigationOption.id ? "active" : ""}`}
            on:click={() => handleNavigationEvent(navigationOption)}
        >
            <div>{navigationOption.title}</div>
            <div
                class={`navbar-underline ${activeTabId === navigationOption.id ? "active" : ""}`}
            ></div>
        </div>
    {/each}
</div>

<style>
    .navbar-menu {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: var(--navbar-menu-width);
    }

    .navbar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--navbar-item-padding);
        width: var(--navbar-item-width);
        cursor: pointer;
        transition:
            color 0.3s,
            transform 0.2s;
    }

    .navbar-item:hover {
        transform: scale(1.05);
    }

    .navbar-item.active {
        color: var(--navbar-item-active-color);
    }

    .navbar-underline {
        margin-top: 2px;
        border-radius: var(--navbar-underline-radius);
        width: var(--navbar-underline-width);
        height: 2px;
        background-color: transparent;
        transform: scaleX(0);
        transform-origin: center;
        transition:
            transform 0.3s,
            background-color 0.3s;
    }

    .navbar-underline.active {
        background-color: black;
        transform: scaleX(1);
    }

    .navbar-menu.horizontal {
        flex-direction: row;
    }
    .navbar-menu.vertical {
        flex-direction: column;
    }
</style>
