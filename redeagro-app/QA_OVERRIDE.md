# QA Override - Demonstração de Estados

## Objetivo

Permitir visualizar diferentes estados da tela de Resultados da RedeAgro sem depender de backend real, apenas via mocks.

## Estados Disponíveis

### A) Amostra insuficiente (n < 10)
Mostra o card de "Amostra insuficiente" com botão para enviar convite via WhatsApp.

### B) Comparativo liberado (n ≥ 10)
Mostra o formulário de comparação regional (bloqueado inicialmente, pode ser desbloqueado).

### C) Resultado após comparação
Mostra o resultado da comparação após preencher e submeter o formulário.

## Como Usar

### Método 1: Query Parameter na URL

Adicione `?forceN=<número>` na URL:

```
# Amostra insuficiente (n < 10)
http://localhost:5173/?forceN=5

# Comparativo liberado (n ≥ 10)
http://localhost:5173/?forceN=15

# Sem override (usa padrão: n = 6)
http://localhost:5173/
```

### Método 2: LocalStorage

No console do navegador:

```javascript
// Definir amostra insuficiente
localStorage.setItem('forceN', '5')

// Definir comparativo liberado
localStorage.setItem('forceN', '15')

// Remover override
localStorage.removeItem('forceN')
```

**Nota:** O query parameter tem prioridade sobre o localStorage.

## Implementação Técnica

### Arquivo: `src/lib/mock.ts`

```typescript
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
  const sampleSize = forced ?? 6 // valor default (pode ser 6 ou 12)

  return {
    costPerHa: 4200,
    salePricePerSc: 139,
    sampleSize,
  }
}
```

### Componente: `src/components/results/CompareGate.tsx`

O componente monitora mudanças na URL e re-renderiza automaticamente quando o `forceN` muda.

## Fluxo de Teste

1. **Testar Amostra Insuficiente:**
   - Acesse: `http://localhost:5173/?forceN=5`
   - Deve mostrar: Card "Amostra insuficiente"

2. **Testar Comparativo Liberado:**
   - Acesse: `http://localhost:5173/?forceN=15`
   - Deve mostrar: Card bloqueado com botão "DESBLOQUEAR COMPARATIVO"
   - Clique no botão para desbloquear
   - Preencha os campos e clique em "COMPARAR AGORA"

3. **Testar Resultado:**
   - Após submeter o formulário, deve mostrar o `CompareResult` com os dados comparados

## Observações

- O override funciona apenas em desenvolvimento/testing
- O componente re-renderiza automaticamente quando a URL muda (verifica a cada 1 segundo)
- Valores inválidos (não numéricos ou ≤ 0) são ignorados
- O valor padrão é `n = 6` quando não há override

