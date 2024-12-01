<script lang="ts">
  import Button from '$components/Button.svelte';
  import { onMount } from 'svelte';
  import type { DropdownItem } from './props';
  import { extendInDirection } from '$components/transitions';

  export let items: DropdownItem[] = [];
  export let buttonLabel: string = 'Menu';
  export let transitionDuration: number = 200;
  export let multi = false;

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
    oldItems[index].active = !oldItems[index].active;
    items = oldItems;
    let curr: number = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        curr += 1;
      }
    }
    activeNumber = curr;
  };

  onMount(() => {
    let curr: number = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        curr += 1;
      }
    }
    activeNumber = curr;
  });
</script>

<div class="dropdown">
  <Button size={'fill'} type={'outlined'} onClick={toggleDropdown}>
    <div class="dropdown-button">
      <span class="dropdown-label">
        {#if activeNumber === 0}
          {buttonLabel}
        {:else}
          {#each items as item, index}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
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
      <span class="dropdown-arrow {isOpen === true ? 'open' : ''}">►</span>
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
          {#if item.active === true}
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
    height: var(--dropdown-height);
    width: var(--dropdown-width);
  }

  .dropdown-arrow {
    display: block;
    text-align: right;
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
    background-color: var(--dropdown-bg-color);
    border: var(--dropdown-border);
    border-radius: var(--dropdown-border-radius);
    box-shadow: var(--dropdown-shadow);
    z-index: var(--dropdown-menu-z-index, 1);
    min-width: var(--dropdown-width);
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
    color: var(--dropdown-text-color-light);
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
