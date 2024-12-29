<script lang="ts">
  import Next from '../icons/Next.svelte';
  import Previous from '../icons/Previous.svelte';

  export let length: number = 0;

  let currentIndex: number = 0;

  const nextSlide = (): void => {
    currentIndex = (currentIndex + 1) % length;
  };

  const prevSlide = (): void => {
    currentIndex = (currentIndex - 1 + length) % length;
  };
</script>

<div class="carousel">
  <button class="carousel-button" on:click={prevSlide}>
    <Previous />
  </button>
  <div class="carousel-container">
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
    padding: var(--carousel-padding);

    overflow: hidden;
  }

  .carousel-slides {
    display: flex;
    transition: transform var(--carousel-slide-transition);
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
    background: var(--carousel-button-hover-bg);
  }
</style>
