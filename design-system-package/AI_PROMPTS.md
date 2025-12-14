# AI Prompt Template for Design System Package

Copy and customize these prompts when working with the design system package.

## Template 0: Start New Project from Zero

```
Set up a new [Next.js/React/Vite/etc.] project using the @your-username/design-system package:

1. Initialize the project:
   - Create a new [Next.js/React/Vite] project
   - Install @your-username/design-system
   - Install peer dependencies: react, react-dom, tailwindcss, @tailwindcss/postcss

2. Configure Tailwind CSS:
   - Set up Tailwind configuration
   - Import design system styles in the main CSS file:
     @import "@your-username/design-system/styles";
     @import "tailwindcss";

3. Create the initial page/component:
   - Use components from '@your-username/design-system' (Button, Card, Input, etc.)
   - Use design tokens (bg-primary, text-primary-foreground, not hardcoded colors)
   - Follow the design system patterns
   - Use Tailwind utilities for layout and spacing
   - Include proper TypeScript types

Requirements:
- Set up the project structure correctly
- Import styles from '@your-username/design-system/styles'
- Use components from '@your-username/design-system'
- Use design tokens from the package
- Create a working example page/component
- Include proper TypeScript configuration
```

## Template 1: Create New Component Using Design System

```
Use the @your-username/design-system package and Context7:

use context7 for react@19.2.0, @radix-ui/react-[component]@[version], class-variance-authority@0.7.1, tailwindcss@4

Create a [component name] component that:
- Uses components from '@your-username/design-system' (Button, Card, Input, etc.)
- Uses design tokens (bg-primary, text-primary-foreground, not hardcoded colors)
- Follows the design system patterns
- Uses Tailwind utilities for layout and spacing
- Is fully typed with TypeScript

Requirements:
- Import from '@your-username/design-system'
- Use design tokens from the package
- Maintain consistency with existing components
- Include proper TypeScript types
```

## Template 2: Build a Page/Feature

```
Use the @your-username/design-system package:

Build a [feature name] page/component that uses:
- Components from '@your-username/design-system'
- Design tokens (bg-primary, rounded-md, etc.)
- Proper layout with Card, Button, Input components
- Responsive design with Tailwind utilities

Components to use:
- [List specific components: Button, Card, Input, etc.]

Design requirements:
- Use design tokens (no hardcoded colors)
- Follow spacing patterns (space-y-4, gap-4, etc.)
- Use proper semantic HTML
- Include TypeScript types
```

## Template 3: Customize Existing Component

```
Use the @your-username/design-system package:

Customize the [ComponentName] from '@your-username/design-system' to:
- [Specific customization needs]

Requirements:
- Import the base component from '@your-username/design-system'
- Extend it with additional props/variants
- Use design tokens for styling
- Maintain TypeScript type safety
- Follow existing component patterns
```

## Template 4: Fix Styling Issues

```
Use the @your-username/design-system package:

Fix styling issues in [component/page]:
- Replace hardcoded colors with design tokens
- Use proper Tailwind classes from the design system
- Ensure consistency with design system patterns

Requirements:
- Use tokens: bg-primary, text-primary-foreground, bg-card, etc.
- Use radius tokens: rounded-sm, rounded-md, rounded-lg
- Remove any hardcoded color values (#hex, rgb, hsl)
- Import components from '@your-username/design-system'
```

## Template 5: Add Form with Validation

```
Use the @your-username/design-system package and Context7:

use context7 for react@19.2.0, @radix-ui/react-label@2.1.7, tailwindcss@4

Create a form component using:
- Input, Label, Button from '@your-username/design-system'
- Card components for layout
- Design tokens for styling
- Form validation patterns

Requirements:
- Use components from '@your-username/design-system'
- Use design tokens (bg-card, border-border, etc.)
- Include proper accessibility (labels, aria attributes)
- TypeScript types for form data
- Error handling and validation states
```

## Quick Reference Prompts

### New Project Setup
```
Set up a new [Next.js/React/Vite] project with @your-username/design-system: install package, configure Tailwind, import styles, and create an example page using design system components and tokens.
```

### Simple Component Creation
```
Create a [component] using @your-username/design-system components and design tokens.
```

### Page Layout
```
Build a [page name] page using Card, Button, and Input from @your-username/design-system with proper design tokens.
```

### Styling Fix
```
Replace hardcoded colors with design tokens from @your-username/design-system in [file/component].
```

### Form Creation
```
Create a form using Input, Label, and Button from @your-username/design-system with design tokens.
```

## Context7 Integration

For better code generation, include Context7 with specific versions:

```
use context7 for react@19.2.0, @radix-ui/react-[component]@[version], tailwindcss@4

[Your prompt here]
```

## Design Token Reference

When prompting, reference these tokens:

**Colors:**
- `bg-primary`, `text-primary-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-success`, `bg-warning`, `bg-danger`, `bg-info`
- `bg-card`, `bg-background`, `bg-muted`
- `border-border`

**Radius:**
- `rounded-sm`, `rounded-md`, `rounded-lg`

**Spacing:**
- Use Tailwind spacing: `space-y-4`, `gap-4`, `p-4`, `m-4`

## Best Practices for Prompts

1. **Always specify the package**: `@your-username/design-system`
2. **Mention design tokens**: "Use design tokens, not hardcoded colors"
3. **Reference component names**: "Use Button, Card, Input from the package"
4. **Include TypeScript**: "With proper TypeScript types"
5. **Specify layout**: "Use Tailwind utilities for spacing and layout"




