# API Rest: gerenciamento de inconsistências

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

---

## Fontes de inconsistência

| Fonte | O que verificar |
|-------|-----------------|
| **Comportamento** | Status code errado, ordem de operações, regras de negócio violadas |
| **Estrutura** | Campos faltando, tipo errado, formato inesperado no JSON |
| **Conteúdo** | Valores incorretos, dados inconsistentes entre endpoints |

Use essas três dimensões como guia para investigar e classificar defeitos.

---

## Severidade e prioridade

| Conceito | Significado |
|----------|-------------|
| **Severidade** | Impacto do defeito no sistema (Crítica, Alta, Média, Baixa) |
| **Prioridade** | Urgência de correção (quando corrigir) |

Um bug pode ter severidade alta e prioridade baixa (ex: afeta poucos usuários). Ou severidade média e prioridade alta (ex: bloqueia release).

---

## Investigação de inconsistências

- **Reproduzir:** conseguir reproduzir o defeito de forma consistente
- **Isolar:** identificar se o problema está na API, no cliente ou na integração
- **Documentar:** request completo (URL, headers, body), response recebido, esperado
- **Rastrear:** logs, ambiente, versão da API

---

## Boas práticas no reporte

Consulte [boas-praticas-qa.md](../../../docs/avaliacao/pdi/boas-praticas-qa.md) para o guia completo. Resumo:

- Título claro e objetivo
- Passos para reproduzir
- Dados de entrada e saída (request/response)
- Evidências (screenshot do Postman, export da collection)
- Ambiente e versão

---

## Ferramentas para gerenciar inconsistências

- **Jira, Azure DevOps, etc.:** registrar e acompanhar defeitos
- **Postman:** exportar requests que falharam como evidência
- **Collections:** organizar requests que reproduzem bugs conhecidos
- **Relatórios:** Newman + htmlextra para histórico de execuções
