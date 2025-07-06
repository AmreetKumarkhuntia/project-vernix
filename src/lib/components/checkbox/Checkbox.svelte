<script lang="ts">
  import type { CheckboxProps } from './props';
  import Checkmark from '../svgs/Checkmark.svelte';
  import Ripple from '../ripple/Ripple.svelte';

  export let checked: CheckboxProps['checked'] = false;
  export let label: CheckboxProps['label'] = '';
  export let disabled: CheckboxProps['disabled'] = false;
  export let id: CheckboxProps['id'] = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  export let showLabel: CheckboxProps['showLabel'] = false;
</script>

<div class="checkbox">
  <label class="checkbox-label" for={id}>
    <input {id} type="checkbox" bind:checked {disabled} />

    <span class="checkbox-custom">
      {#if checked}
        <Checkmark />
      {/if}
    </span>
    {#if showLabel}
      <span class="checkbox-label-text">{label}</span>
    {/if}
  </label>
</div>

<style>
  .checkbox {
    display: flex;
    align-items: center;
    width: var(--checkbox-container-width, 26px);
    height: var(--checkbox-container-height, 26px);
    border-radius: var(--checkbox-border-radius, 4px);
  }

  .checkbox-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: var(--checkbox-label-gap, 8px);
  }

  input[type='checkbox'] {
    display: none;
  }

  .checkbox-custom {
    width: var(--checkbox-width, 100%);
    height: var(--checkbox-height, 100%);
    border: 2px solid var(--checkbox-border-color);
    border-radius: var(--checkbox-border-radius, 4px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      background-color var(--checkbox-transition-duration, 0.2s),
      border-color var(--checkbox-transition-duration, 0.2s);
    background-color: var(--checkbox-bg-color, transparent);
  }

  input[type='checkbox']:checked + .checkbox-custom {
    background-color: var(--checkbox-checked-bg-color);
    border-color: var(--checkbox-checked-border-color);
  }

  input[type='checkbox']:disabled + .checkbox-custom {
    background-color: var(--checkbox-disabled-bg-color);
    border-color: var(--checkbox-disabled-border-color);
    cursor: not-allowed;
  }
</style>
