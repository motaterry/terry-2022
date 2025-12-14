// src/lib/location.ts

export type LocationSlug = `${string}-${string}`; // "uberlandia-mg"

export type LocationSource = 'forceLoc' | 'lastSearch' | 'ip' | 'locale' | 'default';

export interface LocationResult {
  location: LocationSlug;
  source: LocationSource;
}

const SUSPICIOUS_CITIES = ['sao paulo', 'barueri', 'campinas'];

export function slugifyCityState(city: string, uf: string): LocationSlug {
  const c = city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
  const s = uf.toLowerCase().trim();
  return `${c}-${s}` as LocationSlug;
}

export function isSuspicious(cityLower: string) {
  return SUSPICIOUS_CITIES.includes(cityLower);
}

export function getLastSearch(): LocationSlug | null {
  const last = localStorage.getItem('lastSearchLocation');
  return last && /^[a-z0-9-]{3,}$/.test(last) ? (last as LocationSlug) : null;
}

export function setLastSearch(slug: LocationSlug) {
  localStorage.setItem('lastSearchLocation', slug);
}

export function getForceLoc(): LocationSlug | null {
  const url = new URL(window.location.href);
  const qp = url.searchParams.get('forceLoc');
  if (qp && /^[a-z0-9-]{3,}$/.test(qp)) return qp as LocationSlug;
  const ls = localStorage.getItem('forceLoc');
  return ls && /^[a-z0-9-]{3,}$/.test(ls) ? (ls as LocationSlug) : null;
}

// IP-based (no permission). Prefer https endpoint.
// Fallback silencioso para default se der erro.
export async function getLocationFromIP(opts?: { timeoutMs?: number }): Promise<LocationSlug | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts?.timeoutMs ?? 2200);
  try {
    const res = await fetch('https://ipwho.is/', { signal: controller.signal });
    if (!res.ok) return null;
    const data = await res.json();
    const city = (data?.city ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const regionCode = (data?.region_code ?? '').toLowerCase();
    if (!city || !regionCode) return null;
    if (isSuspicious(city)) return null; // evita falsos positivos de provedores
    return slugifyCityState(city, regionCode);
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// Locale heuristic (opcional, baixo peso)
export function getLocationFromLocale(): LocationSlug | null {
  const locale = navigator.language || navigator.languages?.[0] || '';
  if (locale.toLowerCase().startsWith('pt-br')) {
    return 'uberlandia-mg';
  }
  return null;
}

// Orquestrador principal
export async function getLocationSmart(): Promise<LocationResult> {
  // 0) QA override
  const forced = getForceLoc();
  if (forced) return { location: forced, source: 'forceLoc' };

  // 1) Última busca do usuário
  const last = getLastSearch();
  if (last) return { location: last, source: 'lastSearch' };

  // 2) IP silencioso
  const ipLoc = await getLocationFromIP();
  if (ipLoc) return { location: ipLoc, source: 'ip' };

  // 3) Locale heuristic
  const localeLoc = getLocationFromLocale();
  if (localeLoc) return { location: localeLoc, source: 'locale' };

  // 4) Default do app
  return { location: 'uberlandia-mg', source: 'default' };
}

