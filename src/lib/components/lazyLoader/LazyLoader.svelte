<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { defaultLazyLoaderProps, type LazyLoaderProps } from './props';
  import { performTransition } from '$components/transitions';

  export let lazyLoaderProps: LazyLoaderProps = defaultLazyLoaderProps;
  export let className: string = '';
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

<div class="lazy-loader {className}" bind:this={container}>
  {#if showContent === true}
    <div
      class="lazy-loader-content {className}"
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
