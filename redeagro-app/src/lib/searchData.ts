// Mock data for cultura (crops) and location suggestions
// This can be easily replaced with API calls later

export interface CulturaOption {
  name: string
  priceChange?: number // Percentage change (positive = up, negative = down)
  trend?: 'up' | 'down' | 'stable'
}

export const CULTURA_OPTIONS: CulturaOption[] = [
  { name: 'Café', priceChange: 2.5, trend: 'up' },
  { name: 'Milho', priceChange: -1.2, trend: 'down' },
  { name: 'Soja', priceChange: 3.8, trend: 'up' },
  { name: 'Algodão', priceChange: 0.5, trend: 'stable' },
  { name: 'Cana-de-açúcar', priceChange: 1.9, trend: 'up' },
  { name: 'Feijão', priceChange: -2.1, trend: 'down' },
  { name: 'Arroz', priceChange: 0.3, trend: 'stable' },
  { name: 'Trigo', priceChange: 4.2, trend: 'up' },
  { name: 'Girassol', priceChange: -0.8, trend: 'down' },
  { name: 'Tomate', priceChange: 5.1, trend: 'up' },
  { name: 'Cebola', priceChange: -1.5, trend: 'down' },
  { name: 'Batata', priceChange: 2.3, trend: 'up' },
  { name: 'Mandioca', priceChange: 0.0, trend: 'stable' },
  { name: 'Sorgo', priceChange: 1.1, trend: 'up' },
  { name: 'Amendoim', priceChange: -0.6, trend: 'down' },
  { name: 'Tabaco', priceChange: 0.8, trend: 'stable' },
  { name: 'Laranja', priceChange: 3.2, trend: 'up' },
  { name: 'Limão', priceChange: -2.4, trend: 'down' },
  { name: 'Uva', priceChange: 1.7, trend: 'up' },
  { name: 'Banana', priceChange: -0.3, trend: 'down' },
]

export const LOCATION_OPTIONS = [
  'Uberlândia',
  'Patrocínio',
  'Araguari',
  'Uberaba',
  'Ituiutaba',
  'Monte Carmelo',
  'Araxá',
  'Carmo do Paranaíba',
  'Prata',
  'Tupaciguara',
  'Catalão',
  'Goiânia',
  'Rio Verde',
  'Jataí',
  'Cristalina',
  'Luziânia',
  'Formosa',
  'Brasília',
  'Dourados',
  'Campo Grande',
]

/**
 * Filter options based on search query
 * Case-insensitive partial matching
 */
export function filterOptions(options: string[], query: string): string[] {
  if (!query.trim()) {
    return options
  }
  
  const lowerQuery = query.toLowerCase().trim()
  return options.filter(option =>
    option.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Filter cultura options based on search query
 */
export function filterCulturaOptions(options: CulturaOption[], query: string): CulturaOption[] {
  if (!query.trim()) {
    return options
  }
  
  const lowerQuery = query.toLowerCase().trim()
  return options.filter(option =>
    option.name.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Highlight matching text in a suggestion
 * Returns an array of text segments with highlighting info
 */
export function highlightMatch(text: string, query: string): Array<{ text: string; highlight: boolean }> {
  if (!query.trim()) {
    return [{ text, highlight: false }]
  }

  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase().trim()
  const index = lowerText.indexOf(lowerQuery)

  if (index === -1) {
    return [{ text, highlight: false }]
  }

  const segments: Array<{ text: string; highlight: boolean }> = []
  
  if (index > 0) {
    segments.push({ text: text.slice(0, index), highlight: false })
  }
  
  segments.push({ text: text.slice(index, index + query.length), highlight: true })
  
  if (index + query.length < text.length) {
    segments.push({ text: text.slice(index + query.length), highlight: false })
  }

  return segments
}

