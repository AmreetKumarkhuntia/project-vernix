<script lang="ts">
  import '$css/improved-theme-2.css';
  import '$siteCss/style.css';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import type { NavigationOptions } from '$lib/components/navbar/props';
  import { topNavbarProps } from '$lib/constants/client/index';
  import clientStore from '$lib/store/clientStore';

  $: {
    const currentPath = $page.url.pathname;
    const activeNav = topNavbarProps.navigationOptions.find(
      (option) => option.navigationURL === currentPath
    );
    if (activeNav) {
      clientStore.update((store) => ({
        ...store,
        activeNavigation: activeNav.id,
      }));
    } else {
      clientStore.update((store) => ({
        ...store,
        activeNavigation: '',
      }));
    }
  }

  function handleNavClick(navigationOption: NavigationOptions) {
    clientStore.update((store) => ({
      ...store,
      activeNavigation: navigationOption.id,
    }));
    if (navigationOption.navigationURL.includes('http')) {
      window.open(navigationOption.navigationURL, '_blank');
    } else {
      goto(navigationOption.navigationURL);
    }
    return;
  }
</script>

<div class="navbar-layout">
  <Navbar
    navbarProps={topNavbarProps}
    activeNavigation={$clientStore.activeNavigation}
    onClick={handleNavClick}
  />
</div>
<div class="blob-bg"></div>
<div class="blob-bg-2"></div>
<div class="body-layout">
  <slot />
</div>
