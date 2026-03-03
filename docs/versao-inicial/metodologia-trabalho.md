# Metodologia de Trabalho - Versão Inicial (Kanban Simplificado)

## 1. Introdução

Esta é a **versão simplificada** da metodologia Kanban, com menos colunas e menos cerimônias. Ideal para começar rápido e evoluir depois.

**Princípios**: Praticidade, menos burocracia, fluxo contínuo.

---

## 2. Quadro Kanban - 3 Colunas

```
A Fazer → Em Progresso → Concluído
```

### 2.1 Colunas

| Coluna | Significado | Quem move |
|--------|-------------|-----------|
| **A Fazer** | Demandas priorizadas, aguardando alguém pegar | Qualquer um pega quando tem capacidade |
| **Em Progresso** | Alguém está trabalhando (dev ou QA) | Quem pegou a demanda |
| **Concluído** | Pronto e validado | QA ou Dev (após aprovação) |

### 2.2 Regras Simples

1. **A Fazer → Em Progresso**: Pegue quando for trabalhar
2. **Em Progresso → Concluído**: Quando terminar e QA aprovar (ou dev+QA em par)
3. **Em Progresso → A Fazer**: Se ficar bloqueado ou precisar pausar

**Regra de ouro**: Máximo 2-3 itens em "Em Progresso" por pessoa. Foque em concluir antes de pegar novo.

---

## 3. Entrada de Demandas

Processo enxuto: veja [Entrada de Demandas](entrada-demandas.md).

**Resumo**: Título + Descrição breve + Critérios de aceite (3-5 itens). Sem formulários longos.

---

## 4. Cerimônias (Mínimas)

### 4.1 Daily (15 min)

- O que está em progresso?
- Algum bloqueio?
- Próximo passo?

### 4.2 Alinhamento semanal (opcional, 30 min)

- Priorizar o que vai para "A Fazer"
- Tirar dúvidas rápidas
- Não precisa ser formal

---

## 5. Papéis (Simplificados)

| Papel | Responsabilidade |
|-------|------------------|
| **Quem cria demanda** | Garante que tenha título, descrição e critérios de aceite |
| **Dev** | Desenvolve e avisa quando pronto para teste |
| **QA** | Testa e aprova ou reporta bugs |
| **Todos** | Comunicam bloqueios no Daily |

---

## 6. Definição de Pronto (Simplificada)

Uma demanda está **Concluída** quando:

- [ ] Código desenvolvido
- [ ] Testado pelo QA (ou validado em par)
- [ ] Funciona conforme critérios de aceite
- [ ] Bugs críticos resolvidos (se houver)

---

## 7. Fluxo Visual

```
┌─────────────┐     ┌─────────────────┐     ┌─────────────┐
│   A Fazer   │ ──► │  Em Progresso   │ ──► │  Concluído  │
│             │     │  (Dev ou QA)    │     │             │
└─────────────┘     └─────────────────┘     └─────────────┘
       ▲                      │
       └──────────────────────┘
            (se bloqueado)
```

---

## 8. Próximos Passos (Evolução)

Quando a equipe crescer ou precisar de mais visibilidade:

- Migrar para a **versão final**: 6 colunas (Backlog → To Do → In Development → Ready for Testing → In Testing → Done)
- Adicionar Planning e Retrospectiva
- Implementar métricas completas
- Usar templates detalhados

Documentos da versão final: `../metodologia-trabalho.md` e `../processo-qualidade.md`

---

**Última atualização**: 2026-02-11  
**Versão**: 1.0 - Inicial
