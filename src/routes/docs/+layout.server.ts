import type { SideNavItem } from '$lib/components/sideNav/props';

export function load() {
  const items: SideNavItem[] = [
    {
      label: 'introduction',
      href: '/docs/introduction',
    },
    {
      label: 'components',
      href: '',
      expanded: true,
      children: [
        {
          label: 'button',
          href: '/docs/components/button',
        },
        {
          label: 'header',
          href: '/docs/components/header',
        },
        {
          label: 'inputField',
          href: '/docs/components/input-field',
        },
      ],
    },
  ];

  return {
    items,
  };
}
