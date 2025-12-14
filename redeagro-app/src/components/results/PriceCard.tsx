import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getPrice, formatBRL } from '@/lib/mock'

export function PriceCard() {
  const data = getPrice()
  const isPositive = data.change7d > 0

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6">
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider mb-1.5">
          Preço hoje
        </CardTitle>
        <p className="text-[10px] text-muted-foreground/70 font-medium">CEPEA</p>
      </CardHeader>
      <CardContent className="p-0 space-y-5">
        {/* Primary metric - Large and prominent */}
        <div className="space-y-1.5">
          <div className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight">
            {formatBRL(data.price)}
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
              {isPositive ? '+' : ''}{data.change7d.toFixed(1)}%
            </span>
            <span className={`text-[10px] font-medium ${isPositive ? 'text-card-success-text-small' : 'text-card-danger-text-small'}`}>7 dias</span>
          </div>
        </div>

        {/* Tertiary info - Range */}
        <div className="pt-4 border-t border-border">
          <p className="text-[10px] font-medium text-muted-foreground/70 leading-relaxed">
            Faixa de preço: <span className="text-secondary-text-dark font-bold text-xs">{formatBRL(data.range.min)}</span> – <span className="text-secondary-text-dark font-bold text-xs">{formatBRL(data.range.max)}</span>/sc
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


