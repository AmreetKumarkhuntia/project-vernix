import type { TransitionWrapper } from '$components/transitions';
import { linear } from 'svelte/easing';

export type LazyLoaderProps = {
  inTransition: TransitionWrapper;
  outTransition: TransitionWrapper;
};

export const defaultLazyLoaderProps: LazyLoaderProps = {
  inTransition: {
    transitionType: 'fly',
    transition: {
      delay: 200,
      duration: 800,
      x: 0,
      y: 200,
      opacity: 0,
    },
  },
  outTransition: {
    transitionType: 'fly',
    transition: {
      delay: 200,
      duration: 800,
      x: 0,
      y: 200,
      opacity: 0,
    },
  },
};
