import type { ComponentType } from 'svelte';

export interface SideNavItem {
  label: string;
  href: string;
  icon?: ComponentType;
  expanded?: boolean;
  children?: SideNavItem[];
  onClick?: (item: SideNavItem, layerIndex: number) => void;
}
