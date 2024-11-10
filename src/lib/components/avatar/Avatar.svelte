<script lang="ts">
  export let src: string = '';
  export let alt: string = 'User Avatar';
  export let size: string = '50px';
  export let onClick: (e: MouseEvent, elementType: string) => void = () => {};
  export let smallSize = '16px';
  export let letterColors: Record<string, string> = {
    A: '#BF3F2D',
    B: '#0091B0',
    C: '#009D3A',
    D: '#BF2B80',
    E: '#8D33FF',
    F: '#BF8F25',
    G: '#009A8B',
    H: '#BF5A2A',
    I: '#009D5B',
    J: '#5733FF',
    K: '#9E2C9B',
    L: '#0073B8',
    M: '#BF2A4C',
    N: '#009F80',
    O: '#BF6F25',
    P: '#007DAB',
    Q: '#A133BF',
    R: '#009F9A',
    S: '#BF2B4D',
    T: '#3F9A2B',
    U: '#9F2C9B',
    V: '#009D8B',
    W: '#BF8A25',
    X: '#8A8D25',
    Y: '#BF2B5D',
    Z: '#007A9E',
  };

  const initial: string = alt.charAt(0).toUpperCase();

  function getBackgroundColor(letter: string): string {
    return letterColors[letter] || '#777';
  }

  const backgroundColor: string = getBackgroundColor(initial);

  function handleClick(e: MouseEvent, elementType: string) {
    onClick(e, elementType);
  }
</script>

{#if src}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    class="avatar"
    {src}
    {alt}
    style="--avatar-size: {size}; --avatar-size-media: {smallSize};"
    on:click={(e) => handleClick(e, 'image')}
  />
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="avatar"
    style="--avatar-size: {size}; --avatar-bg-color: {backgroundColor}; --avatar-size-media: {smallSize};"
    on:click={(e) => handleClick(e, 'letter')}
  >
    {initial}
  </div>
{/if}

<style>
  .avatar {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--avatar-size) / 2);
    font-weight: bold;
    color: var(--avatar-text-color);
    background-color: var(--avatar-bg-color);
    border: 2px solid var(--avatar-border-color);
    border-radius: var(--avatar-radius);
    width: var(--avatar-size);
    height: var(--avatar-size);
    padding: var(--avatar-padding);
    transition: all var(--avatar-transition-duration)
      var(--avatar-transition-timing);
  }

  .avatar:hover {
    box-shadow: var(--avatar-shadow-size) var(--avatar-shadow-color);
  }

  img.avatar {
    object-fit: cover;
    border: 2px solid var(--avatar-border-color);
    transition: all var(--avatar-transition-duration)
      var(--avatar-transition-timing);
  }

  @media only screen and (max-width: 900px) {
    .avatar {
      width: var(--avatar-size-media);
      height: var(--avatar-size-media);
    }
  }
</style>
