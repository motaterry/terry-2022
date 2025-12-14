import { useNavigate } from 'react-router-dom'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { normalizeCultura, normalizeLocalizacao } from '@/lib/normalizeSearch'
import { setLastSearch, type LocationSlug } from '@/lib/location'

export function Home() {
  const navigate = useNavigate()

  const handleSearch = (cultura: string, localizacao: string) => {
    console.log('Searching for:', { cultura, localizacao })
    // Normalize parameters for canonical URL format
    const normalizedCultura = normalizeCultura(cultura)
    const normalizedLocalizacao = normalizeLocalizacao(localizacao)
    // Save location for future use
    setLastSearch(normalizedLocalizacao as LocationSlug)
    // Navigate to results page with normalized query params
    navigate(`/results?cultura=${encodeURIComponent(normalizedCultura)}&localizacao=${encodeURIComponent(normalizedLocalizacao)}`)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Full Width */}
      <Hero onSearch={handleSearch} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Cards Section - Hidden for now */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 md:mt-8">
          <PriceCard localizacao={detectedLocation} cultura="soja" estimated={isEstimated} />
          <WeatherCard localizacao={detectedLocation} estimated={isEstimated} />
          <NDVICard localizacao={detectedLocation} cultura="soja" estimated={isEstimated} />
        </div> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
