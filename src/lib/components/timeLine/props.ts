export type TimeLineEventType = 'work' | 'education';
export type TimeLineDetailsAlignment = 'left' | 'right';

export type TimeLineDetails = {
  alignment: TimeLineDetailsAlignment;
  dateStart: string;
  dateEnd: string;
  position: string;
  description: string;
  name: string;
  event: TimeLineEventType | string;
  location: string;
  link: string | null;
};

export type TimeLineProps = {
  icons: Map<string, string> | null;
  duration: number | null;
  delay: number | null;
};

export const defaultTimeLineIcons: Map<string, string> = new Map([
  ['work', 'work.svg'],
  ['education', 'education.svg'],
]);
