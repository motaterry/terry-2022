import { useState, useEffect } from 'react'
import { Sun, Cloud, CloudRain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { WeatherCardImage } from '@/components/images/WeatherCardImage'
import { denormalizeLocalizacao } from '@/lib/normalizeSearch'
import type { LocationSlug } from '@/lib/location'

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  cloudRain: CloudRain,
}

interface WeatherCardProps {
  localizacao?: LocationSlug | null
  isExample?: boolean
  estimated?: boolean
}

export function WeatherCard({ localizacao, isExample = false, estimated = false }: WeatherCardProps) {
  const [showSkeleton, setShowSkeleton] = useState(!localizacao)

  useEffect(() => {
    if (!localizacao) {
      const timer = setTimeout(() => setShowSkeleton(false), 500)
      return () => clearTimeout(timer)
    } else {
      setShowSkeleton(false)
    }
  }, [localizacao])

  const weatherData = [
    { day: 'Hoje', icon: 'sun', temp: { max: 28, min: 20 }, rain: 0 },
    { day: 'Amanhã', icon: 'cloud', temp: { max: 26, min: 18 }, rain: 5 },
    { day: 'Qua', icon: 'rain', temp: { max: 24, min: 17 }, rain: 12 },
    { day: 'Qui', icon: 'cloud', temp: { max: 25, min: 18 }, rain: 3 },
    { day: 'Sex', icon: 'sun', temp: { max: 27, min: 19 }, rain: 0 },
    { day: 'Sáb', icon: 'sun', temp: { max: 29, min: 21 }, rain: 0 },
    { day: 'Dom', icon: 'cloud', temp: { max: 26, min: 19 }, rain: 2 },
  ]
  
  const accumulated = weatherData.reduce((sum, day) => sum + day.rain, 0)
  const maxTemp = Math.max(...weatherData.map(day => day.temp.max))

  const locationDisplay = localizacao ? denormalizeLocalizacao(localizacao) : null

  // Build subtitle
  let subtitle = ''
  if (isExample) {
    subtitle = 'Exemplo'
  } else if (locationDisplay) {
    subtitle = locationDisplay
    if (estimated) {
      subtitle += ' (estimado)'
    }
  }

  if (showSkeleton) {
    return (
      <Card className="border border-border rounded-none shadow-md p-6">
        <CardHeader className="p-0 pb-5">
          <Skeleton className="h-3 w-24 mb-1.5" />
        </CardHeader>
        <CardContent className="p-0">
          <Skeleton className="h-32 w-full mb-5" />
          <Skeleton className="h-16 w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="border border-border rounded-none shadow-md hover:shadow-md transition-shadow p-6 cursor-default">
      {/* Weather Map Visualization */}
      <WeatherCardImage />
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider">
          Clima 7 dias{subtitle ? ` — ${subtitle}` : ''}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Primary content - Weather forecast grid */}
        <div className="grid grid-cols-7 gap-3.5 mb-5">
          {weatherData.map((day, index) => {
            const Icon = iconMap[day.icon as keyof typeof iconMap]
            return (
              <div key={index} className="text-center space-y-2">
                <div className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wide">
                  {day.day}
                </div>
                <Icon className="h-7 w-7 mx-auto text-primary" />
                <div className="space-y-0.5">
                  <div className="text-base font-bold text-foreground leading-tight">{day.temp.max}°</div>
                  <div className="text-xs text-muted-foreground/80">{day.temp.min}°</div>
                </div>
                {day.rain > 0 && (
                  <div className="text-xs font-bold text-info mt-1">{day.rain}mm</div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Secondary info - Summary */}
        <div className="pt-5 border-t border-border space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground/70">
              Precipitação acumulada:
            </span>
            <span className="text-xs font-bold text-secondary-text-dark">{accumulated} mm</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground/70">
              Temperatura máxima:
            </span>
            <span className="text-xs font-bold text-secondary-text-dark">{maxTemp}°</span>
          </div>
        </div>
      </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>Resultados completos aparecem após a busca.</p>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}

