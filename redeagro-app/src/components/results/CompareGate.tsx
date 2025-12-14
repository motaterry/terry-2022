import { useState, useEffect } from 'react'
import { Lock, Shield, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getRegionalAverages, parseBRL } from '@/lib/mock'
import { CompareResult } from './CompareResult'

export function CompareGate() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [costPerHa, setCostPerHa] = useState('')
  const [pricePerSc, setPricePerSc] = useState('')
  const [comparison, setComparison] = useState<{ costDiff: number; priceDiff: number } | null>(null)
  // Note: costDiff and priceDiff now store the actual user values, not percentages
  // Force re-render when URL query param changes (for QA override)
  const [urlKey, setUrlKey] = useState(0)

  useEffect(() => {
    // Monitor URL changes for forceN query param (for QA testing)
    // Checks periodically to catch programmatic URL changes
    const checkUrlChange = () => {
      const url = new URL(window.location.href)
      const currentForceN = url.searchParams.get('forceN')
      // Force re-render to pick up new sampleSize
      setUrlKey((prev) => prev + 1)
    }

    // Check on mount and periodically for QA testing
    checkUrlChange()
    const interval = setInterval(checkUrlChange, 1000)

    // Also listen to browser navigation
    window.addEventListener('popstate', checkUrlChange)

    return () => {
      clearInterval(interval)
      window.removeEventListener('popstate', checkUrlChange)
    }
  }, [])

  const averages = getRegionalAverages()
  const sampleSize = averages.sampleSize
  const isAnonymityBlocked = sampleSize < 10

  const handleUnlock = () => {
    setIsUnlocked(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const userCost = parseBRL(costPerHa)
    const userPrice = parseBRL(pricePerSc)

    if (isNaN(userCost) || isNaN(userPrice) || userCost <= 0 || userPrice <= 0) {
      return
    }

    // Store raw values for CompareResult component
    setComparison({ costDiff: userCost, priceDiff: userPrice })
    setIsSubmitted(true)

    console.log('Comparison submitted:', { userCost, userPrice })
  }

  if (isAnonymityBlocked && !isUnlocked) {
    return (
      <Card className="border border-border rounded-none shadow-md p-4 w-full h-full flex flex-col">
        <CardHeader className="p-0 pb-3">
          <CardTitle className="text-base font-semibold text-secondary flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            Amostra insuficiente
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Amostra insuficiente (n&lt;10). Convide produtores da sua região para liberar o comparativo.
          </p>
          <Button
            onClick={() => console.log('WhatsApp invite clicked')}
            variant="default"
            className="w-full rounded-[8px]"
          >
            enviar convite via whatsapp
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!isUnlocked) {
    return (
      <Card className="border border-border rounded-none shadow-md p-4 overflow-hidden relative h-full w-full min-h-[400px] flex flex-col">
        {/* Blurred image fill background - replaces white overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/blur.png"
            alt="Comparativo Regional - conteúdo bloqueado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lock icon overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Lock className="h-8 w-8 text-muted-foreground mb-2" />
        </div>

        {/* Button overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
          <Button
            onClick={handleUnlock}
            variant="default"
            className="rounded-[8px] w-full max-w-xs"
          >
            DESBLOQUEAR COMPARATIVO
          </Button>
        </div>
      </Card>
    )
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setComparison(null)
    setCostPerHa('')
    setPricePerSc('')
  }

  if (isSubmitted && comparison) {
    return (
      <CompareResult
        key={`compare-${comparison.costDiff}-${comparison.priceDiff}`}
        userCostPerHa={comparison.costDiff}
        userSalePricePerSc={comparison.priceDiff}
        regionalCostPerHa={averages.costPerHa}
        regionalSalePricePerSc={averages.salePricePerSc}
        sampleSize={sampleSize}
        onReset={handleReset}
      />
    )
  }

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6 w-full h-full flex flex-col">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-base font-bold text-foreground mb-2 leading-tight">
          Comparativo Regional
        </CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Compare seus custos e preços com a média da região
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2.5">
            <Label htmlFor="cost" className="text-sm font-bold text-secondary">
              Custo total (R$/ha)
            </Label>
            <Input
              id="cost"
              type="text"
              placeholder="ex: 4.180,50"
              value={costPerHa}
              onChange={(e) => setCostPerHa(e.target.value)}
              className="h-11 border-border rounded-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-base bg-background disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2.5">
            <Label htmlFor="price" className="text-sm font-bold text-secondary">
              Preço de venda (R$/sc)
            </Label>
            <Input
              id="price"
              type="text"
              placeholder="ex: 139,00"
              value={pricePerSc}
              onChange={(e) => setPricePerSc(e.target.value)}
              className="h-11 border-border rounded-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-base bg-background disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full rounded-[8px] h-12 text-base font-semibold"
          >
            COMPARAR AGORA
          </Button>

          {/* Trust strip - Tertiary info */}
          <div className="pt-5 border-t border-border flex items-start gap-3">
            <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold text-primary">Modo Anônimo • Ativado</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Nenhum dado sai da sua fazenda.</p>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

