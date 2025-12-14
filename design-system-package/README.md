# Design System Package

A comprehensive design system built with shadcn/ui, Radix UI, and Tailwind CSS.

## Installation

```bash
npm install @your-username/design-system
# or
yarn add @your-username/design-system
# or
pnpm add @your-username/design-system
```

## Setup

### 1. Install Peer Dependencies

```bash
npm install react react-dom
npm install tailwindcss @tailwindcss/postcss
```

### 2. Import Styles

In your main CSS file (e.g., `app/globals.css` or `index.css`):

```css
@import "@your-username/design-system/styles";
@import "tailwindcss";
```

### 3. Use Components

```tsx
import { Button, Card, Input } from '@your-username/design-system'

export default function Page() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Click me</Button>
    </Card>
  )
}
```

## Components

All components are built with [shadcn/ui](https://ui.shadcn.com/), which uses Radix UI primitives.

### UI Components
- Button
- Input
- Label
- Card
- Select
- Tabs
- Switch
- Dialog
- Dropdown Menu
- Table
- Tooltip
- Sheet
- Toast (Sonner)

### Custom Components
- Skeleton
- Autocomplete Input
- Cost Comparison Card
- Alert Subscription Card
- Share Block
- Price Card
- Weather Card
- NDVI Card
- Compare Gate
- Compare Result
- Page Header
- Hero Section

## Development

```bash
# Build the package
npm run build

# Watch mode
npm run dev
```

## License

MIT




