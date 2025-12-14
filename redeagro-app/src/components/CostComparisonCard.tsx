import { useState } from 'react'
import { Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function CostComparisonCard() {
  const [totalCost, setTotalCost] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const handleCompare = () => {
    const cost = parseFloat(totalCost)
    const price = parseFloat(salePrice)
    
    if (!isNaN(cost) && !isNaN(price) && cost > 0 && price > 0) {
      // Mock calculation: assuming 60 sc/ha average yield
      const yieldPerHa = 60
      const revenue = price * yieldPerHa
      const profit = revenue - cost
      const profitMargin = (profit / revenue) * 100
      setResult(profitMargin)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border border-border shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader className="p-6 pb-6">
        <CardTitle className="text-base font-bold text-foreground mb-2 leading-tight">Comparativo de Custos</CardTitle>
        <CardDescription className="text-xs text-muted-foreground/80 leading-relaxed">
          Calcule a rentabilidade da sua lavoura
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-6">
        <div className="space-y-2.5">
          <Label htmlFor="total-cost" className="text-xs font-bold text-secondary-text-dark">
            Custo total (R$/ha)
          </Label>
          <Input
            id="total-cost"
            type="number"
            placeholder="Ex: 3500"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            className="h-11 text-base border-border"
          />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="sale-price" className="text-xs font-bold text-secondary-text-dark">
            Preço de venda (R$/sc)
          </Label>
          <Input
            id="sale-price"
            type="number"
            placeholder="Ex: 145"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            className="h-11 text-base border-border"
          />
        </div>
        <Button
          onClick={handleCompare}
          size="lg"
          className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md transition-all rounded-[8px]"
        >
          COMPARAR AGORA
        </Button>
        {result !== null && (
          <div className="pt-5 border-t border-border">
            <div className="text-center space-y-2.5">
              <div className="text-xs font-medium text-muted-foreground/80">Margem de lucro estimada:</div>
              <div className={`text-4xl md:text-5xl font-bold leading-none tracking-tight ${result >= 0 ? 'text-success' : 'text-danger'}`}>
                {result >= 0 ? '+' : ''}{result.toFixed(1)}%
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center gap-2.5 text-[10px] text-muted-foreground/70">
        <Shield className="h-4 w-4 text-primary-text-dark" />
        <span className="leading-relaxed">Seus dados são 100% anônimos</span>
      </CardFooter>
    </Card>
  )
}

