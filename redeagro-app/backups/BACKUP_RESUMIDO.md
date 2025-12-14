# Backup Resumido - Projeto Design System + RedeAgro

**Data de Criação:** 2025-01-27  
**Propósito:** Backup de informações essenciais do projeto caso as credenciais sejam perdidas

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral)
2. [Stack Tecnológica](#stack-tecnológica)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configurações Importantes](#configurações-importantes)
5. [Comandos Essenciais](#comandos-essenciais)
6. [Credenciais e Configurações](#credenciais)
7. [Padrões e Convenções](#padrões-e-convenções)
8. [Documentação Adicional](#documentação-adicional)

---

## 🎯 Visão Geral do Projeto

Este projeto contém:
- **Design System** - Sistema de design baseado em Tailwind CSS v4 + shadcn/ui
- **RedeAgro App** - Aplicação React para comparação de preços agrícolas
- **Design System Playground** - Playground Next.js com Storybook para componentes

---

## 💻 Stack Tecnológica

### RedeAgro App
- **Framework:** React 19.1.1 + TypeScript
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM 7.9.5 (SPA)
- **Styling:** Tailwind CSS 4.1.16 com @theme
- **UI Components:** shadcn/ui baseado em Radix UI
- **Ícones:** Lucide React
- **Utilities:** class-variance-authority, clsx, tailwind-merge

### Design System Playground
- **Framework:** Next.js
- **Storybook:** Para documentação de componentes
- **Styling:** Tailwind CSS

---

## 📁 Estrutura do Projeto

```
My design system/
├── redeagro-app/              # Aplicação principal
│   ├── src/
│   │   ├── pages/             # Home, Compare, Results
│   │   ├── components/        # Componentes específicos da app
│   │   │   ├── ui/            # Componentes base (shadcn/ui)
│   │   │   └── results/       # Componentes de resultados
│   │   ├── lib/               # Utilitários e dados mock
│   │   └── index.css          # Design tokens e estilos globais
│   ├── public/                # Assets estáticos
│   ├── docs/ai/               # Documentação de conversas AI
│   └── backups/               # Backups do projeto
│
├── design-system-playground/   # Playground do design system
│   ├── components/ui/         # Componentes do design system
│   ├── stories/               # Stories do Storybook
│   └── app/globals.css        # Tokens de design
│
└── Documentação/
    ├── DESIGN_SYSTEM_GUIDELINES.md
    ├── DESIGN_TOKENS.md
    ├── QUICK_REFERENCE.md
    ├── DESIGN_SYSTEM_AUDIT.md
    └── README_DESIGN_SYSTEM.md
```

---

## ⚙️ Configurações Importantes

### RedeAgro App - Configurações

**Alias de Importação:**
- `@/` → `./src`

**Rotas:**
- `/` - Home
- `/compare` - Comparação
- `/results` - Resultados

**Design Tokens (src/index.css):**
- Paleta agrícola:
  - Primary: `#2D5016` (forest green)
  - Secondary: `#6B5A4A` (soil brown)
  - Accent: `#9DB89A` (soft olive)
  - Background: `#F4EFE6` (clay/beige)
- Border Radius: **0** (todos os elementos têm cantos retos - decisão de design)
- Fonte: Inter (Google Fonts)
- Transições: 150ms globais

**Tailwind Config:**
- Uso de `@theme` para tokens customizados
- PostCSS configurado com Tailwind v4

---

## 🚀 Comandos Essenciais

### RedeAgro App
```bash
cd redeagro-app

# Desenvolvimento
npm run dev          # Inicia servidor Vite na porta padrão

# Build
npm run build        # Build de produção (TypeScript + Vite)

# Linting
npm run lint         # ESLint

# Preview
npm run preview      # Preview do build de produção
```

### Design System Playground
```bash
cd design-system-playground

# Desenvolvimento
npm run dev          # Inicia Next.js dev server

# Build Storybook
npm run build-storybook

# Executar Storybook
npm run storybook
```

### Backup
```bash
# Backup do repositório completo
git bundle create backups/repo-$(date +%F).bundle --all

# Backup da documentação AI
tar -czf backups/ai-$(date +%F).tar.gz docs/ai
```

---

## 🔐 Credenciais e Configurações

### Variáveis de Ambiente
Nenhuma variável de ambiente configurada no momento (aplicação SPA pura).

### Registros de Conversas AI
- Localização: `redeagro-app/docs/ai/_resgatar-agora.md`
- Sistema de registro automático de conversas
- Comandos de backup documentados

---

## 📐 Padrões e Convenções

### Padrões de Código

1. **Cores:**
   - ✅ Sempre usar tokens: `bg-primary`, `text-primary-foreground`
   - ❌ Nunca hardcodar: `#2D5016`, `#9DB89A`

2. **Border Radius:**
   - ✅ Sempre `rounded-none` ou omitir (todos são 0)
   - ❌ Nunca usar `rounded-md`, `rounded-lg` (intencionalmente 0)

3. **Componentes:**
   - Usar `cn()` utility para className merging
   - Componentes com `React.forwardRef` para refs
   - Props tipadas com interfaces TypeScript
   - Componentes UI em `/components/ui/` seguindo padrão shadcn

4. **Spacing:**
   - Usar escala Tailwind (4px base)
   - Cards: `p-6` (24px)
   - Seções: `space-y-6` ou `space-y-8`

5. **Shadows:**
   - Cards: `shadow-md` com `hover:shadow-lg`
   - Transições: `transition-shadow`

### Componentes Principais

**RedeAgro App:**
- `Hero` - Hero section com imagem de fundo
- `SearchBar` - Barra de busca com autocomplete
- `PriceCard` - Card de preços
- `WeatherCard` - Card de clima
- `NDVICard` - Card de índice NDVI
- `CostComparisonCard` - Comparação de custos

**Design System (shadcn/ui):**
- Button, Card, Input, Label, Select
- Dialog, Dropdown Menu, Sheet
- Tabs, Tooltip, Switch, Table
- Toast (Sonner)

---

## 📚 Documentação Adicional

### Arquivos de Documentação Principais

1. **README_DESIGN_SYSTEM.md**
   - Visão geral do design system
   - Estrutura de documentação
   - Princípios fundamentais

2. **DESIGN_SYSTEM_GUIDELINES.md**
   - Regras de consistência visual
   - Padrões de componentes
   - Checklist de code review
   - Violações comuns

3. **QUICK_REFERENCE.md**
   - Referência rápida de cores, espaçamento, tipografia
   - Padrões de componentes
   - Erros comuns a evitar

4. **DESIGN_TOKENS.md**
   - Referência completa de tokens
   - Sistema de cores (light/dark)
   - Espaçamento, radius, shadows

5. **DESIGN_SYSTEM_AUDIT.md**
   - Estado atual do design system
   - Inconsistências identificadas
   - Recomendações

6. **redeagro-app/docs/ai/_resgatar-agora.md**
   - Registro de conversas AI
   - Comandos de backup
   - Histórico de decisões técnicas

---

## 🔄 Processo de Restauração

Se precisar restaurar o projeto após perder credenciais:

1. **Clonar/Recuperar Repositório:**
   ```bash
   git clone <url-do-repositorio>
   # OU restaurar de git bundle
   git clone backups/repo-YYYY-MM-DD.bundle .
   ```

2. **Instalar Dependências:**
   ```bash
   cd redeagro-app
   npm install
   
   cd ../design-system-playground
   npm install
   ```

3. **Verificar Configurações:**
   - Verificar `package.json` para scripts
   - Verificar `tailwind.config.js` e `vite.config.ts`
   - Verificar `tsconfig.json` para aliases

4. **Rodar Aplicação:**
   ```bash
   cd redeagro-app
   npm run dev
   ```

---

## 📝 Notas Importantes

- **Border Radius Zero:** É uma decisão de design intencional - todos os elementos têm cantos retos
- **Design System:** O projeto `redeagro-app` é a fonte de verdade para o design system
- **Componentes:** Todos os componentes devem seguir padrões shadcn/ui
- **Tokens:** Sempre usar tokens ao invés de valores hardcoded
- **Backup:** Realizar backups regulares da documentação AI e do repositório

---

## 🆘 Contato e Suporte

Para questões sobre:
- **Design System:** Ver `DESIGN_SYSTEM_GUIDELINES.md`
- **Tokens:** Ver `DESIGN_TOKENS.md`
- **Referência Rápida:** Ver `QUICK_REFERENCE.md`
- **Histórico de Conversas:** Ver `redeagro-app/docs/ai/_resgatar-agora.md`

---

**Última Atualização:** 2025-01-27  
**Manutenção:** Backup criado automaticamente pelo assistente AI

ao