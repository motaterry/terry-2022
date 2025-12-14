/**
 * Search parameter normalization utilities
 * 
 * Ensures canonical formatting for URL stability, caching, and indexing:
 * - cultura: lowercase with no accents (e.g., "soja")
 * - localizacao: "cidade-uf" format (e.g., "uberlandia-mg")
 */

/**
 * Map of Brazilian cities to their UF (state) codes
 * This mapping covers the cities available in LOCATION_OPTIONS
 */
const CITY_TO_UF: Record<string, string> = {
  // Minas Gerais
  'uberlandia': 'mg',
  'patrocinio': 'mg',
  'araguari': 'mg',
  'uberaba': 'mg',
  'ituiutaba': 'mg',
  'monte carmelo': 'mg',
  'araxa': 'mg',
  'carmo do paranaiba': 'mg',
  'prata': 'mg',
  'tupaciguara': 'mg',
  'patos de minas': 'mg',
  
  // Goiás
  'catalao': 'go',
  'goiania': 'go',
  'rio verde': 'go',
  'jatai': 'go',
  'cristalina': 'go',
  'luziania': 'go',
  'formosa': 'go',
  
  // Distrito Federal
  'brasilia': 'df',
  
  // Mato Grosso do Sul
  'dourados': 'ms',
  'campo grande': 'ms',
}

/**
 * Remove accents from a string
 */
function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/**
 * Normalize cultura parameter
 * Converts to lowercase and removes accents
 * 
 * @example
 * normalizeCultura("Café") // "cafe"
 * normalizeCultura("Soja") // "soja"
 * normalizeCultura("Cana-de-açúcar") // "cana-de-acucar"
 */
export function normalizeCultura(cultura: string): string {
  if (!cultura) return ''
  return removeAccents(cultura.trim().toLowerCase())
}

/**
 * Normalize localizacao parameter
 * Converts to "cidade-uf" format (lowercase, no accents, hyphenated)
 * 
 * @example
 * normalizeLocalizacao("Uberlândia") // "uberlandia-mg"
 * normalizeLocalizacao("Rio Verde") // "rio-verde-go"
 * normalizeLocalizacao("Brasília") // "brasilia-df"
 * normalizeLocalizacao("uberlandia-mg") // "uberlandia-mg" (already normalized)
 */
export function normalizeLocalizacao(localizacao: string): string {
  if (!localizacao) return ''
  
  // Remove accents and convert to lowercase
  const normalized = removeAccents(localizacao.trim().toLowerCase())
  
  // Check if already in "cidade-uf" format (has hyphen and ends with 2-letter code)
  const alreadyNormalizedMatch = normalized.match(/^(.+)-([a-z]{2})$/)
  if (alreadyNormalizedMatch) {
    const [, citySlug, uf] = alreadyNormalizedMatch
    // Verify UF is valid (2 letters)
    if (uf.length === 2) {
      return normalized // Already normalized, return as-is
    }
  }
  
  // Extract city name (remove any existing UF suffix like ", MG")
  const cityMatch = normalized.match(/^([^,]+)/)
  const cityName = cityMatch ? cityMatch[1].trim() : normalized
  
  // Look up UF from mapping
  const uf = CITY_TO_UF[cityName]
  
  if (!uf) {
    // If city not found in mapping, return normalized city name only
    // This handles edge cases gracefully
    return cityName.replace(/\s+/g, '-')
  }
  
  // Format as "cidade-uf"
  const citySlug = cityName.replace(/\s+/g, '-')
  return `${citySlug}-${uf}`
}

/**
 * Map of normalized cultura names (without accents) to their display names (with accents)
 * This ensures proper Portuguese spelling when displaying cultura names
 */
const CULTURA_ACCENT_MAP: Record<string, string> = {
  'cafe': 'Café',
  'cana-de-acucar': 'Cana-de-açúcar',
  'algodao': 'Algodão',
  'feijao': 'Feijão',
  'arroz': 'Arroz',
  'trigo': 'Trigo',
  'soja': 'Soja',
  'milho': 'Milho',
  'girassol': 'Girassol',
  'tomate': 'Tomate',
  'cebola': 'Cebola',
  'batata': 'Batata',
  'mandioca': 'Mandioca',
  'sorgo': 'Sorgo',
  'amendoim': 'Amendoim',
  'tabaco': 'Tabaco',
  'laranja': 'Laranja',
  'limao': 'Limão',
  'uva': 'Uva',
  'banana': 'Banana',
}

/**
 * Denormalize cultura for display
 * Restores proper Portuguese accents and capitalizes first letter of each word
 * 
 * @example
 * denormalizeCultura("cafe") // "Café"
 * denormalizeCultura("cana-de-acucar") // "Cana-de-açúcar"
 * denormalizeCultura("soja") // "Soja"
 */
export function denormalizeCultura(normalized: string): string {
  if (!normalized) return ''
  
  // Check if we have a mapping for this normalized value
  if (CULTURA_ACCENT_MAP[normalized]) {
    return CULTURA_ACCENT_MAP[normalized]
  }
  
  // Fallback: Capitalize first letter of each word (split by hyphens)
  // This handles edge cases where a cultura might not be in our map
  return normalized
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-')
}

/**
 * Denormalize localizacao for display
 * Converts from "cidade-uf" format back to display format
 * 
 * @example
 * denormalizeLocalizacao("uberlandia-mg") // "Uberlândia, MG"
 */
export function denormalizeLocalizacao(normalized: string): string {
  if (!normalized) return ''
  
  // Split by last hyphen to separate city and UF
  const lastHyphenIndex = normalized.lastIndexOf('-')
  if (lastHyphenIndex === -1) {
    // No hyphen found, return capitalized
    return normalized.charAt(0).toUpperCase() + normalized.slice(1)
  }
  
  const citySlug = normalized.slice(0, lastHyphenIndex)
  const uf = normalized.slice(lastHyphenIndex + 1).toUpperCase()
  
  // Convert slug back to city name (replace hyphens with spaces)
  const cityName = citySlug.replace(/-/g, ' ')
  
  // Capitalize first letter of each word
  const cityDisplay = cityName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return `${cityDisplay}, ${uf}`
}

