import type { TransitionWrapper } from '$components/transitions';

export type CodeProps = {
  copiedIcon: string;
  notCopiedIcon: string;
};

export const defaultCodeProps: CodeProps = {
  copiedIcon: 'tick-icon.png',
  notCopiedIcon: 'copy-icon.png',
};

export const defaultInTransition: TransitionWrapper = {
  transition: { x: 40, duration: 400 },
  transitionType: 'fly-and-fade',
};

export const defaultOutTransition: TransitionWrapper = {
  transition: { x: 40, duration: 400 },
  transitionType: 'fly-and-fade',
};
