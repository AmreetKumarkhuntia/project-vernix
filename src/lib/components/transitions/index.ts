import { cubicOut } from "svelte/easing";
import type {
    EasingFunction,
    TransitionConfig,
    BlurParams,
    FadeParams,
    FlyParams,
    SlideParams,
    ScaleParams,
    DrawParams,
    CrossfadeParams
} from 'svelte/transition';
import { blur, fade, fly, slide, scale, draw, crossfade } from "svelte/transition";
import type { ExtendInDirectionParams, FlyAndFadeParams, FlyDirectionParams, TransitionWrapper } from "./types";

/* Default Transitions */

/* Transition Definitions */
export function flyAndFade(
    node: Element,
    { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0 }: FlyAndFadeParams,
): TransitionConfig {
    const o = +getComputedStyle(node).opacity;

    return {
        delay,
        duration,
        easing,
        css: (t: number) => `
            transform: translate(${(1 - t) * x}px, ${(1 - t) * y}px);
            opacity: ${t * o};
        `,
    };
}

export function flyDirection(
    node: Element,
    { delay = 0, duration = 400, easing = cubicOut, direction = 'right', distance = 100 }: FlyDirectionParams
): TransitionConfig {
    const o = +getComputedStyle(node).opacity;

    const translateX = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
    const translateY = direction === 'top' ? -distance : direction === 'bottom' ? distance : 0;

    return {
        delay,
        duration,
        easing,
        css: (t: number) => `
            transform: translate(${(1 - t) * translateX}px, ${(1 - t) * translateY}px);
            opacity: ${t * o};
        `,
    };
}
export function extendInDirection(
    node: Element,
    { delay = 0, duration = 400, easing = cubicOut, direction = 'right' }: ExtendInDirectionParams
): TransitionConfig {
    const originalHeight = node.scrollHeight;
    const originalWidth = node.scrollWidth;

    return {
        delay,
        duration,
        easing,
        css: (t: number) => {
            let maxHeight = '0px';
            let maxWidth = '0px';
            switch (direction) {
                case 'top':
                case 'bottom':
                    maxHeight = `${originalHeight * t}px`;
                    maxWidth = "100%"
                    break;
                case 'left':
                case 'right':
                    maxWidth = `${originalWidth * t}px`;
                    maxHeight = "100%"
                    break;
            }
            return `
                max-height: ${maxHeight};
                max-width: ${maxWidth};
                opacity: ${t};
                transition: max-height ${duration}ms ${easing}, max-width ${duration}ms ${easing}, opacity ${duration}ms ${easing};
            `;
        }
    };
}


export function performTransition(
    node: Element,
    { transition, transitionType }: TransitionWrapper,
): TransitionConfig {
    switch (transitionType) {
        case 'blur':
            return blur(node, transition as BlurParams);
        case 'fade':
            return fade(node, transition as FadeParams);
        case 'fly':
            return fly(node, transition as FlyParams);
        case 'slide':
            return slide(node, transition as SlideParams);
        case 'scale':
            return scale(node, transition as ScaleParams);
        case 'fly-and-fade':
            return flyAndFade(node, transition as FlyAndFadeParams);
        case 'fly-direction':
            return flyDirection(node, transition as FlyDirectionParams);
        case 'extend-in-direction':
            return extendInDirection(node, transition as ExtendInDirectionParams);
        default:
            throw new Error(`Unknown transition type: ${transitionType}`);
    }
}

/* Export Types */
export type {
    EasingFunction,
    TransitionConfig,
    BlurParams,
    FadeParams,
    FlyParams,
    SlideParams,
    ScaleParams,
    DrawParams,
    CrossfadeParams,
    FlyAndFadeParams,
    FlyDirectionParams,
    ExtendInDirectionParams,
    TransitionWrapper
};

export { blur, fade, fly, slide, scale, draw, crossfade };
