import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { highlightMatch, type CulturaOption } from '@/lib/searchData'
import { ArrowUp, ArrowDown, Minus, X } from 'lucide-react'
import { UI_CONSTANTS } from '@/lib/constants'

interface AutocompleteInputProps {
  value: string
  onChange: (value: string) => void
  onSelect: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  placeholder?: string
  suggestions: string[] | CulturaOption[]
  className?: string
  disabled?: boolean
  showSuggestionsOnFocus?: boolean
  showMetrics?: boolean
  id?: string
  'aria-label'?: string
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}

export interface AutocompleteInputHandle {
  focus: () => void
  blur: () => void
}

export const AutocompleteInput = forwardRef<AutocompleteInputHandle, AutocompleteInputProps>(({
  value,
  onChange,
  onSelect,
  onFocus,
  onBlur,
  placeholder,
  suggestions,
  className,
  disabled = false,
  showSuggestionsOnFocus = true,
  showMetrics = false,
  id,
  'aria-label': ariaLabel,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [showDropdown, setShowDropdown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const listboxId = useMemo(() => `autocomplete-list-${Math.random().toString(36).slice(2, 11)}`, [])

  // Expose focus and blur methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    blur: () => {
      inputRef.current?.blur()
    },
  }))

  // Check if suggestions are CulturaOption objects
  const isCulturaOptions = suggestions.length > 0 && typeof suggestions[0] === 'object' && 'name' in suggestions[0]

  // Filter suggestions based on input value
  const filteredSuggestions = isCulturaOptions
    ? (suggestions as CulturaOption[]).filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase().trim())
      )
    : (suggestions as string[]).filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase().trim())
      )

  // Show dropdown when there are suggestions and (input has focus or value)
  useEffect(() => {
    setShowDropdown(
      isOpen &&
      filteredSuggestions.length > 0 &&
      (showSuggestionsOnFocus || value.trim().length > 0)
    )
  }, [isOpen, filteredSuggestions.length, value, showSuggestionsOnFocus])

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true)
        return
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
          const selected = filteredSuggestions[highlightedIndex]
          handleSelect(selected)
        } else if (filteredSuggestions.length === 1) {
          handleSelect(filteredSuggestions[0])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
    onFocus?.()
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Check if focus is moving to an element within the container
    const relatedTarget = e.relatedTarget as Node | null
    if (containerRef.current?.contains(relatedTarget)) {
      return // Don't close if focus is moving within the component
    }
    
    // Delay to allow click events on suggestions to fire
    setTimeout(() => {
      setIsOpen(false)
      setHighlightedIndex(-1)
      onBlur?.()
    }, UI_CONSTANTS.BLUR_DELAY_MS)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
    setIsOpen(true)
    setHighlightedIndex(-1)
  }

  const handleSelect = (suggestion: string | CulturaOption) => {
    const selectedValue = typeof suggestion === 'string' ? suggestion : suggestion.name
    onSelect(selectedValue)
    setIsOpen(false)
    setHighlightedIndex(-1)
    // Keep focus on input after selection for better UX
    inputRef.current?.focus()
  }
  
  const handleSuggestionMouseDown = (e: React.MouseEvent<HTMLButtonElement>, suggestion: string | CulturaOption) => {
    // Prevent blur event from firing before click
    e.preventDefault()
    handleSelect(suggestion)
  }

  const handleMouseEnter = (index: number) => {
    setHighlightedIndex(index)
  }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    onChange('')
    setIsOpen(false)
    setHighlightedIndex(-1)
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative flex-1">
      <Input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(className, value.trim() && 'pr-10')}
        autoComplete="off"
        aria-expanded={showDropdown}
        aria-autocomplete="list"
        aria-controls={showDropdown ? listboxId : undefined}
        aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        role="combobox"
      />
      {value.trim() && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[#032F35]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#032F35]/50 focus:ring-offset-0 z-10 pointer-events-auto"
          aria-label="Clear input"
        >
          <X className="h-4 w-4 text-[#032F35]" />
        </button>
      )}
      {showDropdown && (
        <div
          ref={dropdownRef}
          id={listboxId}
          role="listbox"
          aria-label="Suggestions"
          className="absolute z-50 w-full mt-1 shadow-xl border border-border max-h-60 overflow-y-auto bg-card"
        >
          {filteredSuggestions.map((suggestion, index) => {
            const suggestionName = typeof suggestion === 'string' ? suggestion : suggestion.name
            const segments = highlightMatch(suggestionName, value)
            const culturaOption = typeof suggestion === 'object' ? suggestion : null
            
            return (
              <button
                key={suggestionName}
                type="button"
                role="option"
                id={`option-${index}`}
                aria-selected={highlightedIndex === index}
                onMouseDown={(e) => handleSuggestionMouseDown(e, suggestion)}
                onMouseEnter={() => handleMouseEnter(index)}
                className={cn(
                  'w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between gap-2 text-foreground',
                  'hover:bg-black/6 focus:bg-black/6 focus:outline-none',
                  highlightedIndex === index && 'bg-black/6'
                )}
              >
                <span className="flex-1">
                  {segments.map((segment, i) => (
                    <span
                      key={i}
                      className={cn(
                        segment.highlight && 'font-semibold text-foreground'
                      )}
                    >
                      {segment.text}
                    </span>
                  ))}
                </span>
                {showMetrics && culturaOption && culturaOption.priceChange !== undefined && (
                  <div className="flex items-center gap-1 text-xs font-medium flex-shrink-0">
                    {culturaOption.trend === 'up' && (
                      <span className="text-[hsl(var(--success-text))] flex items-center gap-0.5">
                        <ArrowUp className="h-3 w-3" />
                        <span>+{Math.abs(culturaOption.priceChange).toFixed(1)}%</span>
                      </span>
                    )}
                    {culturaOption.trend === 'down' && (
                      <span className="text-[hsl(var(--danger-text))] flex items-center gap-0.5">
                        <ArrowDown className="h-3 w-3" />
                        <span>{culturaOption.priceChange.toFixed(1)}%</span>
                      </span>
                    )}
                    {culturaOption.trend === 'stable' && (
                      <span className="text-muted-foreground flex items-center gap-0.5">
                        <Minus className="h-3 w-3" />
                        <span>{culturaOption.priceChange.toFixed(1)}%</span>
                      </span>
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
})

AutocompleteInput.displayName = 'AutocompleteInput'

