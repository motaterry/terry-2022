# Design Tokens Reference

**Source of Truth:** `redeagro-app/src/index.css`  
**Version:** 1.0  
**Framework:** Tailwind CSS v4.1.16

---

## 🎨 Brand Colors (Agricultural Theme)

### Primary Brand Colors

```css
/* Brand Identity - Defined in @theme */
--color-brand-primary: #2D5016;   /* Forest green - main brand color */
--color-brand-header: #6B5A4A;     /* Soil brown - header/secondary */
--color-brand-accent: #9DB89A;      /* Soft olive - accents, borders */
--color-brand-clay: #F4EFE6;       /* Clay/beige - background */
```

### Semantic Color Mappings

```css
/* Legacy mappings (for compatibility) */
--color-primary: #668408;      /* Olive green - primary actions */
--color-secondary: #6B5A4A;    /* Soil brown - secondary actions */
--color-accent: #9DB89A;        /* Soft olive - highlights */
--color-background: #F4EFE6;    /* Clay/beige - page background */
```

### shadcn/ui Token Mappings

```css
/* shadcn/ui compatibility tokens */
--primary: var(--color-brand-primary);        /* #2D5016 - Forest green */
--background: var(--color-brand-clay);        /* #F4EFE6 - Clay */
--border: #E5E0D8;                            /* Light border */
--input: #D4CEC1;                            /* Input border */
--card: #FFFFFF;                             /* White card background */
--radius: var(--radius);                     /* 0 (sharp corners) */
```

### Usage in Components

```tsx
// ✅ Correct - Use semantic tokens
<Button className="bg-primary text-primary-foreground">
  Button
</Button>

<Card className="border-accent bg-card">
  Card content
</Card>

// ❌ Incorrect - Hardcoded values
<Button className="bg-[#2D5016]">
  Button
</Button>
```

---

## 📐 Border Radius

**Design Decision:** Sharp corners (zero radius) for clean, modern aesthetic

```css
--radius-sm: 0;
--radius-md: 0;
--radius-lg: 0;
--radius-xl: 0;
--radius: 0;
```

**Usage:**
- All components use `rounded-none` or no border-radius class
- Sharp corners are intentional for the agricultural/clean aesthetic

---

## 🌑 Shadows

```css
--shadow-card: 0 8px 24px rgba(0,0,0,0.06);
```

**Tailwind Shadow Classes:**
- `shadow-sm` - Subtle (rarely used)
- `shadow-md` - Medium (cards default)
- `shadow-lg` - Large (cards on hover)
- `shadow-xl` - Extra large (modals)

**Component Usage:**
- Cards: `shadow-md` (default), `hover:shadow-lg` (interactive)
- Buttons: Typically no shadow (flat design)
- Focus: Use `focus-visible:ring-2` instead of shadow

---

## 📝 Typography

### Font Family

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

**Weights Available:**
- `font-light` (300)
- `font-normal` (400) - Default
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

### Font Sizes (Tailwind Scale)

```css
text-xs: 0.75rem    /* 12px */
text-sm: 0.875rem   /* 14px */
text-base: 1rem     /* 16px - Default body */
text-lg: 1.125rem   /* 18px */
text-xl: 1.25rem    /* 20px */
text-2xl: 1.5rem    /* 24px - Card titles */
text-3xl: 1.875rem  /* 30px */
text-4xl: 2.25rem   /* 36px - Hero headings */
```

### Line Height

```css
line-height: 1.6;  /* Default body text */
leading-tight: 1.25  /* Headings */
leading-none: 1     /* Card titles */
```

**Usage:**
- Body text: `line-height: 1.6` (default)
- Headings: `leading-tight`
- Card titles: `leading-none tracking-tight`

---

## 🎯 Spacing

**Tailwind Default Scale** (4px base unit)

```css
/* Common spacing values */
p-1: 0.25rem   /* 4px */
p-2: 0.5rem    /* 8px */
p-3: 0.75rem   /* 12px */
p-4: 1rem      /* 16px */
p-6: 1.5rem    /* 24px - Card padding */
p-8: 2rem      /* 32px */
```

**Component Standards:**
- Card padding: `p-6` (CardHeader, CardContent)
- Button padding: `px-4 py-2` (default)
- Section spacing: `space-y-6` or `space-y-8`
- Grid gaps: `gap-4` or `gap-6`

---

## ⚡ Transitions

**Global Transition Settings:**

```css
transition-property: color, background-color, border-color, 
                     text-decoration-color, fill, stroke, 
                     opacity, box-shadow, transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
```

**Applied to all interactive elements automatically.**

**Component-Specific Transitions:**
- Cards: `transition-shadow` for hover effects
- Buttons: `transition-colors` for state changes

---

## 🎯 Accessibility

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Component Implementation:**
- Buttons: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`
- Inputs: Inherit focus-visible styles
- Links: Focus ring on keyboard navigation

### Font Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

Applied globally for crisp text rendering.

---

## 🧩 Component-Specific Tokens

### Button

```css
/* Heights */
h-9: 2.25rem    /* Small */
h-10: 2.5rem    /* Default */
h-11: 2.75rem   /* Large */
h-12: 3rem      /* Extra large (custom) */

/* Padding */
px-3: 0.75rem   /* Small */
px-4: 1rem      /* Default */
px-8: 2rem      /* Large */
```

**Variants:**
- `default`: `bg-primary text-primary-foreground`
- `secondary`: `bg-secondary text-secondary-foreground`
- `outline`: `border border-input bg-background`
- `ghost`: `hover:bg-accent`
- `destructive`: `bg-destructive text-destructive-foreground`
- `link`: `text-primary underline`

### Card

```css
/* Default styling */
border: 1px solid var(--color-accent)  /* #9DB89A */
background: var(--card)                 /* #FFFFFF */
padding: 1.5rem                         /* p-6 */
shadow: shadow-md (default), shadow-lg (hover)
```

### Card Background Tokens (Contrast-Safe)

**For colored card backgrounds with small text:**

```css
/* Success state */
--card-success-bg: #dcfce7;           /* green-100 - background */
--card-success-text: #15803d;          /* green-700 - normal text (4.5:1) */
--card-success-text-small: #166534;    /* green-800 - small text (5.2:1) */

/* Danger state */
--card-danger-bg: #fee2e2;            /* red-100 - background */
--card-danger-text: #b91c1c;          /* red-700 - normal text (4.5:1) */
--card-danger-text-small: #991b1b;     /* red-800 - small text (5.1:1) */

/* Warning state */
--card-warning-bg: #fef3c7;            /* amber-100 - background */
--card-warning-text: #d97706;          /* amber-700 - text (4.5:1) */

/* Info state */
--card-info-bg: #dbeafe;               /* blue-100 - background */
--card-info-text: #1e40af;             /* blue-700 - text (4.5:1) */
```

**Tailwind Classes:**
- `bg-card-success-bg` / `bg-card-danger-bg` / `bg-card-warning-bg` / `bg-card-info-bg`
- `text-card-success-text` / `text-card-danger-text` / `text-card-warning-text` / `text-card-info-text`
- `text-card-success-text-small` / `text-card-danger-text-small` (for `text-xs`, `text-[10px]`)

**Usage:**
```tsx
// Success state with small text
<div className="bg-card-success-bg">
  <span className="text-card-success-text">Normal text</span>
  <span className="text-xs text-card-success-text-small">Small text</span>
</div>

// Danger state
<div className="bg-card-danger-bg">
  <span className="text-sm text-card-danger-text">Text</span>
  <span className="text-[10px] text-card-danger-text-small">Small text</span>
</div>
```

**Contrast Ratios:**
- Success: Normal text 4.5:1, Small text 5.2:1 ✅
- Danger: Normal text 4.5:1, Small text 5.1:1 ✅
- Warning: Text 4.5:1 ✅
- Info: Text 4.5:1 ✅

**Important:** Always use `-text-small` tokens for `text-xs` and `text-[10px]` to ensure WCAG AA compliance (4.5:1 minimum).

### Input

```css
/* Default styling */
height: 2.5rem    /* h-10 */
height: 3rem      /* h-12 - large variant */
border: 1px solid var(--input)  /* #D4CEC1 */
background: var(--background)   /* #F4EFE6 */
```

---

## 🚫 What NOT to Use

### ❌ Hardcoded Colors

```tsx
// ❌ BAD
className="bg-[#2D5016]"
className="border-[#9DB89A]"
className="text-[#668408]"

// ✅ GOOD
className="bg-primary"
className="border-accent"
className="text-primary"
```

### ❌ Tailwind Color Classes (When Semantic Tokens Exist)

```tsx
// ❌ BAD
className="text-green-600"
className="text-red-600"
className="bg-blue-500"

// ✅ GOOD - Create semantic tokens if needed
// For now, use brand colors via tokens
className="text-primary"
className="text-secondary"
```

### ❌ Arbitrary Values

```tsx
// ❌ BAD
className="p-[13px] rounded-[7px]"

// ✅ GOOD
className="p-3 rounded-none"  /* sharp corners are intentional */
```

### ❌ Incorrect CSS Variable Syntax

```tsx
// ❌ BAD - Invalid Tailwind syntax
className="bg-[--color-brand-clay]"

// ✅ GOOD - Use Tailwind class mapped to token
className="bg-background"

// ✅ OR use inline style if needed
style={{ backgroundColor: 'var(--color-brand-clay)' }}
```

---

## ✅ Usage Examples

### Correct Token Usage

```tsx
// Button
<Button 
  variant="default" 
  size="lg"
  className="bg-primary text-primary-foreground"
>
  Click me
</Button>

// Card
<Card className="border-accent bg-card shadow-md hover:shadow-lg">
  <CardHeader className="p-6">
    <CardTitle className="text-2xl font-semibold leading-none">
      Title
    </CardTitle>
  </CardHeader>
  <CardContent className="p-6 pt-0">
    Content
  </CardContent>
</Card>

// Input
<Input 
  className="h-10 border-input bg-background"
  placeholder="Enter text"
/>
```

---

## 🔄 Token Priority

When using colors, follow this priority:

1. **Semantic tokens** (`primary`, `secondary`, `accent`) - Use first
2. **Brand tokens** (`--color-brand-*`) - Use when semantic doesn't fit
3. **shadcn tokens** (`--primary`, `--background`) - For component compatibility
4. **Never** hardcoded hex values

---

## 📚 Reference Files

- **Token definitions:** `redeagro-app/src/index.css`
- **Tailwind config:** `redeagro-app/tailwind.config.js`
- **Component examples:** `redeagro-app/src/components/ui/`

---

**Last Updated:** 2024  
**Source of Truth:** Redeagro App
