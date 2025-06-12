<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TooltipProps } from './props';
  import { fade } from 'svelte/transition';

  export let position: TooltipProps['position'] = 'top';
  export let disableAnimation: TooltipProps['disableAnimation'] = false;
  export let offset: TooltipProps['offset'] = 8;
  export let animationDuration: TooltipProps['animationDuration'] = 200;

  const dispatch = createEventDispatcher();

  let visible = false;
  let tooltipElement: HTMLElement;
  let wrapperElement: HTMLElement;

  function show() {
    visible = true;
    dispatch('show');
  }

  function hide() {
    visible = false;
    dispatch('hide');
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="tooltip-wrapper"
  on:mouseenter={show}
  on:mouseleave={hide}
  on:focus={show}
  on:blur={hide}
  bind:this={wrapperElement}
>
  <slot />
  {#if visible}
    <div
      class="tooltip"
      class:no-animation={disableAnimation}
      class:top={position === 'top'}
      class:bottom={position === 'bottom'}
      class:left={position === 'left'}
      class:right={position === 'right'}
      role="tooltip"
      in:fade={{ duration: animationDuration }}
      out:fade={{ duration: animationDuration }}
      bind:this={tooltipElement}
      style:--offset="{offset}px"
    >
      <slot name="tooltip-content" />
    </div>
  {/if}
</div>

<style>
  .tooltip-wrapper {
    position: var(--tooltip-wrapper-position, relative);
    display: var(--tooltip-wrapper-display, inline-block);
  }

  .tooltip {
    position: var(--tooltip-position, absolute);
    background-color: var(--tooltip-background-color);
    color: var(--tooltip-text-color);
    padding: var(--tooltip-padding);
    border-radius: var(--tooltip-border-radius);
    font-size: var(--tooltip-font-size);
    z-index: var(--tooltip-z-index, 1000);
    white-space: var(--tooltip-white-space, nowrap);
  }

  .tooltip.top {
    bottom: calc(100% + var(--offset));
    left: var(--tooltip-hover-left, 50%);
    transform: translateX(-50%);
  }

  .tooltip.bottom {
    top: calc(100% + var(--offset));
    left: var(--tooltip-hover-left, 50%);
    transform: translateX(-50%);
  }

  .tooltip.left {
    right: calc(100% + var(--offset));
    top: var(--tooltip-hover-top, 50%);
    transform: translateY(-50%);
  }

  .tooltip.right {
    left: calc(100% + var(--offset));
    top: var(--tooltip-hover-top, 50%);
    transform: translateY(-50%);
  }
</style>
