import { Shield, TrendingUp, TrendingDown, DollarSign, Package, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatBRL } from '@/lib/mock'
import { useState, useEffect, useRef } from 'react'

interface CompareResultProps {
  userCostPerHa: number
  userSalePricePerSc: number
  regionalCostPerHa: number
  regionalSalePricePerSc: number
  sampleSize: number
  onReset?: () => void
}

type Category = 'Muito abaixo da média' | 'Abaixo da média' | 'Dentro da média' | 'Acima da média' | 'Muito acima da média'

function categorizeDelta(deltaPct: number): Category {
  if (deltaPct <= -20) return 'Muito abaixo da média'
  if (deltaPct <= -5) return 'Abaixo da média'
  if (deltaPct <= 5) return 'Dentro da média'
  if (deltaPct <= 20) return 'Acima da média'
  return 'Muito acima da média'
}

function getCategoryInterpretation(category: Category, type: 'cost' | 'price'): string {
  if (type === 'cost') {
    switch (category) {
      case 'Muito abaixo da média':
        return 'Seus custos são significativamente menores que a média regional.'
      case 'Abaixo da média':
        return 'Seus custos estão abaixo do padrão da região.'
      case 'Dentro da média':
        return 'Seus custos estão alinhados com a média regional.'
      case 'Acima da média':
        return 'Seus custos estão acima do padrão regional.'
      case 'Muito acima da média':
        return 'Seus custos são significativamente maiores que a média.'
    }
  } else {
    switch (category) {
      case 'Muito abaixo da média':
        return 'Seu preço de venda está muito abaixo da média regional.'
      case 'Abaixo da média':
        return 'Seu preço está abaixo do padrão da região.'
      case 'Dentro da média':
        return 'Seu preço está alinhado com a média regional.'
      case 'Acima da média':
        return 'Seu preço está acima do padrão regional.'
      case 'Muito acima da média':
        return 'Seu preço está muito acima da média regional.'
    }
  }
}

function calculatePercentile(costCategory: Category, priceCategory: Category): number {
  // Simple percentile estimation based on category buckets
  // Lower cost + higher price = better efficiency
  let basePercentile = 50

  // Cost impact (lower is better)
  switch (costCategory) {
    case 'Muito abaixo da média':
      basePercentile += 30
      break
    case 'Abaixo da média':
      basePercentile += 15
      break
    case 'Dentro da média':
      basePercentile += 0
      break
    case 'Acima da média':
      basePercentile -= 15
      break
    case 'Muito acima da média':
      basePercentile -= 30
      break
  }

  // Price impact (higher is better)
  switch (priceCategory) {
    case 'Muito acima da média':
      basePercentile += 20
      break
    case 'Acima da média':
      basePercentile += 10
      break
    case 'Dentro da média':
      basePercentile += 0
      break
    case 'Abaixo da média':
      basePercentile -= 10
      break
    case 'Muito abaixo da média':
      basePercentile -= 20
      break
  }

  // Clamp between 5% and 95%
  return Math.max(5, Math.min(95, basePercentile))
}

function getRecommendation(costCategory: Category): string {
  switch (costCategory) {
    case 'Muito abaixo da média':
      return 'Avalie se não há risco de subnutrição.'
    case 'Abaixo da média':
      return 'Sua gestão está otimizada em relação ao padrão regional.'
    case 'Dentro da média':
      return 'Sua gestão está alinhada ao padrão regional.'
    case 'Acima da média':
      return 'Você pode estar pagando mais por insumos do que a média local.'
    case 'Muito acima da média':
      return 'Considere revisar seus fornecedores e negociar melhores preços.'
  }
}

function getCategoryColor(category: Category): string {
  switch (category) {
    case 'Muito abaixo da média':
      return 'bg-card-success-bg text-card-success-text border-success'
    case 'Abaixo da média':
      return 'bg-card-success-bg/70 text-card-success-text border-success'
    case 'Dentro da média':
      return 'bg-accent/10 text-secondary border-border'
    case 'Acima da média':
      return 'bg-card-warning-bg/70 text-card-warning-text border-warning'
    case 'Muito acima da média':
      return 'bg-card-warning-bg text-card-warning-text border-warning'
  }
}

function getCategoryIcon(category: Category) {
  switch (category) {
    case 'Muito abaixo da média':
    case 'Abaixo da média':
      return TrendingDown
    case 'Dentro da média':
      return null // No icon for "Dentro da média", use range instead
    case 'Acima da média':
    case 'Muito acima da média':
      return TrendingUp
  }
}

function calculateRangePosition(
  userValue: number,
  minValue: number,
  maxValue: number
): { position: number; displayMin: number; displayMax: number } {
  // Expand range to accommodate values outside the normal range
  const range = maxValue - minValue
  const padding = range * 0.2 // 20% padding on each side
  
  // Calculate display range (expanded to show out-of-range values)
  let displayMin = minValue - padding
  let displayMax = maxValue + padding
  
  // If user value is still outside, expand further
  if (userValue < displayMin) {
    displayMin = userValue - (range * 0.1) // Add more space below
  }
  if (userValue > displayMax) {
    displayMax = userValue + (range * 0.1) // Add more space above
  }
  
  // Calculate the full range for position calculation
  const fullRange = displayMax - displayMin
  if (fullRange === 0) {
    return { position: 50, displayMin, displayMax }
  }
  
  // Calculate position as percentage (can be slightly outside 0-100 for visual effect)
  const position = ((userValue - displayMin) / fullRange) * 100
  
  return {
    position: Math.max(0, Math.min(100, position)), // Clamp to 0-100 for display
    displayMin,
    displayMax
  }
}

function isValueAbsurd(
  userValue: number,
  regionalValue: number,
  type: 'cost' | 'price'
): boolean {
  if (userValue <= 0) return true
  
  const ratio = userValue / regionalValue
  
  // For prices, check if it's way outside typical range
  if (type === 'price') {
    // Price range is typically ±30% of regional average
    // Allow wider range for prototype (0.2x to 10x)
    return ratio > 10 || ratio < 0.2
  }
  
  // For costs, check if it's way outside typical range
  // Cost range is typically ±50% of regional average
  // Allow wider range for prototype (0.2x to 10x)
  return ratio > 10 || ratio < 0.2
}

export function CompareResult({
  userCostPerHa,
  userSalePricePerSc,
  regionalCostPerHa,
  regionalSalePricePerSc,
  sampleSize,
  onReset,
}: CompareResultProps) {
  // Check for absurd values
  const costIsAbsurd = isValueAbsurd(userCostPerHa, regionalCostPerHa, 'cost')
  const priceIsAbsurd = isValueAbsurd(userSalePricePerSc, regionalSalePricePerSc, 'price')

  if (costIsAbsurd || priceIsAbsurd) {
    return (
      <Card className="bg-card border-border rounded-none shadow-md p-5 space-y-4 w-full h-full flex flex-col">
        <h2 className="text-lg font-semibold text-secondary">
          Sua posição na região
        </h2>
        <div className="bg-accent/10 p-4 rounded-none text-sm space-y-3">
          <div>
            <p className="font-medium text-secondary">
              O valor informado parece fora do intervalo comum na região.
            </p>
            <p className="mt-2 text-muted-foreground">
              Pode confirmar se o valor está em R$/saca?
            </p>
          </div>
          {onReset && (
            <div className="flex gap-2 pt-2">
              <Button
                onClick={onReset}
                variant="default"
                className="rounded-[8px] flex-1 h-10 text-sm font-semibold"
              >
                Tentar novamente
              </Button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground pt-2 mt-auto">
          <Shield className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="leading-relaxed">
            <span className="font-semibold text-primary">Modo Anônimo</span> • Nenhum dado sai da sua fazenda.
          </span>
        </div>
      </Card>
    )
  }

  // Calculate deltas (%)
  // IMPORTANT: Delta is calculated relative to the regional average, not absolute or per-sack yield.
  // 
  // Formula:
  //   costDelta = (userCost - avgCost) / avgCost * 100
  //   salePriceDelta = (userPrice - avgPrice) / avgPrice * 100
  //
  // This gives the percentage difference from the regional average.
  // Positive values = above average, negative values = below average.
  const costDiff = ((userCostPerHa - regionalCostPerHa) / regionalCostPerHa) * 100
  const priceDiff = ((userSalePricePerSc - regionalSalePricePerSc) / regionalSalePricePerSc) * 100

  // Categorize
  const costCategory = categorizeDelta(costDiff)
  const priceCategory = categorizeDelta(priceDiff)
  const costInterpretation = getCategoryInterpretation(costCategory, 'cost')
  const priceInterpretation = getCategoryInterpretation(priceCategory, 'price')
  const percentile = calculatePercentile(costCategory, priceCategory)
  const recommendation = getRecommendation(costCategory)

  // Calculate regional ranges (mock data - in real app would come from API)
  const costRangeMin = regionalCostPerHa * 0.7
  const costRangeMax = regionalCostPerHa * 1.3
  const priceRangeMin = regionalSalePricePerSc * 0.85
  const priceRangeMax = regionalSalePricePerSc * 1.15

  const CostIcon = getCategoryIcon(costCategory)
  const PriceIcon = getCategoryIcon(priceCategory)
  const costColorClass = getCategoryColor(costCategory)
  const priceColorClass = getCategoryColor(priceCategory)
  
  // Calculate range positions for all categories
  const costRangeData = calculateRangePosition(userCostPerHa, costRangeMin, costRangeMax)
  const priceRangeData = calculateRangePosition(userSalePricePerSc, priceRangeMin, priceRangeMax)
  
  const costRangePosition = costRangeData.position
  const costDisplayMin = costRangeData.displayMin
  const costDisplayMax = costRangeData.displayMax
  
  const priceRangePosition = priceRangeData.position
  const priceDisplayMin = priceRangeData.displayMin
  const priceDisplayMax = priceRangeData.displayMax

  // State to trigger fill-in animation
  const [isAnimating, setIsAnimating] = useState(false)
  const costBarRef = useRef<HTMLDivElement>(null)
  const priceBarRef = useRef<HTMLDivElement>(null)
  const costMarkerRef = useRef<HTMLDivElement>(null)
  const priceMarkerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset animation state
    setIsAnimating(false)
    
    // Force initial state: set width to 0% directly on DOM elements
    if (costBarRef.current) {
      costBarRef.current.style.width = '0%'
      costBarRef.current.style.transition = 'none'
    }
    if (priceBarRef.current) {
      priceBarRef.current.style.width = '0%'
      priceBarRef.current.style.transition = 'none'
    }
    if (costMarkerRef.current) {
      costMarkerRef.current.style.left = '0%'
      costMarkerRef.current.style.transition = 'none'
    }
    if (priceMarkerRef.current) {
      priceMarkerRef.current.style.left = '0%'
      priceMarkerRef.current.style.transition = 'none'
    }
    
    // Use requestAnimationFrame to ensure browser has painted initial state
    const startAnimation = () => {
      // Force reflow
      if (costBarRef.current) void costBarRef.current.offsetHeight
      if (priceBarRef.current) void priceBarRef.current.offsetHeight
      
      // Now enable transitions and trigger animation
      requestAnimationFrame(() => {
        if (costBarRef.current) {
          costBarRef.current.style.transition = 'width 1.2s ease-out'
        }
        if (priceBarRef.current) {
          priceBarRef.current.style.transition = 'width 1.2s ease-out'
        }
        if (costMarkerRef.current) {
          costMarkerRef.current.style.transition = 'left 1s ease-out 0.1s'
        }
        if (priceMarkerRef.current) {
          priceMarkerRef.current.style.transition = 'left 1s ease-out 0.1s'
        }
        
        // Trigger state change to update width/left values
        setIsAnimating(true)
      })
    }
    
    // Delay to ensure component is fully mounted
    const timer = setTimeout(startAnimation, 150)
    
    return () => {
      clearTimeout(timer)
      setIsAnimating(false)
    }
  }, [])

  return (
    <Card className="bg-card border-border rounded-none shadow-md p-6 w-full h-full flex flex-col">
      {/* Header - Primary hierarchy */}
      <div className="mb-8 pb-8 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground leading-tight tracking-tight mb-1">
          Sua posição na região
        </h2>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          Comparativo com a média do Triângulo Mineiro
        </p>
      </div>

      {/* Main metrics - Secondary hierarchy */}
      <div className="space-y-5 mb-8">
        {/* Custo section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="text-base font-bold text-secondary uppercase tracking-wider">
              Custo por hectare
            </span>
          </div>
          <div className={`flex items-center gap-3 px-4 py-3.5 rounded-none border ${costColorClass}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                {CostIcon && <CostIcon className="h-4 w-4 flex-shrink-0" />}
                <div className="text-base font-bold text-foreground">
                  {costCategory}
                </div>
              </div>
              {costCategory === 'Dentro da média' || costCategory === 'Abaixo da média' || costCategory === 'Acima da média' || costCategory === 'Muito abaixo da média' || costCategory === 'Muito acima da média' ? (
                <div className="mt-2.5 space-y-2">
                  <div className="relative h-3 bg-accent/30 border border-accent/40 rounded-none overflow-hidden">
                    {/* Filled portion up to user value with animated fill-in */}
                    <div 
                      ref={costBarRef}
                      className="absolute top-0 left-0 h-full rounded-none"
                      style={{ 
                        width: isAnimating ? `${costRangePosition}%` : '0%',
                        backgroundColor: 'hsl(79, 80%, 44%, 0.4)', // Direct HSL with opacity for primary color
                        height: '100%',
                        zIndex: 1
                      }}
                    />
                    {/* Marker at user value position */}
                    <div 
                      ref={costMarkerRef}
                      className="absolute top-0 h-full w-1 bg-primary rounded-none z-10 shadow-sm"
                      style={{ 
                        left: isAnimating ? `${costRangePosition}%` : '0%',
                        transform: 'translateX(-50%)'
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground gap-2">
                    <span className="font-medium">{formatBRL(costRangeMin)}</span>
                    <span className="font-bold text-base text-foreground px-2 py-0.5 bg-primary/10 rounded">{formatBRL(userCostPerHa)}</span>
                    <span className="font-medium">{formatBRL(costRangeMax)}</span>
                  </div>
                  {costCategory !== 'Dentro da média' && (
                    <p className="text-sm leading-relaxed text-muted-foreground pt-1.5">
                      {costInterpretation}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                  {costInterpretation}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Preço section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <Package className="h-5 w-5 text-primary" />
            <span className="text-base font-bold text-secondary uppercase tracking-wider">
              Preço de venda
            </span>
          </div>
          <div className={`flex items-center gap-3 px-4 py-3.5 rounded-none border ${priceColorClass}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                {PriceIcon && <PriceIcon className="h-4 w-4 flex-shrink-0" />}
                <div className="text-base font-bold text-foreground">
                  {priceCategory}
                </div>
              </div>
              {priceCategory === 'Dentro da média' || priceCategory === 'Abaixo da média' || priceCategory === 'Acima da média' || priceCategory === 'Muito abaixo da média' || priceCategory === 'Muito acima da média' ? (
                <div className="mt-2.5 space-y-2">
                  <div className="relative h-3 bg-accent/30 border border-accent/40 rounded-none overflow-hidden">
                    {/* Filled portion up to user value with animated fill-in */}
                    <div 
                      ref={priceBarRef}
                      className="absolute top-0 left-0 h-full rounded-none"
                      style={{ 
                        width: isAnimating ? `${priceRangePosition}%` : '0%',
                        backgroundColor: 'hsl(79, 80%, 44%, 0.4)', // Direct HSL with opacity for primary color
                        height: '100%',
                        zIndex: 1
                      }}
                    />
                    {/* Marker at user value position */}
                    <div 
                      ref={priceMarkerRef}
                      className="absolute top-0 h-full w-1 bg-primary rounded-none z-10 shadow-sm"
                      style={{ 
                        left: isAnimating ? `${priceRangePosition}%` : '0%',
                        transform: 'translateX(-50%)'
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground gap-2">
                    <span className="font-medium">{formatBRL(priceRangeMin)}</span>
                    <span className="font-bold text-base text-foreground px-2 py-0.5 bg-primary/10 rounded">{formatBRL(userSalePricePerSc)}</span>
                    <span className="font-medium">{formatBRL(priceRangeMax)}</span>
                  </div>
                  {priceCategory !== 'Dentro da média' && (
                    <p className="text-sm leading-relaxed text-muted-foreground pt-1.5">
                      {priceInterpretation}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                  {priceInterpretation}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Percentile - Highlighted metric */}
      <div className="bg-primary/5 border border-primary/20 px-4 py-5 mb-8 rounded-none">
        <div className="text-center space-y-2">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
            Eficiência Regional
          </div>
          <div className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {percentile}%
          </div>
          <div className="text-sm text-muted-foreground font-medium leading-relaxed">
            Você está entre os {percentile}% mais eficientes da região
          </div>
        </div>
      </div>

      {/* Regional reference - Tertiary info */}
      <div className="border-t border-border pt-6 pb-6 mb-6 space-y-3">
        <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">
          Média Triângulo Mineiro
        </div>
        <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-semibold text-secondary">Custo:</span>
            <span className="font-medium">{formatBRL(regionalCostPerHa)}/ha</span>
            <span className="text-xs text-muted-foreground">(faixa {formatBRL(costRangeMin)}–{formatBRL(costRangeMax)})</span>
          </div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-semibold text-secondary">Preço:</span>
            <span className="font-medium">{formatBRL(priceRangeMin)}–{formatBRL(priceRangeMax)}/sc</span>
          </div>
        </div>
      </div>

      {/* Recommendation - Actionable insight */}
      <div className="bg-accent/10 border border-accent/30 p-4 rounded-none mb-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="text-sm font-bold text-secondary uppercase tracking-wider">
              Dica rápida
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              {recommendation}
            </p>
          </div>
        </div>
      </div>

      {/* Trust strip - Footer */}
      <div className="flex items-center gap-2.5 text-xs text-muted-foreground pt-6 border-t border-border mt-auto">
        <Shield className="h-4 w-4 text-primary flex-shrink-0" />
        <span className="leading-relaxed">
          <span className="font-semibold text-primary">Modo Anônimo</span> • Nenhum dado sai da sua fazenda.
        </span>
      </div>
    </Card>
  )
}

