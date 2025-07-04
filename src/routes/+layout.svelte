<script lang="ts">
  import '$css/improved-theme-2.css';
  import '$siteCss/style.css';

  import Navbar from './../lib/components/navbar/Navbar.svelte';
  import { topNavbarProps } from '$lib/constants/client/index';
</script>

<div class="navbar-layout">
    <Navbar navbarProps={topNavbarProps} onClick={(e) => console.log(e)} />
</div>
<div class="blob-bg"></div>
<div class="blob-bg-2"></div>
<div class="body-layout">
    <slot  />
</div>
