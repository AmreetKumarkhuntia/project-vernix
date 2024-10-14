<script lang="ts">
    import { extendInDirection, fly } from "$components/transitions";
    import { defaultAccordionProps, type AccordionProps } from "./props";

    export let isClose: boolean = true;
    export let accordionProps: AccordionProps = defaultAccordionProps;
    const closeButtonContent = accordionProps.closeButtonContent;
    const title = accordionProps.title;
    const duration = accordionProps.duration;
    const onToggle: (isClose: boolean) => void =
        accordionProps.onToggle !== undefined
            ? accordionProps.onToggle
            : () => {};

    function handleToggle() {
        isClose = !isClose;
        onToggle(isClose);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="accordion">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="accordion-header" on:click={handleToggle}>
        <span class="accordion-title">{title}</span>
        <span class="accordion-close-button {isClose ? '' : 'active'}">
            {@html closeButtonContent}
        </span>
    </div>
    {#if isClose === false}
        <div
            class="accordion-content"
            in:extendInDirection={{ direction: "top", duration: duration }}
            out:extendInDirection={{ direction: "bottom", duration: duration }}
        >
            <slot />
        </div>
    {/if}
</div>

<style>
    .accordion {
        border: 1px solid var(--accordion-border-color);
        border-radius: var(--accordion-border-radius);
        margin-bottom: var(--accordion-margin);
        width: var(--accordion-width);
        height: var(--accordion-height);
        overflow: hidden;
        font-size: var(--accordion-font-size);
    }

    .accordion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--accordion-header-padding);
        cursor: pointer;
        background-color: var(--accordion-header-background-color);
        color: var(--accordion-header-text-color);
        transition: background-color var(--accordion-transition-speed);
    }

    .accordion-header:hover {
        background-color: var(--accordion-header-hover-color);
    }

    .accordion-title {
        flex-grow: 1;
        font-size: var(--accordion-title-font-size);
        margin-right: var(--accordion-title-margin-right);
    }

    .accordion-close-button {
        display: inline-block;
        transition:
            transform var(--accordion-transition-speed),
            scale var(--accordion-transition-speed);
    }

    .accordion-close-button.active {
        transform: rotate(var(--accordion-rotation-angle)) scale(1.5);
    }

    .accordion-content {
        padding: var(--accordion-content-padding);
        background-color: var(--accordion-content-background-color);
    }
</style>
