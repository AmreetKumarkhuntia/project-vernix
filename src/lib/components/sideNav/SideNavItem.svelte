<script lang="ts">
  import { slide } from 'svelte/transition';
  import type { SideNavItem } from './props';
  import DownArrow from '../svgs/DownArrow.svelte';

  export let item: SideNavItem;
  export let currentLayerIndex: number = 0;
  export let onClick: (
    currentLayerIndex: number,
    item: SideNavItem
  ) => void = () => {};
  export let activeItem: SideNavItem | undefined;

  let expanded: boolean = item.expanded || false;
  let isActive: boolean = false;

  $: setActive(), activeItem;

  function setActive() {
    isActive = activeItem !== undefined ? activeItem.href === item.href : false;
  }

  function toggle() {
    expanded = !expanded;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  on:click={() => {
    const onClickFromItem = item?.onClick;
    onClick(currentLayerIndex, item);
    if (onClickFromItem) {
      onClickFromItem(item, currentLayerIndex);
    }
  }}
  on:click|stopPropagation
>
  <a
    href={item.href}
    class="sidenav-item"
    class:expanded
    class:active={isActive}
    on:click|preventDefault={item.children ? toggle : () => {}}
  >
    {#if item.icon}
      <svelte:component this={item.icon} />
    {/if}
    <span class="sidenav-item-label">{item.label}</span>
    {#if item.children}
      <span class="sidenav-item-chevron" class:expanded>
        <DownArrow />
      </span>
    {/if}
  </a>
  {#if item.children && expanded}
    <ul transition:slide>
      {#each item.children as child}
        <svelte:self
          item={child}
          {onClick}
          {activeItem}
          currentLayerIndex={currentLayerIndex + 1}
        />
      {/each}
    </ul>
  {/if}
</li>

<style>
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .sidenav-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: var(--sidenav-item-cursor, pointer);
    padding: var(--sidenav-item-padding, 10px 15px);
    margin: var(--sidenav-item-margin, 0);
    color: var(--sidenav-item-color, #333);
    text-decoration: none;
    transition: background-color var(--sidenav-item-transition-duration, 0.2s);
  }

  .sidenav-item:hover {
    background-color: var(--sidenav-item-hover-bg-color, #f0f0f0);
  }

  .sidenav-item.active {
    background-color: var(
      --sidenav-item-active-bg-color,
      var(--success-color-light)
    );
    border-left: var(--sidenav-item-active-border, none);
    border-radius: var(--sidenav-item-active-border-radius, 4px);
  }

  .sidenav-item-label {
    margin-left: var(--sidenav-item-text-margin-left, 10px);
    text-transform: var(--sidenav-item-text-transform, capitalize);
  }

  .sidenav-item-chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--sidenav-item-chevron-margin-left, 10px);
    height: var(--sidenav-item-chevron-size, 12px);
    width: var(--sidenav-item-chevron-size, 12px);
    transition: transform var(--sidenav-item-chevron-transition-duration, 0.2s);
  }

  .sidenav-item-chevron.expanded {
    transform: rotate(var(--sidenav-item-chevron-rotation, 180deg));
  }

  .sidenav-item.expanded {
    border-left: var(--sidenav-item-expanded-border, 1px solid);
  }

  ul {
    padding-left: var(--sidenav-item-sub-list-padding-left, 20px);
    margin: 0;
  }
</style>
