<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { defaultLazyLoaderProps, type LazyLoaderProps } from './props';
  import { performTransition } from '$components/transitions';

  export let lazyLoaderProps: LazyLoaderProps = defaultLazyLoaderProps;
  let container: Element;
  let showContent: boolean = false;
  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        showContent = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
  });

  onDestroy(() => {
    observer?.disconnect();
  });
</script>

<div class="lazy-loader" bind:this={container}>
  {#if showContent === true}
    <div
      in:performTransition={lazyLoaderProps.inTransition}
      out:performTransition={lazyLoaderProps.outTransition}
    >
      <slot />
    </div>
  {/if}
</div>

<style>
  .lazy-loader {
    overflow: hidden;
  }
</style>
