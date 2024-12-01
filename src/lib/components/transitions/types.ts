import type {
  EasingFunction,
  BlurParams,
  FadeParams,
  FlyParams,
  SlideParams,
  ScaleParams,
  DrawParams,
  CrossfadeParams,
} from 'svelte/transition';

export interface FlyAndFadeParams {
  delay?: number;
  x?: number;
  y?: number;
  easing?: EasingFunction;
  duration: number;
}

export interface FlyDirectionParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  distance?: number;
}

export interface ExtendInDirectionParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export interface NoTransitionParams {
  delay?: number;
}

export type DrawElement = SVGElement & {
  getTotalLength: () => number;
};

export type TransitionParamsEnum =
  | BlurParams
  | FadeParams
  | FlyParams
  | SlideParams
  | ScaleParams
  | DrawParams
  | FlyAndFadeParams
  | CrossfadeParams
  | FlyDirectionParams
  | ExtendInDirectionParams
  | NoTransitionParams;

export type TransitionEnum =
  | 'blur'
  | 'fade'
  | 'fly'
  | 'slide'
  | 'scale'
  | 'draw'
  | 'crossfade'
  | 'fly-and-fade'
  | 'extend-in-direction'
  | 'no-transition';

export type TransitionWrapper = {
  transition: TransitionParamsEnum;
  transitionType: TransitionEnum;
};
