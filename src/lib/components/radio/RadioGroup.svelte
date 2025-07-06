<script lang="ts">
  import type { RadioGroupProps } from './props';

  export let options: RadioGroupProps['options'] = [];
  export let selectedValue: RadioGroupProps['selectedValue'] = '';
  export let name: RadioGroupProps['name'];
  export let legend: RadioGroupProps['legend'];
  export let disabled: RadioGroupProps['disabled'] = false;
  export let disableAnimation: RadioGroupProps['disableAnimation'] = false;
  export let onClick: RadioGroupProps['onClick'] = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<fieldset class="radio-group" {disabled}>
  <legend>{legend}</legend>
  {#each options as option}
    <label
      class="radio-label"
      on:click={() => {
        if (onClick !== undefined) onClick(option);
      }}
    >
      <input
        type="radio"
        {name}
        value={option.value}
        bind:group={selectedValue}
      />
      <span class="radio-button" class:animated={!disableAnimation}></span>
      {option.label}
    </label>
  {/each}
</fieldset>

<style>
  .radio-group {
    border: 1px solid var(--radio-border-color);
    padding: var(--radio-padding);
    border-radius: var(--radio-border-radius);
    width: var(--radio-width, 100%);
  }

  .radio-label {
    display: flex;
    align-items: center;
    margin-bottom: var(--radio-label-margin-bottom);
    color: var(--radio-font-color);
    cursor: pointer;
  }

  input[type='radio'] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .radio-button {
    display: inline-block;
    width: var(--radio-button-size);
    height: var(--radio-button-size);
    border: 2px solid var(--radio-button-border-color);
    border-radius: 50%;
    margin-right: var(--radio-button-margin-right);
    position: relative;
  }

  .radio-button.animated {
    transition: border-color var(--radio-animation-duration) ease;
  }

  .radio-button::after {
    content: '';
    display: block;
    width: calc(var(--radio-button-size) * 0.6);
    height: calc(var(--radio-button-size) * 0.6);
    background-color: var(--radio-circle-color);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
  }

  .radio-button.animated::after {
    transition: transform var(--radio-animation-duration) ease;
  }

  input[type='radio']:checked + .radio-button {
    border-color: var(--radio-circle-color);
  }

  input[type='radio']:checked + .radio-button::after {
    transform: translate(-50%, -50%) scale(1);
  }

  input[type='radio']:focus + .radio-button,
  .radio-label:hover .radio-button {
    border-color: var(--radio-button-active-color);
  }
</style>
