# Como Usar Context7 no Design System Playground

**Estratégia:** Usar Context7 apenas nos prompts do Cursor, **sem modificar código existente** ou instalar dependências.

---

## Status da Configuração

- ✅ Projeto conectado ao Context7: [Design System Playground](https://github.com/motaterry/design-system-playground)
- ✅ Processamento em andamento no Context7
- ✅ API Key configurada (manter privada)
- 📍 API URL: `context7.com/api/v1`
- 📍 MCP URL: `mcp.context7.com/mcp`

---

## Versões do Design System Playground

Use estas versões exatas nos seus prompts do Cursor:

```
react@19.2.0
react-dom@19.2.0
next@16.0.1
tailwindcss@4
typescript@5
@radix-ui/react-dialog@1.1.15
@radix-ui/react-dropdown-menu@2.1.16
@radix-ui/react-label@2.1.7
@radix-ui/react-select@2.2.6
@radix-ui/react-slot@1.2.3
@radix-ui/react-switch@1.2.6
@radix-ui/react-tabs@1.1.13
@radix-ui/react-tooltip@1.2.8
class-variance-authority@0.7.1
clsx@2.1.1
tailwind-merge@3.3.1
lucide-react@0.548.0
```

---

## Como Usar nos Prompts do Cursor

### Método Simples (Recomendado)

Adicione `use context7` no início dos seus prompts:

```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, tailwindcss@4

[Seu pedido aqui]
```

### Template Completo

```
use context7 for react@19.2.0, next@16.0.1, tailwindcss@4, @radix-ui/[component]@[version], class-variance-authority@0.7.1

[Descrição da tarefa]

REQUISITOS OBRIGATÓRIOS:
- Usar design tokens de app/globals.css (não hardcode)
- Seguir padrão shadcn/ui estabelecido
- Manter consistência com componentes existentes
- Usar CVA para variantes
- TypeScript types corretos para React 19.2.0
- Não modificar código existente (apenas criar novo)
```

---

## Exemplos Práticos

### 1. Criar Novo Componente UI

**Prompt:**
```
use context7 for react@19.2.0, @radix-ui/react-dialog@1.1.15, class-variance-authority@0.7.1, tailwindcss@4

Crie um componente Dialog seguindo os padrões do design system:
- Usar React 19.2.0 (sem forwardRef desnecessário)
- Seguir padrão shadcn/ui existente (como Button.tsx)
- Usar CVA para variantes
- Usar design tokens do globals.css (bg-primary, não #hex)
- Manter consistência com Button.tsx existente
- Usar Radix UI Dialog primitivo
- TypeScript types corretos
- Incluir displayName
```

### 2. Adicionar Variante a Componente Existente

**Prompt:**
```
use context7 for react@19.2.0, class-variance-authority@0.7.1

Adicione uma nova variante "success" ao Button existente:
- Manter TODAS as variantes existentes intactas
- Usar token --color-success do globals.css
- Seguir padrão CVA já estabelecido
- Não modificar outras partes do componente
```

### 3. Criar Storybook Story

**Prompt:**
```
use context7 for react@19.2.0, @storybook/react@10.0.2

Crie uma story para o componente Dialog seguindo o padrão das stories existentes:
- Usar Meta e StoryObj types
- Seguir estrutura de Button.stories.tsx
- Incluir todas as variantes
- Documentar props
```

---

## Checklist de Segurança

Antes de aplicar código gerado com Context7, verifique:

### Design Tokens
- [ ] Usa tokens do `globals.css` (--color-primary, etc.)
- [ ] Não adiciona valores hardcoded (#hex, rgb, hsl)
- [ ] Respeita tokens de radius existentes
- [ ] Usa classes Tailwind que mapeiam para tokens

### Padrões de Componente
- [ ] Segue estrutura shadcn/ui
- [ ] Usa CVA para variantes
- [ ] Usa `cn()` utility para className merging
- [ ] Mantém padrão de export (forwardRef, displayName)

### TypeScript
- [ ] Types corretos para React 19.2.0
- [ ] VariantProps do CVA
- [ ] Props tipadas corretamente

### Consistência
- [ ] Segue padrão de componentes existentes
- [ ] Mantém estrutura de arquivos
- [ ] Usa mesmas convenções de nome

---

## Design Tokens do Projeto

### Cores Principais (do globals.css)

```css
--color-primary: 240 6% 10%;
--color-primary-foreground: 0 0% 98%;
--color-accent: 240 5% 96%;
--color-success: 142 76% 45%;
--color-warning: 45 93% 47%;
--color-danger: 0 84% 60%;
--color-info: 217 91% 60%;
```

### Radius Tokens

```css
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
```

### Uso nos Componentes

```tsx
// ✅ CORRETO - Usar tokens
className="bg-primary text-primary-foreground rounded-md"

// ❌ ERRADO - Hardcoded
className="bg-[#2406%] text-white rounded-[8px]"
```

---

## Padrão de Componente (Referência)

Todos os componentes devem seguir este padrão (baseado em `components/ui/button.tsx`):

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", outline: "..." },
      size: { sm: "...", md: "...", lg: "..." }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // props específicas
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

---

## O Que NÃO Fazer

### ❌ Não use Context7 para:

1. **Modificar design tokens** - Tokens são sagrados
2. **Mudar padrões estabelecidos** - Consistência é prioridade
3. **Atualizar versões de dependências** - Faça manualmente com cuidado
4. **Refatorar arquitetura** - Mantenha estrutura existente

### ✅ Use Context7 para:

1. **Criar novos componentes** - Com padrões corretos
2. **Adicionar features** - Seguindo padrões existentes
3. **Corrigir bugs** - Com versões corretas
4. **Melhorar types** - TypeScript 5 + React 19
5. **Documentação** - Storybook stories

---

## Verificação Pós-Geração

Depois de gerar código com Context7, sempre verifique:

### 1. Design Tokens
```tsx
// ❌ ERRADO - Hardcoded
className="bg-[#2405.9%] text-white"

// ✅ CORRETO - Token
className="bg-primary text-primary-foreground"
```

### 2. Padrão CVA
```tsx
// ✅ Deve seguir padrão do Button.tsx
const componentVariants = cva(
  "base-classes",
  {
    variants: { ... },
    defaultVariants: { ... }
  }
)
```

### 3. TypeScript Types
```tsx
// ✅ Deve usar VariantProps
export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // props específicas
}
```

### 4. Estrutura de Arquivo
```tsx
// ✅ Deve seguir padrão shadcn/ui
import { cn } from "@/lib/utils"
// ... imports
// ... variants
// ... interface
// ... component com forwardRef
// ... displayName
// ... export
```

---

## Resumo

**Context7 é uma ferramenta de assistência, não uma dependência:**

- ✅ **Use nos prompts** - Melhora qualidade do código gerado
- ✅ **Especifique versões** - Garante compatibilidade
- ✅ **Respeite padrões** - Mantém consistência
- ✅ **Verifique sempre** - Não confie cegamente

**Não compromete o design system porque:**
- Não instala nada no projeto
- Não modifica código existente (se usado corretamente)
- Apenas melhora a qualidade das sugestões do Cursor
- Você mantém controle total sobre o que aceita

---

## Recursos Adicionais

- **Context7 Dashboard:** [context7.com](https://context7.com/)
- **Projeto no Context7:** Design System Playground
- **Repositório:** [github.com/motaterry/design-system-playground](https://github.com/motaterry/design-system-playground)
- **Documentação do Design System:** Ver `README.md` e `DESIGN_SYSTEM_GUIDELINES.md`

---

**Última atualização:** 2025-01-27  
**Projeto:** Design System Playground








