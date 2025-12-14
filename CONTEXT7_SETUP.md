# Context7 Integration Guide

**Context7** provides up-to-date, version-specific documentation directly to Cursor AI, ensuring accurate code generation for your libraries.

## 🎯 Why Context7 for This Project?

Your design system project uses:
- **React 19.1.1** / **React 19.2.0** (different versions in different apps)
- **Next.js 16.0.1**
- **Tailwind CSS 4.1.16** / **Tailwind CSS 4**
- **Radix UI** (multiple packages)
- **Vite 7.1.7**
- **TypeScript 5.9.3** / **TypeScript 5**

Context7 ensures Cursor AI has access to the **exact versions** you're using, preventing:
- ❌ Outdated API suggestions
- ❌ Version mismatches
- ❌ Hallucinated APIs
- ❌ Incorrect TypeScript types

---

## 🚀 Setup Steps

### 1. Create Context7 Account

1. Visit [context7.com](https://context7.com/)
2. Sign up for a **Free Plan** (supports public repos)
3. Upgrade to **Pro ($7/month)** if you need private repos or team features

### 2. Add Your Libraries to Context7

Go to the Context7 dashboard and add these libraries with their **exact versions**:

#### Core Framework Libraries
- `react@19.1.1` (for redeagro-app)
- `react@19.2.0` (for design-system-playground)
- `react-dom@19.1.1` / `react-dom@19.2.0`
- `next@16.0.1`
- `vite@7.1.7`

#### Styling & UI
- `tailwindcss@4.1.16` (for redeagro-app)
- `tailwindcss@4` (for design-system-playground)
- `@radix-ui/react-dialog@1.1.15`
- `@radix-ui/react-dropdown-menu@2.1.16`
- `@radix-ui/react-label@2.1.7`
- `@radix-ui/react-select@2.2.6`
- `@radix-ui/react-slot@1.2.3`
- `@radix-ui/react-switch@1.2.6`
- `@radix-ui/react-tabs@1.1.13`
- `@radix-ui/react-tooltip@1.2.8`

#### Utilities
- `class-variance-authority@0.7.1`
- `clsx@2.1.1`
- `tailwind-merge@3.3.1`
- `react-router-dom@7.9.5`
- `lucide-react@0.552.0` / `lucide-react@0.548.0`

#### TypeScript
- `typescript@5.9.3` / `typescript@5`

### 3. Use Context7 in Cursor

**Simplest Method (Recommended):**

Just add `use context7` to your Cursor prompts! No complex setup needed.

**Basic Usage:**
```
use context7 for react@19.1.1, tailwindcss@4.1.16

[Your question or task]
```

**Advanced: MCP Server Setup (Optional)**

If Context7 offers an MCP server, you can configure it for automatic integration:

1. **Get your Context7 API key** from the dashboard
2. **Configure Cursor MCP settings** (location varies by Cursor version):
   - Check Cursor settings → MCP Servers
   - Or create/edit MCP config file (usually in `~/.cursor/` or Cursor's config directory)
3. **Add Context7 MCP server** configuration if available

**Note:** The `use context7` prompt method works immediately without any configuration!

---

## 💡 Usage Examples

### Example 1: Component Development

**Prompt:**
```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15

Create a Dialog component following shadcn/ui patterns for the design system. 
Use React 19 patterns and ensure it matches our design tokens.
```

**Why it helps:**
- Ensures correct React 19 API usage
- Gets latest Radix UI Dialog API
- Matches your exact versions

### Example 2: Tailwind CSS 4 Migration

**Prompt:**
```
use context7 for tailwindcss@4.1.16

Update the component to use Tailwind CSS 4 @theme syntax instead of tailwind.config.js
```

**Why it helps:**
- Tailwind CSS 4 has breaking changes
- Context7 provides version-specific migration guides
- Prevents using deprecated v3 patterns

### Example 3: TypeScript Type Safety

**Prompt:**
```
use context7 for typescript@5.9.3, react@19.1.1

Add proper TypeScript types for this component using React 19 types and TypeScript 5 features.
```

**Why it helps:**
- React 19 has new type definitions
- TypeScript 5 has new features
- Ensures type compatibility

---

## 🎯 Best Practices

### 1. Always Specify Versions

**✅ Good:**
```
use context7 for react@19.1.1, tailwindcss@4.1.16
```

**❌ Bad:**
```
use context7 for react, tailwindcss
```

### 2. Include Multiple Libraries

When working with components that use multiple libraries:

```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, tailwindcss@4, class-variance-authority@0.7.1
```

### 3. Version-Specific Prompts

For version-specific features or migrations:

```
use context7 for next@16.0.1

What are the new features in Next.js 16 that I should use in my app router setup?
```

### 4. Library-Specific Questions

```
use context7 for @radix-ui/react-select@2.2.6

How do I create a custom Select component with Radix UI Select that matches shadcn/ui patterns?
```

---

## 📋 Project-Specific Context7 Libraries

### For `redeagro-app`:
```
react@19.1.1
react-dom@19.1.1
vite@7.1.7
tailwindcss@4.1.16
react-router-dom@7.9.5
typescript@5.9.3
lucide-react@0.552.0
```

### For `design-system-playground`:
```
react@19.2.0
react-dom@19.2.0
next@16.0.1
tailwindcss@4
typescript@5
lucide-react@0.548.0
```

### Shared Libraries (both projects):
```
@radix-ui/react-dialog@1.1.15
@radix-ui/react-dropdown-menu@2.1.16
@radix-ui/react-label@2.1.7
@radix-ui/react-select@2.2.6
@radix-ui/react-slot@1.2.3
@radix-ui/react-switch@1.2.6
@radix-ui/react-tabs@1.1.13
@radix-ui/react-tooltip@1.2.8
class-variance-authority@0.7.1
clsx@2.1.1
tailwind-merge@3.3.1
```

---

## 🔧 Troubleshooting

### Context7 Not Working?

1. **Check API key**: Ensure it's correctly set in MCP config
2. **Verify library versions**: Make sure versions match your `package.json`
3. **Check Context7 dashboard**: Ensure libraries are added and indexed
4. **Try web interface**: Use `use context7` directly in prompts as fallback

### Library Not Found?

1. **Add to Context7**: Go to dashboard and add the library
2. **Wait for indexing**: Libraries need to be indexed (usually quick)
3. **Check version**: Ensure version string matches exactly

### Version Conflicts?

If you have different versions in different projects:
- Specify the version for the project you're working on
- Consider standardizing versions across projects
- Use separate Context7 configurations per project

---

## 📚 Additional Resources

- **Context7 Website**: [context7.com](https://context7.com/)
- **Context7 Plans**: [context7.com/plans](https://context7.com/plans)
- **Context7 Contact**: [context7.com/contact](https://context7.com/contact)
- **Context7 Discord**: Join for community support
- **GitHub**: [github.com/upstash/context7-legacy](https://github.com/upstash/context7-legacy)

---

## 🎯 Quick Reference

### Common Prompt Template

```
use context7 for [library1]@[version1], [library2]@[version2]

[Your question or task]
```

### Example for This Project

```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, tailwindcss@4, class-variance-authority@0.7.1

Create a Dialog component that:
1. Uses React 19 patterns
2. Follows shadcn/ui architecture
3. Uses CVA for variants
4. Matches our design tokens (zero border radius, agricultural theme)
5. Is fully accessible with Radix UI
```

---

**Last Updated:** 2025-01-27  
**Project:** Design System + RedeAgro App

