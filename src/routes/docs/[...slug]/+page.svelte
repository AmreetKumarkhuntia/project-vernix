<script lang="ts">
  import Introduction   from '$lib/docs/introduction.mdx';
  import ButtonDocs     from '$lib/docs/components/button.mdx';
  import Header         from '$lib/docs/components/header.mdx';
  import InputField     from '$lib/docs/components/input-field.mdx';

  import { page } from '$app/stores';

  $: slug = $page.params.slug; // type: string[]
</script>

<div class="prose">
  {#if slug === 'components/button'}
    <ButtonDocs />
  {:else if slug === 'introduction'}
    <Introduction />
  {:else if slug === 'components/header'}
    <Header />
  {:else if slug === 'components/input-field'}
    <InputField />
  {:else}
    <div>documentation is not available yet.</div>
  {/if}
</div>
