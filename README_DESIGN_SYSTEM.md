# Design System Documentation

Welcome to the Design System documentation. This repository contains the design system source of truth and guidelines for maintaining consistency across all projects.

---

## 📚 Documentation Structure

### 1. **[DESIGN_SYSTEM_AUDIT.md](./DESIGN_SYSTEM_AUDIT.md)**
   - Current state assessment
   - Identified inconsistencies
   - Recommendations and priorities
   - Consistency score

### 2. **[DESIGN_TOKENS.md](./DESIGN_TOKENS.md)**
   - Complete token reference
   - Color system (light/dark themes)
   - Spacing, radius, shadows
   - Usage examples and migration guide

### 3. **[DESIGN_SYSTEM_GUIDELINES.md](./DESIGN_SYSTEM_GUIDELINES.md)**
   - Core principles
   - Component standards
   - Visual consistency rules
   - Code review checklist

### 4. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**
   - Quick lookup for common values
   - Component patterns
   - Common mistakes to avoid

---

## 🎯 Quick Start

### For Developers

1. **Start here:** Read `QUICK_REFERENCE.md` for immediate answers
2. **Deep dive:** Check `DESIGN_TOKENS.md` for all available tokens
3. **Best practices:** Follow `DESIGN_SYSTEM_GUIDELINES.md`

### For Designers

1. **Token system:** Review `DESIGN_TOKENS.md` for available colors/spacing
2. **Component library:** Explore `design-system-playground/stories/`
3. **Guidelines:** Read `DESIGN_SYSTEM_GUIDELINES.md` for consistency rules

---

## 🏗️ Project Structure

```
My design system/
├── design-system-playground/     # Source of truth
│   ├── components/ui/            # Component implementations
│   ├── stories/                  # Storybook stories
│   └── app/globals.css          # Design tokens
│
├── redeagro-app/                 # Consumer application
│   └── src/components/ui/       # App components (should match DS)
│
└── Documentation/
    ├── DESIGN_SYSTEM_AUDIT.md
    ├── DESIGN_TOKENS.md
    ├── DESIGN_SYSTEM_GUIDELINES.md
    └── QUICK_REFERENCE.md
```

---

## 🎨 Design System Principles

### 1. **Single Source of Truth**
   - Design System Playground is authoritative
   - Components should match design system implementations
   - Changes propagate to all consumers

### 2. **Token-First Approach**
   - Always use design tokens
   - Never hardcode values
   - Enables theme switching

### 3. **Composition Over Customization**
   - Use existing components
   - Compose to create patterns
   - Customize via props/variants

### 4. **Consistency Through Constraints**
   - Limited color palette
   - Consistent spacing
   - Standardized patterns

---

## 📊 Current Status

**Overall Consistency Score: 5.1/10** 🟡

### Areas Needing Attention

- 🔴 **Color System** - Hardcoded values found
- 🔴 **Border Radius** - Inconsistent usage
- 🟡 **Component Implementation** - Some deviations
- 🟡 **Design Tokens** - Not fully integrated
- 🟡 **Shadows** - Inconsistent application

### Priority Actions

1. ✅ Replace hardcoded colors with tokens
2. ✅ Standardize component implementations
3. ✅ Integrate brand colors into token system
4. ✅ Document and enforce usage patterns

---

## 🚀 Getting Started

### Using Components

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Using Design Tokens

```tsx
// ✅ Correct - Use tokens
<div className="bg-primary text-primary-foreground rounded-md">

// ❌ Incorrect - Hardcoded values
<div className="bg-[#2D5016] text-white rounded-[8px]">
```

---

## 🔍 Consistency Checks

Before committing code, verify:

- [ ] No hardcoded colors (hex, rgb, hsl)
- [ ] Using design tokens
- [ ] Consistent spacing (Tailwind scale)
- [ ] Standard border radius
- [ ] Component matches design system
- [ ] Responsive and accessible

---

## 📞 Support

### Questions?

- **Which token to use?** → See `DESIGN_TOKENS.md`
- **Component implementation?** → Check `design-system-playground/components/ui/`
- **Best practices?** → Read `DESIGN_SYSTEM_GUIDELINES.md`
- **Quick lookup?** → Use `QUICK_REFERENCE.md`

### Reporting Issues

If you find inconsistencies:
1. Document the issue
2. Reference the design system source
3. Propose a fix using tokens/components

---

## 🔄 Maintenance

### Regular Reviews

- **Weekly:** Check for new hardcoded values
- **Monthly:** Review component consistency
- **Quarterly:** Full design system audit

### Update Process

1. Update design system playground
2. Update documentation
3. Migrate consuming applications
4. Verify consistency

---

## 📝 Contributing

When contributing to the design system:

1. **Follow guidelines** - Use `DESIGN_SYSTEM_GUIDELINES.md`
2. **Use tokens** - Never hardcode values
3. **Match patterns** - Follow existing component patterns
4. **Document changes** - Update relevant docs
5. **Test consistency** - Verify across projects

---

**Last Updated:** 2024  
**Maintained By:** Design System Team

---

## 📚 Additional Resources

- [Design System Playground](./design-system-playground/)
- [Component Stories](./design-system-playground/stories/)
- [Token Reference](./DESIGN_TOKENS.md)
- [Quick Reference](./QUICK_REFERENCE.md)

