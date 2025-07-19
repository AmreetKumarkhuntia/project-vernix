<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error-container">
  <h1>{$page.status}{#if $page.error}: {$page.error.message}{/if}</h1>
  <p>Sorry, the page you are looking for does not exist or is under development.</p>
  <a href="/">Go back to the homepage</a>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
