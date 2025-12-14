# UI Audit Quick Action Checklist
## RedeAgro App - Context7 QA Audit

**Generated:** 2025-01-27  
**Based on:** UI_AUDIT_CONTEXT7.md

---

## 🔴 Critical Issues (Fix Immediately)

### 1. Tailwind Config vs @theme Conflict
- [ ] **Decision:** Choose Tailwind 4 @theme OR config.js (not both)
- [ ] **Action:** If using @theme, remove theme.extend from config.js
- [ ] **Action:** If using config.js, remove @theme block from index.css
- [ ] **File:** `tailwind.config.js`, `src/index.css`

### 2. Color Token Standardization
- [ ] **Decision:** Standardize primary color (`#668408` olive green)
- [ ] **Action:** Update `@theme` `--color-brand-primary` to `#668408`
- [ ] **Action:** Or remove `@theme` and use config.js only
- [ ] **File:** `src/index.css`, `tailwind.config.js`

### 3. Autocomplete ARIA Attributes
- [ ] **Add:** `role="listbox"` to dropdown container
- [ ] **Add:** `role="option"` to each suggestion button
- [ ] **Add:** `aria-expanded` to input
- [ ] **Add:** `aria-autocomplete="list"` to input
- [ ] **Add:** `aria-controls` linking input to dropdown
- [ ] **Add:** `aria-activedescendant` for highlighted option
- [ ] **File:** `src/components/AutocompleteInput.tsx`

---

## 🟡 High Priority (Fix This Sprint)

### 4. Replace Hardcoded Colors
- [ ] Replace `bg-[#668408]/70` → `bg-primary/70`
- [ ] Replace `bg-[#f4efe6]/95` → `bg-background/95`
- [ ] Replace `bg-[#D9BC00]` → Define token or use `bg-accent`
- [ ] Replace `bg-white/70` → `bg-card/70` or keep if intentional
- [ ] **Files:** `src/components/Hero.tsx`, `src/components/SearchBar.tsx`, `src/components/results/ResultHeader.tsx`

### 5. Fix Disabled Button State
- [ ] Remove `disabled:opacity-100` override
- [ ] Add proper disabled styling: `opacity-50 cursor-not-allowed`
- [ ] Ensure hover state doesn't apply when disabled
- [ ] **File:** `src/components/SearchBar.tsx:92`

### 6. Improve Focus Management
- [ ] Replace `setTimeout` in `handleBlur` with `onMouseDown` preventDefault
- [ ] Test keyboard navigation thoroughly
- [ ] **File:** `src/components/AutocompleteInput.tsx:141-148`

### 7. Standardize Card Background
- [ ] Review `bg-white/[0.20]` usage
- [ ] Create card variant if needed (opaque vs transparent)
- [ ] Use `bg-card` token consistently
- [ ] **File:** `src/components/ui/card.tsx:12`

### 8. Add Component Tests
- [ ] Set up testing framework (Vitest + React Testing Library)
- [ ] Add tests for SearchBar component
- [ ] Add tests for AutocompleteInput component
- [ ] Add tests for navigation flows
- [ ] Add accessibility tests

---

## 🟢 Medium/Low Priority (Nice to Have)

### 9. Optimize Responsive Patterns
- [ ] Remove redundant `md:text-4xl lg:text-4xl` (same value)
- [ ] Review all responsive breakpoints for consistency
- [ ] **File:** `src/components/Hero.tsx:32`

### 10. Extract Magic Numbers
- [ ] Create `BLUR_DELAY_MS = 200` constant
- [ ] Create `FOCUS_DELAY_MS = 100` constant
- [ ] **File:** `src/components/AutocompleteInput.tsx`

### 11. Add Keyboard Shortcuts
- [ ] Add `/` key to focus search bar
- [ ] Add `Ctrl+K` shortcut (optional)
- [ ] **File:** `src/components/SearchBar.tsx` or `src/components/Hero.tsx`

### 12. Shadow Token Usage
- [ ] Use `--shadow-card` token or remove it
- [ ] Add to Tailwind config if keeping
- [ ] **File:** `src/index.css:46`

---

## Verification Checklist

After fixes, verify:

- [ ] All colors use design tokens (no hardcoded hex)
- [ ] Autocomplete works with screen reader (test with NVDA/JAWS)
- [ ] Keyboard navigation works (Tab, Arrow keys, Enter, Escape)
- [ ] Disabled states are visually clear
- [ ] Responsive design works on mobile (320px+)
- [ ] No console errors or warnings
- [ ] TypeScript compiles without errors
- [ ] Tailwind classes are consistent

---

## Testing Commands

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview build
npm run preview

# Type check
npx tsc --noEmit
```

---

## Context7 Usage for Fixes

When fixing issues, use Context7 for version-specific guidance:

```
use context7 for react@19.1.1, tailwindcss@4.1.16, @radix-ui/react-combobox@latest

[Your fix request here]
```

---

**Last Updated:** 2025-01-27

