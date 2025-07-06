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
