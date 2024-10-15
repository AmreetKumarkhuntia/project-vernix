<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { defaultWrapperTextProps, type WrapperTextProps } from "./props";

    export let text = "Hello, This is Example Wrapper!";
    export let wrapperTextProps: WrapperTextProps = defaultWrapperTextProps;

    let container: Element;
    let observer: IntersectionObserver;
    let isShowable: boolean = false;
    const wrapFrom = wrapperTextProps.wrapFrom;
    const isWrapOnLoadEnabled = wrapperTextProps.enableWrapOnLoad;
    const isHoverGlitchedEnabled = wrapperTextProps.enableHoverGlitch;

    onMount(() => {
        if (wrapFrom === "none") {
            isShowable = true;
            return;
        }

        if (isWrapOnLoadEnabled) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    isShowable = entry.isIntersecting;
                },
                { threshold: 0.1 },
            );
            observer.observe(container);
        }
    });

    onDestroy(() => {
        observer?.disconnect();
    });
</script>

<div
    class="wrapper-text-container"
    data-wrap-from={wrapFrom}
    bind:this={container}
>
    {#if isShowable}
        {#each text.split("") as char, index}
            <span
                class="wrapper-text-char"
                style={wrapFrom !== "none"
                    ? `--wrapper-text-char-index: ${index}`
                    : ""}
            >
                <span
                    class="char-front char-glitch"
                    data-char={char === " " ? "\u00A0" : char}
                    >{char === " " ? "\u00A0" : char}</span
                >
                <span
                    class="char-back {isHoverGlitchedEnabled === true
                        ? 'char-glitch'
                        : ''}"
                    data-char={char === " " ? "\u00A0" : char}
                    >{char === " " ? "\u00A0" : char}</span
                >
            </span>
        {/each}
    {/if}
</div>

<style>
    .wrapper-text-container {
        display: var(--wrapper-text-container-display);
        overflow: hidden;
        white-space: nowrap;
    }

    .wrapper-text-char {
        margin: var(--wrapper-text-char-margin);
        display: var(--wrapper-text-char-display);
        letter-spacing: var(--wrapper-text-char-letter-spacing);
        position: relative;
        cursor: pointer;
    }

    .char-front,
    .char-back {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition:
            transform var(--wrapper-text-animation-duration)
                var(--wrapper-text-animation-ease),
            opacity var(--wrapper-text-animation-duration)
                var(--wrapper-text-animation-ease);
    }

    .char-front {
        transform: translateY(0);
        opacity: 1;
    }

    .char-back.char-glitch::after {
        content: attr(data-char);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        animation: horizontal-glitch var(--wrapper-text-char-glitch-duration)
            infinite;
        transition: opacity 0.1s ease;
        z-index: -1;
    }

    .char-back {
        transform: translateY(100%);
        opacity: 0;
        color: var(--wrapper-text-hover-color);
    }

    .wrapper-text-char:hover .char-front {
        transform: translateY(-100%);
        opacity: 0;
    }

    .wrapper-text-char:hover .char-back {
        transform: translateY(-100%);
        opacity: 1;
    }

    .wrapper-text-char:hover .char-back.char-glitch::after {
        opacity: 1;
    }

    [data-wrap-from="none"] .wrapper-text-char {
        animation: none;
        transform: none;
        opacity: 1;
    }

    .wrapper-text-char:not([data-wrap-from="none"]) {
        transform: translate(
            var(--wrapper-text-transform-x),
            var(--wrapper-text-transform-y)
        );
        animation: wrapper-text-roll-up var(--wrapper-text-animation-duration)
            var(--wrapper-text-animation-ease) forwards;
        animation-delay: calc(
            var(--wrapper-text-char-index) * var(--wrapper-text-animation-delay)
        );
    }

    @keyframes wrapper-text-roll-up {
        0% {
            transform: translate(
                var(--wrapper-text-transform-x),
                var(--wrapper-text-transform-y)
            );
            opacity: 0;
        }
        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }

    [data-wrap-from="top"] .wrapper-text-char {
        --wrapper-text-transform-y: 100%;
        --wrapper-text-transform-x: 0%;
    }

    [data-wrap-from="bottom"] .wrapper-text-char {
        --wrapper-text-transform-y: -100%;
        --wrapper-text-transform-x: 0%;
    }

    [data-wrap-from="left"] .wrapper-text-char {
        --wrapper-text-transform-x: -100%;
        --wrapper-text-transform-y: 0%;
    }

    [data-wrap-from="right"] .wrapper-text-char {
        --wrapper-text-transform-x: 100%;
        --wrapper-text-transform-y: 0%;
    }

    @keyframes horizontal-glitch {
        0% {
            transform: translateX(0);
            clip-path: inset(10% 10% 10% 10%);
            color: #ff5733;
        }
        5% {
            transform: translateX(5px) rotate(2deg);
            clip-path: inset(15% 20% 15% 20%);
            color: #33ff57;
        }
        15% {
            transform: translateX(-5px) rotate(-2deg);
            clip-path: inset(5% 30% 25% 30%);
            color: #3357ff;
        }
        20% {
            transform: translateX(5px) rotate(1deg);
            clip-path: inset(10% 25% 20% 15%);
            color: #ff33a6;
        }
        25% {
            transform: translateX(0);
            clip-path: inset(20% 15% 15% 10%);
            color: #a633ff;
        }
        35% {
            transform: translateX(-5px) rotate(-3deg);
            clip-path: inset(15% 10% 30% 15%);
            color: #33ffa6;
        }
        40% {
            transform: translateX(3px) rotate(2deg);
            clip-path: inset(10% 20% 20% 20%);
            color: #ffa633;
        }
        50% {
            transform: translateX(0);
            clip-path: inset(10% 10% 10% 10%);
            color: #ff5733;
        }
        65% {
            transform: translateX(5px) rotate(2deg);
            clip-path: inset(15% 20% 15% 20%);
            color: #33ff57;
        }
        75% {
            transform: translateX(-5px) rotate(-2deg);
            clip-path: inset(5% 30% 25% 30%);
            color: #3357ff;
        }
        80% {
            transform: translateX(5px) rotate(1deg);
            clip-path: inset(10% 25% 20% 15%);
            color: #ff33a6;
        }
        100% {
            transform: translateX(0);
            clip-path: inset(20% 15% 15% 10%);
            color: #a633ff;
        }
        130% {
            transform: translateX(-5px) rotate(-3deg);
            clip-path: inset(15% 10% 30% 15%);
            color: #33ffa6;
        }
        140% {
            transform: translateX(3px) rotate(2deg);
            clip-path: inset(10% 20% 20% 20%);
            color: #ffa633;
        }
        150% {
            transform: translateX(0);
            clip-path: inset(10% 10% 10% 10%);
            color: #ff5733;
        }
    }
</style>
