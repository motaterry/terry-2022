# Design System Guidelines

**Source of Truth:** `redeagro-app`  
**Framework:** Tailwind CSS v4.1.16 + shadcn/ui + Radix UI  
**Purpose:** Maintain consistency across design, aesthetics, and visuals

---

## 🎯 Core Principles

### 1. **Single Source of Truth**
- Redeagro App (`redeagro-app/src`) is the authoritative source
- All components should match established patterns
- Design tokens defined in `src/index.css`
- Components follow shadcn/ui architecture

### 2. **Token-First Approach**
- Always use design tokens, never hardcoded values
- Brand colors are defined as CSS variables
- Tokens enable consistency and maintainability
- Use Tailwind classes that map to tokens

### 3. **Agricultural Theme Aesthetic**
- Sharp corners (zero border radius) - intentional design decision
- Clean, modern look
- Brand colors: forest green, soil brown, soft olive, clay/beige
- Smooth transitions (150ms) on all interactive elements

### 4. **Component Architecture**
- Built with shadcn/ui patterns
- Uses Class Variance Authority (cva) for variants
- Radix UI primitives for accessibility
- Composition over customization

### 5. **Context-Specific Components**
- Some components have **locked styles** for specific contexts
- These styles should NOT be reused elsewhere
- Always check documentation before modifying locked components
- See individual component lock documents for details

---

## 🎨 Visual Consistency Rules

### Colors

**✅ DO:**
- Use semantic tokens: `bg-primary`, `text-primary`, `border-accent`
- Reference brand colors via tokens: `bg-primary`, `bg-secondary`, `bg-accent`
- Use Tailwind classes mapped to tokens

**❌ DON'T:**
- Use hardcoded hex values: `#2D5016`, `#9DB89A`, `#668408`
- Use arbitrary Tailwind colors: `bg-[#custom-color]`
- Bypass token system with inline styles (unless absolutely necessary)

**Brand Color Tokens:**
- `primary` → `#2D5016` (Forest green)
- `secondary` → `#6B5A4A` (Soil brown)
- `accent` → `#9DB89A` (Soft olive)
- `background` → `#F4EFE6` (Clay/beige)

### Border Radius

**✅ DO:**
- Use `rounded-none` or no radius class
- Sharp corners are intentional for the aesthetic
- All radius tokens are set to 0

**❌ DON'T:**
- Add border radius to components
- Use `rounded-md`, `rounded-lg` etc. (they're set to 0 anyway, but be explicit)
- Create custom radius values

**Design Decision:** Zero border radius for clean, sharp aesthetic aligned with agricultural theme.

### Spacing

**✅ DO:**
- Use Tailwind spacing scale (4px base unit)
- Common values: `p-4`, `p-6`, `gap-4`, `gap-6`, `space-y-6`
- Card padding: `p-6` (24px)

**❌ DON'T:**
- Use arbitrary spacing: `p-[13px]`
- Mix spacing systems
- Use inline styles for spacing

### Typography

**✅ DO:**
- Use Inter font family (weights 300-700)
- Use Tailwind text size classes: `text-sm`, `text-base`, `text-lg`, `text-2xl`
- Card titles: `text-2xl font-semibold leading-none tracking-tight`
- Body text: Default `line-height: 1.6`

**❌ DON'T:**
- Use arbitrary font sizes
- Mix font families
- Override line-height unnecessarily

### Shadows

**✅ DO:**
- Use standard shadow classes: `shadow-md` (default), `shadow-lg` (hover)
- Cards: `shadow-md` with `hover:shadow-lg`
- Use `transition-shadow` for smooth hover effects

**❌ DON'T:**
- Create custom shadow values
- Overuse shadows (keep it subtle)
- Use shadows for focus (use ring instead)

### Transitions

**✅ DO:**
- Rely on global 150ms transitions (already applied)
- Add `transition-shadow` for cards
- Add `transition-colors` for buttons if needed

**❌ DON'T:**
- Override transition timing (150ms is standard)
- Create custom transition durations
- Disable transitions unnecessarily

---

## 🎨 Card Background Contrast Rules

### Contrast Requirements for Small Text

**WCAG AA Standards:**
- **Normal text** (<18px normal, <14px bold): **4.5:1 minimum** contrast ratio
- **Large text** (≥18px normal or ≥14px bold): **3:1 minimum** contrast ratio
- **Small text** (`text-xs`, `text-[10px]`): **4.5:1 minimum** contrast ratio

### Card Background Tokens

When using colored backgrounds in cards (success, danger, warning, info states), always use contrast-safe tokens:

**✅ DO:**
```tsx
// Success state with small text
<div className="bg-card-success-bg">
  <span className="text-card-success-text">Large text</span>
  <span className="text-xs text-card-success-text-small">Small text</span>
</div>

// Danger state with small text
<div className="bg-card-danger-bg">
  <span className="text-card-danger-text">Large text</span>
  <span className="text-xs text-card-danger-text-small">Small text</span>
</div>
```

**❌ DON'T:**
```tsx
// Hardcoded colors - may not meet contrast requirements
<div className="bg-[#dcfce7]">
  <span className="text-[#15803d]">Text</span>
</div>

// Using muted-foreground on colored backgrounds
<div className="bg-card-success-bg">
  <span className="text-xs text-muted-foreground/70">May not have enough contrast</span>
</div>
```

### Approved Card Background + Text Combinations

| Background | Text (normal) | Text (small) | Contrast Ratio |
|-----------|--------------|--------------|----------------|
| `bg-card-success-bg` | `text-card-success-text` | `text-card-success-text-small` | 4.5:1 / 5.2:1 |
| `bg-card-danger-bg` | `text-card-danger-text` | `text-card-danger-text-small` | 4.5:1 / 5.1:1 |
| `bg-card-warning-bg` | `text-card-warning-text` | `text-card-warning-text` | 4.5:1 |
| `bg-card-info-bg` | `text-card-info-text` | `text-card-info-text` | 4.5:1 |
| `bg-card` (white) | `text-foreground` | `text-muted-foreground` | 7.1:1 / 4.8:1 |

### Usage Guidelines

1. **Always use tokens** - Never hardcode colors for card backgrounds
2. **Use `-text-small` variants** - For `text-xs` and `text-[10px]`, use `-text-small` tokens
3. **Test contrast** - When creating new combinations, verify 4.5:1 ratio
4. **Maintain hierarchy** - Use darker text colors for better readability on colored backgrounds

### Examples

```tsx
// ✅ Correct - PriceCard change indicator
<div className="bg-card-success-bg">
  <span className="text-xl font-bold text-card-success-text">+2.3%</span>
  <span className="text-[10px] text-card-success-text-small">7 dias</span>
</div>

// ✅ Correct - NDVICard trend indicator
<div className="bg-card-danger-bg">
  <span className="text-sm font-bold text-card-danger-text">Diminuindo</span>
</div>

// ❌ Incorrect - Hardcoded colors
<div className="bg-[#dcfce7]">
  <span className="text-[#15803d]">Text</span>
</div>

// ❌ Incorrect - Insufficient contrast for small text
<div className="bg-card-success-bg">
  <span className="text-xs text-muted-foreground/70">Too light</span>
</div>
```

---

## 🧩 Component Standards

### Required Patterns

All components must:

1. **Use Design Tokens**
   ```tsx
   // ✅ Correct
   className="bg-primary text-primary-foreground border-accent"
   
   // ❌ Incorrect
   className="bg-[#2D5016] text-white border-[#9DB89A]"
   ```

2. **Support Variants via CVA**
   ```tsx
   import { cva, type VariantProps } from "class-variance-authority"
   
   const componentVariants = cva(
     "base-classes",
     {
       variants: {
         variant: { default: "...", outline: "..." },
         size: { sm: "...", md: "...", lg: "..." }
       }
     }
   )
   ```

3. **Be Accessible**
   - Proper ARIA labels
   - Keyboard navigation support
   - Focus states visible (`focus-visible:ring-2`)
   - Color contrast meets WCAG AA

4. **Be Responsive**
   - Mobile-first approach
   - Breakpoint-aware (`sm:`, `md:`, `lg:`)
   - Touch-friendly sizes (min 44px touch targets)

5. **Follow shadcn/ui Patterns**
   - Use Radix UI primitives
   - Follow component structure (forwardRef, displayName)
   - Use `cn()` utility for className merging

---

## 🔍 Code Review Checklist

Before approving any component or styling change:

- [ ] **Colors:** No hardcoded hex/rgb/hsl values
- [ ] **Spacing:** Uses Tailwind spacing scale
- [ ] **Typography:** Uses Inter, standard sizes
- [ ] **Radius:** Zero radius (sharp corners) - intentional
- [ ] **Shadows:** Uses standard shadow classes
- [ ] **Components:** Matches shadcn/ui patterns
- [ ] **Variants:** Uses cva for variant management
- [ ] **Accessibility:** Proper ARIA and keyboard support
- [ ] **Responsive:** Works on mobile and desktop
- [ ] **Consistency:** Matches existing patterns

---

## 🚨 Common Violations

### 1. Hardcoded Colors

```tsx
// ❌ BAD
<div className="bg-[#2D5016] text-white">
<div className="border-[#9DB89A]">
<div className="bg-[#668408]/70">

// ✅ GOOD
<div className="bg-primary text-primary-foreground">
<div className="border-accent">
<div className="bg-primary/70">
```

### 2. Incorrect CSS Variable Syntax

```tsx
// ❌ BAD - Invalid Tailwind syntax
<div className="bg-[--color-brand-clay]">

// ✅ GOOD - Use Tailwind class
<div className="bg-background">

// ✅ OR use inline style if absolutely necessary
<div style={{ backgroundColor: 'var(--color-brand-clay)' }}>
```

### 3. Adding Border Radius

```tsx
// ❌ BAD - Sharp corners are intentional
<div className="rounded-md">

// ✅ GOOD - Explicitly no radius
<div className="rounded-none">
// OR just omit radius class
```

### 4. Arbitrary Values

```tsx
// ❌ BAD
<div className="p-[13px]">

// ✅ GOOD
<div className="p-3">
```

### 5. Missing Design System Components

```tsx
// ❌ BAD - Creating custom dialog
<div className="fixed inset-0 bg-black/50">...</div>

// ✅ GOOD - Use shadcn/ui Dialog component
<Dialog>...</Dialog>
```

---

## 📐 Component Patterns

### Button

```tsx
import { Button } from '@/components/ui/button'

// Standard usage
<Button variant="default" size="default">
  Click me
</Button>

// Variants: default, destructive, outline, secondary, ghost, link
// Sizes: sm, default, lg, icon
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card className="shadow-md hover:shadow-lg">
  <CardHeader className="p-6">
    <CardTitle className="text-2xl font-semibold leading-none">
      Title
    </CardTitle>
  </CardHeader>
  <CardContent className="p-6 pt-0">
    Content
  </CardContent>
</Card>
```

### Input

```tsx
import { Input } from '@/components/ui/input'

<Input 
  type="text"
  placeholder="Enter text"
  className="h-10" // or h-12 for large
/>
```

---

## 🔄 Migration Process

When updating components to match design system:

1. **Audit Current State**
   - Identify all hardcoded values
   - Find components that deviate
   - Document current behavior

2. **Plan Changes**
   - Map hardcoded values to tokens
   - Identify breaking changes
   - Create migration path

3. **Implement Incrementally**
   - Fix one component at a time
   - Test after each change
   - Update documentation

4. **Verify Consistency**
   - Visual regression testing
   - Cross-browser testing
   - Accessibility audit

---

## 🔒 Context-Specific Components

Some components have **locked styles** that are designed for specific contexts and should NOT be reused or modified without careful consideration.

### Duo Search Component (SearchBar)
- **Location:** Hero section only
- **Reason:** Designed specifically for bright green background overlay (`var(--primary-70)`)
- **Style:** White borders/text on transparent background for high contrast
- **Documentation:** See `redeagro-app/DUO_SEARCH_STYLE_LOCK.md`
- **Rule:** Do not reuse or modify without approval

**Key Characteristics:**
- White borders with opacity (`border-white/50`, `hover:border-white/70`)
- White text (`text-white/90`)
- Transparent background
- Context-specific CSS with `!important` rules (intentional)

**Before Modifying:**
1. Read the lock documentation
2. Understand why it's context-specific
3. Consider if standard input styles would work instead
4. Get team approval if changes are necessary

When creating new components, check if they should follow standard patterns or if they need context-specific styling. Always document locked components.

---

## 📚 Reference

### Source Files

- **Design Tokens:** `redeagro-app/src/index.css`
- **Tailwind Config:** `redeagro-app/tailwind.config.js`
- **Components:** `redeagro-app/src/components/ui/`
- **Component Config:** `redeagro-app/components.json`

### Documentation

- **Design Tokens:** See `DESIGN_TOKENS.md`
- **Quick Reference:** See `QUICK_REFERENCE.md`
- **Component Library:** shadcn/ui documentation
- **Locked Components:** See component-specific lock documents (e.g., `DUO_SEARCH_STYLE_LOCK.md`)

---

## 🎓 Training Resources

### For Developers

1. **Design Token Usage**
   - Always check `DESIGN_TOKENS.md` before using colors/spacing
   - Use Tailwind classes that map to tokens
   - Never use arbitrary values

2. **Component Patterns**
   - Study existing components in `src/components/ui/`
   - Follow shadcn/ui patterns
   - Use cva for variants

3. **Code Review**
   - Check for hardcoded values
   - Verify token usage
   - Ensure consistency

### For Designers

1. **Token System**
   - Use defined brand color palette
   - Stick to spacing scale
   - Reference token names in designs
   - Remember: sharp corners (no radius)

2. **Component Usage**
   - Use existing shadcn/ui components when possible
   - Document custom patterns
   - Maintain visual consistency

---

## 📞 Getting Help

If you're unsure about:

- **Which token to use:** Check `DESIGN_TOKENS.md`
- **Component implementation:** Check `src/components/ui/`
- **Pattern consistency:** Review similar components
- **Breaking changes:** Discuss with team

---

## 🎯 Styleguide Summary

**Core Framework:**
- Tailwind CSS v4.1.16
- shadcn/ui patterns
- Radix UI primitives

**Brand Colors:**
- Primary: `#668408` (Olive green)
- Secondary: `#6B5A4A` (Soil brown)
- Accent: `#9DB89A` (Soft olive)
- Background: `#F4EFE6` (Clay/beige)

**Design Decisions:**
- Border radius: 0 (sharp corners) - intentional
- Typography: Inter (300-700)
- Transitions: 150ms cubic-bezier
- Shadows: Subtle elevation (shadow-md → shadow-lg)

**Component System:**
- shadcn/ui architecture
- Class Variance Authority (cva)
- Radix UI primitives
- Components in `src/components/ui/`

---

**Remember:** Consistency is key. Follow the established patterns and use design tokens.

**Last Updated:** 2024  
**Source of Truth:** Redeagro App
