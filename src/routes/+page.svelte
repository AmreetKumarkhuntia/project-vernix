<script lang="ts">
  import {
    homePageBreadcrumbItems,
    homeRadioOptions,
  } from '$lib/constants/client';
  import { Breadcrumbs, Date, Toggle, RadioGroup, Checkbox } from '$lib/index';

  let toggled = true;
  let checked = true;
  let radioSelectedValue = homeRadioOptions[0].value;
</script>

<div class="home">
  <div class="header-container">
    <h1 class="header-title">
      Fast UI with
      <span class="gradient-text">
        Vergins.<span class="j-mod">j</span>s
        <span class="blob"></span>
      </span>
    </h1>

    <p>A fast, accessible UI library built for svelte developers.</p>
  </div>
  <div class="header-illustration">
    <div class="header-illustration-full-row">
      <Breadcrumbs items={homePageBreadcrumbItems} />
    </div>
    <div class="header-illustration-half left">
      <div class="header-illustration-demonstrations">
        <Date zIndex={101} expanded={true} />
      </div>
      <div class="header-illustration-demonstrations">
        <Toggle />
        <Toggle bind:toggled />
        <Checkbox label="Checkbox" bind:checked />
        <Checkbox label="Disabled" disabled={true} />
        <Checkbox label="Disabled Checked" disabled={true} checked={true} />
      </div>
      <div class="header-illustration-demonstrations">
        <RadioGroup
          legend="What is your favorite Color?"
          name="radio-group"
          options={homeRadioOptions}
          bind:selectedValue={radioSelectedValue}
        />
      </div>
    </div>
    <div class="header-illustration-half right">Right Column</div>
  </div>
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-7px) scale(1.2);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .header-container {
    position: relative;
    top: -48px;
    margin: 10% 0% 10% 10%;
    width: 50%;
    z-index: 10;
  }

  .header-illustration {
    --header-illustration-margin: 20px;

    margin: 32px;
    width: -webkit-fill-available;
    min-height: -webkit-fill-available;

    display: grid;
    grid-template-columns: 38% 62%;
    grid-template-rows: auto 1fr;
  }

  .header-illustration-full-row {
    grid-column: 1 / -1;
    margin: var(--header-illustration-margin);
  }

  .header-illustration-half {
    margin: var(--header-illustration-margin);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-illustration-demonstrations {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  .header-title {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.6;
  }

  .gradient-text {
    position: relative;
    font-size: 56px;
    background-size: 400% 400%;
    background: var(--gradient-color-1);
    animation: gradient-shift 10s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .blob {
    position: absolute;
    top: -7px;
    right: 20px;
    width: 36px;
    height: 36px;
    background-size: 400% 400%;
    background: var(--gradient-color-3);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    z-index: 10;
  }
</style>
