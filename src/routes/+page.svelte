<script lang="ts">
  import Ripple from '$lib/components/ripple/Ripple.svelte';
  import Checkmark from '$lib/components/svgs/Checkmark.svelte';
  import Comments from '$lib/components/svgs/Comments.svelte';
  import Like from '$lib/components/svgs/Like.svelte';
  import Share from '$lib/components/svgs/Share.svelte';
  import Exclamation from '$lib/components/svgs/Exclamation.svelte';
  import Tooltip from '$lib/components/tooltip/Tooltip.svelte';
  import {
    homePageBreadcrumbItems,
    homeRadioOptions,
    accordionContents,
    homeIllustrationLocations,
  } from '$lib/constants/client';
  import {
    Accordion,
    Breadcrumbs,
    Card,
    Carousal,
    Date,
    Header,
    Toggle,
    RadioGroup,
    Checkbox,
    LazyLoader,
    Button,
  } from '$lib/index';

  let toggled = true;
  let checked = true;
  let radioSelectedValue = homeRadioOptions[0].value;

  const handleButtonClicked = () => {
    console.log('Button Clicked');
  };
</script>

<div class="home">
  <div class="header-container">
    <h1 class="header-title">
      <LazyLoader>Fast UI with</LazyLoader>
      <LazyLoader>
        <span class="gradient-text">
          Vergins.<span class="j-mod">j</span>s
        </span>
      </LazyLoader>
      <LazyLoader>in the Middle</LazyLoader>
    </h1>
    <p style="font-size: var(--font-base);">
      A fast, accessible UI library built for svelte developers.
    </p>
  </div>
  <div class="header-illustration">
    <div class="header-illustration-full-row">
      <Breadcrumbs items={homePageBreadcrumbItems} />
    </div>
    <div class="header-illustration-half left">
      <div class="header-illustration-demonstrations left">
        <Date zIndex={101} expanded={true} />
      </div>
      <div class="header-illustration-demonstrations left">
        <Button onClick={handleButtonClicked} size={'large'}>Filled</Button>
        <Button onClick={handleButtonClicked} size={'large'} type={'outlined'}
          >Outlined</Button
        >
        <Button
          onClick={handleButtonClicked}
          size={'large'}
          type={'outlined'}
          disabled={true}>Disabled</Button
        >
      </div>
      <div class="header-illustration-demonstrations left">
        <Toggle />
        <Toggle bind:toggled />
        <Checkbox label="Checkbox" bind:checked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Disabled" disabled={true} />
        <Checkbox label="Disabled Checked" disabled={true} checked={true} />
      </div>
      <div class="header-illustration-demonstrations left">
        <RadioGroup
          legend="What is your favorite Color?"
          name="radio-group"
          options={homeRadioOptions}
          bind:selectedValue={radioSelectedValue}
        />
      </div>
      <div class="header-illustration-demonstrations left">
        <Card>
          <Tooltip>
            <span slot="tooltip-content"
              >You can access extra options by clicking the three dots on any
              item.</span
            >
            <span class="card-content">
              <span class="checkmark">
                <!-- <Checkmark /> -->
                <Exclamation strokeColor={'#ffffff'} />
              </span>
              <span style="margin-left: 12px;"
                >Just a quick tip — hover over me!</span
              >
            </span>
          </Tooltip>
        </Card>
      </div>
    </div>
    <div class="header-illustration-half right">
      <div class="header-illustration-demonstrations">
        <div class="accordion-container">
          {#each accordionContents as accordionContent}
            <Accordion>
              <span slot="accordion-title">{accordionContent.title}</span>
              <p>{accordionContent.content}</p>
            </Accordion>
          {/each}
        </div>
      </div>
      <div class="header-illustration-demonstrations">
        <Carousal
          length={homeIllustrationLocations.length}
          disableAnimation={true}
        >
          {#each homeIllustrationLocations as item}
            <div class="carousel-slide">
              <div class="carousel-illustration-image-container">
                <img
                  class="carousel-illustration-image"
                  src={`/images/${item.locationImage}`}
                  alt={item.locationName}
                />
              </div>
              <div class="carousel-illustration-content">
                <Header hLevel={5}>{item.locationName}</Header>
                <p>{item.locationFeedback}</p>
                <div class="carousel-illustration-content-footer">
                  <span class="carousel-illustration-content-footer-components">
                    <span class="carousel-illustration-content-footer-svg">
                      <Ripple>
                        <span
                          style="display: block;padding: 6px; height: 24px; width: 24px;"
                        >
                          <Like />
                        </span>
                      </Ripple>
                    </span>
                    <span class="carousel-illustration-content-footer-svg">
                      <Ripple>
                        <span
                          style="display: block; padding: 6px; height: 24px; width: 24px;"
                        >
                          <Share />
                        </span>
                      </Ripple>
                    </span>
                  </span>
                  <span class="carousel-illustration-content-footer-components">
                    <span
                      style="display: block; padding: 6px; height: 24px; width: 24px;"
                    >
                      <Comments />
                    </span>
                    <span> View Comments </span>
                  </span>
                </div>
              </div>
            </div>
          {/each}
        </Carousal>
      </div>
      <div class="header-illustration-demonstrations">
        <Card>
          <div class="card-content">
            <span class="checkmark">
              <Checkmark />
            </span>
            <span style="margin-left: 12px;"
              >The selected theme has been applied to your interface.</span
            >
          </div>
        </Card>
      </div>
    </div>
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

  .accordion-container {
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }

  .checkmark {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary-color);
    padding: 3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .card-content {
    display: flex;
    flex-direction: row;
  }

  .carousel-illustration-image {
    width: 100%;
    scale: 1.02;
    cursor: pointer;
  }

  .carousel-illustration-image:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  .carousel-illustration-image-container {
    width: 100%;
    overflow: hidden;
    box-shadow: var(--carousel-container-shadow);
  }

  .carousel-illustration-content {
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .carousel-illustration-content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .carousel-illustration-content-footer-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-right: 8px;
    border: 1px solid var(--svg-color);
    border-radius: 50%;
    overflow: hidden;
  }

  .carousel-illustration-content-footer-components {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header-container {
    position: relative;
    top: -48px;
    margin: 10% 0% 10% 10%;
    width: 40%;
    z-index: 10;
  }

  .header-illustration {
    --header-illustration-margin: 20px;

    width: 60%;
    min-height: -webkit-fill-available;

    display: grid;
    grid-template-columns: 38% 62%;
  }

  .header-illustration-full-row {
    grid-column: 1 / -1;
    margin: var(--header-illustration-margin);
  }

  .header-illustration-half {
    margin: var(--header-illustration-margin);
    height: max-content;
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

  .header-illustration-demonstrations.left {
    margin: 10px 0 42px 0;
  }

  .header-title {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.6;
  }

  .gradient-text {
    position: relative;
    font-size: 60px;
    background-size: 400% 400%;
    background: var(--gradient-color-1);
    animation: gradient-shift 10s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    border: none;
  }
  /* .blob {
    position: absolute;
    top: -5px;
    right: 23px;
    width: 36px;
    height: 36px;
    background-size: 400% 400%;
    background: var(--gradient-color-3);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    z-index: 10;
  } */
</style>
