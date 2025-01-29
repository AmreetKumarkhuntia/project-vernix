<script lang="ts">
  import LazyLoader from '../lazyLoader/LazyLoader.svelte';
  import type { LazyLoaderProps } from '../lazyLoader/props';
  import { sineIn } from 'svelte/easing';
  import {
    defaultTimeLineIcons,
    type TimeLineDetails,
    type TimeLineProps,
  } from './props';
  import Avatar from '../avatar/Avatar.svelte';

  export let timeLineProps: TimeLineProps | null = null;
  export let events: TimeLineDetails[] = [];
  export let maxLoadTries: number = 1;
  export let shouldUsePositionForIcons: boolean = false;

  const icons = timeLineProps?.icons ?? defaultTimeLineIcons;
  const eventsLength = events.length;
  const duration = timeLineProps?.duration ?? 700;
  const delay = timeLineProps?.delay ?? 300;

  function calculateAlignment(): string {
    let result = '';

    for (let i = 0; i < eventsLength; i++) {
      result += `[row${i}-start] auto `;
    }
    result += `[row${eventsLength}-start]`;
    return result;
  }

  function getLeftTransition(delay: number): LazyLoaderProps {
    return {
      inTransition: {
        transitionType: 'fly-and-fade',
        transition: {
          delay: delay,
          duration: duration,
          x: -600,
          y: 0,
          opacity: 0,
          easing: sineIn,
        },
      },
      outTransition: {
        transitionType: 'fly-and-fade',
        transition: {
          delay: delay,
          duration: duration,
          x: -600,
          y: 0,
          opacity: 0,
        },
      },
    };
  }

  function getRightTransition(delay: number): LazyLoaderProps {
    return {
      inTransition: {
        transitionType: 'fly-and-fade',
        transition: {
          delay: delay,
          duration: duration,
          x: 600,
          y: 0,
          opacity: 0,
          easing: sineIn,
        },
      },
      outTransition: {
        transitionType: 'fly-and-fade',
        transition: {
          delay: delay,
          duration: duration,
          x: 600,
          y: 0,
          opacity: 0,
        },
      },
    };
  }

  const barTransiton: LazyLoaderProps = {
    inTransition: {
      transitionType: 'fly',
      transition: {
        delay: 0,
        duration: duration,
        x: 0,
        y: -500,
        opacity: 0,
      },
    },
    outTransition: {
      transitionType: 'fly',
      transition: {
        delay: 0,
        duration: duration,
        x: 0,
        y: -500,
        opacity: 0,
      },
    },
  };
</script>

n{#if eventsLength > 0}
  <div class="timeline" style="grid-template-rows: {calculateAlignment()}">
    <div
      class="timeline-bar-content"
      style="grid-row: row0-start / row{eventsLength}-start;"
    >
      <LazyLoader
        lazyLoaderProps={barTransiton}
        className="timeline-bar-lazy"
        maxCount={maxLoadTries}
      >
        <div class="timeline-bar"></div>
      </LazyLoader>
    </div>
    {#each events as event, index}
      {#if event.alignment === 'left'}
        <div
          class="timeline-left"
          style="grid-row: row{index}-start / row{index + 1}-start;"
        >
          <LazyLoader
            lazyLoaderProps={getLeftTransition(delay * (index + 1))}
            maxCount={maxLoadTries}
          >
            <div class="timeline-content timeline-content-left">
              {#if event.iconDataType === 'svg'}
                <Avatar size={'40px'} smallSize={'32px'} dataType={'svg'}>
                  {#if shouldUsePositionForIcons}
                    {@html icons.get(event.position)}
                  {:else}
                    {@html icons.get(event.event)}
                  {/if}
                </Avatar>
              {:else}
                <Avatar
                  src={shouldUsePositionForIcons === false
                    ? icons.get(event.event)
                    : icons.get(event.position)}
                  size={'40px'}
                  smallSize={'32px'}
                  dataType={event.iconDataType ?? 'image'}
                />
              {/if}
              <div
                class="timeline-description-card timeline-description-card-left"
              >
                <div class="timeline-description-event">{event.event}</div>
                <div class="timeline-description-position">
                  {event.position}
                </div>
                <div class="timeline-description-location">
                  {event.location}
                </div>
                <div class="timeline-description">
                  {@html event.description}
                </div>
                {#if event.link !== null}
                  <a class="timeline-description-link" href={event.link}
                    >Visit Site</a
                  >
                {/if}
              </div>
            </div>
          </LazyLoader>
        </div>
      {:else}
        <div
          class="timeline-right"
          style="grid-row: row{index}-start / row{index + 1}-start;"
        >
          <LazyLoader
            lazyLoaderProps={getRightTransition(delay * (index + 1))}
            maxCount={maxLoadTries}
          >
            <div class="timeline-content">
              <!-- TODO: move sizes etc to props -->
              {#if event.iconDataType === 'svg'}
                <Avatar size={'40px'} smallSize={'32px'} dataType={'svg'}>
                  {#if shouldUsePositionForIcons}
                    {@html icons.get(event.position)}
                  {:else}
                    {@html icons.get(event.event)}
                  {/if}
                </Avatar>
              {:else}
                <Avatar
                  src={shouldUsePositionForIcons === false
                    ? icons.get(event.event)
                    : icons.get(event.position)}
                  size={'40px'}
                  smallSize={'32px'}
                  dataType={event.iconDataType ?? 'image'}
                />
              {/if}
              <div class="timeline-description-card">
                <div class="timeline-description-event">{event.event}</div>
                <div class="timeline-description-position">
                  {event.position}
                </div>
                <div class="timeline-description-location">
                  {event.location}
                </div>
                <div class="timeline-description">
                  {@html event.description}
                </div>
                {#if event.link !== null}
                  <a class="timeline-description-link" href={event.link}
                    >Visit Site</a
                  >
                {/if}
              </div>
            </div>
          </LazyLoader>
        </div>
      {/if}
      {#if event.alignment === 'left'}
        <div
          class="timeline-date-content-left"
          style="grid-row: row{index}-start / row{index + 1}-start;"
        >
          <div class="timeline-date">
            <LazyLoader
              lazyLoaderProps={getRightTransition(delay * (index + 1))}
              maxCount={maxLoadTries}
            >
              {event.dateStart}
              -
              {event.dateEnd}
            </LazyLoader>
          </div>
        </div>
      {:else}
        <div
          class="timeline-date-content-right"
          style="grid-row: row{index}-start / row{index + 1}-start;"
        >
          <div class="timeline-date">
            <LazyLoader
              lazyLoaderProps={getLeftTransition(delay * (index + 1))}
              maxCount={maxLoadTries}
            >
              {event.dateStart}
              -
              {event.dateEnd}
            </LazyLoader>
          </div>
        </div>{/if}
    {/each}
  </div>
{/if}

<style>
  .timeline {
    display: grid;
    width: var(--timeline-width);
    grid-template-columns:
      [col0-start] var(--timeline-card-container-width) [col1-start]
      var(
        --timeline-card-bar-width,
        calc(var(--timeline-width) - (var(--timeline-card-container-width) * 2))
      )
      [col2-start]
      var(--timeline-card-container-width)
      [col3-start];
  }

  .timeline-bar-content {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: col1-start/col2-start;
    min-width: var(--timeline-bar-min-width);
    padding: var(--timeline-bar-margin);
  }

  .timeline-bar {
    background-color: var(--timeline-bar-color);
    border-radius: var(--timeline-bar-border-radius);
    box-shadow: var(--timeline-bar-box-shadow);
    height: 100%;
    min-width: var(--timeline-bar-min-width);
    width: var(--timeline-bar-width);
  }

  .timeline-content {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: var(--timeline-content-bg-color);
    border-radius: var(--timeline-content-border-radius);
    box-shadow: var(--timeline-content-box-shadow);
    height: var(--timeline-content-height);
    margin: var(--timeline-content-margin);
    padding: var(--timeline-content-padding);
    width: -webkit-fill-available;
    transition: all var(--timeline-content-transition);
  }

  .timeline-content:hover {
    box-shadow: var(--timeline-content-hover-box-shadow);
  }

  .timeline-content-left {
    flex-direction: row-reverse;
  }

  .timeline-date {
    color: var(--timeline-date-color);
    font-size: var(--timeline-date-font-size);
    font-weight: var(--timeline-date-font-weight);
    margin: var(--timeline-date-margin);
  }

  .timeline-date-content-left {
    display: flex;
    align-items: center;
    grid-column: col2-start / col3-start;
  }

  .timeline-date-content-right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    grid-column: col0-start / col1-start;
  }

  .timeline-description-card {
    display: flex;
    flex-direction: column;
    padding: var(--timeline-description-card-padding);
  }

  .timeline-description-card-left {
    align-items: flex-end;
  }

  .timeline-description {
    color: var(--timeline-description-color);
    font-size: var(--timeline-description-font-size);
    line-height: var(--timeline-description-line-height);
    padding: var(--timeline-description-padding);
    text-align: justify;
    font-weight: var(--timeline-description-font-weight);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .timeline-description-event {
    color: var(--timeline-description-event-font-color);
    font-size: var(--timeline-description-event-font-size);
    padding: var(--timeline-description-event-padding);
    font-weight: var(--timeline-description-event-font-weight);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .timeline-description-location {
    color: var(--timeline-description-location-font-color);
    font-size: var(--timeline-description-location-font-size);
    padding: var(--timeline-description-location-padding);
    font-weight: var(--timeline-description-location-font-weight);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .timeline-description-position {
    color: var(--timeline-description-position-font-color);
    font-size: var(--timeline-description-position-font-size);
    padding: var(--timeline-description-position-padding);
    font-weight: var(--timeline-description-position-font-weight);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  a.timeline-description-link {
    text-decoration: none;
    color: var(--timeline-description-link-font-color);
    font-size: var(--timeline-description-link-font-size);
    padding: var(--timeline-description-link-padding);
    font-weight: var(--timeline-description-link-font-weight);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .timeline-left {
    flex-direction: row-reverse;
    grid-column: col0-start / col1-start;
  }

  .timeline-right {
    grid-column: col2-start / col3-start;
  }

  @media only screen and (max-width: 900px) {
    .timeline {
      grid-template-columns:
        [col1-start]
        var(
          --timeline-card-bar-width,
          calc(
            var(--timeline-width) - var(--timeline-date-media-width) -
              (
                var(--timeline-card-container-width) * 2 -
                  var(--timeline-date-media-width)
              )
          )
        )
        [col2-start]
        var(--timeline-date-media-width)
        [col3-start]
        calc(
          var(--timeline-card-container-width) * 2 -
            var(--timeline-date-media-width)
        )
        [col4-start];
    }

    .timeline-content-left {
      flex-direction: row;
    }

    .timeline-date-content-left {
      grid-column: col2-start / col3-start;
    }

    .timeline-date-content-right {
      flex-direction: row;
      grid-column: col2-start / col3-start;
    }

    .timeline-description-card-left {
      align-items: flex-start;
    }

    .timeline-left {
      flex-direction: row;
      grid-column: col3-start / col4-start;
    }

    .timeline-right {
      grid-column: col3-start / col4-start;
    }
  }

  @media only screen and (max-width: 500px) {
    .timeline {
      grid-template-columns:
        [col1-start]
        var(
          --timeline-card-bar-width,
          calc(
            var(--timeline-width) - var(--timeline-date-media-width) -
              (
                var(--timeline-card-container-width) * 2 -
                  var(--timeline-date-media-width)
              )
          )
        )
        [col2-start]
        0px
        [col3-start]
        calc(var(--timeline-card-container-width) * 2)
        [col4-start];
    }

    .timeline-date {
      display: none;
    }
  }
</style>
