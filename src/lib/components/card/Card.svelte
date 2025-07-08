<script lang="ts">
  export let title = null;
</script>

<div class="card">
  {#if title}
    <h2 class="card-title">{title}</h2>
  {/if}
  <slot />
</div>

<style>
  .card {
    cursor: var(--card-cursor, pointer);
    background: var(--card-bg-color); /* Semi-transparent white */
    color: var(--card-text-color);
    border: var(--card-border-width) var(--card-border-style)
      var(--card-border-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: var(--card-default-shadow);
    width: var(--card-width);
    height: var(--card-height);
    margin: var(--card-margin);
    transition:
      transform var(--card-transition-duration),
      box-shadow var(--card-transition-duration);

    /* Glass effect */
    backdrop-filter: var(
      --card-backdrop-filter,
      blur(10px)
    ); /* Adjust blur intensity as needed */
  }

  .card:hover {
    transform: var(--card-hover-transform, scale(var(--card-hover-scale)));
    box-shadow: var(--card-hover-shadow);
  }

  .card-title {
    font-size: var(--card-title-font-size);
    color: var(--card-title-color);
    margin: 0 var(--card-title-margin-bottom);
  }

  ::slotted(*) {
    margin: var(--card-slot-content-margin);
  }
</style>
