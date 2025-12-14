import { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { NDVICardImage } from '@/components/images/NDVICardImage'
import { denormalizeLocalizacao } from '@/lib/normalizeSearch'
import type { LocationSlug } from '@/lib/location'

interface NDVICardProps {
  localizacao?: LocationSlug | null
  cultura?: string
  isExample?: boolean
  estimated?: boolean
}

export function NDVICard({ localizacao, cultura: _cultura = 'soja', isExample = false, estimated = false }: NDVICardProps) {
  const [showSkeleton, setShowSkeleton] = useState(!localizacao)

  useEffect(() => {
    if (!localizacao) {
      const timer = setTimeout(() => setShowSkeleton(false), 500)
      return () => clearTimeout(timer)
    } else {
      setShowSkeleton(false)
    }
  }, [localizacao])

  const value = 0.72
  const trend = 'up'
  const lastUpdate = 'há 3 dias'
  const TrendIcon = TrendingUp

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
        <CardContent className="p-0 space-y-5">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="border border-border rounded-none shadow-md hover:shadow-md transition-shadow p-6 cursor-default">
      {/* NDVI Map Visualization */}
      <NDVICardImage />
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider">
          NDVI Semanal{subtitle ? ` — ${subtitle}` : ''}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Primary metric - Large and prominent */}
        <div className="space-y-1.5">
          <div className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight">
            {value.toFixed(2)}
          </div>
          <div className="text-xs font-medium text-muted-foreground/80">
            Índice de vegetação
          </div>
        </div>

        {/* Secondary metric - Trend indicator */}
        <div className={`flex items-center gap-2 px-2 py-1 rounded-none ${
          trend === 'up' ? 'bg-card-success-bg' : 
          trend === 'down' ? 'bg-card-danger-bg' : 
          'bg-gray-100'
        }`}>
          <TrendIcon className={`h-5 w-5 ${trend === 'up' ? 'text-success' : trend === 'down' ? 'text-danger' : 'text-gray-500'}`} />
          <span className={`text-sm font-bold ${trend === 'up' ? 'text-card-success-text' : trend === 'down' ? 'text-card-danger-text' : 'text-gray-600'}`}>
            {trend === 'up' ? 'Crescendo' : trend === 'down' ? 'Diminuindo' : 'Estável'}
          </span>
        </div>

        {/* Tertiary info - Last update */}
        <div className="text-[10px] text-muted-foreground/70 leading-relaxed">
          Última atualização: <span className="font-bold text-secondary-text-dark text-xs">{lastUpdate}</span>
        </div>

        {/* Action - Secondary */}
        <Button
          variant="outline"
          className="w-full justify-between text-sm font-medium rounded-[8px] mt-2"
        >
          <span>Ver mapa detalhado</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
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

