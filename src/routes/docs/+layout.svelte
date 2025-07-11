<script lang="ts">
  import { goto } from '$app/navigation';
  import SideNav from '$lib/components/sideNav/SideNav.svelte';
  import type { SideNavItem } from '$lib/components/sideNav/props';
  export let data: { items: SideNavItem[] };

  function onClick(currentLayerIndex: number, item: SideNavItem): void {
    if (item.href !== '') {
      goto(item.href);
    }
  }
</script>

<div class="docs-layout">
  <aside class="sidebar">
    <SideNav items={data.items} extraOnClick={onClick} />
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

  .docs-content {
    flex-grow: 1;
    margin-top: var(--navbar-layout-height);
    padding: 5% 8%;
    overflow-y: auto;
  }
</style>
