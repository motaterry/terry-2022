import { Sun, Cloud, CloudRain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getWeather7d } from '@/lib/mock'

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  cloudRain: CloudRain,
}

export function WeatherCard() {
  const data = getWeather7d()

  return (
    <Card className="border border-border rounded-none shadow-md hover:shadow-lg transition-shadow p-6">
      <CardHeader className="p-0 pb-5">
        <CardTitle className="text-xs font-bold text-secondary-text-dark uppercase tracking-wider">
          Clima 7 dias
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Primary content - Weather forecast grid */}
        <div className="grid grid-cols-7 gap-3.5 mb-5">
          {data.days.map((day, index) => {
            const Icon = iconMap[day.icon]
            return (
              <div key={index} className="text-center space-y-2">
                <div className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wide">
                  {day.date.split(' ')[0]}
                </div>
                <Icon className="h-7 w-7 mx-auto text-primary" />
                <div className="space-y-0.5">
                  <div className="text-base font-bold text-foreground leading-tight">{day.temp.max}°</div>
                  <div className="text-xs text-muted-foreground/80">{day.temp.min}°</div>
                </div>
                {day.rain > 0 && (
                  <div className="text-xs font-bold text-info mt-1">{day.rain}mm</div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Secondary info - Summary */}
        <div className="pt-5 border-t border-border space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground/70">
              Precipitação acumulada:
            </span>
            <span className="text-xs font-bold text-secondary-text-dark">{data.accumulated} mm</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground/70">
              Temperatura máxima:
            </span>
            <span className="text-xs font-bold text-secondary-text-dark">{data.maxTemp}°</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

