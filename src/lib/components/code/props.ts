import type { TransitionWrapper } from '../transitions';

export type CodeProps = {
  copiedIcon: string;
  notCopiedIcon: string;
};

export const defaultInTransition: TransitionWrapper = {
  transition: { x: 400, duration: 400 },
  transitionType: 'fly-and-fade',
};

export const defaultOutTransition: TransitionWrapper = {
  transition: { x: 400, duration: 400 },
  transitionType: 'fly-and-fade',
};
