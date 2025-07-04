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
