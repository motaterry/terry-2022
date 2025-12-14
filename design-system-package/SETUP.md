# Design System Package - Setup Guide

## Quick Start

### Option 1: Using the Setup Script

```bash
# In your new project directory
curl -fsSL https://raw.githubusercontent.com/your-username/design-system/main/scripts/setup-new-project.sh | bash
```

### Option 2: Manual Setup

1. **Install the package:**
   ```bash
   npm install @your-username/design-system
   ```

2. **Install peer dependencies:**
   ```bash
   npm install react react-dom tailwindcss @tailwindcss/postcss
   ```

3. **Import styles in your main CSS file:**
   ```css
   /* app/globals.css or src/index.css */
   @import "@your-username/design-system/styles";
   @import "tailwindcss";
   ```

4. **Use components:**
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

## Development

### Building the Package

```bash
cd design-system-package
npm install
npm run build
```

### Testing Locally

1. **Link the package:**
   ```bash
   cd design-system-package
   npm link
   ```

2. **Use in your project:**
   ```bash
   cd ../your-project
   npm link @your-username/design-system
   ```

3. **Unlink when done:**
   ```bash
   npm unlink @your-username/design-system
   ```

## Publishing

1. **Update version in package.json**
2. **Build the package:**
   ```bash
   npm run build
   ```
3. **Publish to npm:**
   ```bash
   npm publish --access public
   ```

## Project Structure

```
design-system-package/
├── src/
│   ├── index.ts              # Main entry point
│   ├── components/           # All components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── feedback/
│   │   ├── forms/
│   │   ├── sharing/
│   │   ├── data-display/
│   │   ├── comparison/
│   │   └── layout/
│   ├── lib/                  # Utilities
│   └── styles/               # CSS files
├── dist/                     # Built output
├── package.json
├── tsconfig.json
└── tsup.config.ts
```




