import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip,
  CartesianGrid,
  Brush
} from 'recharts'
import { Download, Info, AlertCircle, Loader2 } from 'lucide-react'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Type definitions
export interface PriceData {
  day: string
  price: number
  date?: string // ISO date string for export
}

export type TimePeriod = '7d' | '30d' | '90d'

export interface PriceCardImageProps {
  data?: PriceData[]
  isLoading?: boolean
  error?: Error | null
  onRetry?: () => void
  timePeriod?: TimePeriod
  onTimePeriodChange?: (period: TimePeriod) => void
  showControls?: boolean
  showYAxis?: boolean
  showGrid?: boolean
  showDots?: boolean
  lastUpdate?: string
  dataSource?: string
}

// Mock data generators for different time periods
const generateMockData = (period: TimePeriod): PriceData[] => {
  const days = period === '7d' ? 7 : period === '30d' ? 30 : 90
  const basePrice = 142.5
  const data: PriceData[] = []
  
  const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
  
  for (let i = 0; i < days; i++) {
    const variation = (Math.random() - 0.5) * 3 // Random variation between -1.5 and +1.5
    const price = basePrice + variation + (i * 0.1) // Slight upward trend
    
    if (period === '7d') {
      data.push({
        day: dayNames[i % 7],
        price: Number(price.toFixed(2)),
        date: new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000).toISOString()
      })
    } else {
      const date = new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000)
      data.push({
        day: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        price: Number(price.toFixed(2)),
        date: date.toISOString()
      })
    }
  }
  
  return data
}

// Data validation
const validateData = (data: PriceData[]): { isValid: boolean; error?: string } => {
  if (!data || data.length === 0) {
    return { isValid: false, error: 'Nenhum dado disponível' }
  }

  const isValid = data.every(item => 
    typeof item.price === 'number' && 
    typeof item.day === 'string' &&
    !isNaN(item.price) &&
    isFinite(item.price) &&
    item.price >= 0
  )

  if (!isValid) {
    return { isValid: false, error: 'Dados inválidos detectados' }
  }

  return { isValid: true }
}

// Calculate safe domain for Y-axis
const calculateDomain = (data: PriceData[]): [number, number] => {
  const prices = data.map(d => d.price).filter(p => typeof p === 'number' && isFinite(p))
  
  if (prices.length === 0) {
    return [0, 100]
  }

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const padding = (maxPrice - minPrice) * 0.1 || 1 // 10% padding or minimum 1

  return [
    Math.max(0, minPrice - padding),
    maxPrice + padding
  ]
}

// Empty state component
const EmptyState = ({ onRetry }: { onRetry?: () => void }) => (
  <div 
    className="flex flex-col items-center justify-center h-full p-4 min-h-[192px]"
    role="status"
    aria-live="polite"
  >
    <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" aria-hidden="true" />
    <p className="text-sm text-muted-foreground text-center mb-1">
      Dados não disponíveis
    </p>
    <p className="text-xs text-muted-foreground/70 text-center mb-4">
      Não há dados para exibir no gráfico.
    </p>
    {onRetry && (
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="mt-2"
      >
        Tentar novamente
      </Button>
    )}
  </div>
)

// Error state component
const ErrorState = ({ error, onRetry }: { error: Error | string; onRetry?: () => void }) => (
  <div 
    className="flex flex-col items-center justify-center h-full p-4 min-h-[192px]"
    role="alert"
    aria-live="assertive"
  >
    <AlertCircle className="h-8 w-8 text-destructive mb-2" aria-hidden="true" />
    <p className="text-sm text-muted-foreground text-center mb-1">
      Erro ao carregar gráfico
    </p>
    <p className="text-xs text-muted-foreground/70 text-center mb-4">
      {typeof error === 'string' ? error : error.message || 'Ocorreu um erro inesperado'}
    </p>
    {onRetry && (
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="mt-2"
      >
        Tentar novamente
      </Button>
    )}
  </div>
)

// Loading state component
const LoadingState = () => (
  <div 
    className="flex flex-col items-center justify-center h-full p-4 min-h-[192px]"
    role="status"
    aria-live="polite"
    aria-label="Carregando dados do gráfico"
  >
    <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" aria-hidden="true" />
    <p className="text-sm text-muted-foreground text-center">
      Carregando dados...
    </p>
  </div>
)

export function PriceCardImage({
  data: externalData,
  isLoading = false,
  error = null,
  onRetry,
  timePeriod: externalTimePeriod = '7d',
  onTimePeriodChange,
  showControls = true,
  showYAxis = false,
  showGrid = false,
  showDots = true,
  lastUpdate,
  dataSource = 'CEPEA'
}: PriceCardImageProps) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>(externalTimePeriod)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  // Use external data if provided, otherwise generate mock data
  const data = useMemo(() => {
    if (externalData) {
      return externalData
    }
    return generateMockData(timePeriod)
  }, [externalData, timePeriod])

  // Validate data
  const validation = useMemo(() => validateData(data), [data])
  const domain = useMemo(() => calculateDomain(data), [data])

  // Handle time period change
  const handleTimePeriodChange = useCallback((newPeriod: TimePeriod) => {
    setTimePeriod(newPeriod)
    setFocusedIndex(null)
    onTimePeriodChange?.(newPeriod)
  }, [onTimePeriodChange])

  // Export chart data as CSV
  const handleExport = useCallback(() => {
    if (!data || data.length === 0) return

    const headers = ['Data', 'Dia', 'Preço (R$/sc)']
    const rows = data.map(item => [
      item.date || '',
      item.day,
      item.price.toFixed(2).replace('.', ',')
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `precos_${timePeriod}_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [data, timePeriod])

  // Keyboard navigation
  useEffect(() => {
    if (!chartRef.current) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!data || data.length === 0) return

      let newIndex = focusedIndex ?? 0

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          newIndex = Math.max(0, (focusedIndex ?? data.length - 1) - 1)
          setFocusedIndex(newIndex)
          break
        case 'ArrowRight':
          e.preventDefault()
          newIndex = Math.min(data.length - 1, (focusedIndex ?? -1) + 1)
          setFocusedIndex(newIndex)
          break
        case 'Home':
          e.preventDefault()
          setFocusedIndex(0)
          break
        case 'End':
          e.preventDefault()
          setFocusedIndex(data.length - 1)
          break
        case 'Escape':
          setFocusedIndex(null)
          break
      }
    }

    chartRef.current.addEventListener('keydown', handleKeyDown)
    return () => {
      chartRef.current?.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, focusedIndex])

  // Render chart content
  const renderChart = () => {
    if (isLoading) {
      return <LoadingState />
    }

    if (error) {
      return <ErrorState error={error} onRetry={onRetry} />
    }

    if (!validation.isValid) {
      return <EmptyState onRetry={onRetry} />
    }

    const primaryColor = 'hsl(var(--primary))'
    const primary70Color = 'hsl(var(--primary-70-solid))'
    const foregroundColor = 'hsl(var(--foreground))'
    const mutedForeground = 'hsl(var(--muted-foreground))'
    const borderColor = 'hsl(var(--border))'
    const cardBg = 'hsl(var(--card))'

    return (
      <div className="w-full h-full flex flex-col bg-transparent">
        {/* Controls */}
        {showControls && (
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Select value={timePeriod} onValueChange={handleTimePeriodChange}>
                <SelectTrigger className="h-10 sm:h-8 text-xs sm:text-xs w-[100px] bg-background/95 backdrop-blur-sm touch-manipulation">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent 
                  position="item-aligned"
                  sideOffset={4}
                  className="bg-white dark:bg-card border-border shadow-lg [&[data-state=open]]:animate-in [&[data-state=closed]]:animate-out [&[data-state=closed]]:fade-out-0 [&[data-state=open]]:fade-in-0 [&[data-side=bottom]]:slide-in-from-top-1"
                >
                  <SelectItem value="7d">7 dias</SelectItem>
                  <SelectItem value="30d">30 dias</SelectItem>
                  <SelectItem value="90d">90 dias</SelectItem>
                </SelectContent>
              </Select>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 sm:h-8 sm:w-8 touch-manipulation"
                      onClick={handleExport}
                      aria-label="Exportar dados do gráfico"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Exportar dados (CSV)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="h-10 w-10 sm:h-8 sm:w-8 flex items-center justify-center text-muted-foreground cursor-help touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      aria-label="Informações sobre como usar o gráfico"
                    >
                      <Info className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[200px] sm:max-w-[200px]">
                    <p className="font-medium mb-1">Como usar o gráfico</p>
                    <p className="text-xs mb-1">
                      Toque no gráfico para ver valores detalhados.
                    </p>
                    <p className="text-xs mb-1">
                      Use as setas do teclado para navegar entre os pontos.
                    </p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Fonte: {dataSource}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {lastUpdate && (
              <p className="text-xs sm:text-[10px] text-muted-foreground/70">
                Atualizado: {lastUpdate}
              </p>
            )}
          </div>
        )}

        {/* Chart */}
        <div 
          ref={chartRef}
          className="flex-1 min-h-0 rounded-lg"
          style={{ overflow: 'visible' }}
          role="img"
          aria-label={`Gráfico de tendência de preços dos últimos ${timePeriod === '7d' ? '7 dias' : timePeriod === '30d' ? '30 dias' : '90 dias'}`}
          tabIndex={0}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ top: 15, right: 15, left: showYAxis ? 20 : 15, bottom: 15 }}
              accessibilityLayer
            >
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={primary70Color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={primary70Color} stopOpacity={0} />
                </linearGradient>
              </defs>
              
              {showGrid && (
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={borderColor}
                  opacity={0.3}
                />
              )}
              
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: timePeriod === '7d' ? 12 : 10, 
                  fill: mutedForeground, 
                  fontWeight: 500 
                }}
                interval={timePeriod === '7d' ? 0 : 'preserveStartEnd'}
              />
              
              {showYAxis && (
                <YAxis 
                  domain={domain}
                  tick={{ fontSize: 10, fill: mutedForeground }}
                  tickFormatter={(value) => `R$ ${value.toFixed(0)}`}
                  axisLine={false}
                  tickLine={false}
                />
              )}
              
              <RechartsTooltip 
                contentStyle={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: 'var(--radius)',
                  fontSize: '12px',
                  padding: '8px 12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                labelStyle={{ color: mutedForeground, fontWeight: 600 }}
                formatter={(value: number) => [`R$ ${value.toFixed(2).replace('.', ',')}`, 'Preço']}
                cursor={{ stroke: primaryColor, strokeWidth: 1 }}
              />
              
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={primaryColor} 
                strokeWidth={2.5}
                dot={showDots ? { 
                  fill: foregroundColor, 
                  r: 6, 
                  strokeWidth: 2, 
                  stroke: cardBg 
                } : false}
                activeDot={{ 
                  r: 8, 
                  strokeWidth: 2,
                  stroke: cardBg,
                  fill: foregroundColor
                }}
                isAnimationActive={true}
                animationDuration={300}
              />
              
              {timePeriod !== '7d' && (
                <Brush 
                  dataKey="day" 
                  height={30}
                  stroke={borderColor}
                  fill={cardBg}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Screen reader description */}
        <p id="chart-description" className="sr-only">
          Gráfico de linha mostrando a variação de preços de {timePeriod === '7d' ? 'segunda a domingo' : `últimos ${timePeriod === '30d' ? '30' : '90'} dias`}.
          {data.length > 0 && (
            <>
              {' '}Valores variam entre R$ {Math.min(...data.map(d => d.price)).toFixed(2).replace('.', ',')} 
              {' '}e R$ {Math.max(...data.map(d => d.price)).toFixed(2).replace('.', ',')} por saca.
            </>
          )}
        </p>
      </div>
    )
  }

  return (
    <ErrorBoundary fallback={<ErrorState error="Erro ao renderizar gráfico" onRetry={onRetry} />}>
      <div 
        className="w-full h-48 flex flex-col border-b border-border mb-6"
        style={{ 
          background: `radial-gradient(50% 50% at 50% 100%, hsl(var(--primary-70-solid) / 0.15), hsl(var(--primary-70-solid) / 0))`
        }}
        aria-describedby="chart-description"
      >
        {renderChart()}
      </div>
    </ErrorBoundary>
  )
}
