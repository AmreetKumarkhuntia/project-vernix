# Vergins: A Svelte UI Library

Vergins is a reusable, accessible, and themeable UI component library for Svelte applications. It provides a set of foundational and specialized components to help you build beautiful and consistent user interfaces with ease.

## Features

- **Reusable Components:** A collection of ready-to-use components to speed up your development process.
- **Accessible by Default:** Components are designed with accessibility in mind, including keyboard navigation and ARIA support.
- **Themable:** Easily customize the look and feel of the components using CSS variables.
- **Consistent Design:** All components follow a consistent design pattern to ensure a cohesive user experience.
- **TypeScript Support:** All components are written in TypeScript for a better development experience.

## Available Components

### Foundation Components

- Buttons
- Inputs
- Cards
- Navigation (Navbar, Breadcrumbs)
- Layout (Accordion, Modal)

### Specialized Components

- FileUploader
- Flyer
- LazyLoader
- Timeline
- Carousel

## Installation

To use vergins in your Svelte project, install it as a dependency:

```bash
npm install vergins
```

## Usage

Here's a basic example of how to import and use a component from the library:

```svelte
<script>
  import 'vergins/css/improved-theme-2';
  import { Button } from 'vergins';
</script>

<Button onClick={() => alert('Button clicked!')}>
  Click me
</Button>
```

## Theming

vergins comes with two pre-built themes:

- `default-theme`
- `improved-theme`
- `improved-theme-2`

To use a theme, import it in your main `+layout.svelte` or `+page.svelte` file:

```svelte
<script>
  import 'vergins/css/improved-theme-2';
</script>
```

You can also customize the theme by overriding the CSS variables defined in the theme files.

## Development

To contribute to vergins, clone the repository and install the dependencies:

```bash
git clone https://github.com/AmreetKumarkhuntia/project-vernix.git
cd vergins
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Building

To create a production version of the library:

```bash
npm run build
```

## License

vergins is licensed under the [MIT License](LICENSE).
