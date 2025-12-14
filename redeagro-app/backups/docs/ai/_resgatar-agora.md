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

