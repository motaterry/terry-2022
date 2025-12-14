# Registro de Conversas AI

## [2025-11-06] Sistema de Documentação e Backup

- Sistema de registro automático em `docs/ai/_resgatar-agora.md`
- Comando "salvar" gera bloco pronto para colar
- Comando "backup agora" gera comandos de backup git bundle + tar
- Comunicação direta sem explicações

**Comandos de backup:**
```bash
git bundle create backups/repo-$(date +%F).bundle --all
tar -czf backups/ai-$(date +%F).tar.gz docs/ai
```

## [2025-11-06] Projeto RedeAgro - Stack e Arquitetura

**Stack Tecnológica:**
- React 19.1.1 + TypeScript + Vite 7
- React Router DOM 7.9.5 (SPA routing)
- Tailwind CSS 4.1.16 com @theme
- shadcn/ui baseado em Radix UI
- Lucide React para ícones

**Arquitetura:**
- Estrutura: `/src/pages` (Home, Compare, Results) + `/src/components` (ui/, results/)
- Alias configurado: `@/` → `./src`
- Rotas: `/` (Home), `/compare`, `/results`

**Design System:**
- Paleta agrícola: #2D5016 (forest), #6B5A4A (soil), #9DB89A (olive), #F4EFE6 (clay)
- Sem border-radius (todos 0)
- Fonte Inter via Google Fonts
- CSS variables + Tailwind @theme para tokens
- Cards com `bg-white/[0.20]` e border `border-border`

**Padrões de Código:**
- `cn()` utility (clsx + tailwind-merge) para className merging
- Componentes com `React.forwardRef` para refs
- Props tipadas com interfaces TypeScript
- Componentes UI em `/components/ui/` seguindo shadcn pattern

**Recursos:**
- Hero com imagem de fundo + overlay verde
- SearchBar com autocomplete
- Cards: PriceCard, WeatherCard, NDVICard
- Animações: shimmer effect para range bars (CSS keyframes)
- Transições suaves globalmente aplicadas

**Comandos essenciais:**
```bash
npm run dev    # Vite dev server
npm run build  # TypeScript + Vite build
npm run lint   # ESLint
```

