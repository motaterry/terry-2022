import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function WhatsAppAlerts() {
  const [alerts, setAlerts] = useState({
    price: false,
    climate: false,
    ndvi: false,
  })
  const [phone, setPhone] = useState('')

  const handleToggle = (key: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleActivate = () => {
    console.log('WhatsApp alerts activated:', { alerts, phone })
  }

  const handleTest = () => {
    console.log('WhatsApp test sent:', { phone })
  }

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-base font-bold text-foreground mb-2 leading-tight">
          Alertas WhatsApp
        </CardTitle>
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          Receba notificações sobre mudanças importantes
        </p>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div className="space-y-2.5">
          <Label className="text-xs font-bold text-secondary/90">Telefone</Label>
          <Input
            type="tel"
            placeholder="(34) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 border-border rounded-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-base bg-background disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-3.5">
          <Label className="text-xs font-bold text-secondary/90">Receber alertas sobre:</Label>
          <div className="space-y-2">
            {[
              { key: 'price', label: 'Preço' },
              { key: 'climate', label: 'Clima' },
              { key: 'ndvi', label: 'NDVI' },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center gap-3 cursor-pointer p-2.5 hover:bg-accent rounded-none transition-colors min-h-[2.5rem]"
              >
                <Checkbox
                  checked={alerts[key as keyof typeof alerts]}
                  onChange={() => handleToggle(key as keyof typeof alerts)}
                />
                <span className="text-xs font-semibold text-secondary/90 flex-1">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2 w-full">
          <Button
            onClick={handleActivate}
            variant="default"
            size="lg"
            className="flex-1 min-w-0 rounded-[8px] h-11 font-semibold"
          >
            ATIVAR
          </Button>
          <Button
            onClick={handleTest}
            variant="outline"
            size="lg"
            className="flex-1 min-w-0 rounded-[8px] h-11 font-medium"
          >
            ENVIAR TESTE
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

