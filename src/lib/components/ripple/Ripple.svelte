<script lang="ts">
  import type { RippleProps } from './props';

  let rippleContainer: HTMLDivElement | null = null;
  export let color: RippleProps['color'] = 'rgba(255, 255, 255, 0.6)';
  export let zIndex: RippleProps['zIndex'] = 1;
  export let selfTrigger: RippleProps['selfTrigger'] = true;
  export function createRipple(
    target: EventTarget & HTMLDivElement,
    event: MouseEvent
  ) {
    if (!rippleContainer) {
      return;
    }
    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - radius;
    const y = (event.clientY - rect.top - radius) / 2;
    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.setProperty('--ripple-translate-x', `${x}px`);
    circle.style.setProperty('--ripple-translate-y', `${y}px`);
    circle.classList.add('ripple');
    const ripple = rippleContainer.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }
    rippleContainer.appendChild(circle);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="ripple-container"
  bind:this={rippleContainer}
  on:click={(event) => {
    if (selfTrigger && rippleContainer) {
      createRipple(event.currentTarget, event);
    }
  }}
  style="--z-index: {zIndex}; --ripple-color: {color};"
>
  <slot />
</div>

<style>
  .ripple-container {
    position: relative;
    width: var(--ripple-width, 100%);
    height: var(--ripple-height, 100%);
    padding: var(--ripple-padding);
    margin: var(--ripple-margin, 0);
    overflow: hidden;
    z-index: var(--z-index, 1);
  }
</style>
