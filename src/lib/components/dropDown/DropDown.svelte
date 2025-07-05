<script lang="ts">
  import Button from '../Button.svelte';
  import { onMount } from 'svelte';
  import type { DropdownItem } from './props';
  import { extendInDirection } from '../transitions';
  import RightArrow from '../svgs/RightArrow.svelte';

  export let items: DropdownItem[] = [];
  export let buttonLabel: string = 'Menu';
  export let transitionDuration: number = 200;
  export let multi = false;
  export let zIndex: number = 1;
  export let disableNoSelection: boolean = false;
  // Remains null for multi-select dropdowns
  export let currentActiveItem: DropdownItem | null = null;
  export const onChange: (
    items: DropdownItem[],
    currentActiveItem: DropdownItem | null
  ) => void = (items) => {};

  let isOpen: boolean = false;
  let activeNumber: number = 0;

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  const toggleActive = (index: number) => {
    const oldItems = items;
    if (!multi) {
      for (let i = 0; i < oldItems.length; i++) {
        if (i !== index) oldItems[i].active = false;
      }
    }
    if (disableNoSelection) {
      // Do nothing
      oldItems[index].active = true;
    } else {
      oldItems[index].active = !oldItems[index].active;
    }

    items = oldItems;
    let curr: number = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        curr += 1;
      }
    }
    activeNumber = curr;
    currentActiveItem = multi ? null : items[index];
    onChange(items, currentActiveItem);
  };

  onMount(() => {
    let curr: number = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        curr += 1;
        currentActiveItem = items[i];
      }
    }
    activeNumber = curr;
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="dropdown" style="z-index: {zIndex};">
  <Button size={'fill'} type={'outlined'} onClick={toggleDropdown}>
    <div class="dropdown-button">
      <span class="dropdown-label">
        {#if activeNumber === 0 || items.length === 0}
          {buttonLabel}
        {:else if multi === false && currentActiveItem !== null}
          {currentActiveItem.label}
        {:else}
          {#each items as item, index}
            {#if item.active}
              <span
                class="dropdown-label-item"
                on:click={() => {
                  toggleActive(index);
                }}>{item.label}</span
              >
            {/if}
          {/each}
        {/if}
      </span>
      <span class="dropdown-arrow {isOpen === true ? 'open' : ''}">
        <RightArrow />
      </span>
    </div>
  </Button>
  {#if isOpen === true}
    <div
      class="dropdown-menu"
      in:extendInDirection={{
        direction: 'top',
        duration: transitionDuration,
      }}
      out:extendInDirection={{
        direction: 'top',
        duration: transitionDuration,
      }}
    >
      {#each items as item, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="dropdown-item {item.active ? 'active' : ''}"
          on:click={() => {
            item.action();
            toggleDropdown();
            toggleActive(index);
          }}
        >
          <div class="dropdown-item-text">
            {item.label}
          </div>
          {#if item.active === true && disableNoSelection === false}
            <div class="dropdown-item-cross">✛</div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    cursor: pointer;
    height: var(--dropdown-height);
    width: var(--dropdown-width);
    font-size: var(--dropdown-text-size);
  }

  .dropdown-arrow {
    display: block;
    text-align: right;
    height: var(--dropdown-arrow-size);
    width: var(--dropdown-arrow-size);
    scale: 1.15;
    transform: rotate(var(--dropdown-arrow-rotate-closed));
    transition: all var(--dropdown-transition-duration) ease;
  }

  .dropdown-arrow.open {
    transform: rotate(var(--dropdown-arrow-rotate-open));
  }

  .dropdown-button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--dropdown-menu-bg-color);
    border: var(--dropdown-border);
    border-radius: var(--dropdown-border-radius);
    box-shadow: var(--dropdown-shadow);
    z-index: var(--dropdown-menu-z-index, 1);
    min-width: var(--dropdown-menu-min-width);
    height: var(--dropdown-menu-max-height, 200px);
    overflow: scroll;
  }

  .dropdown-label {
    display: flex;
    width: var(--dropdown-label-width);
  }

  .dropdown-label-item {
    display: block;
    height: var(--dropdown-label-item-height);
    width: var(--dropdown-label-item-width);
    margin: var(--dropdown-label-item-margin);
    padding: var(--dropdown-label-item-padding);
    border-radius: var(--dropdown-border-radius);
    background-color: var(--dropdown-success-color);
    color: var(--dropdown-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: all var(--dropdown-transition-duration) ease;
  }

  .dropdown-label-item:hover {
    background-color: var(--dropdown-error-color);
  }

  .dropdown-item {
    padding: var(--dropdown-item-padding);
    margin: var(--dropdown-item-margin);
    color: var(--dropdown-text-color);
    font-size: var(--dropdown-item-text-size);
    transition: all var(--dropdown-transition-duration) ease;

    cursor: pointer;
    display: flex;
    justify-content: space-between;
    pointer-events: auto;
  }

  .dropdown-item:hover {
    background-color: var(--dropdown-item-hover-bg-color);
  }

  .dropdown-item.active {
    background-color: var(--dropdown-success-color);
  }

  .dropdown-item.active:hover {
    background-color: var(--dropdown-success-color);
  }

  .dropdown-item-cross {
    color: var(--dropdown-error-color);
    transform: rotate(45deg);
    transition: all var(--dropdown-transition-duration) ease;
  }

  .dropdown-item-cross:hover {
    transform: rotate(405deg);
    scale: 1.5;
  }
</style>
