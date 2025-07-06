<script lang="ts">
  import type { ToggleProps } from './props';

  export let toggled: ToggleProps['toggled'] = false;
</script>

<label class="toggle-container">
  <input type="checkbox" bind:checked={toggled} class="toggle-input" />
  <div class="toggle-slider"></div>
</label>

<style>
  .toggle-container {
    position: relative;
    display: inline-block;
    width: var(--toggle-width);
    height: var(--toggle-height);
  }

  .toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--toggle-bg-color);
    transition: var(--toggle-transition-duration) ease;
    border-radius: 34px;
    display: flex;
    align-items: center;
  }

  .toggle-slider:before {
    position: absolute;
    content: '';
    height: var(--toggle-ball-size);
    width: var(--toggle-ball-size);
    background-color: var(--toggle-ball-color);
    transition: var(--toggle-transition-duration);
    border-radius: 50%;
    box-shadow: var(--toggle-shadow);
  }
  .toggle-slider:hover:before {
    box-shadow: var(--toggle-unchecked-hover-shadow);
  }

  .toggle-input:checked + .toggle-slider {
    background-color: var(--toggle-checked-bg-color);
  }

  .toggle-input:checked + .toggle-slider:before {
    background-color: var(--toggle-checked-ball-color);
    transform: translateX(calc(var(--toggle-width) - var(--toggle-ball-size)));
    box-shadow: var(--toggle-checked-shadow);
  }
</style>
