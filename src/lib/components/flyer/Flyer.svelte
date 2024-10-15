<script lang="ts">
    import { performTransition } from "$components/transitions";
    import { onDestroy } from "svelte";
    import {
        defaultDescription,
        defaultFlyerProps,
        defaultInTransition,
        defaultOutTransition,
        type FlyerProps,
    } from "./props";

    export let isVisible: boolean = false;
    export let flyerProps: FlyerProps = defaultFlyerProps;
    export let onClose: () => void = () => {};

    const flyerType = flyerProps.flyerType;
    const clearDuration = flyerProps.duration ?? 3000;
    const position = flyerProps.position;
    const title = flyerProps.title;
    const description = flyerProps.description ?? defaultDescription;
    const inTransition = flyerProps.inTransition ?? defaultInTransition;
    const outTransition = flyerProps.outTransition ?? defaultOutTransition;
    const imageUrl = flyerProps.flyerLeftImage;

    let timer: NodeJS.Timeout | null = null;

    $: if (isVisible) {
        timer = setTimeout(closeFlyer, clearDuration);
    }

    function closeFlyer() {
        isVisible = false;
        onClose();
    }

    onDestroy(() => {
        if (timer) {
            clearTimeout(timer);
        }
    });
</script>

{#if isVisible}
    <div
        class="flyer {position} {flyerType}"
        in:performTransition={inTransition}
        out:performTransition={outTransition}
    >
        <button class="flyer-close" on:click={closeFlyer}>×</button>

        {#if imageUrl}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={imageUrl} alt="Flyer Image" class="flyer-image" />
        {/if}

        <div class="flyer-content">
            <div class="flyer-title">{title}</div>
            <div class="flyer-description">
                {description}
            </div>
            <slot name="cta"></slot>
        </div>
    </div>
{/if}

<style>
    .flyer {
        background-color: var(--flyer-background-color);
        color: var(--flyer-text-color);
        border-radius: var(--flyer-border-radius);
        box-shadow: var(--flyer-box-shadow);
        padding: var(--flyer-padding-vertical) var(--flyer-padding-horizontal);
        display: flex;
        flex-direction: column;
        align-items: var(--flyer-align-items);
        text-align: var(--flyer-text-align);
        min-width: var(--flyer-min-width);
        max-width: var(--flyer-max-width);
        margin: var(--flyer-margin);
        font-size: var(--flyer-text-size);
        position: fixed;
        z-index: var(--flyer-z-index, 1000);
    }

    .flyer.top-right {
        top: var(--flyer-top);
        right: var(--flyer-right);
    }

    .flyer.bottom-right {
        bottom: var(--flyer-bottom);
        right: var(--flyer-right);
    }

    .flyer.top-left {
        top: var(--flyer-top);
        left: var(--flyer-left);
    }

    .flyer.bottom-left {
        bottom: var(--flyer-bottom);
        left: var(--flyer-left);
    }

    .flyer.alert {
        background-color: var(--flyer-alert-background-color);
    }

    .flyer.summary {
        background-color: var(--flyer-summary-background-color);
    }

    .flyer.warning {
        background-color: var(--flyer-warning-background-color);
    }

    .flyer.success {
        background-color: var(--flyer-success-background-color);
    }

    .flyer.custom {
        background-color: var(--flyer-custom-background-color);
    }

    .flyer-close {
        position: absolute;
        top: var(--flyer-close-top);
        right: var(--flyer-close-right);
        background: none;
        border: none;
        font-size: var(--flyer-close-size);
        color: var(--flyer-close-color);
        cursor: pointer;
        transition:
            transform 0.3s,
            color 0.2s;
    }

    .flyer-close:hover {
        color: var(--flyer-close-hover-color);
        transform: rotate(var(--flyer-close-rotation))
            scale(var(--flyer-close-hover-scale));
    }

    .flyer-image {
        width: 100%;
        max-height: var(--flyer-image-max-height);
        object-fit: var(--flyer-image-fit);
        border-radius: var(--flyer-image-border-radius);
        margin-bottom: var(--flyer-image-margin-bottom);
    }

    .flyer-title {
        font-weight: var(--flyer-title-weight);
        margin: var(--flyer-title-margin);
    }

    .flyer-description {
        margin: var(--flyer-description-margin);
    }
</style>
