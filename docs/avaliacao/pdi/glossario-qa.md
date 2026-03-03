# Glossário QA - Termos Técnicos para Comunicação

Glossário de termos utilizados no dia a dia de QA para melhorar a comunicação técnica.

## Processo e Metodologia

| Termo | Significado |
|-------|-------------|
| **DoD** | Definition of Done - Critérios que uma story/feature deve atender para ser considerada concluída |
| **DoR** | Definition of Ready - Critérios para uma story estar pronta para desenvolvimento ou teste |
| **UAT** | User Acceptance Testing - Testes de aceitação realizados pelo usuário/Product Owner |
| **Smoke Test** | Teste rápido para verificar se o sistema está funcionando (build não quebrou) |
| **Regression** | Teste de regressão - garantir que mudanças não quebraram funcionalidades existentes |
| **E2E** | End-to-End - Teste que percorre fluxo completo do sistema |
| **BDD** | Behavior Driven Development - Especificação em linguagem natural (Given/When/Then) |

## Ciclo de Vida

| Termo | Significado |
|-------|-------------|
| **Planejamento** | Fase de definição de estratégia, estimativa e alocação de recursos |
| **Análise** | Identificação de casos de teste, riscos e dados de teste |
| **Design** | Criação de casos de teste detalhados e preparação de ambiente |
| **Execução** | Rodar testes, reportar bugs, retestar correções |
| **Relatório** | Compilação de resultados, métricas e recomendações |
| **Fechamento** | Arquivamento, lições aprendidas, fechamento de issues |

## Tipos de Teste

| Termo | Significado |
|-------|-------------|
| **Funcional** | Valida se a funcionalidade atende aos requisitos |
| **Integração** | Valida integração entre componentes/sistemas (APIs, serviços) |
| **Exploratório** | Teste sem script pré-definido, para descobrir bugs inesperados |
| **Performance** | Teste de carga, stress, tempo de resposta |
| **Contrato** | Valida se API respeita o contrato (schema) documentado |

## Bugs e Severidade

| Termo | Significado |
|-------|-------------|
| **Severidade** | Impacto do bug no sistema (Crítica, Alta, Média, Baixa) |
| **Prioridade** | Urgência de correção (P1, P2, P3) |
| **Repro** | Passos para reproduzir o bug |
| **Escape** | Bug que passou pelos testes e foi para produção |

## Automação e Ferramentas

| Termo | Significado |
|-------|-------------|
| **CI/CD** | Continuous Integration/Continuous Deployment - Pipeline de build e deploy |
| **Pipeline** | Fluxo automatizado (build, testes, deploy) |
| **Fixture** | Dados de teste estáticos usados nos testes |
| **Page Object** | Padrão de organização que encapsula elementos e ações de uma página |
| **Assertion** | Verificação/validação no teste (ex: `expect(status).to.equal(200)`) |

## APIs

| Termo | Significado |
|-------|-------------|
| **REST** | Estilo arquitetural para APIs (GET, POST, PUT, DELETE) |
| **Swagger/OpenAPI** | Especificação e documentação de APIs |
| **Schema** | Estrutura esperada dos dados (JSON Schema) |
| **Contract** | Contrato da API - formato de request/response |

## Métricas (ver [kpi-definitions.md](../../metricas/kpi-definitions.md))

| Termo | Significado |
|-------|-------------|
| **Taxa de defeitos** | Bugs encontrados / testes executados |
| **Taxa de escape** | Bugs em produção / total de bugs |
| **MTTR** | Mean Time To Repair - tempo médio para corrigir |
| **Pass/Fail** | Percentual de testes passando vs falhando |

---

## Meta de Uso

Utilizar **10+ termos** corretamente em dailies e conversas técnicas até o final da Fase 3.
