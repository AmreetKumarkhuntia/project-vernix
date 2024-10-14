<!-- src/components/InputField.svelte -->
<script lang="ts">
    export let placeholder: string = "Enter text";
    export let value: string = "";
    export let onInput: (e: Event) => void;
</script>

<div class="input-container">
    <input
        type="text"
        bind:value
        on:input={onInput}
        class="input"
        placeholder=" "
    />
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="floating-label">{placeholder}</label>
</div>

<style>
    .input-container {
        position: relative;
        width: 100%;
    }

    .input {
        width: 100%;
        padding: var(--input-padding);
        border: 1px solid var(--input-border-color);
        border-radius: var(--input-border-radius);
        font-family: var(--input-font-family);
        transition: border-color 0.3s ease-in-out;
        background: transparent;
        outline: none;
        box-sizing: border-box; /* Ensures padding is included in width */
    }

    .input:focus {
        border-color: var(--input-primary-color);
    }

    .floating-label {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: var(--input-navigation-font-size);
        color: var(--input-border-color);
        transition:
            top 0.2s ease-in-out,
            font-size 0.2s ease-in-out,
            color 0.2s ease-in-out;
        pointer-events: none;
    }

    .input:focus + .floating-label,
    .input:not(:placeholder-shown) + .floating-label {
        top: -8px;
        font-size: 12px;
        color: var(--input-primary-color);
    }
</style>
