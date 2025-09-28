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
          label: 'accordion',
          href: '/docs/components/accordion',
        },
        {
          label: 'avatar',
          href: '/docs/components/avatar',
        },
        {
          label: 'breadcrumbs',
          href: '/docs/components/breadcrumbs',
        },
        {
          label: 'button',
          href: '/docs/components/button',
        },
        {
          label: 'card',
          href: '/docs/components/card',
        },
        {
          label: 'carousel',
          href: '/docs/components/carousel',
        },
        {
          label: 'checkbox',
          href: '/docs/components/checkbox',
        },
        {
          label: 'code',
          href: '/docs/components/code',
        },
        {
          label: 'date',
          href: '/docs/components/date',
        },
        {
          label: 'drop-down',
          href: '/docs/components/drop-down',
        },
        {
          label: 'file-uploader',
          href: '/docs/components/file-uploader',
        },
        {
          label: 'flyer',
          href: '/docs/components/flyer',
        },
        {
          label: 'header',
          href: '/docs/components/header',
        },
        {
          label: 'input-field',
          href: '/docs/components/input-field',
        },
        {
          label: 'lazy-loader',
          href: '/docs/components/lazy-loader',
        },
        {
          label: 'modal',
          href: '/docs/components/modal',
        },
        {
          label: 'navbar',
          href: '/docs/components/navbar',
        },
        {
          label: 'progress-bar',
          href: '/docs/components/progress-bar',
        },
        {
          label: 'radio-group',
          href: '/docs/components/radio-group',
        },
        {
          label: 'ripple',
          href: '/docs/components/ripple',
        },
        {
          label: 'side-nav',
          href: '/docs/components/side-nav',
        },
        {
          label: 'time-line',
          href: '/docs/components/time-line',
        },
        {
          label: 'toggle',
          href: '/docs/components/toggle',
        },
        {
          label: 'tooltip',
          href: '/docs/components/tooltip',
        },
        {
          label: 'wrapper-text',
          href: '/docs/components/wrapper-text',
        },
      ],
    },
  ];

  return {
    items,
  };
}
