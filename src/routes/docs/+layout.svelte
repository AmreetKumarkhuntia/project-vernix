<script lang="ts">
  import 'prismjs/themes/prism-tomorrow.css';
  import { goto } from '$app/navigation';
  import { type DropdownItem, type SideNavItem, DropDown, SideNav } from '$lib';
  import { onMount } from 'svelte';
  export let data: { items: SideNavItem[] };

  let versions: DropdownItem[] = [
    {
      id: 'v1.0',
      label: 'v1.0',
      action: () => {
        // to do
      },
      active: true,
    },
    {
      id: 'v2.0',
      label: 'v2.0',
      action: () => {
        // to do
      },
      active: false,
    },
  ];
  let currentActiveItem: SideNavItem | undefined = undefined;

  function onClick(currentLayerIndex: number, item: SideNavItem): void {
    if (item.href !== '') {
      goto(item.href);
    }
  }

  function findAndSetActiveItem(items: SideNavItem[], path: string) {
    for (const item of items) {
      if (item.children !== undefined && item.children.length > 0) {
        findAndSetActiveItem(item.children, path);
      } else if (item.href === path) {
        currentActiveItem = item;
        return;
      }
    }
  }
  onMount(() => {
    const currentPath = window.location.pathname;
    findAndSetActiveItem(data.items, currentPath);
  });
</script>

<div class="docs-layout">
  <aside class="sidebar">
    <SideNav items={data.items} {onClick} bind:activeItem={currentActiveItem}>
      <div slot="side-nav-top-content" class="sidebar-top-content">
        <div class="side-nav-top-content-header">Version</div>
        <DropDown items={versions} multi={false} buttonLabel={'Version'} />
        <!-- <hr class="side-nav-top-content-divider"/> -->
      </div>
    </SideNav>
  </aside>
  <main class="docs-content">
    <slot />
  </main>
</div>

<style>
  .docs-layout {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    width: 250px;
    flex-shrink: 0;
    border-right: 1px solid #e0e0e0;
    overflow-y: auto;
  }

  .sidebar-top-content {
    --dropdown-width: 100%;
    --dropdown-height: 40px;

    --dropdown-arrow-size: 10px;

    --dropdown-menu-min-width: calc(100% - 2px);

    margin: 0px 10px 10px 10px;
  }

  /* .side-nav-top-content-divider {
    margin-top: 20px;
    border: none;
    border-top: 0.6px dashed var(--sidenav-border-color, black);
    scale: 1.3;
  } */

  .side-nav-top-content-header {
    font-size: var(--font-xs);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .docs-content {
    flex-grow: 1;
    margin-top: var(--navbar-layout-height);
    padding: 5% 8%;
    overflow-y: auto;
  }
</style>
