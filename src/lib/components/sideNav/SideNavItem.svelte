<script lang="ts">
  import { slide } from 'svelte/transition';
  import type { SideNavItem } from './props';

  export let item: SideNavItem;
  export let currentLayerIndex: number = 0;
  export let extraOnClick: (
    currentLayerIndex: number,
    item: SideNavItem
  ) => void = () => {};
  let expanded: boolean = item.expanded || false;

  function toggle() {
    expanded = !expanded;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  on:click={() => {
    const onClick = item?.onClick;
    console.log('onClick', currentLayerIndex, item);
    extraOnClick(currentLayerIndex, item);
    if (onClick) {
      onClick(item, currentLayerIndex);
    }
  }}
  on:click|stopPropagation
>
  <a
    href={item.href}
    class="sidenav-item"
    on:click|preventDefault={item.children ? toggle : () => {}}
  >
    {#if item.icon}
      <svelte:component this={item.icon} />
    {/if}
    <span>{item.label}</span>
    {#if item.children}
      <span class="chevron" class:expanded>&#9660;</span>
    {/if}
  </a>
  {#if item.children && expanded}
    <ul transition:slide>
      {#each item.children as child}
        <svelte:self item={child} extraOnClick={extraOnClick} currentLayerIndex={currentLayerIndex + 1}/>
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
    padding: var(--sidenav-item-padding, 10px 15px);
    color: var(--sidenav-item-color, #333);
    text-decoration: none;
    transition: all var(--sidenav-item-transition-duration, 0.2s);
  }

  .sidenav-item:hover {
    background-color: var(--sidenav-item-hover-bg-color, #f0f0f0);
  }

  .sidenav-item span {
    margin-left: var(--sidenav-item-text-margin-left, 10px);
  }

  .chevron {
    margin-left: auto;
    height: var(--sidenav-chevron-size, auto);
    width: var(--sidenav-chevron-size, auto);
    transition: transform var(--sidenav-chevron-transition-duration, 0.2s);
  }

  .chevron.expanded {
    transform: rotate(var(--sidenav-chevron-rotation, 180deg));
  }

  ul {
    padding-left: var(--sidenav-sublist-padding-left, 20px);
    margin: 0;
  }
</style>
