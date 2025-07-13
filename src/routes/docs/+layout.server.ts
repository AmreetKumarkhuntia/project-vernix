import fs from 'fs';
import path from 'path';
import type { SideNavItem } from '$lib/components/sideNav/props';

const docsPath = path.resolve(process.cwd(), 'src/lib/docs');

function getNavItems(dir: string, basePath: string = ''): SideNavItem[] {
  const items: SideNavItem[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    const href = path.join('/docs', basePath, file.replace('.mdx', ''));

    if (stat.isDirectory()) {
      items.push({
        label: file,
        href: '',
        expanded: true,
        children: getNavItems(fullPath, path.join(basePath, file)),
      });
    } else if (file.endsWith('.mdx')) {
      items.push({
        label: file.replace('.mdx', ''),
        href,
      });
    }
  }

  return items;
}

export function load() {
  const items = getNavItems(docsPath);
  return {
    items,
  };
}
