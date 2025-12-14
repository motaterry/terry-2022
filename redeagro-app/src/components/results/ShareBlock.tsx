import { useState } from 'react'
import { Link2, Copy, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ShareBlock() {
  const [copied, setCopied] = useState(false)
  const fakeUrl = 'https://redeagro.com.br/resultados/soja-uberlandia-mg'

  const handleGenerate = () => {
    console.log('Link generated:', fakeUrl)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fakeUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      console.log('Link copied:', fakeUrl)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6">
      <CardContent className="p-0 space-y-4">
        <div className="flex items-center gap-2.5">
          <Link2 className="h-5 w-5 text-primary/90" />
          <h3 className="text-base font-bold text-foreground leading-tight">
            Compartilhar resultados
          </h3>
        </div>
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          Gere um link público para compartilhar estes resultados
        </p>
        <div className="flex flex-col gap-2 pt-2">
          <Button
            onClick={handleGenerate}
            variant="default"
            size="lg"
            className="w-full rounded-[8px] h-11 font-medium"
          >
            Gerar link público
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="lg"
            className="w-full border-border bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[8px] h-11 font-medium"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copiado
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copiar link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
