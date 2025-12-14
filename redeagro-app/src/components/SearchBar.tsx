/**
 * 🔒 LOCKED COMPONENT - Context-Specific Styling
 * 
 * This component uses a UNIQUE style designed ONLY for the Hero section's
 * bright green background overlay. The white borders/text are intentional
 * for high contrast against the green background.
 * 
 * ⚠️ DO NOT:
 * - Reuse this style elsewhere
 * - Modify white border/text colors
 * - Remove CSS !important rules
 * 
 * 📖 See: DUO_SEARCH_STYLE_LOCK.md for full documentation
 * 
 * @component SearchBar
 */

import { useState, useRef } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AutocompleteInput } from './AutocompleteInput'
import type { AutocompleteInputHandle } from './AutocompleteInput'
import { CULTURA_OPTIONS, LOCATION_OPTIONS } from '@/lib/searchData'
import { cn } from '@/lib/utils'
import { UI_CONSTANTS } from '@/lib/constants'

interface SearchBarProps {
  onSearch?: (cultura: string, localizacao: string) => void
  isSearching?: boolean
}

export function SearchBar({ onSearch, isSearching = false }: SearchBarProps) {
  const [cultura, setCultura] = useState('')
  const [localizacao, setLocalizacao] = useState('')
  const [isLocationFocused, setIsLocationFocused] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const locationInputRef = useRef<AutocompleteInputHandle>(null)

  const handleCulturaSelect = (value: string) => {
    setCultura(value)
    setValidationError(null) // Heuristic 9: Clear errors when user corrects
    // Auto-focus location field if empty
    if (!localizacao.trim()) {
      setTimeout(() => {
        locationInputRef.current?.focus()
        setIsLocationFocused(true)
      }, UI_CONSTANTS.FOCUS_DELAY_MS)
    }
  }

  const handleLocationSelect = (value: string) => {
    setLocalizacao(value)
    setValidationError(null) // Heuristic 9: Clear errors when user corrects
  }

  const handleCulturaFocus = () => {
    setIsLocationFocused(false)
    setValidationError(null)
  }

  const handleLocationFocus = () => {
    setIsLocationFocused(true)
    setValidationError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Heuristic 5: Error prevention - Validate before submission
    if (!cultura.trim() && !localizacao.trim()) {
      setValidationError('Por favor, preencha pelo menos um campo')
      return
    }
    
    if (!cultura.trim()) {
      setValidationError('Por favor, selecione uma cultura')
      return
    }
    
    if (!localizacao.trim()) {
      setValidationError('Por favor, selecione uma localização')
      return
    }

    // Heuristic 1: Visibility of system status - Clear validation
    setValidationError(null)
    
    if (cultura.trim() && localizacao.trim()) {
      onSearch?.(cultura, localizacao)
    }
  }

  const isSearchDisabled = isSearching

  return (
    <div className="w-full max-w-2xl duo-search-container">
      <form onSubmit={handleSubmit} className="w-full" aria-label="Buscar cultura e localização">
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="cultura-input" className="sr-only">
            Cultura
          </label>
          <label htmlFor="localizacao-input" className="sr-only">
            Localização
          </label>
        </div>
        <div className={cn(
          "flex overflow-visible border-2 border-[#032F35]/50 bg-transparent rounded-none hover:border-[#032F35]/70 focus-within:border-[#032F35]/80 transition-colors duo-search-input",
          validationError && "border-danger hover:border-danger"
        )}>
          {/* Cultura Input */}
          <div className="flex-1 relative focus-within:z-10">
            <AutocompleteInput
              id="cultura-input"
              value={cultura}
              onChange={setCultura}
              onSelect={handleCulturaSelect}
              onFocus={handleCulturaFocus}
              placeholder="Cultura (ex: Café, Milho, etc)"
              suggestions={CULTURA_OPTIONS}
              showSuggestionsOnFocus={true}
              showMetrics={true}
              className={cn(
                "h-12 sm:h-14 text-sm sm:text-xl font-medium rounded-none border-0 border-r border-[#032F35]/40 bg-transparent text-[#032F35]/90 sm:text-[#032F35]/90 placeholder:text-[#032F35]/60 hover:border-r-[#032F35]/60 hover:bg-[#032F35]/5 focus:border-r-[#032F35]/40 focus-visible:border-r-[#032F35]/40 focus-visible:ring-0 focus:ring-0 shadow-none focus-visible:z-10 relative transition-colors",
                validationError && !cultura.trim() && "border-danger/50 focus:border-danger hover:border-danger/70"
              )}
              aria-invalid={!cultura.trim() && validationError !== null}
              aria-describedby={validationError ? "search-error" : undefined}
              aria-label="Cultura"
            />
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-[#032F35]/30 relative z-0" aria-hidden="true" />

          {/* Location Input */}
          <div className="flex-1 relative focus-within:z-10">
            <AutocompleteInput
              id="localizacao-input"
              ref={locationInputRef}
              value={localizacao}
              onChange={setLocalizacao}
              onSelect={handleLocationSelect}
              onFocus={handleLocationFocus}
              placeholder="Localização (ex: Uberlândia)"
              suggestions={LOCATION_OPTIONS}
              showSuggestionsOnFocus={isLocationFocused}
              className={cn(
                "h-12 sm:h-14 text-sm sm:text-xl font-medium rounded-none border-0 bg-transparent text-[#032F35]/90 sm:text-[#032F35]/90 placeholder:text-[#032F35]/60 hover:bg-[#032F35]/5 focus-visible:ring-0 focus:ring-0 shadow-none focus-visible:z-10 relative transition-colors",
                validationError && !localizacao.trim() && "border-danger/50 focus:border-danger hover:border-danger/70"
              )}
              aria-invalid={!localizacao.trim() && validationError !== null}
              aria-describedby={validationError ? "search-error" : undefined}
              aria-label="Localização"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            disabled={isSearchDisabled || isSearching}
            className={cn(
              'h-12 sm:h-14 w-12 sm:w-14 flex-shrink-0 rounded-none shadow-none border-0 flex items-center justify-center [&_svg]:!size-5 sm:[&_svg]:!size-6',
              '!bg-[#032F35] hover:!bg-[#032F35]/90 active:!bg-[#032F35]/80',
              (isSearchDisabled || isSearching) && 'opacity-50 cursor-not-allowed !bg-[#032F35]/80 hover:!bg-[#032F35]/80'
            )}
            aria-label={isSearching ? 'Buscando...' : 'Buscar'}
          >
            {isSearching ? (
              <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin !text-white" aria-hidden="true" />
            ) : (
              <Search className="h-5 w-5 sm:h-6 sm:w-6 !text-white" aria-hidden="true" />
            )}
          </Button>
        </div>
      </form>
      
      {/* Heuristic 9: Help users recognize, diagnose, and recover from errors */}
      {validationError && (
        <div 
          id="search-error"
          ref={(el) => {
            // Scroll error into view on mobile when it appears
            if (el) {
              setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
              }, 100)
            }
          }}
          role="alert"
          aria-live="assertive"
          className="mt-2 text-xs sm:text-sm text-[#032F35]/90 bg-danger/20 border border-danger/30 px-3 py-2.5 rounded-none backdrop-blur-sm"
        >
          {validationError}
        </div>
      )}
      
      {/* Heuristic 6: Recognition rather than recall - Show example searches (mobile optimized) */}
      {!validationError && cultura && localizacao && (
        <div 
          className="mt-2 text-xs sm:text-xs text-[#032F35]/80 drop-shadow-sm px-1"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="hidden sm:inline">Buscando: </span>
          <strong>{cultura}</strong> <span className="hidden sm:inline">em</span> <span className="sm:hidden">•</span> <strong>{localizacao}</strong>
        </div>
      )}
    </div>
  )
}

