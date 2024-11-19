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

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  onMount(() => {});
</script>

<div
  class="dropdown"
  on:focusout={() => {
    isOpen = false;
  }}
>
  <Button size={'fill'} onClick={toggleDropdown}>
    <div class="dropdown-button">
      <span class="dropdown-label">
        {buttonLabel}
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
      {#each items as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="dropdown-item"
          on:click={() => {
            item.action();
          }}
        >
          {item.label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  :root {
    --dropdown-height: 48px;
    --dropdown-width: 292px;
    --dropdown-label-width: 70%;
    --dropdown-arrow-transition-duration: 600ms;
    --dropdown-arrow-rotate-closed: 90deg;
    --dropdown-arrow-rotate-open: 270deg;
    --dropdown-bg-color: white;
    --dropdown-border-color: #ddd;
    --dropdown-border-radius: 4px;
    --dropdown-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    --dropdown-item-color: #333;
    --dropdown-item-hover-bg-color: #f1f1f1;
    --dropdown-item-padding: 8px 12px;
  }

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
    transition: all var(--dropdown-arrow-transition-duration) ease;
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
    border: 1px solid var(--dropdown-border-color);
    border-radius: var(--dropdown-border-radius);
    box-shadow: var(--dropdown-shadow);
    z-index: var(--dropdown-menu-z-index, 1);
    min-width: var(--dropdown-width);
  }

  .dropdown-label {
    width: var(--dropdown-label-width);
  }

  .dropdown-item {
    padding: var(--dropdown-item-padding);
    color: var(--dropdown-item-color);
    cursor: pointer;
  }

  .dropdown-item:hover {
    background-color: var(--dropdown-item-hover-bg-color);
  }
</style>
