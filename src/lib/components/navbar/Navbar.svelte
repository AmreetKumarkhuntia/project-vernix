<script lang="ts">
  import NavMenu from './NavMenu.svelte';
  import {
    defaultNavbarProps,
    type NavbarAlignment,
    type NavbarProps,
    type NavigationOptions,
  } from './props';

  export let navbarProps: NavbarProps = defaultNavbarProps;
  export let navbarAlignment: NavbarAlignment = 'horizontal';
  export let activeNavigation: string = '';
  export let onClick: (navigationOption: NavigationOptions) => void = () => {};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-img-redundant-alt -->
<div class={`navbar-container ${navbarAlignment}`} aria-label="Main navigation">
  <slot name="left" />

  <NavMenu
    navigationOptions={navbarProps.navigationOptions}
    {activeNavigation}
    {navbarAlignment}
    {onClick}
  />

  <slot name="right" />
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


  /* Alignment classes */
  .navbar-container.horizontal {
    flex-direction: row;
  }

  .navbar-container.vertical {
    flex-direction: column;
  }
</style>
