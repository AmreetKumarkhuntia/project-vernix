<script lang="ts">
  import Introduction from '$lib/docs/introduction.mdx';
  import Accordion from '$lib/docs/components/accordion.mdx';
  import Avatar from '$lib/docs/components/avatar.mdx';
  import Breadcrumbs from '$lib/docs/components/breadcrumbs.mdx';
  import Button from '$lib/docs/components/button.mdx';
  import Card from '$lib/docs/components/card.mdx';
  import Carousel from '$lib/docs/components/carousel.mdx';
  import Checkbox from '$lib/docs/components/checkbox.mdx';
  import Code from '$lib/docs/components/code.mdx';
  import Date from '$lib/docs/components/date.mdx';
  import DropDown from '$lib/docs/components/drop-down.mdx';
  import FileUploader from '$lib/docs/components/file-uploader.mdx';
  import Flyer from '$lib/docs/components/flyer.mdx';
  import Header from '$lib/docs/components/header.mdx';
  import InputField from '$lib/docs/components/input-field.mdx';
  import LazyLoader from '$lib/docs/components/lazy-loader.mdx';
  import Modal from '$lib/docs/components/modal.mdx';
  import Navbar from '$lib/docs/components/navbar.mdx';
  import ProgressBar from '$lib/docs/components/progress-bar.mdx';
  import RadioGroup from '$lib/docs/components/radio-group.mdx';
  import Ripple from '$lib/docs/components/ripple.mdx';
  import SideNav from '$lib/docs/components/side-nav.mdx';
  import TimeLine from '$lib/docs/components/time-line.mdx';
  import Toggle from '$lib/docs/components/toggle.mdx';
  import Tooltip from '$lib/docs/components/tooltip.mdx';
  import WrapperText from '$lib/docs/components/wrapper-text.mdx';

  import { page } from '$app/stores';

  $: slug = $page.params.slug;
</script>

<div class="prose">
  {#if slug === 'components/accordion'}
    <Accordion />
  {:else if slug === 'components/avatar'}
    <Avatar />
  {:else if slug === 'components/breadcrumbs'}
    <Breadcrumbs />
  {:else if slug === 'components/button'}
    <Button />
  {:else if slug === 'components/card'}
    <Card />
  {:else if slug === 'components/carousel'}
    <Carousel />
  {:else if slug === 'components/checkbox'}
    <Checkbox />
  {:else if slug === 'components/code'}
    <Code />
  {:else if slug === 'components/date'}
    <Date />
  {:else if slug === 'components/drop-down'}
    <DropDown />
  {:else if slug === 'components/file-uploader'}
    <FileUploader />
  {:else if slug === 'components/flyer'}
    <Flyer />
  {:else if slug === 'components/header'}
    <Header />
  {:else if slug === 'components/input-field'}
    <InputField />
  {:else if slug === 'components/lazy-loader'}
    <LazyLoader />
  {:else if slug === 'components/modal'}
    <Modal />
  {:else if slug === 'components/navbar'}
    <Navbar />
  {:else if slug === 'components/progress-bar'}
    <ProgressBar />
  {:else if slug === 'components/radio-group'}
    <RadioGroup />
  {:else if slug === 'components/ripple'}
    <Ripple />
  {:else if slug === 'components/side-nav'}
    <SideNav />
  {:else if slug === 'components/time-line'}
    <TimeLine />
  {:else if slug === 'components/toggle'}
    <Toggle />
  {:else if slug === 'components/tooltip'}
    <Tooltip />
  {:else if slug === 'components/wrapper-text'}
    <WrapperText />
  {:else if slug === 'introduction'}
    <Introduction />
  {:else}
    <div>documentation is not available yet.</div>
  {/if}
</div>
