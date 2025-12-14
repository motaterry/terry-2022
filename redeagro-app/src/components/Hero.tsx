import { SearchBar } from './SearchBar'
import { Header } from './Header'
import { useState, useEffect } from 'react'

interface HeroProps {
  onSearch?: (cultura: string, localizacao: string) => void
}

export function Hero({ onSearch }: HeroProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile - Heuristic 4: Consistency and standards
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Heuristic 7: Flexibility and efficiency - Keyboard shortcut (desktop only)
  useEffect(() => {
    if (isMobile) return // Skip on mobile - Heuristic 7: Mobile-specific behavior
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search on '/' key press (common convention)
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        const firstInput = document.querySelector('input[type="text"]') as HTMLInputElement
        firstInput?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobile])

  const handleSearch = (cultura: string, localizacao: string) => {
    // Heuristic 1: Visibility of system status - Show loading state
    setIsSearching(true)
    onSearch?.(cultura, localizacao)
    // Reset after navigation (component will unmount)
    setTimeout(() => setIsSearching(false), 1000)
  }

  return (
    <section className="relative w-full min-h-[100svh] sm:min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/assets/hero_coffee_mountains.jpg"
          alt="Café nas montanhas de Minas Gerais"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        {/* Primary Green Overlay - Mobile optimized opacity */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'var(--primary-70)' }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Content Container - Mobile optimized spacing */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 sm:px-6 md:px-10 pt-32 sm:pt-20 md:pt-24 pb-12 sm:pb-10 md:pb-12 text-center">
        {/* Heuristic 8: Aesthetic and minimalist design - Mobile optimized hierarchy */}
        {/* Heuristic 1: Visibility - Optimized for mobile readability (max 2-3 lines) */}
        {/* Heuristic 6: Recognition - Much shorter mobile headline improves scannability */}
        {/* Mobile: text-4xl (36px) | Desktop (sm+): text-5xl (48px) - Exclusive desktop sizing */}
        <h1 
          className="!text-4xl sm:!text-5xl font-bold text-[#032F35] mb-2 sm:mb-3 md:mb-4 leading-[1.15] sm:leading-tight max-w-[700px] mx-auto px-2 sm:px-2 md:px-0"
        >
          {/* Mobile: Very short version to prevent excessive line breaks (max 2-3 lines) */}
          <span className="sm:hidden">
            Preço, clima e desempenho da sua lavoura.
          </span>
          {/* Desktop: Full version - Exclusive to sm breakpoint and above */}
          <span className="hidden sm:inline">
            Veja preço, clima e desempenho da sua lavoura em segundos.
          </span>
        </h1>
        
        {/* Heuristic 2: Match between system and real world - Mobile optimized text */}
        {/* Heuristic 1: Visibility - Body text: 14px mobile (text-sm) meets 14-16px readability requirement */}
        {/* Mobile: 14px (0.875rem) - Minimum readable size, maintains 2:1 ratio with headline */}
        <p className="text-sm sm:text-sm md:text-base lg:text-lg text-[#032F35] mb-3 sm:mb-4 md:mb-6 mx-auto px-4 sm:px-4 leading-relaxed">
          <span className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">Baseado em dados públicos e colaboração entre produtores. 100% anônimo.</span>
        </p>

        {/* Heuristic 10: Help and documentation - Hide keyboard shortcut on mobile */}
        <div className="hidden sm:block mb-6 sm:mb-8 md:mb-10">
          <p className="text-xs sm:text-sm text-[#032F35]/70 drop-shadow-sm">
            <kbd className="px-1.5 py-0.5 bg-[#032F35]/20 rounded text-[10px] font-mono text-[#032F35]">/</kbd> para focar na busca
          </p>
        </div>

        {/* Search Bar with loading state */}
        <div className="flex justify-center mt-4 sm:mt-0">
          <SearchBar onSearch={handleSearch} isSearching={isSearching} />
        </div>

        {/* Heuristic 1: Visibility of system status - Mobile loading indicator */}
        {isSearching && (
          <div 
            className="sm:hidden mt-4 text-xs text-[#032F35]/90 drop-shadow-sm"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="inline-flex items-center gap-2">
              <span className="animate-pulse">●</span>
              Buscando resultados...
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

