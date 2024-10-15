<script lang="ts">
    import { performTransition } from "$components/transitions";
    import { defaultModalProps, type ModalProps } from "./props";

    export let isOpen: boolean = false;
    export let onClose: () => void = () => {};
    export let modalProps: ModalProps = defaultModalProps;

    const inTransition = modalProps.inTransition;
    const outTransition = modalProps.outTransition;
    const closeButtonContent = defaultModalProps.closeButtonProp ?? "&times;";

    const closeModal = () => {
        isOpen = false;
        onClose();
    };
</script>

{#if isOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="modal-overlay" on:click={closeModal}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="modal-content"
            on:click|stopPropagation
            in:performTransition={inTransition}
            out:performTransition={outTransition}
            on:outroend={onClose}
        >
            <button class="modal-close-button" on:click={closeModal}>
                {@html closeButtonContent}
            </button>
            <slot></slot>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--modal-overlay-background);
    }

    .modal-content {
        padding: var(--modal-content-padding);
        border-radius: var(--modal-border-radius);
        max-width: var(--modal-max-width);
        min-width: var(--modal-min-width);
        position: relative;
        background: var(--modal-content-background);
        transform: translateY(0);
        opacity: 1;
    }

    .modal-close-button {
        position: absolute;
        top: var(--modal-close-button-top);
        right: var(--modal-close-button-right);
        background: none;
        border: none;
        cursor: pointer;
        font-size: var(--modal-close-button-size);
        transition:
            color 0.2s ease,
            transform 0.3s ease;
    }

    .modal-close-button:hover {
        color: var(--modal-close-button-hover-color);
        transform: rotate(var(--modal-close-button-hover-rotation))
            scale(var(--modal-close-button-hover-scale));
    }
</style>
