import type { TransitionWrapper } from '../transitions';

export const defaultInListItemTransition: TransitionWrapper = {
  transition: {
    direction: 'top',
    duration: 300,
  },
  transitionType: 'extend-in-direction',
};

export const defaultOutListItemTransition: TransitionWrapper = {
  transition: {
    direction: 'top',
    duration: 300,
  },
  transitionType: 'extend-in-direction',
};

export type FileUploaderProps = {
  fileIconLink: string;
  inListItemTransition: TransitionWrapper | null;
  outlistItemTransition: TransitionWrapper | null;
};

export const defaultFileUploaderProps: FileUploaderProps = {
  fileIconLink: 'fileIcon.svg',
  inListItemTransition: null,
  outlistItemTransition: null,
};
