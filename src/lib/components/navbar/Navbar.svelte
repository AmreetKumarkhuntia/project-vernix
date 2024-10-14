<script lang="ts">
    import NavMenu from "./NavMenu.svelte";
    import {
        defaultNavbarProps,
        type NavbarAlignment,
        type NavbarProps,
        type NavigationOptions,
    } from "./props";

    export let navbarProps: NavbarProps = defaultNavbarProps;
    export let navbarAlignment: NavbarAlignment = "horizontal";

    export let leftImageClick: () => void = () => {};
    export let rightImageClick: () => void = () => {};
    export let onClick: (
        navigationOption: NavigationOptions,
    ) => void = () => {};
</script>

<div class={`navbar-container ${navbarAlignment}`}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#if navbarProps.showLeftImage && navbarProps.leftImageURL}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="navbar-image-wrapper left" on:click={leftImageClick}>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                class="navbar-image"
                src={navbarProps.leftImageURL}
                alt="no-image-available"
            />
        </div>
    {/if}

    <NavMenu
        navigationOptions={navbarProps.navigationOptions}
        {navbarAlignment}
        {onClick}
    />

    {#if navbarProps.showRightImage && navbarProps.rightImageURL}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="navbar-image-wrapper right" on:click={rightImageClick}>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                class="navbar-image"
                src={navbarProps.rightImageURL}
                alt="no-image-available"
            />
        </div>
    {/if}
</div>

<style>
    .navbar-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: var(--navbar-container-height);
        width: var(--navbar-container-width);
        font-size: var(--navbar-font-size);
        padding: var(--navbar-padding);
    }

    .navbar-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: var(--navbar-image-padding);
    }

    .navbar-image {
        height: var(--navbar-image-height);
        width: var(--navbar-image-width);
        transition:
            opacity 0.3s,
            transform 0.2s;
    }

    .navbar-image:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }

    /* Alignment classes */
    .navbar-container.horizontal {
        flex-direction: row;
    }

    .navbar-container.vertical {
        flex-direction: column;
    }
</style>
