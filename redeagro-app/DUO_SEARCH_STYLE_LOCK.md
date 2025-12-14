# 🔒 Duo Search Component - Style Lock

**Status:** LOCKED - Do Not Modify  
**Component:** `SearchBar` (duo-search)  
**Location:** `src/components/SearchBar.tsx`  
**CSS Scope:** `.duo-search-container` in `src/index.css`

---

## ⚠️ CRITICAL: Context-Specific Component

This component has a **UNIQUE STYLE** that is **ONLY** designed for the Hero section's bright green background overlay (`var(--primary-70)`). 

**DO NOT:**
- ❌ Reuse this style elsewhere
- ❌ Modify the white border/text colors
- ❌ Apply this pattern to other inputs
- ❌ Change the transparent background approach
- ❌ Remove the `!important` CSS rules (they're intentional)

**DO:**
- ✅ Keep this style isolated to the Hero section
- ✅ Use standard input styles elsewhere
- ✅ Reference this document before making changes

---

## Design Rationale

### Background Context
- **Hero Section:** Bright green overlay (`hsl(139.4deg 77.78% 33.53% / 83%)`)
- **Purpose:** High contrast white-on-green for visibility
- **Uniqueness:** This green background is NOT used elsewhere in the app

### Style Characteristics
- **Border:** White with opacity (`border-white/50`, `hover:border-white/70`, `focus:border-white/80`)
- **Text:** White (`text-white/90`)
- **Text Size:** Unique - `text-sm` (0.875rem) on mobile, `text-xl` (1.25rem) on desktop - **larger than standard inputs** for better visibility on hero background
- **Background:** Transparent (to show green overlay)
- **Divider:** White vertical line (`bg-white/30`)
- **Button:** White background with primary color icon

### Why It's Locked
1. **Context-Specific:** Only works on bright green background
2. **High Contrast:** White-on-green provides necessary contrast
3. **Visual Hierarchy:** Part of Hero section's unique design
4. **Isolation:** Should not influence other input styles

---

## CSS Rules (DO NOT MODIFY)

All rules in `src/index.css` starting at line 291 are locked:

```css
/* Dark-themed outline styling for duo search input (SearchBar) */
/* Transparent background with white outline and text for contrast against green hero */
.duo-search-container .duo-search-input { ... }
.duo-search-container input { ... }
/* Unique text size: 1.25rem (text-xl) on desktop - larger than standard inputs */
@media (min-width: 640px) {
  .duo-search-container input { font-size: 1.25rem !important; }
}
/* Hover effects for outlined inputs */
.duo-search-container .duo-search-input:hover { ... }
```

---

## Component Structure

```tsx
<div className="duo-search-container">
  <form>
    <div className="duo-search-input">
      {/* Cultura Input */}
      <AutocompleteInput id="cultura-input" />
      {/* Divider */}
      <div className="bg-white/30" />
      {/* Localização Input */}
      <AutocompleteInput id="localizacao-input" />
      {/* Search Button */}
      <Button />
    </div>
  </form>
</div>
```

---

## Before Making Changes

1. **Read this document** - Understand why it's locked
2. **Check context** - Is this for the Hero section?
3. **Consider alternatives** - Can you use standard inputs instead?
4. **Get approval** - If changes are necessary, document why

---

**Last Updated:** 2024  
**Locked By:** Design System Team  
**Reason:** Context-specific styling for unique Hero section background

