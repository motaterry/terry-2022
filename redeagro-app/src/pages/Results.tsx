import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ResultHeader } from '@/components/results/ResultHeader'
import { PriceCard } from '@/components/PriceCard'
import { WeatherCard } from '@/components/WeatherCard'
import { NDVICard } from '@/components/NDVICard'
import { CompareGate } from '@/components/results/CompareGate'
import { WhatsAppAlerts } from '@/components/results/WhatsAppAlerts'
import { ShareBlock } from '@/components/results/ShareBlock'
import { PriceCardSkeleton, WeatherCardSkeleton, NDVICardSkeleton } from '@/components/results/Skeletons'
import { normalizeCultura, normalizeLocalizacao, denormalizeCultura, denormalizeLocalizacao } from '@/lib/normalizeSearch'
import { getLocationSmart, setLastSearch, type LocationSlug } from '@/lib/location'

export function Results() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [isResolvingLocation, setIsResolvingLocation] = useState(false)

  // Read params from URL, normalize them (for backward compatibility), then denormalize for display
  const rawCultura = searchParams.get('cultura') || 'soja'
  const rawLocalizacao = searchParams.get('localizacao')

  useEffect(() => {
    const resolveLocation = async () => {
      // If no localizacao in URL, resolve it and update URL
      if (!rawLocalizacao) {
        setIsResolvingLocation(true)
        const locationResult = await getLocationSmart()
        const normalizedCultura = normalizeCultura(rawCultura)
        const normalizedLocalizacao = normalizeLocalizacao(locationResult.location)
        
        // Update URL with resolved location
        const newParams = new URLSearchParams(searchParams)
        newParams.set('cultura', normalizedCultura)
        newParams.set('localizacao', normalizedLocalizacao)
        setSearchParams(newParams, { replace: true })
        setIsResolvingLocation(false)
      } else {
        // If localizacao exists in URL, save it for future use
        const normalizedLocalizacao = normalizeLocalizacao(rawLocalizacao)
        setLastSearch(normalizedLocalizacao as LocationSlug)
      }
    }

    resolveLocation()
  }, [rawLocalizacao, rawCultura, searchParams, setSearchParams])

  // Normalize and denormalize for display (use resolved location if available)
  const normalizedCultura = normalizeCultura(rawCultura)
  const normalizedLocalizacao = rawLocalizacao ? normalizeLocalizacao(rawLocalizacao) : null
  const cultura = denormalizeCultura(normalizedCultura)
  const localizacao = normalizedLocalizacao ? denormalizeLocalizacao(normalizedLocalizacao) : null

  useEffect(() => {
    // Only show loading skeleton if we have location resolved
    if (normalizedLocalizacao && !isResolvingLocation) {
      const timer = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [normalizedLocalizacao, isResolvingLocation])

  return (
    <div className="min-h-screen bg-background pb-24">
      {localizacao && (
        <ResultHeader 
          cultura={cultura} 
          localizacao={localizacao}
        />
      )}

      <main id="main-content" className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Primary metrics - Value-first cards with clear hierarchy */}
        <section className="mb-8 md:mb-12">
          <h2 className="sr-only">Métricas Principais</h2>
          {loading || isResolvingLocation || !normalizedLocalizacao ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <PriceCardSkeleton />
              <WeatherCardSkeleton />
              <NDVICardSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <PriceCard localizacao={normalizedLocalizacao as LocationSlug} cultura={normalizedCultura} />
              <WeatherCard localizacao={normalizedLocalizacao as LocationSlug} />
              <NDVICard localizacao={normalizedLocalizacao as LocationSlug} cultura={normalizedCultura} />
            </div>
          )}
        </section>

        {/* Secondary actions - Reciprocity and trust features */}
        <section className="space-y-6 md:space-y-8">
          <h2 className="sr-only">Ações e Comparativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-2 lg:col-span-2 flex w-full">
              <div className="w-full flex">
                <CompareGate />
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <WhatsAppAlerts />
              <ShareBlock />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
