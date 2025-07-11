<script lang="ts">
  export let progress = 50;
</script>

<div class="progress-container">
  <div class="progress-bar" style="width: {progress}%;"></div>
</div>

<style>
  .progress-container {
    width: 100%;
    background-color: var(--progress-bar-bg-color);
    height: var(--progress-bar-height);
    border-radius: var(--progress-bar-border-radius);
    overflow: hidden;
    box-shadow: var(--progress-bar-shadow);
    border: var(--progress-bar-border);
    position: relative;
  }

  .progress-bar {
    height: 100%;
    background-color: var(--progress-bar-fill-color);
    position: relative;
    overflow: hidden;
  }

  .progress-bar::before {
    content: '';
    position: absolute;
    z-index: var(--progress-bar-before-z-index, 1);
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      var(--progress-bar-shine-color),
      transparent
    );
    animation: shine 2s linear infinite;
    background-size: 200%;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -200%;
    }
    100% {
      left: 200%;
    }
  }
</style>
