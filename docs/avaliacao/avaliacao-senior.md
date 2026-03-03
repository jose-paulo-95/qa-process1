# Avaliação de Competências - QA Sênior

## 1. Introdução

Este documento contém a matriz de competências e o questionário de avaliação específicos para o nível **QA Sênior**. Use este documento para:

- Autoavaliação do QA Sênior
- Avaliação pelo líder/gestor
- Identificação de áreas de especialização
- Planejamento de desenvolvimento contínuo

---

## 2. Matriz de Competências - QA Sênior

A matriz abaixo apresenta as competências técnicas esperadas para um QA Sênior. Marque com [X] as competências que você domina.

### 2.1 Fundamentos de QA

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Ciclo de vida de software | Define processos e melhora continuamente | [ ] |
| Tipos de teste | Define estratégias de teste para diferentes contextos | [ ] |
| Criação de casos de teste | Define padrões e melhores práticas para equipe | [ ] |
| Severidade/Prioridade | Define critérios de classificação para organização | [ ] |
| Reporte de bugs | Melhora templates e processos de reporte | [ ] |

### 2.2 Testes Manuais

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Execução de testes | Define abordagens e metodologias de teste | [ ] |
| Testes exploratórios | Conduz sessões avançadas de exploração | [ ] |
| Validação de requisitos | Revisa requisitos e identifica problemas arquiteturais | [ ] |
| Testes de regressão | Define estratégia de regressão para organização | [ ] |

### 2.3 Automação - Cypress (Avançado)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Instalação e setup | Define arquitetura de projetos Cypress | [ ] |
| Comandos básicos | Cria custom commands complexos | [ ] |
| Seletores | Define estratégias de seleção para equipe | [ ] |
| Assertions | Cria custom assertions reutilizáveis | [ ] |
| Fixtures | Organiza fixtures de forma escalável | [ ] |
| Custom Commands | Cria commands complexos e documentados | [ ] |
| Page Object Model | Define padrões de Page Object para equipe | [ ] |
| Interceptação de requests | Implementa mocking avançado e estratégias | [ ] |
| CI/CD | Define pipeline completo de automação | [ ] |
| Debugging | Resolve problemas complexos de debugging | [ ] |

### 2.4 Automação - Selenium

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Setup e configuração | Define frameworks Selenium completos | [ ] |
| WebDriver | Arquitetura avançada de WebDriver | [ ] |
| Page Object Model | Define padrões de Page Object | [ ] |
| Waits e sincronização | Cria estratégias custom de sincronização | [ ] |

### 2.5 Testes de API - Postman (Especialista)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Criação de requests | Automação completa de testes de API | [ ] |
| Collections | Estrutura collections complexas e escaláveis | [ ] |
| Variáveis | Gerenciamento avançado de variáveis | [ ] |
| Scripts (Pre/Test) | Escreve scripts complexos e reutilizáveis | [ ] |
| Testes automatizados | Cria suites completas de testes automatizados | [ ] |
| Newman (CLI) | Integra Newman com CI/CD avançado | [ ] |
| Documentação | Documenta APIs completas | [ ] |
| Mock servers | Cria mock servers complexos | [ ] |

### 2.6 Testes de API - Swagger (Avançado)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Leitura de documentação | Valida qualidade de documentação Swagger | [ ] |
| Validação de contratos | Define contratos e validação automatizada | [ ] |
| Testes baseados em Swagger | Automação completa de validação baseada em Swagger | [ ] |
| OpenAPI/Swagger specs | Cria e valida especificações OpenAPI | [ ] |

### 2.7 Ferramentas e Tecnologias

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Jira | Configura workflows, campos customizados, dashboards | [ ] |
| Git | Code review avançado, estratégias de branching, CI/CD | [ ] |
| SQL | Escreve queries complexas para validação | [ ] |
| Docker | Cria imagens Docker para testes | [ ] |
| DevTools | Usa Performance, Security, Memory profiling | [ ] |
| Logs e debugging | Debugging avançado de problemas complexos | [ ] |

### 2.8 Liderança e Processo

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Planejamento de testes | Define estratégias de teste para organização | [ ] |
| Estimativa | Estima projetos completos de teste | [ ] |
| Code review | Define padrões de code review | [ ] |
| Mentoria | Estrutura programa de mentoria | [ ] |
| Processo de qualidade | Define processo de qualidade | [ ] |
| Métricas e KPIs | Define KPIs e métricas de qualidade | [ ] |
| Comunicação técnica | Comunica estrategicamente com stakeholders | [ ] |

---

## 3. Questionário de Avaliação - QA Sênior

Este questionário contém perguntas específicas para avaliar o conhecimento técnico e de liderança de um QA Sênior. Use de forma conversacional, não como teste formal.

### 3.1 Sistema de Pontuação

- **0 pontos**: Não conhece ou resposta incorreta
- **1 ponto**: Conhece conceitualmente, mas não aplica
- **2 pontos**: Conhece e aplica em situações simples
- **3 pontos**: Domina e aplica em situações complexas
- **4 pontos**: Domina, aplica, ensina outros e inova

**Interpretação**:
- **0-60%**: Precisa de mais desenvolvimento para nível Sênior
- **61-80%**: Nível adequado para Sênior
- **81-95%**: Nível excelente, especialista
- **96-100%**: Nível excepcional, referência técnica

---

### 3.2 Perguntas - Automação - Cypress (Avançado)

**P28**: Como você estrutura um framework de automação Cypress para um projeto grande?
- **Esperado (3 pontos)**: Menciona organização de pastas, Page Objects, fixtures
- **Bom (4 pontos)**: Arquitetura completa, padrões, boas práticas, exemplos práticos, escalabilidade

**P29**: Explique como você implementa testes de API dentro do Cypress.
- **Esperado (3 pontos)**: Usa `cy.request()` para chamadas API, valida respostas
- **Bom (4 pontos)**: Estratégias híbridas (UI + API), quando usar cada abordagem, exemplos práticos

**P30**: Como você lida com testes que precisam de dados dinâmicos ou estado compartilhado?
- **Esperado (3 pontos)**: Usa fixtures, variáveis de ambiente, APIs para setup
- **Bom (4 pontos)**: Menciona estratégias de isolamento, cleanup, paralelização, exemplos

**P31**: Como você implementa retry logic customizada no Cypress?
- **Esperado (3 pontos)**: Usa `cy.then()` com lógica custom, loops
- **Bom (4 pontos)**: Plugins, estratégias avançadas, exemplos práticos, quando usar

**P32**: Explique como você otimiza a execução de testes Cypress em um projeto grande.
- **Esperado (3 pontos)**: Paralelização, seleção de testes, sharding
- **Bom (4 pontos)**: Estratégias completas, CI/CD otimizado, relatórios, artifacts, exemplos

**C1**: Qual a diferença entre `cy.visit()` e `cy.request()`?
- **Esperado (3 pontos)**: Explica diferença e quando usar cada um
- **Bom (4 pontos)**: Estratégias híbridas, exemplos práticos, performance

**C2**: Como você aguarda múltiplas requisições assíncronas no Cypress?
- **Esperado (3 pontos)**: Usa aliases, `cy.then()`, estratégias avançadas
- **Bom (4 pontos)**: `Promise.all()`, estratégias complexas, exemplos práticos

**C3**: Explique o conceito de "retry-ability" no Cypress.
- **Esperado (3 pontos)**: Explica como funciona, comandos vs assertions
- **Bom (4 pontos)**: Estratégias, quando confiar, quando não confiar, exemplos

**C4**: Como você testa aplicações que usam autenticação OAuth no Cypress?
- **Esperado (3 pontos)**: Intercepta tokens, reutiliza sessão, estratégias
- **Bom (4 pontos)**: Estratégias completas, segurança, exemplos práticos, melhores práticas

**C5**: Como você organiza fixtures para diferentes ambientes no Cypress?
- **Esperado (3 pontos)**: Organiza por ambiente, usa variáveis
- **Bom (4 pontos)**: Estrutura completa, estratégias, exemplos, escalabilidade

---

### 3.3 Perguntas - Postman (Especialista)

**P33**: Como você cria uma collection complexa no Postman com múltiplos ambientes e workflows?
- **Esperado (3 pontos)**: Organiza por pastas, usa variáveis de ambiente, scripts
- **Bom (4 pontos)**: Estrutura completa, workflows automatizados, exemplos práticos, escalabilidade

**P34**: Explique como você implementa testes de contrato usando Postman e Swagger.
- **Esperado (3 pontos)**: Valida schema, compara com Swagger
- **Bom (4 pontos)**: Automação completa, integração, exemplos práticos, estratégias

**P35**: Como você gerencia dados de teste complexos no Postman?
- **Esperado (3 pontos)**: Usa variáveis, scripts, fixtures
- **Bom (4 pontos)**: Estratégias avançadas, external data, CSV, exemplos práticos

**PM1**: Como você cria um workflow de testes onde o resultado de uma requisição é usado na próxima?
- **Esperado (3 pontos)**: Workflows complexos, automação
- **Bom (4 pontos)**: Estratégias avançadas, exemplos práticos, escalabilidade

**PM2**: Explique como você usa o Postman para testes de performance básicos.
- **Esperado (3 pontos)**: Estratégias completas, ferramentas
- **Bom (4 pontos)**: Análise detalhada, exemplos práticos, otimização

**PM3**: Como você documenta uma API completa no Postman?
- **Esperado (3 pontos)**: Estrutura completa, integração com Swagger
- **Bom (4 pontos)**: Documentação rica, exemplos, automação, exemplos práticos

**PM4**: Como você gerencia múltiplos ambientes (DEV, QA, PROD) no Postman?
- **Esperado (3 pontos)**: Estratégias avançadas, automação
- **Bom (4 pontos)**: Gerenciamento completo, exemplos práticos, escalabilidade

**PM5**: Explique como você integra testes do Postman em um pipeline CI/CD.
- **Esperado (3 pontos)**: Estratégias completas, relatórios
- **Bom (4 pontos)**: Pipeline otimizado, exemplos práticos, melhores práticas

---

### 3.4 Perguntas - Swagger (Avançado)

**P36**: Como você valida a qualidade de uma documentação Swagger?
- **Esperado (3 pontos)**: Verifica completude, exemplos, schemas
- **Bom (4 pontos)**: Ferramentas, métricas, melhorias, exemplos práticos

**P37**: Explique como você implementa testes de contrato baseados em Swagger.
- **Esperado (3 pontos)**: Valida requests/responses contra schema
- **Bom (4 pontos)**: Automação completa, ferramentas, estratégias, exemplos práticos

**SW1**: Como você identifica problemas em uma documentação Swagger?
- **Esperado (3 pontos)**: Ferramentas, validação automática
- **Bom (4 pontos)**: Estratégias completas, exemplos práticos, melhorias

**SW2**: Explique a diferença entre Swagger UI e Swagger Editor.
- **Esperado (3 pontos)**: Workflow completo, integração
- **Bom (4 pontos)**: Estratégias avançadas, exemplos práticos, melhores práticas

**SW3**: Como você valida se uma implementação de API está de acordo com o Swagger?
- **Esperado (3 pontos)**: Testes de contrato automatizados
- **Bom (4 pontos)**: Estratégias completas, exemplos práticos, automação

**SW4**: O que são schemas no Swagger e como você os utiliza?
- **Esperado (3 pontos)**: Estratégias avançadas
- **Bom (4 pontos)**: Reutilização, validação, exemplos práticos, melhores práticas

**SW5**: Como você gera testes automaticamente a partir de um arquivo Swagger?
- **Esperado (3 pontos)**: Estratégias completas, customização
- **Bom (4 pontos)**: Automação avançada, exemplos práticos, ferramentas

---

### 3.5 Perguntas - Liderança e Arquitetura

**P38**: Como você define a estratégia de automação para uma equipe?
- **Esperado (3 pontos)**: Analisa necessidades, define ferramentas, prioriza
- **Bom (4 pontos)**: Estratégia completa, ROI, roadmap, exemplos práticos, envolvimento da equipe

**P39**: Explique como você mede o sucesso de uma iniciativa de automação.
- **Esperado (3 pontos)**: Métricas básicas (cobertura, tempo de execução)
- **Bom (4 pontos)**: KPIs completos, ROI, melhorias contínuas, exemplos práticos

**P40**: Como você garante a manutenibilidade de testes automatizados em longo prazo?
- **Esperado (3 pontos)**: Padrões, documentação, code review
- **Bom (4 pontos)**: Estratégia completa, refatoração contínua, exemplos práticos, cultura de qualidade

**P41**: Como você estrutura um programa de mentoria para QAs juniores?
- **Esperado (3 pontos)**: Define estrutura, pares mentor/mentorado
- **Bom (4 pontos)**: Programa completo, métricas, exemplos práticos, evolução contínua

**P42**: Explique como você define e implementa métricas de qualidade para uma organização.
- **Esperado (3 pontos)**: Define KPIs, coleta dados
- **Bom (4 pontos)**: Estratégia completa, dashboards, ações baseadas em dados, exemplos

**P43**: Como você lida com resistência à mudança quando implementa novos processos de qualidade?
- **Esperado (3 pontos)**: Comunicação, demonstração de valor
- **Bom (4 pontos)**: Estratégias completas, envolvimento, exemplos práticos, mudança cultural

**P44**: Como você prioriza o que automatizar quando há recursos limitados?
- **Esperado (3 pontos)**: ROI, criticidade, frequência
- **Bom (4 pontos)**: Framework de priorização, exemplos práticos, envolvimento de stakeholders

---

### 3.6 Perguntas - Tecnologias Avançadas

**P45**: Como você implementa testes de performance usando ferramentas como JMeter ou K6?
- **Esperado (3 pontos)**: Cria scripts, executa testes de carga
- **Bom (4 pontos)**: Estratégias completas, análise, otimização, exemplos práticos

**P46**: Explique como você implementa testes de segurança em APIs.
- **Esperado (3 pontos)**: Testa autenticação, autorização, validação de entrada
- **Bom (4 pontos)**: Estratégias completas, OWASP, ferramentas, exemplos práticos

**P47**: Como você usa Docker para isolar ambientes de teste?
- **Esperado (3 pontos)**: Cria containers, executa testes em containers
- **Bom (4 pontos)**: Estratégias completas, docker-compose, exemplos práticos

**P48**: Explique como você integra testes com pipelines CI/CD avançados.
- **Esperado (3 pontos)**: Configura pipelines, executa testes automaticamente
- **Bom (4 pontos)**: Estratégias completas, paralelização, relatórios, exemplos práticos

---

## 4. Guia de Interpretação

### 4.1 Respostas Esperadas de um QA Sênior

- Domina e ensina outros
- Define padrões e processos
- Pensa estrategicamente sobre qualidade
- Lidera iniciativas técnicas
- Comunica efetivamente com stakeholders
- Inova e melhora continuamente

### 4.2 Sinais de Excelência

- Responde perguntas com 4 pontos consistentemente
- Lidera múltiplas iniciativas simultaneamente
- É referência técnica na organização
- Desenvolve outros QAs efetivamente
- Contribui estrategicamente para o negócio

### 4.3 Áreas de Especialização

Um QA Sênior pode se especializar em:
- **Automação**: Especialista em frameworks e arquitetura
- **Performance**: Especialista em testes de performance
- **Segurança**: Especialista em testes de segurança
- **Processo**: Especialista em processos de qualidade
- **Liderança**: Especialista em desenvolvimento de equipes

---

## 5. Desenvolvimento Contínuo

Como QA Sênior, o desenvolvimento contínuo é essencial:

1. **Mantenha-se Atualizado**
   - Novas ferramentas e tecnologias
   - Tendências de mercado
   - Melhores práticas

2. **Compartilhe Conhecimento**
   - Artigos, blog posts
   - Apresentações internas/externas
   - Mentoria ativa

3. **Contribua para a Comunidade**
   - Open source
   - Comunidades de QA
   - Eventos e conferências

4. **Desenvolva Soft Skills**
   - Liderança
   - Comunicação
   - Negociação
   - Gestão de conflitos

---

## 6. Referências

- Guia Completo de Progressão: `../guia-progressao-carreira.md`
- Processo de Qualidade: `../processo-qualidade.md`
- Templates: `../../templates/`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
