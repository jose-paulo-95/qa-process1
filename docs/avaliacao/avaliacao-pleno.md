# Avaliação de Competências - QA Pleno

## 1. Introdução

Este documento contém a matriz de competências e o questionário de avaliação específicos para o nível **QA Pleno**. Use este documento para:

- Autoavaliação do QA Pleno
- Avaliação pelo líder/gestor
- Identificação de gaps de conhecimento
- Planejamento de desenvolvimento para nível Sênior

---

## 2. Matriz de Competências - QA Pleno

A matriz abaixo apresenta as competências técnicas esperadas para um QA Pleno. Marque com [X] as competências que você domina.

### 2.1 Fundamentos de QA

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Ciclo de vida de software | Domina e aplica em diferentes contextos | [ ] |
| Tipos de teste | Aplica estratégias de teste adequadas para cada situação | [ ] |
| Criação de casos de teste | Cria casos complexos com múltiplos cenários e dados variados | [ ] |
| Severidade/Prioridade | Aplica consistentemente critérios de classificação | [ ] |
| Reporte de bugs | Reporta com análise de impacto e sugestões | [ ] |

### 2.2 Testes Manuais

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Execução de testes | Executa com autonomia, identifica problemas | [ ] |
| Testes exploratórios | Realiza testes exploratórios estruturados com charters | [ ] |
| Validação de requisitos | Analisa requisitos e identifica gaps ou ambiguidades | [ ] |
| Testes de regressão | Planeja e executa testes de regressão | [ ] |

### 2.3 Automação - Cypress (Intermediário)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Instalação e setup | Configura projetos Cypress completos | [ ] |
| Comandos básicos | Usa comandos avançados (`cy.contains()`, `cy.wrap()`, etc.) | [ ] |
| Seletores | Usa seletores robustos (data-cy, custom attributes) | [ ] |
| Assertions | Usa assertions complexas e customizadas | [ ] |
| Fixtures | Cria fixtures dinâmicas e organizadas | [ ] |
| Custom Commands | Cria custom commands simples para reutilização | [ ] |
| Page Object Model | Implementa Page Object Model básico | [ ] |
| Interceptação de requests | Usa `cy.intercept()` para mockar requisições | [ ] |
| CI/CD | Integra testes Cypress com pipeline básico | [ ] |
| Debugging | Usa DevTools avançado para debugging | [ ] |

### 2.4 Automação - Selenium

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Setup e configuração | Configura projetos Selenium completos | [ ] |
| WebDriver | Usa WebDriver de forma intermediária | [ ] |
| Page Object Model | Implementa Page Object Model | [ ] |
| Waits e sincronização | Usa explicit waits e fluent waits | [ ] |

### 2.5 Testes de API - Postman (Avançado)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Criação de requests | Usa todos os métodos HTTP (GET, POST, PUT, DELETE, PATCH) | [ ] |
| Collections | Organiza collections de forma estruturada | [ ] |
| Variáveis | Gerencia variáveis globais e de ambiente | [ ] |
| Scripts (Pre/Test) | Escreve scripts básicos para automação | [ ] |
| Testes automatizados | Cria testes automatizados com assertions | [ ] |
| Newman (CLI) | Executa collections via linha de comando | [ ] |
| Documentação | Documenta requests e collections | [ ] |
| Mock servers | Cria mock servers simples | [ ] |

### 2.6 Testes de API - Swagger (Intermediário)

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Leitura de documentação | Analisa completamente documentação Swagger | [ ] |
| Validação de contratos | Valida esquemas de request/response | [ ] |
| Testes baseados em Swagger | Usa Swagger para criar e validar testes | [ ] |
| OpenAPI/Swagger specs | Lê e entende especificações OpenAPI | [ ] |

### 2.7 Ferramentas e Tecnologias

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Jira | Usa JQL, cria dashboards, configura filtros | [ ] |
| Git | Faz branching, merge, resolve conflitos | [ ] |
| SQL | Escreve queries básicas para validação de dados | [ ] |
| Docker | Usa containers para testes | [ ] |
| DevTools | Usa Network tab, Console avançado, Performance | [ ] |
| Logs e debugging | Analisa logs para identificar problemas | [ ] |

### 2.8 Liderança e Processo

| Competência | Nível Esperado | Status |
|-------------|----------------|--------|
| Planejamento de testes | Cria planos de teste completos | [ ] |
| Estimativa | Estima esforço de tarefas de teste | [ ] |
| Code review | Revisa código de automação de outros QAs | [ ] |
| Mentoria | Mentoreia QAs juniores | [ ] |
| Processo de qualidade | Melhora processos existentes | [ ] |
| Métricas e KPIs | Coleta e analisa métricas de qualidade | [ ] |
| Comunicação técnica | Comunica com stakeholders sobre qualidade | [ ] |

---

## 3. Questionário de Avaliação - QA Pleno

Este questionário contém perguntas específicas para avaliar o conhecimento técnico de um QA Pleno. Use de forma conversacional, não como teste formal.

### 3.1 Sistema de Pontuação

- **0 pontos**: Não conhece ou resposta incorreta
- **1 ponto**: Conhece conceitualmente, mas não aplica
- **2 pontos**: Conhece e aplica em situações simples
- **3 pontos**: Domina e aplica em situações complexas
- **4 pontos**: Domina, aplica e pode ensinar outros (acima do esperado para Pleno)

**Interpretação**:
- **0-50%**: Precisa de mais desenvolvimento para nível Pleno
- **51-70%**: Nível adequado para Pleno
- **71-85%**: Nível bom, próximo do nível Sênior
- **86-100%**: Nível excelente, pode estar pronto para evoluir

---

### 3.2 Perguntas - Automação - Cypress

**P11**: Explique a diferença entre `cy.get()` e `cy.find()` no Cypress.
- **Esperado (2 pontos)**: `cy.get()` busca do root do documento, `cy.find()` busca dentro do elemento
- **Bom (3 pontos)**: Dá exemplos práticos de quando usar cada um, menciona performance

**P12**: Como você organiza seus testes Cypress usando Page Object Model?
- **Esperado (2 pontos)**: Cria classes para páginas, separa lógica de seletores e ações
- **Bom (3 pontos)**: Menciona reutilização, manutenibilidade, exemplos de estrutura

**P13**: O que são fixtures no Cypress e como você as utiliza?
- **Esperado (2 pontos)**: Arquivos de dados JSON, usa `cy.fixture()` para carregar
- **Bom (3 pontos)**: Menciona organização, tipos de dados, fixtures dinâmicos

**P14**: Como você intercepta requisições HTTP no Cypress?
- **Esperado (2 pontos)**: Usa `cy.intercept()` para mockar requisições
- **Bom (3 pontos)**: Explica diferentes opções (stub, spy, wait), dá exemplos práticos

**P15**: Como você cria custom commands no Cypress?
- **Esperado (2 pontos)**: Define em `cypress/support/commands.js` usando `Cypress.Commands.add()`
- **Bom (3 pontos)**: Explica quando criar, boas práticas, exemplos de commands úteis

**P16**: Como você lida com elementos que demoram para aparecer na tela?
- **Esperado (2 pontos)**: Usa `cy.wait()` ou timeouts configurados
- **Bom (3 pontos)**: Menciona retry-ability do Cypress, `should('be.visible')`, estratégias

**P17**: Explique como você integra testes Cypress com CI/CD.
- **Esperado (2 pontos)**: Executa via comando `cypress run` no pipeline
- **Bom (3 pontos)**: Menciona paralelização, relatórios, artifacts, diferentes ambientes

**C1**: Qual a diferença entre `cy.visit()` e `cy.request()`?
- **Esperado (2 pontos)**: `cy.visit()` abre página no navegador, `cy.request()` faz chamada HTTP direta
- **Bom (3 pontos)**: Explica quando usar cada um, estratégias híbridas

**C2**: Como você aguarda múltiplas requisições assíncronas no Cypress?
- **Esperado (2 pontos)**: Usa aliases, `cy.then()`, ou múltiplos `cy.wait()`
- **Bom (3 pontos)**: Estratégias avançadas, `Promise.all()`, exemplos práticos

**C3**: Explique o conceito de "retry-ability" no Cypress.
- **Esperado (2 pontos)**: Cypress tenta novamente automaticamente comandos que falham
- **Bom (3 pontos)**: Explica como funciona, diferença entre comandos e assertions, quando confiar

**C4**: Como você testa aplicações que usam autenticação OAuth no Cypress?
- **Esperado (2 pontos)**: Intercepta tokens, reutiliza sessão
- **Bom (3 pontos)**: Estratégias completas, segurança, exemplos práticos

**C5**: Como você organiza fixtures para diferentes ambientes no Cypress?
- **Esperado (2 pontos)**: Organiza por ambiente, usa variáveis de ambiente
- **Bom (3 pontos)**: Estrutura completa, estratégias, exemplos

---

### 3.3 Perguntas - Postman (Avançado)

**P18**: Como você cria testes automatizados no Postman usando scripts?
- **Esperado (2 pontos)**: Escreve código na aba Tests usando `pm.test()` e assertions
- **Bom (3 pontos)**: Menciona `pm.expect()`, variáveis dinâmicas, validação de schemas

**P19**: Explique a diferença entre variáveis de ambiente e variáveis globais no Postman.
- **Esperado (2 pontos)**: Ambiente = específico por ambiente (DEV, QA, PROD), Global = todos os ambientes
- **Bom (3 pontos)**: Quando usar cada uma, hierarquia de precedência, exemplos práticos

**P20**: Como você executa uma collection do Postman via linha de comando?
- **Esperado (2 pontos)**: Usa Newman, comando básico `newman run collection.json`
- **Bom (3 pontos)**: Menciona opções (environment, reporters), integração CI/CD, relatórios

**P21**: Como você cria um mock server no Postman?
- **Esperado (2 pontos)**: Cria mock server, define respostas para diferentes requests
- **Bom (3 pontos)**: Menciona casos de uso, variáveis dinâmicas, exemplos

**P22**: Como você valida o schema de uma resposta JSON no Postman?
- **Esperado (2 pontos)**: Usa `pm.response.to.have.jsonSchema()` ou `tv4.validate()`
- **Bom (3 pontos)**: Cria schemas, validações complexas, exemplos práticos

**PM1**: Como você cria um workflow de testes onde o resultado de uma requisição é usado na próxima?
- **Esperado (2 pontos)**: Usa variáveis, scripts para extrair valores da resposta
- **Bom (3 pontos)**: Workflows complexos, automação, exemplos

**PM2**: Explique como você usa o Postman para testes de performance básicos.
- **Esperado (2 pontos)**: Usa scripts para medir tempo de resposta
- **Bom (3 pontos)**: Estratégias completas, ferramentas, exemplos

**PM3**: Como você documenta uma API completa no Postman?
- **Esperado (2 pontos)**: Usa documentação do Postman, adiciona exemplos
- **Bom (3 pontos)**: Estrutura completa, integração com Swagger

**PM4**: Como você gerencia múltiplos ambientes (DEV, QA, PROD) no Postman?
- **Esperado (2 pontos)**: Usa environments, variáveis de ambiente
- **Bom (3 pontos)**: Estratégias avançadas, automação, exemplos

**PM5**: Explique como você integra testes do Postman em um pipeline CI/CD.
- **Esperado (2 pontos)**: Usa Newman, executa no pipeline
- **Bom (3 pontos)**: Estratégias completas, relatórios, exemplos

---

### 3.4 Perguntas - Swagger (Intermediário)

**P23**: Como você valida se uma API está de acordo com sua documentação Swagger?
- **Esperado (2 pontos)**: Compara resposta com Swagger manualmente, valida campos
- **Bom (3 pontos)**: Usa ferramentas de validação, testes de contrato automatizados

**P24**: O que é OpenAPI e qual sua relação com Swagger?
- **Esperado (2 pontos)**: OpenAPI é a especificação, Swagger é a ferramenta que implementa
- **Bom (3 pontos)**: Explica versões (2.0, 3.0), diferenças, uso prático

**P25**: Como você usa o Swagger para gerar testes automaticamente?
- **Esperado (2 pontos)**: Importa collection no Postman a partir do Swagger
- **Bom (3 pontos)**: Menciona ferramentas, validação de contratos, exemplos

**SW1**: Como você identifica problemas em uma documentação Swagger?
- **Esperado (2 pontos)**: Valida schema, verifica exemplos, testa endpoints
- **Bom (3 pontos)**: Ferramentas, validação automática, exemplos

**SW2**: Explique a diferença entre Swagger UI e Swagger Editor.
- **Esperado (2 pontos)**: UI visualiza documentação, Editor permite editar specs
- **Bom (3 pontos)**: Quando usar cada um, funcionalidades específicas, workflow

**SW3**: Como você valida se uma implementação de API está de acordo com o Swagger?
- **Esperado (2 pontos)**: Compara requests/responses com schema do Swagger
- **Bom (3 pontos)**: Testes de contrato automatizados, exemplos

**SW4**: O que são schemas no Swagger e como você os utiliza?
- **Esperado (2 pontos)**: Definem estrutura de dados, reutilização
- **Bom (3 pontos)**: Estratégias avançadas, validação, exemplos

**SW5**: Como você gera testes automaticamente a partir de um arquivo Swagger?
- **Esperado (2 pontos)**: Usa ferramentas de geração, importa no Postman
- **Bom (3 pontos)**: Estratégias completas, customização, exemplos

---

### 3.5 Perguntas - Estratégia e Processo

**P26**: Como você decide quais testes automatizar?
- **Esperado (2 pontos)**: Testes críticos, frequentes, que demoram muito manualmente
- **Bom (3 pontos)**: Menciona ROI, pirâmide de testes, estratégia de automação

**P27**: Explique a diferença entre testes de regressão e testes de smoke.
- **Esperado (2 pontos)**: Regressão = completo, valida tudo; Smoke = rápido, valida crítico
- **Bom (3 pontos)**: Quando usar cada um, estratégias, exemplos práticos

---

### 3.6 Perguntas - Ferramentas e Tecnologias

**P28**: Como você usa JQL (Jira Query Language) para criar filtros úteis?
- **Esperado (2 pontos)**: Cria queries básicas para buscar bugs, stories
- **Bom (3 pontos)**: Queries complexas, operadores avançados, exemplos práticos

**P29**: Explique como você usa Git para trabalhar com código de automação.
- **Esperado (2 pontos)**: Cria branches, faz commits, faz merge
- **Bom (3 pontos)**: Estratégias de branching, code review, resolução de conflitos

---

## 4. Guia de Interpretação

### 4.1 Respostas Esperadas de um QA Pleno

- Aplica conhecimento com autonomia
- Resolve problemas técnicos complexos
- Pensa em estratégias de teste
- Compartilha conhecimento com outros
- Propõe melhorias no processo

### 4.2 Sinais de que está Pronto para Nível Sênior

- Responde perguntas de nível Sênior com 3+ pontos
- Lidera iniciativas técnicas
- Define padrões e processos
- Mentoreia outros QAs efetivamente
- Pensa estrategicamente sobre qualidade

### 4.3 Áreas que Precisam de Desenvolvimento

Se o QA Pleno não consegue responder adequadamente:
- **Automação Avançada**: Precisa de mais prática com Cypress avançado
- **Arquitetura**: Precisa entender design de frameworks
- **Liderança**: Precisa desenvolver habilidades de mentoria
- **Estratégia**: Precisa pensar mais estrategicamente

---

## 5. Plano de Desenvolvimento Sugerido para Sênior

Com base na avaliação, criar um plano de desenvolvimento focado em:

1. **Liderança Técnica** (Trimestre 1)
   - Liderar iniciativa de automação
   - Criar framework de testes
   - Estabelecer padrões e práticas
   - Mentorear plenos e juniores

2. **Tecnologias Avançadas** (Trimestre 2)
   - Testes de performance avançados
   - Testes de segurança
   - Cloud e containerização
   - DevOps e CI/CD avançado

3. **Estratégia e Processo** (Trimestre 3)
   - Definir estratégia de teste
   - Estabelecer métricas e KPIs
   - Melhorar processos de qualidade
   - Comunicação com stakeholders

4. **Consolidação** (Trimestre 4)
   - Aplicar conhecimentos em projetos
   - Contribuir em arquitetura
   - Liderar iniciativas estratégicas
   - Preparar para promoção

---

## 6. Referências

- Guia Completo de Progressão: `../guia-progressao-carreira.md`
- Processo de Qualidade: `../processo-qualidade.md`
- Templates: `../../templates/`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
