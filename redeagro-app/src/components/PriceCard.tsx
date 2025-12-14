import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { PriceCardImage } from '@/components/images/PriceCardImage'
import { denormalizeLocalizacao } from '@/lib/normalizeSearch'
import type { LocationSlug } from '@/lib/location'

interface PriceCardProps {
  localizacao?: LocationSlug | null
  cultura?: string
  isExample?: boolean
  estimated?: boolean
}

export function PriceCard({ localizacao, cultura: _cultura = 'soja', isExample = false, estimated = false }: PriceCardProps) {
  const [showSkeleton, setShowSkeleton] = useState(!localizacao)

  useEffect(() => {
    if (!localizacao) {
      const timer = setTimeout(() => setShowSkeleton(false), 500)
      return () => clearTimeout(timer)
    } else {
      setShowSkeleton(false)
    }
  }, [localizacao])

  const isPositive = true // Mock data
  const change7d = 2.3
  const price = 145.00
  const minPrice = 142.00
  const maxPrice = 148.00

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
          <Skeleton className="h-2.5 w-32" />
        </CardHeader>
        <CardContent className="p-0 space-y-5">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="border border-border rounded-none shadow-md hover:shadow-md transition-shadow p-6 cursor-default">
      {/* Price Chart Visualization */}
      <PriceCardImage 
        dataSource="CEPEA"
        showControls={true}
        showYAxis={false}
        showGrid={false}
        showDots={true}
      />
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider mb-1.5">
          Preço hoje{subtitle ? ` — ${subtitle}` : ''}
        </CardTitle>
        {!isExample && !subtitle && (
          <p className="text-[10px] text-muted-foreground/70 font-medium">CEPEA</p>
        )}
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Primary metric - Large and prominent */}
        <div className="space-y-1.5">
          <div className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight">
            R$ {price.toFixed(2).replace('.', ',')}/sc
          </div>
          <div className="text-xs font-medium text-muted-foreground/80">
            por saca
          </div>
        </div>

        {/* Secondary metric - Change indicator */}
        <div className={`flex items-center gap-2 px-2 py-1 rounded-none ${
          isPositive ? 'bg-card-success-bg' : 'bg-card-danger-bg'
        }`}>
          {isPositive ? (
            <TrendingUp className="h-5 w-5 text-success" />
          ) : (
            <TrendingDown className="h-5 w-5 text-danger" />
          )}
          <div className="flex items-baseline gap-1.5">
            <span className={`text-xl font-bold ${isPositive ? 'text-card-success-text' : 'text-card-danger-text'}`}>
              {isPositive ? '+' : ''}{change7d.toFixed(1)}%
            </span>
            <span className={`text-[10px] font-medium ${isPositive ? 'text-card-success-text-small' : 'text-card-danger-text-small'}`}>7 dias</span>
          </div>
        </div>

        {/* Tertiary info - Range */}
        <div className="pt-4 border-t border-border">
          <p className="text-[10px] font-medium text-muted-foreground/70 leading-relaxed">
            Faixa de preço: <span className="text-secondary-text-dark font-bold text-xs">R$ {minPrice.toFixed(2).replace('.', ',')}</span> – <span className="text-secondary-text-dark font-bold text-xs">R$ {maxPrice.toFixed(2).replace('.', ',')}</span>/sc
          </p>
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

