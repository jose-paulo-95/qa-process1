# Template de Agendamento de Mentoria - PDI QA Junior

## Objetivo

Solicitar e acompanhar sessões de mentoria com QA Pleno/Sênior para acelerar o desenvolvimento conforme o Plano de Ação PDI.

**Antes da primeira sessão:** Compartilhar [perfil-contexto-pdi.md](perfil-contexto-pdi.md) com o mentor para personalizar a pauta.

## Checklist de Agendamento

- [ ] Identificar mentor disponível (QA Pleno ou Sênior)
- [ ] Alinhar com líder/gestor sobre disponibilidade e frequência
- [ ] Definir frequência sugerida: **1 sessão por mês** (mínimo)
- [ ] Duração sugerida: **30-60 minutos** por sessão
- [ ] Agendar primeira sessão

## Template de Solicitação (e-mail ou mensagem)

```
Assunto: Solicitação de mentoria - PDI QA Junior

Olá [Nome do Mentor],

Conforme meu Plano de Desenvolvimento Individual (PDI), gostaria de agendar 
uma sessão de mentoria para discutir [tema da fase atual].

**Fase atual:** [Ex: Fase 1 - Fundamentos + Postman]
**Tópicos que gostaria de abordar:**
- [Ex: Criação de collections no Postman]
- [Ex: Validação de respostas de API com scripts Tests]
- [Ex: Dúvidas sobre o projeto DummyJSON]

**Minha disponibilidade:** [dias/horários]
**Duração sugerida:** 45 minutos

Agradeço a disponibilidade!
```

## Desafios Declarados (para incluir na pauta)

Conforme a autoavaliação, priorizar tópicos que ajudem em:
- **Ser mais prático** – exemplos aplicáveis ao projeto real
- **Ter boas práticas** – código, scripts, reporte de bugs
- **Técnicas de QA** – particionamento de equivalência, valor limite, edge cases
- **Aplicar no projeto** – como conectar DummyJSON/Postman ao TruMe, DeepClaim

## Roteiro por Fase

### Fase 1 (Meses 1-3) - Postman e API
- Postman: collections, variáveis, scripts Pre/Test
- Validação de API com DummyJSON
- Swagger + importação no Postman
- **Como aplicar no projeto atual** (endpoints reais)

### Fase 2 (Meses 4-6) - Cypress
- Setup e configuração do Cypress
- Fixtures e Page Object Model
- cy.intercept e custom commands

### Fase 3 (Meses 7-9) - Git e CI/CD
- **Logs e debugging** (ler stack traces, DevTools Network) – desafio declarado: "faço menos do que devia"
- Git: branching, merge, resolução de conflitos
- GitHub Actions para Cypress

### Fase 4 (Meses 10-12) - Consolidação
- Code review de automação
- Newman no pipeline
- Boas práticas e padrões
- **Comunicação técnica** – desafio: "jargões e enunciados" (ver glossario-qa.md)

## Registro de Sessões

| Data | Mentor | Tópicos abordados | Ações definidas |
|------|--------|-------------------|-----------------|
| | | | |
| | | | |
| | | | |

## Dicas para Aproveitar a Mentoria

1. **Prepare-se antes:** Liste dúvidas específicas e exemplos do que está fazendo
2. **Traga código/prints:** Mostre o que já tentou para feedback direto
3. **Documente:** Anote os aprendizados após cada sessão
4. **Aplique:** Implemente as sugestões antes da próxima sessão
