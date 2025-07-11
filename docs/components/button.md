# Button

The `Button` component is a simple, versatile button that can be used for various actions.

## Usage

```svelte
<script>
  import { Button } from 'your-library';
</script>

<Button on:click={() => alert('Button clicked!')}>
  Click me
</Button>
```

## Props

- `disabled`: `boolean` (default: `false`) - Disables the button.
- `href`: `string` (optional) - If provided, the button will be rendered as an `<a>` tag.
