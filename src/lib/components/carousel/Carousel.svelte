<script lang="ts">
  import Next from '../icons/Next.svelte';
  import Previous from '../icons/Previous.svelte';
  import type { CarouselNavigationButtonConfig } from './props';

  export let length: number = 0;
  export let hoverAngle: number = 20;
  export let hoverShadowDisplacement: number = 20;
  export let shadowBlur: number = 30;
  export let shadowIntensity: number = 0.3;
  export let buttonConfig: CarouselNavigationButtonConfig = {};
  export let disableAnimation: boolean = false;

  let hoverDiv: HTMLElement;

  let currentIndex: number = 0;

  let container: HTMLElement;

  let slideWidth: number = 0;

  const nextSlide = (): void => {
    currentIndex = (currentIndex + 1) % length;
    if (container) {
      slideWidth = (container.clientWidth / length) * currentIndex;
      container.style.transform = `translateX(-${slideWidth}px)`;
    }
  };

  const prevSlide = (): void => {
    currentIndex = (currentIndex - 1 + length) % length;
    if (container) {
      slideWidth = (container.clientWidth / length) * currentIndex;
      container.style.transform = `translateX(-${slideWidth}px)`;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      buttonConfig?.keyboardControl !== undefined &&
      buttonConfig?.keyboardControl === false
    )
      return;

    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  function onMouseMove(e: MouseEvent) {
    if (disableAnimation) return;

    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const width = hoverDiv.offsetWidth;
    const height = hoverDiv.offsetHeight;
    const xMul = mouseY / height;
    const yMul = mouseX / width;

    let rotateX = (0.5 - xMul) * hoverAngle;
    let rotateY = (yMul - 0.5) * hoverAngle;
    let shadowX = (0.5 - xMul) * hoverShadowDisplacement;
    let shadowY = (0.5 - yMul) * hoverShadowDisplacement;

    rotateX = Math.max(Math.min(rotateX, hoverAngle), -1 * hoverAngle);
    rotateY = Math.max(Math.min(rotateY, hoverAngle), -1 * hoverAngle);

    hoverDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3D(1,1,1)`;
    hoverDiv.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(var(--carousel-container-shadow-hover-color) , ${shadowIntensity})`;
  }

  function onMouseLeave() {
    if (disableAnimation) return;
    hoverDiv.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    hoverDiv.style.boxShadow = `var(--carousel-container-shadow)`;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="carousel"
  class:carousel-below-buttons={buttonConfig?.buttonPosition === 'below'}
  on:keydown={handleKeyDown}
  tabindex="0"
>
  {#if buttonConfig?.showButtons === true && buttonConfig?.buttonPosition === 'sideways'}
    <button class="carousel-button" on:click={prevSlide}>
      <Previous />
    </button>
  {/if}

  <div
    class="carousel-container"
    bind:this={hoverDiv}
    on:mousemove={onMouseMove}
    on:mouseleave={onMouseLeave}
  >
    <div
      bind:this={container}
      class="carousel-slides"
      style="width: calc({length} * var(--carousel-slide-width));"
    >
      <slot />
    </div>
  </div>

  {#if buttonConfig?.showButtons === true && buttonConfig?.buttonPosition === 'sideways'}
    <button class="carousel-button" on:click={nextSlide}>
      <Next />
    </button>
  {/if}

  {#if buttonConfig?.showButtons === true && buttonConfig?.buttonPosition === 'below'}
    <div class="carousel-buttons-below">
      <button class="carousel-button" on:click={prevSlide}>
        <Previous />
      </button>
      <button class="carousel-button" on:click={nextSlide}>
        <Next />
      </button>
    </div>
  {/if}
</div>

<style>
  .carousel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--carousel-width);
  }

  .carousel:focus-visible {
    outline: var(--carousel-focus-outline, none);
    border: var(--carousel-focus-border, none);
  }

  .carousel-below-buttons {
    flex-direction: column;
  }

  .carousel-buttons-below {
    display: flex;
    justify-content: center;
    gap: var(--carousel-buttons-below-gap);
    margin-top: var(--carousel-buttons-below-margin-top);
  }

  .carousel-container {
    height: var(--carousel-height);
    width: var(--carousel-width);
    border: var(--carousel-container-border);
    border-radius: var(--carousel-border-radius);

    transition: all var(--carousel-container-transition);
    box-shadow: var(--carousel-container-shadow);

    overflow: hidden;
  }

  .carousel-slides {
    height: 100%;
    display: flex;
    transition: transform var(--carousel-slide-transition);
    background-color: var(--carousel-slides-bg-color);
  }

  .carousel-button {
    background: var(--carousel-button-bg);
    border: var(--carousel-button-border);
    padding: var(--carousel-button-padding);
    width: var(--carousel-button-width);
    height: var(--carousel-button-height);
    border-radius: var(--carousel-button-border-radius);
    transition: var(--carousel-button-transition);

    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .carousel-button:hover {
    transform: var(--carousel-button-hover-transform);
    background: var(--carousel-button-hover-bg);
  }
</style>
