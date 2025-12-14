import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from './pages/Home'
import { Compare } from './pages/Compare'
import { Results } from './pages/Results'
import { normalizeCultura, normalizeLocalizacao, denormalizeCultura, denormalizeLocalizacao } from './lib/normalizeSearch'

// Skip navigation link component
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-none focus:outline-2 focus:outline-white focus:outline-offset-2 focus:font-semibold focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:clip-auto focus:whitespace-normal"
    >
      Pular para conteúdo principal
    </a>
  )
}

// Page title management
function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    let title = 'RedeAgro'
    
    if (location.pathname === '/') {
      title = 'RedeAgro - Preço, Clima e Desempenho da Lavoura'
    } else if (location.pathname === '/results') {
      const params = new URLSearchParams(location.search)
      // Read params, normalize them (for backward compatibility), then denormalize for display
      const rawCultura = params.get('cultura') || 'soja'
      const rawLocalizacao = params.get('localizacao') || 'uberlandia-mg'
      const normalizedCultura = normalizeCultura(rawCultura)
      const normalizedLocalizacao = normalizeLocalizacao(rawLocalizacao)
      const cultura = denormalizeCultura(normalizedCultura)
      const localizacao = denormalizeLocalizacao(normalizedLocalizacao)
      title = `RedeAgro - ${cultura} em ${localizacao}`
    } else if (location.pathname === '/compare') {
      title = 'RedeAgro - Comparativo de Custos'
    }
    
    document.title = title
  }, [location])

  return null
}

function AppContent() {
  return (
    <>
      <SkipLink />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
