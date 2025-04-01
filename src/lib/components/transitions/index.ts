import { linear } from 'svelte/easing';
import type {
  EasingFunction,
  TransitionConfig,
  BlurParams,
  FadeParams,
  FlyParams,
  SlideParams,
  ScaleParams,
  DrawParams,
  CrossfadeParams,
} from 'svelte/transition';
import {
  blur,
  fade,
  fly,
  slide,
  scale,
  draw,
  crossfade,
} from 'svelte/transition';
import type {
  ExtendInDirectionParams,
  FlyAndFadeParams,
  FlyDirectionParams,
  NoTransitionParams,
  TransitionWrapper,
} from './types';

/* Default Transitions */

/* Transition Definitions */
export function flyAndFade(
  node: Element,
  {
    delay = 0,
    duration = 400,
    easing = linear,
    x = 0,
    y = 0,
    direction = 'in', // Add direction parameter
  }: FlyAndFadeParams & { direction?: 'in' | 'out' }
): TransitionConfig {
  const o = +getComputedStyle(node).opacity;

  return {
    delay,
    duration,
    easing,
    css: (t: number) => `
      transform: translate(
        ${direction === 'in' ? (1 - t) * x : t * x}px,
        ${direction === 'in' ? (1 - t) * y : t * y}px
      );
      opacity: ${direction === 'in' ? t * o : (1 - t) * o};
    `,
  };
}

export function extendInDirection(
  node: Element,
  {
    delay = 0,
    duration = 400,
    easing = linear,
    direction = 'right',
  }: ExtendInDirectionParams
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
          maxWidth = '100%';
          break;
        case 'left':
        case 'right':
          maxWidth = `${originalWidth * t}px`;
          maxHeight = '100%';
          break;
      }
      return `
                max-height: ${maxHeight};
                max-width: ${maxWidth};
                opacity: ${t};
                overflow: hidden;
                transition: max-height ${duration}ms ${easing}, max-width ${duration}ms ${easing}, opacity ${duration}ms ${easing};
            `;
    },
  };
}

export function noTransition(
  node: Element,
  { delay = 0 }: NoTransitionParams
): TransitionConfig {
  return {
    delay,
    duration: 0,
    css: () => '',
  };
}

export function performTransition(
  node: Element,
  { transition, transitionType }: TransitionWrapper
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
    case 'extend-in-direction':
      return extendInDirection(node, transition as ExtendInDirectionParams);
    case 'no-transition':
      return noTransition(node, transition as NoTransitionParams);
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
  TransitionWrapper,
};

export { blur, fade, fly, slide, scale, draw, crossfade };
