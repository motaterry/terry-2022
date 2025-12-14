import { ArrowLeft, Filter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ResultHeaderProps {
  query?: string
  cultura?: string
  localizacao?: string
}

export function ResultHeader({ query, cultura, localizacao }: ResultHeaderProps) {
  const navigate = useNavigate()
  const displayQuery = query || `${cultura || 'Soja'} — ${localizacao || 'Uberlândia, MG'}`
  const [selectedPeriod, setSelectedPeriod] = useState<'7' | '30' | '90'>('7')

  return (
    <header className="bg-card/70 border-b border-border">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        {/* Navigation row - Secondary importance */}
        <nav aria-label="Navegação principal">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-secondary hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 -ml-2 text-xs font-medium"
              size="sm"
              aria-label="Voltar para página inicial"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
              Resultados
            </Button>
            <img
              src="/assets/Rede-agro0Logo.svg"
              alt="REDE AGRO"
              className="h-7 md:h-8 w-auto opacity-60"
              style={{
                filter: 'brightness(0) saturate(100%) invert(39%) sepia(62%) saturate(1438%) hue-rotate(58deg) brightness(94%) contrast(84%)'
              }}
            />
          </div>
        </nav>

        {/* Primary content - Main query with clear hierarchy */}
        <div className="mb-8 md:mb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            {displayQuery}
          </h1>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground/80">
            <span className="font-medium text-muted-foreground">última atualização:</span>
            <time dateTime={new Date().toISOString()} className="font-semibold text-secondary/90">hoje 06:15</time>
            <span className="text-muted-foreground/60 text-[10px]">(INMET/CEPEA/S2)</span>
          </div>
        </div>

        {/* Actions row - Secondary controls, clearly grouped */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <Button
            variant="outline"
            size="sm"
            className="border-border bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-none text-xs font-semibold h-11 px-3"
            aria-label="Abrir filtros de busca"
          >
            <Filter className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Filtros
          </Button>
          <div className="flex items-center gap-2.5" role="group" aria-label="Selecionar período">
            <span className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider hidden sm:inline">
              Período:
            </span>
            <div className="flex gap-1.5" role="radiogroup" aria-label="Período de análise">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-xs h-11 px-3 font-medium hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  selectedPeriod === '7' 
                    ? 'bg-primary text-primary-foreground font-bold hover:bg-primary/90 active:bg-primary/80' 
                    : 'bg-background'
                }`}
                aria-pressed={selectedPeriod === '7'}
                onClick={() => setSelectedPeriod('7')}
                aria-label="Período de 7 dias"
              >
                7 dias
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-xs h-11 px-3 font-medium hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  selectedPeriod === '30' 
                    ? 'bg-primary text-primary-foreground font-bold hover:bg-primary/90 active:bg-primary/80' 
                    : 'bg-background'
                }`}
                aria-pressed={selectedPeriod === '30'}
                onClick={() => setSelectedPeriod('30')}
                aria-label="Período de 30 dias"
              >
                30 dias
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-xs h-11 px-3 font-medium hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  selectedPeriod === '90' 
                    ? 'bg-primary text-primary-foreground font-bold hover:bg-primary/90 active:bg-primary/80' 
                    : 'bg-background'
                }`}
                aria-pressed={selectedPeriod === '90'}
                onClick={() => setSelectedPeriod('90')}
                aria-label="Período de 90 dias"
              >
                90 dias
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

