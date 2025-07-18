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
      ],
    },
  ];

  return {
    items,
  };
}
