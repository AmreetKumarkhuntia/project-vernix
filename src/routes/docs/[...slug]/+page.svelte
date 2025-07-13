<script lang="ts">
  import ButtonDocs from '$lib/docs/components/Button.mdx';
  import Introduction from '$lib/docs/introduction.mdx';
  import { page } from '$app/stores';

  $: slug = $page.params.slug; // type: string[]
</script>

<div class="prose">
  {#if slug === 'components/button'}
    <ButtonDocs />
  {:else if slug === 'introduction'}
    <Introduction />
  {:else}
    <div>documentation is not available yet.</div>
  {/if}
</div>
