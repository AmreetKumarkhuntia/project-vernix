import { headerIcon, profileIcon } from '../../constants/staticIcons';

export type NavigationOptions = {
  id: string;
  title: string;
  navigationURL: string;
};

export type NavbarProps = {
  navigationOptions: NavigationOptions[];
};

export type NavbarAlignment = 'horizontal' | 'vertical';

const defaultNavigationOptions: NavigationOptions[] = [
  {
    id: 'home',
    title: 'Home',
    navigationURL: '/',
  },
  {
    id: 'about',
    title: 'About',
    navigationURL: '/about',
  },
  {
    id: 'github',
    title: 'Github',
    navigationURL: '/github',
  },
];

export const defaultNavbarProps: NavbarProps = {
  navigationOptions: defaultNavigationOptions,
};
