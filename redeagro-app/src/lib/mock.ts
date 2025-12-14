// Mock data for Results page - Triângulo Mineiro region

export interface PriceData {
  price: number
  change7d: number
  range: { min: number; max: number }
  sparkline: number[]
}

export interface WeatherData {
  days: Array<{
    date: string
    icon: 'sun' | 'cloud' | 'rain' | 'cloudRain'
    temp: { max: number; min: number }
    rain: number
  }>
  accumulated: number
  maxTemp: number
}

export interface NDVIData {
  value: number
  trend: 'up' | 'down' | 'stable'
  lastUpdate: string
}

export interface RegionalAverages {
  costPerHa: number
  salePricePerSc: number
  sampleSize: number
}

export function getPrice(): PriceData {
  return {
    price: 139.0,
    change7d: 2.3,
    range: { min: 134, max: 142 },
    sparkline: [135, 137, 136, 138, 139, 140, 139],
  }
}

export function getWeather7d(): WeatherData {
  const today = new Date()
  return {
    days: [
      {
        date: formatDate(today),
        icon: 'sun',
        temp: { max: 31, min: 18 },
        rain: 0,
      },
      {
        date: formatDate(addDays(today, 1)),
        icon: 'cloud',
        temp: { max: 28, min: 17 },
        rain: 5,
      },
      {
        date: formatDate(addDays(today, 2)),
        icon: 'rain',
        temp: { max: 25, min: 16 },
        rain: 12,
      },
      {
        date: formatDate(addDays(today, 3)),
        icon: 'cloud',
        temp: { max: 27, min: 15 },
        rain: 3,
      },
      {
        date: formatDate(addDays(today, 4)),
        icon: 'sun',
        temp: { max: 30, min: 19 },
        rain: 0,
      },
      {
        date: formatDate(addDays(today, 5)),
        icon: 'cloudRain',
        temp: { max: 29, min: 18 },
        rain: 8,
      },
      {
        date: formatDate(addDays(today, 6)),
        icon: 'cloud',
        temp: { max: 26, min: 17 },
        rain: 2,
      },
    ],
    accumulated: 30,
    maxTemp: 31,
  }
}

export function getNDVI(): NDVIData {
  return {
    value: 0.72,
    trend: 'up',
    lastUpdate: 'há 3 dias',
  }
}

/**
 * QA Override: Permite alterar o sampleSize via URL query param ou localStorage
 * 
 * Uso:
 * - URL: ?forceN=5 (amostra insuficiente) ou ?forceN=15 (comparativo liberado)
 * - localStorage: localStorage.setItem('forceN', '5')
 * 
 * @returns número forçado ou null se não houver override
 */
export function getForcedSampleSize(): number | null {
  // Verifica query param primeiro (tem prioridade)
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href)
    const qp = url.searchParams.get('forceN')
    if (qp) {
      const value = Number(qp)
      if (!isNaN(value) && value > 0) {
        return value
      }
    }

    // Verifica localStorage
    const ls = localStorage.getItem('forceN')
    if (ls) {
      const value = Number(ls)
      if (!isNaN(value) && value > 0) {
        return value
      }
    }
  }

  return null
}

export function getRegionalAverages(params?: unknown): RegionalAverages {
  const forced = getForcedSampleSize()
  const sampleSize = forced ?? 15 // valor default: suficiente (>= 10). Use ?forceN=5 para testar "Amostra insuficiente"

  return {
    costPerHa: 4200,
    salePricePerSc: 139,
    sampleSize,
  }
}

// Helper functions
function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

// BRL parsing helper - supports both formats
export function parseBRL(value: string): number {
  // Remove non-numeric except comma and dot
  const cleaned = value.replace(/[^\d,.-]/g, '')
  
  // If contains comma, treat as Brazilian format (4.180,50)
  if (cleaned.includes(',')) {
    return parseFloat(cleaned.replace(/\./g, '').replace(',', '.'))
  }
  
  // Otherwise treat as standard format (4180.50)
  return parseFloat(cleaned)
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}



