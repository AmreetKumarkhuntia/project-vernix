# System Patterns: Svelte UI Library

## Architecture Overview

- Component-based architecture
- Isolated component styles
- Props-driven configuration
- Theme provider pattern

## Key Component Relationships

```mermaid
flowchart TD
    App --> Layout[Layout Components]
    App --> Form[Form Components]
    App --> Display[Display Components]

    Layout --> Navbar
    Layout --> Card
    Layout --> Modal

    Form --> Button
    Form --> InputField
    Form --> FileUploader

    Display --> Avatar
    Display --> Timeline
    Display --> ProgressBar
```

## Design Patterns

1. **Props Pattern**

   - Each component has props.ts
   - Strictly typed interfaces
   - Default values defined

2. **Styling Approach**

   - CSS variables for theming
   - Scoped styles per component
   - Two theme options (default/improved)

3. **Composition Pattern**

   - Complex components built from simples ones
   - Example: Navbar uses NavMenu
   - Example: Card uses Button

4. **Semantic Navigation Pattern**
   - Navbar and NavMenu use semantic `nav` elements
   - Navigation items use `button` elements
   - ARIA labels for screen reader support
   - Keyboard navigation support

## Data Flow

- Parent to child via props
- No global state management
- Event dispatch for interactions

Last Updated: 4/1/2025
