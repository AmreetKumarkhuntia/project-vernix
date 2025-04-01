<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { defaultFlyerProps, type FlyerProps } from './props';

  export let isVisible = false;
  export let flyerProps: FlyerProps = defaultFlyerProps;
  export let onClose: () => void = () => {};

  let status: 'hidden' | 'entering' | 'active' | 'exiting' = 'hidden';
  let timer: NodeJS.Timeout | null = null;
  let flyerId = Symbol();

  const activeFlyers: { id: symbol; position: string }[] = [];

  $: if (isVisible && status === 'hidden') {
    status = 'entering';
    setTimeout(() => {
      status = 'active';
      timer = setTimeout(closeFlyer, flyerProps.duration ?? 3000);
    }, 20);
  }

  $: if (!isVisible && (status === 'active' || status === 'entering')) {
    status = 'exiting';
    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => (status = 'hidden'),
      flyerProps.closeAfterDuration ?? 400
    );
  }

  onMount(() => {
    if (isVisible) {
      activeFlyers.push({ id: flyerId, position: flyerProps.position });
      updateStackPositions();
    }
  });

  function updateStackPositions() {
    activeFlyers.forEach((flyer, index) => {
      const offset = index * 10;
      if (flyer.position.includes('bottom')) {
        document.documentElement.style.setProperty(
          `--flyer-bottom-${flyer.id.toString()}`,
          `calc(var(--flyer-bottom) + ${offset}px)`
        );
      } else {
        document.documentElement.style.setProperty(
          `--flyer-top-${flyer.id.toString()}`,
          `calc(var(--flyer-top) + ${offset}px)`
        );
      }
    });
  }

  function closeFlyer() {
    isVisible = false;
    onClose();
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  onDestroy(() => {
    isVisible = false;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    const index = activeFlyers.findIndex((f) => f.id === flyerId);
    if (index >= 0) {
      activeFlyers.splice(index, 1);
      updateStackPositions();
    }
  });
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div
  class="flyer {status} {flyerProps.position} {flyerProps.flyerType}"
  class:hidden={status === 'hidden'}
  style="
    --flyer-bottom: var(--flyer-bottom-${flyerId.toString()}, var(--flyer-bottom));
    --flyer-top: var(--flyer-top-${flyerId.toString()}, var(--flyer-top));
  "
>
  {#if status !== 'hidden'}
    <button class="flyer-close" on:click={closeFlyer}>×</button>

    {#if flyerProps.flyerLeftImage}
      <img
        src={flyerProps.flyerLeftImage}
        alt="Flyer Image"
        class="flyer-image"
      />
    {/if}

    <div class="flyer-content">
      <div class="flyer-title">{flyerProps.title ?? flyerProps.flyerType}</div>
    </div>

    <div class="flyer-description">
      <slot />
    </div>
  {/if}
</div>

<style>
  .flyer {
    background-color: var(--flyer-background-color);
    color: var(--flyer-text-color);
    border-radius: var(--flyer-border-radius);
    box-shadow: var(--flyer-box-shadow);
    padding: var(--flyer-padding-vertical) var(--flyer-padding-horizontal);
    display: flex;
    flex-direction: column;
    align-items: var(--flyer-align-items);
    text-align: var(--flyer-text-align);
    min-width: var(--flyer-min-width);
    max-width: var(--flyer-max-width);
    margin: var(--flyer-margin);
    font-size: var(--flyer-text-size);
    position: fixed;
    z-index: var(--flyer-z-index, 1000);
    transition:
      opacity 0.4s ease-out,
      transform 0.4s ease-out;
  }

  .flyer.hidden {
    display: none;
  }

  .flyer.entering {
    opacity: 0;
    transform: translateY(20px);
  }

  .flyer.active {
    opacity: 1;
    transform: none;
  }

  .flyer.exiting {
    opacity: 0;
    transform: translateY(-20px);
  }

  .flyer.top-right {
    top: var(--flyer-top);
    right: var(--flyer-right);
  }

  .flyer.bottom-right {
    bottom: var(--flyer-bottom);
    right: var(--flyer-right);
  }

  .flyer.top-left {
    top: var(--flyer-top);
    left: var(--flyer-left);
  }

  .flyer.bottom-left {
    bottom: var(--flyer-bottom);
    left: var(--flyer-left);
  }

  .flyer.alert {
    background-color: var(--flyer-alert-background-color);
  }

  .flyer.summary {
    background-color: var(--flyer-summary-background-color);
  }

  .flyer.warning {
    background-color: var(--flyer-warning-background-color);
  }

  .flyer.success {
    background-color: var(--flyer-success-background-color);
  }

  .flyer.custom {
    background-color: var(--flyer-custom-background-color);
  }

  .flyer-close {
    position: absolute;
    top: var(--flyer-close-top);
    right: var(--flyer-close-right);
    background: none;
    border: none;
    font-size: var(--flyer-close-size);
    color: var(--flyer-close-color);
    cursor: pointer;
    transition:
      transform 0.3s,
      color 0.2s;
  }

  .flyer-close:hover {
    color: var(--flyer-close-hover-color);
    transform: rotate(var(--flyer-close-rotation))
      scale(var(--flyer-close-hover-scale));
  }

  .flyer-image {
    width: 100%;
    max-height: var(--flyer-image-max-height);
    object-fit: var(--flyer-image-fit);
    border-radius: var(--flyer-image-border-radius);
    margin-bottom: var(--flyer-image-margin-bottom);
  }

  .flyer-title {
    text-transform: capitalize;
    font-weight: var(--flyer-title-weight);
    margin: var(--flyer-title-margin);
  }

  .flyer-description {
    margin: var(--flyer-description-margin);
  }
</style>
