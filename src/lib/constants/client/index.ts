import type { BreadcrumbItem } from '$lib/components/breadcrumbs/props';
import type {
  NavbarProps,
  NavigationOptions,
} from '$lib/components/navbar/props';

export const navigationMenu: NavigationOptions[] = [
  {
    id: 'home',
    title: 'HOME',
    navigationURL: '/',
  },
  {
    id: 'about',
    title: 'ABOUT',
    navigationURL: '/about',
  },
  {
    id: 'docs',
    title: 'DOCS',
    navigationURL: '/docs',
  },
  {
    id: 'npm',
    title: 'NPM',
    navigationURL: '/github',
  },
  {
    id: 'github',
    title: 'GITHUB',
    navigationURL: '/github',
  },
];

export const topNavbarProps: NavbarProps = {
  showLeftImage: false,
  leftImageURL: null,
  navigationOptions: navigationMenu,
  showRightImage: false,
  rightImageURL: null,
};

export const homePageBreadcrumbItems: BreadcrumbItem[] = [
  { index: '1', text: 'Home', href: '/' },
  { index: '2', text: 'Products', href: '/products' },
  { index: '3', text: 'Electronics', href: '/products/electronics' },
];

export const homeRadioOptions = [
  { label: 'Red', value: 'option1' },
  { label: 'Green', value: 'option2' },
  { label: 'Orange', value: 'option3' },
];

export const accordionContents: Array<{ title: string; content: string }> = [
  {
    title: 'Getting Started',
    content:
      'Vergins.js offers a powerful set of pre-built UI components designed for rapid frontend development. Install via your package manager and start building with minimal setup.',
  },
  {
    title: 'Theming',
    content:
      'Easily customize the look and feel of your application with Vergins.js’s built-in theming engine. Support for light, dark, and system themes is built-in — override tokens or extend themes with ease.',
  },
  {
    title: 'Accessibility',
    content:
      'All components in Vergins.js follow best practices for accessibility, including keyboard navigation, ARIA attributes, and screen reader support to ensure inclusive user experiences.',
  },
];

export const homeIllustrationLocations: {
  locationImage: string;
  locationName: string;
  locationFeedback: string;
}[] = [
  {
    locationImage: 'alaska.jpg',
    locationName: 'Alaska, USA',
    locationFeedback:
      '“First-class, five-star trip at a much more affordable price…guides friendly, well-organized excursions including wildlife viewing and glacier visits.”',
  },
  {
    locationImage: 'chilika_odisha.jpg',
    locationName: 'Chilika Lake, Odisha, India',
    locationFeedback:
      '“Largest brackish lagoon in Asia, peaceful boat rides, bird watching (flamingos & Irrawaddy dolphins)—but beware of gemstone scams by some boat vendors.”',
  },
  {
    locationImage: 'great_wall_china.jpg',
    locationName: 'Great Wall of China (Mutianyu/Jinshanling)',
    locationFeedback:
      '“Incredible experience—self-guided or private tours are rewarding. Mutianyu offers gondola, toboggan options; Jinshanling is less crowded, photogenic, with wild sections.”',
  },
];
