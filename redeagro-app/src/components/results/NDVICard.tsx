import { ArrowRight, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getNDVI } from '@/lib/mock'

export function NDVICard() {
  const data = getNDVI()

  const trendIcon = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus,
  }[data.trend]

  const TrendIcon = trendIcon
  const trendColor = {
    up: 'text-success',
    down: 'text-danger',
    stable: 'text-muted-foreground',
  }[data.trend]
  
  const trendBgColor = {
    up: 'bg-card-success-bg',
    down: 'bg-card-danger-bg',
    stable: 'bg-accent/10',
  }[data.trend]
  
  const trendTextColor = {
    up: 'text-card-success-text',
    down: 'text-card-danger-text',
    stable: 'text-muted-foreground',
  }[data.trend]

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6">
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider">
          NDVI Semanal
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Primary metric - Large and prominent */}
        <div className="space-y-1.5">
          <div className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight">
            {data.value.toFixed(2)}
          </div>
          <div className="text-xs font-medium text-muted-foreground/80">
            Índice de vegetação
          </div>
        </div>

        {/* Secondary metric - Trend indicator */}
        <div className={`flex items-center gap-2 px-2 py-1 rounded-none ${trendBgColor}`}>
          <TrendIcon className={`h-5 w-5 ${trendColor}`} />
          <span className={`text-sm font-bold ${trendTextColor}`}>
            {data.trend === 'up' ? 'Crescendo' : data.trend === 'down' ? 'Diminuindo' : 'Estável'}
          </span>
        </div>

        {/* Tertiary info - Last update */}
        <div className="text-[10px] text-muted-foreground/70 leading-relaxed">
          Última atualização: <span className="font-bold text-secondary-text-dark text-xs">{data.lastUpdate}</span>
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
  )
}


