export const defaultDescription: string = 'No description to show';

export type FlyerType = 'alert' | 'summary' | 'warning' | 'success' | 'custom';
export type FlyerPosition =
  | 'top-right'
  | 'bottom-right'
  | 'top-left'
  | 'bottom-left';

export type FlyerProps = {
  position: FlyerPosition;
  flyerType: FlyerType | null;
  title: string | null;
  duration: number | null;
  closeAfterDuration: number | null;
  flyerLeftImage: string | null;
};

export const defaultFlyerProps: FlyerProps = {
  position: 'bottom-right',
  flyerType: 'summary',
  title: null,
  duration: 3000,
  closeAfterDuration: 400,
  flyerLeftImage: null,
};
