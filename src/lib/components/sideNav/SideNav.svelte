<script lang="ts">
  import type { SideNavItem as SideNavItemType } from './props';
  import SideNavItem from './SideNavItem.svelte';

  export let items: SideNavItemType[];
  export let onClick: (
    currentLayerIndex: number,
    item: SideNavItemType
  ) => void = () => {};
  export let activeItem: SideNavItemType | undefined = undefined;

  const onExtraClick = (currentLayerIndex: number, item: SideNavItemType) => {
    if (!item.children) {
      activeItem = item;
    }
    onClick(currentLayerIndex, item);
  };
</script>

<nav class="side-nav">
  <slot name="side-nav-top-content" />
  <ul>
    {#each items as item}
      <SideNavItem {item} onClick={onExtraClick} bind:activeItem />
    {/each}
  </ul>
  <slot name="side-nav-down-content" />
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
    font-size: var(--sidenav-font-size, var(--font-sm));
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
