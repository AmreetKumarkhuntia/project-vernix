<script lang="ts">
  import Next from '../icons/Next.svelte';
  import Previous from '../icons/Previous.svelte';

  export let length: number = 0;
  export let hoverAngle: number = 2;
  let hoverDiv: HTMLElement;

  let currentIndex: number = 0;

  const nextSlide = (): void => {
    currentIndex = (currentIndex + 1) % length;
  };

  const prevSlide = (): void => {
    currentIndex = (currentIndex - 1 + length) % length;
  };

  function onMouseMove(e: MouseEvent) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const width = hoverDiv.offsetWidth;
    const height = hoverDiv.offsetHeight;

    let rotateX = (mouseY / height) * 2 * hoverAngle - hoverAngle;
    let rotateY = (mouseX / width) * 2 * hoverAngle - hoverAngle;

    rotateX = Math.max(Math.min(rotateX, hoverAngle), -1 * hoverAngle);
    rotateY = Math.max(Math.min(rotateY, hoverAngle), -1 * hoverAngle);

    const shadowBlur = 20 + (mouseX / width) * 30;
    const shadowIntensity = 0.3 + (mouseX / width) * 0.3;

    // TODO: correct this transform
    hoverDiv.style.transform = `skewX(${rotateX}deg) skewY(${rotateY}deg)`;
    hoverDiv.style.boxShadow = `0 10px ${shadowBlur}px rgba(var(--carousel-container-shadow-hover-color) , ${shadowIntensity})`;
  }

  function onMouseLeave() {
    hoverDiv.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    hoverDiv.style.boxShadow = `var(--carousel-container-shadow)`;
  }
</script>

<div class="carousel">
  <button class="carousel-button" on:click={prevSlide}>
    <Previous />
  </button>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="carousel-container"
    on:mousemove={onMouseMove}
    on:mouseleave={onMouseLeave}
    bind:this={hoverDiv}
  >
    <div
      class="carousel-slides"
      style="transform: translateX(calc( (-1) * var(--carousel-slide-width) * {currentIndex})); width: calc({length} * var(--carousel-slide-width));"
    >
      <slot />
    </div>
  </div>

  <button class="carousel-button" on:click={nextSlide}>
    <Next />
  </button>
</div>

<style>
  .carousel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
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
