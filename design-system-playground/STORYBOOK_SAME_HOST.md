# Storybook no Mesmo Host 🎉

O Storybook agora está configurado para ser servido no mesmo host que o Next.js app!

## Como Funciona

O Storybook é servido através de uma rota catch-all do Next.js em `/storybook`. Isso significa que você pode acessar o Storybook diretamente no mesmo domínio da sua aplicação.

## Acesso

- **Desenvolvimento:** `http://localhost:3000/storybook`
- **Produção:** `https://seu-dominio.com/storybook`

## Build Automático

O script de build foi atualizado para construir o Storybook automaticamente antes do Next.js:

```json
"build": "npm run build-storybook && next build"
```

Isso garante que o Storybook sempre esteja disponível quando você fizer deploy.

## Desenvolvimento Local

1. **Primeira vez ou após mudanças no Storybook:**
   ```bash
   npm run build-storybook
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar o Storybook:**
   Abra `http://localhost:3000/storybook` no navegador

## Estrutura

- **Rota:** `app/storybook/[[...path]]/route.ts`
  - Serve todos os arquivos estáticos do `storybook-static`
  - Suporta roteamento SPA do Storybook
  - Inclui proteção contra directory traversal

- **Arquivos Estáticos:** `storybook-static/`
  - Gerado automaticamente pelo `npm run build-storybook`
  - Contém todos os assets do Storybook

## Vantagens

✅ **Mesmo domínio** - Sem problemas de CORS  
✅ **Mesma autenticação** - Se você adicionar auth no futuro  
✅ **Deploy simplificado** - Um único projeto no Vercel  
✅ **URLs amigáveis** - `/storybook` ao invés de um subdomínio separado  

## Deploy no Vercel

O `vercel.json` já está configurado para construir o Storybook automaticamente durante o deploy. Não é necessária nenhuma configuração adicional!

## Troubleshooting

### Storybook não aparece

Se você ver a mensagem "Storybook not built", execute:

```bash
npm run build-storybook
```

### Mudanças no Storybook não aparecem

Após fazer mudanças nas stories ou componentes do Storybook, você precisa reconstruir:

```bash
npm run build-storybook
```

### Desenvolvimento ativo do Storybook

Se você está desenvolvendo ativamente o Storybook e quer ver mudanças em tempo real, use o servidor dedicado:

```bash
npm run storybook
```

Isso iniciará o Storybook em `http://localhost:6006` com hot-reload.

## Próximos Passos

- [ ] Adicionar link para `/storybook` no menu de navegação
- [ ] Configurar cache headers para otimização
- [ ] Adicionar autenticação se necessário

