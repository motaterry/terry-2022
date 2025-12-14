# Context7 Usage Examples for This Project

Quick examples of how to use Context7 with your design system project.

---

## 🎯 Component Development

### Creating a New Component

**Prompt:**
```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, class-variance-authority@0.7.1, tailwindcss@4

Create a Dialog component that:
- Uses React 19 patterns (no forwardRef needed for refs)
- Follows shadcn/ui architecture
- Uses CVA for variant management
- Matches our design tokens (zero border radius, agricultural theme colors)
- Is fully accessible with Radix UI primitives
- Includes proper TypeScript types
```

### Updating Existing Component

**Prompt:**
```
use context7 for react@19.1.1, tailwindcss@4.1.16

Update the Button component to:
- Use React 19's new ref handling
- Migrate to Tailwind CSS 4 @theme syntax
- Ensure all variants use design tokens
```

---

## 🎨 Styling & Design Tokens

### Tailwind CSS 4 Migration

**Prompt:**
```
use context7 for tailwindcss@4.1.16

Convert this component from Tailwind CSS 3 config to Tailwind CSS 4 @theme syntax:
[component code]

Use our design tokens:
- primary: #2D5016
- secondary: #6B5A4A
- accent: #9DB89A
- background: #F4EFE6
- All border radius: 0
```

### Design Token Integration

**Prompt:**
```
use context7 for tailwindcss@4

Show me how to define CSS custom properties in Tailwind CSS 4 @theme that map to:
- bg-primary → #2D5016
- text-primary-foreground → white
- border-radius → 0 for all elements
```

---

## 🔧 Library-Specific Questions

### Radix UI Components

**Prompt:**
```
use context7 for @radix-ui/react-select@2.2.6

How do I create a Select component with Radix UI that:
- Matches shadcn/ui Select patterns
- Uses our design tokens
- Has proper TypeScript types
- Is accessible
```

### React Router

**Prompt:**
```
use context7 for react-router-dom@7.9.5

Set up routing for:
- / (Home page)
- /compare (Compare page)
- /results (Results page)

Use React Router v7 patterns and ensure proper TypeScript types.
```

---

## 🚀 Framework-Specific

### Next.js App Router

**Prompt:**
```
use context7 for next@16.0.1, react@19.2.0

Create a page component using Next.js 16 App Router that:
- Uses React Server Components where appropriate
- Includes proper metadata
- Uses our design system components
- Follows Next.js 16 best practices
```

### Vite Configuration

**Prompt:**
```
use context7 for vite@7.1.7, react@19.1.1

Update vite.config.ts to:
- Support React 19
- Configure path aliases (@/ → ./src)
- Optimize for production builds
- Use Vite 7 best practices
```

---

## 📦 TypeScript & Type Safety

### Type Definitions

**Prompt:**
```
use context7 for typescript@5.9.3, react@19.1.1

Add proper TypeScript types for this component:
- Use React 19 component types
- Include proper prop types
- Use TypeScript 5 features where beneficial
- Ensure type safety for all variants
```

---

## 🔍 Debugging & Troubleshooting

### Version Compatibility Issues

**Prompt:**
```
use context7 for react@19.1.1, @radix-ui/react-dialog@1.1.15

I'm getting a TypeScript error about ref types. How do I properly type refs in React 19 with Radix UI components?
```

### Migration Help

**Prompt:**
```
use context7 for tailwindcss@4.1.16

I'm migrating from Tailwind CSS 3 to 4. What are the breaking changes I need to be aware of for:
- Configuration files
- Custom properties
- Plugin system
- @theme directive
```

---

## 💡 Best Practices

### Multi-Library Prompts

When working with components that use multiple libraries:

**Prompt:**
```
use context7 for react@19.2.0, @radix-ui/react-tabs@1.1.13, class-variance-authority@0.7.1, tailwindcss@4, clsx@2.1.1, tailwind-merge@3.3.1

Create a Tabs component that:
- Uses Radix UI Tabs primitives
- Implements CVA for variants
- Uses cn() utility (clsx + tailwind-merge)
- Follows shadcn/ui patterns
- Matches our design system tokens
```

### Version-Specific Features

**Prompt:**
```
use context7 for react@19.2.0

What are the new features in React 19 that I should use in my components? Show examples of:
- New ref handling
- Server Components (if applicable)
- Improved TypeScript types
```

---

## 📋 Project-Specific Templates

### For redeagro-app

```
use context7 for react@19.1.1, vite@7.1.7, tailwindcss@4.1.16, react-router-dom@7.9.5

[Your task]
```

### For design-system-playground

```
use context7 for react@19.2.0, next@16.0.1, tailwindcss@4

[Your task]
```

### For Shared Components

```
use context7 for react@19.2.0, @radix-ui/[component]@[version], class-variance-authority@0.7.1, tailwindcss@4

[Your task]
```

---

## 🎯 Quick Copy-Paste Templates

### New Component
```
use context7 for react@19.2.0, @radix-ui/[component]@[version], class-variance-authority@0.7.1, tailwindcss@4

Create a [ComponentName] component following shadcn/ui patterns with our design tokens.
```

### Update Component
```
use context7 for react@19.1.1, tailwindcss@4.1.16

Update [ComponentName] to use React 19 patterns and Tailwind CSS 4.
```

### Fix Bug
```
use context7 for [library]@[version]

Fix this issue: [describe issue]
[code snippet]
```

---

**Remember:** Always specify exact versions matching your `package.json`!

