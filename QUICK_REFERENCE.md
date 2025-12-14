# Design System Quick Reference

**For:** Developers implementing components  
**Goal:** Maintain visual consistency

---

## 🎨 Color Quick Reference

### ✅ Use These

```tsx
// Primary actions
bg-primary text-primary-foreground
bg-secondary text-secondary-foreground

// Semantic states
text-success    // Success messages (green)
text-danger     // Errors (red)
text-warning    // Warnings (yellow/amber)
text-info       // Info messages (blue)

// UI elements
bg-background   // Page background
bg-card         // Card background
border-border   // Borders
text-muted-foreground // Secondary text
```

### ❌ Never Use These

```tsx
// Hardcoded colors
bg-[#2D5016]
text-[#9DB89A]
border-[#668408]

// Tailwind color classes when semantic tokens exist
text-green-600  // Use text-success instead
text-red-600    // Use text-danger instead
bg-blue-500     // Use bg-info instead
```

---

## 📐 Spacing Quick Reference

### Standard Spacing Scale (4px base)

```tsx
p-0  // 0
p-1  // 0.25rem (4px)
p-2  // 0.5rem (8px)
p-3  // 0.75rem (12px)
p-4  // 1rem (16px)
p-6  // 1.5rem (24px) - Common for cards
p-8  // 2rem (32px)
```

**Common Patterns:**
- Card padding: `p-6`
- Button padding: `px-4 py-2`
- Section spacing: `space-y-6` or `space-y-8`

---

## 🔲 Border Radius Quick Reference

```tsx
rounded-sm  // 0.375rem (6px) - Small elements
rounded-md  // 0.5rem (8px) - Default (buttons, inputs)
rounded-lg  // 0.75rem (12px) - Cards, modals
rounded-xl  // 1rem (16px) - Large containers
```

**Component Standards:**
- Buttons: `rounded-md`
- Inputs: `rounded-md`
- Cards: `rounded-lg`
- Badges: `rounded-sm`

---

## 🌑 Shadow Quick Reference

```tsx
shadow-sm   // Subtle elevation
shadow-md   // Medium elevation
shadow-lg   // Card elevation
shadow-xl   // Large elevation
```

**Usage:**
- Cards: `shadow-sm` or `shadow-lg`
- Hover states: `hover:shadow-md`
- Focus: Use `focus-visible:ring-2` instead

---

## 📝 Typography Quick Reference

### Sizes

```tsx
text-xs   // 12px
text-sm   // 14px
text-base // 16px (default)
text-lg   // 18px
text-xl   // 20px
text-2xl  // 24px
text-3xl  // 30px
text-4xl  // 36px
```

### Weights

```tsx
font-light     // 300
font-normal    // 400 (default)
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

---

## 🧩 Component Patterns

### Button

```tsx
<Button variant="default" size="default">
  Default Button
</Button>

// Variants: default, destructive, outline, secondary, ghost, link
// Sizes: sm, default, lg, icon
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
  <CardFooter>
    Footer
  </CardFooter>
</Card>
```

### Input

```tsx
<Input
  type="text"
  placeholder="Enter text"
  className="h-10" // Default height
/>
```

---

## 🚨 Common Mistakes to Avoid

1. **Hardcoded Colors**
   ```tsx
   // ❌
   className="bg-[#2D5016]"
   
   // ✅
   className="bg-primary"
   ```

2. **Arbitrary Values**
   ```tsx
   // ❌
   className="p-[13px] rounded-[7px]"
   
   // ✅
   className="p-3 rounded-md"
   ```

3. **Inconsistent Component Usage**
   ```tsx
   // ❌ - Custom card styling
   <div className="border-[#9DB89A] bg-white p-6">
   
   // ✅ - Use Card component
   <Card>
     <CardContent className="p-6">...</CardContent>
   </Card>
   ```

4. **Missing Design System Components**
   ```tsx
   // ❌ - Custom dialog
   <div className="fixed inset-0 bg-black/50">
   
   // ✅ - Use Dialog component
   <Dialog>...</Dialog>
   ```

---

## ✅ Before Submitting Code

Quick checklist:

- [ ] No hardcoded colors (`#hex`, `rgb()`, `hsl()`)
- [ ] Using design tokens for colors
- [ ] Using Tailwind spacing scale
- [ ] Using standard border radius
- [ ] Using standard shadows
- [ ] Component matches design system implementation
- [ ] Responsive and accessible

---

## 🤖 AI Assistant Tips

### Using Context7 for Better AI Responses

Add `use context7` to your Cursor prompts to get version-specific, accurate documentation:

```tsx
// Example prompt:
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, tailwindcss@4

Create a Dialog component following shadcn/ui patterns...
```

**Why it helps:**
- ✅ Gets exact API for your library versions
- ✅ Prevents outdated code suggestions
- ✅ Ensures version compatibility

**See:** `CONTEXT7_SETUP.md` for complete guide

---

**Need more details?** See `DESIGN_TOKENS.md` and `DESIGN_SYSTEM_GUIDELINES.md`

