<script lang="ts">
  import type { SideNavItem as SideNavItemType } from './props';
  import SideNavItem from './SideNavItem.svelte';

  export let items: SideNavItemType[];
  export let extraOnClick: (
    currentLayerIndex: number,
    item: SideNavItemType
  ) => void = () => {};
</script>

<nav class="side-nav">
  <ul>
    {#each items as item}
      <SideNavItem {item} {extraOnClick} />
    {/each}
  </ul>
</nav>

<style>
  .side-nav {
    width: var(--sidenav-width);
    height: var(--sidenav-height);
    padding: var(--sidenav-padding);
    background-color: var(--sidenav-background-color, #fff);
    border-right: var(--sidenav-border-right, 1px solid #ddd);
    box-shadow: var(--sidenav-box-shadow);
    transition: var(--sidenav-transition);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
