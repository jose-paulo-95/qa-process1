# Avaliação de Competências - QA Junior

## 1. Introdução

Este documento contém a matriz de competências e o questionário de avaliação específicos para o nível **QA Junior**. Use este documento para:

- Autoavaliação do QA Junior
- Avaliação pelo líder/gestor
- Identificação de gaps de conhecimento
- Planejamento de desenvolvimento

---

## 2. Matriz de Competências - QA Junior

A matriz abaixo apresenta as competências técnicas esperadas para um QA Junior. Para cada competência, **atribua um nível de 1 a 5** conforme a escala de conceito, permitindo indicar conhecimento parcial.

### 2.0 Escala de Conceito (1 a 5)

| Nível | Conceito | Descrição |
|-------|----------|-----------|
| **1** | Não conhece | Nunca utilizei ou não tenho conhecimento sobre o tema |
| **2** | Conheço o conceito | Ouvi falar / sei o que é, mas não apliquei na prática |
| **3** | Conheço parcialmente | Já utilizei com apoio ou em situações simples |
| **4** | Utilizo com autonomia | Consigo usar no dia a dia sem necessidade de apoio |
| **5** | Domino | Domino o tema e consigo orientar ou ensinar outros |

*Use o nível que melhor reflete sua realidade em cada competência — não é necessário “atingir” 5 em tudo.*

### 2.1 Fundamentos de QA

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Ciclo de vida de software | Conhece conceitos básicos | |
| Tipos de teste | Conhece principais tipos (funcional, regressão, integração) | |
| Criação de casos de teste | Cria casos simples com pré-condições, passos e resultado esperado | |
| Severidade/Prioridade | Identifica corretamente severidade (Crítica, Alta, Média, Baixa) e prioridade | |
| Reporte de bugs | Reporta bugs seguindo template, com passos para reproduzir e evidências | |

### 2.2 Testes Manuais

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Execução de testes | Executa casos de teste guiados, seguindo scripts | |
| Testes exploratórios | Realiza testes exploratórios básicos para descobrir bugs | |
| Validação de requisitos | Valida funcionalidades comparando com requisitos | |
| Testes de regressão | Executa checklist de regressão fornecido | |

### 2.3 Automação - Cypress (Básico)

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Instalação e setup | Instala e configura Cypress básico no projeto | |
| Comandos básicos | Usa `cy.get()`, `cy.click()`, `cy.type()`, `cy.visit()` | |
| Seletores | Usa seletores simples (ID, classe, tag) | |
| Assertions | Usa `should()` e `expect()` básico | |
| Fixtures | Usa fixtures simples para dados de teste | |
| Custom Commands | Não precisa criar, mas entende o conceito | |
| Page Object Model | Não precisa implementar ainda | |
| Interceptação de requests | Não precisa usar ainda | |
| CI/CD | Não precisa integrar ainda | |
| Debugging | Usa console básico do navegador | |

### 2.4 Automação - Selenium

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Setup e configuração | Não precisa conhecer ou conhecimento básico | |
| WebDriver | Conceitos básicos (se exposto) | |
| Page Object Model | Não precisa conhecer ainda | |
| Waits e sincronização | Conceito básico de waits (se exposto) | |

### 2.5 Testes de API - Postman

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Criação de requests | Cria requisições GET e POST básicas | |
| Collections | Cria collections simples para organizar requests | |
| Variáveis | Usa variáveis locais em requests | |
| Scripts (Pre/Test) | Não precisa usar ainda, mas conhece o conceito | |
| Testes automatizados | Não precisa criar ainda | |
| Newman (CLI) | Não precisa conhecer ainda | |
| Documentação | Adiciona descrições básicas nos requests | |
| Mock servers | Não precisa usar ainda | |

### 2.6 Testes de API - Swagger

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Leitura de documentação | Lê endpoints básicos no Swagger UI | |
| Validação de contratos | Não precisa validar ainda | |
| Testes baseados em Swagger | Usa Swagger para entender API e criar testes no Postman | |
| OpenAPI/Swagger specs | Conhece conceito básico | |

### 2.7 Ferramentas e Tecnologias

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Jira | Cria bugs, executa testes, atualiza status | |
| Git | Clone, pull, commit básico | |
| SQL | Não precisa conhecer ainda | |
| Docker | Não precisa conhecer ainda | |
| DevTools | Inspeção básica de elementos, console | |
| Logs e debugging | Lê logs básicos para identificar erros | |

### 2.8 Liderança e Processo

| Competência | Nível Esperado | Nível (1-5) |
|-------------|----------------|-------------|
| Planejamento de testes | Executa plano de teste fornecido | |
| Estimativa | Não precisa estimar ainda | |
| Code review | Não precisa participar ainda | |
| Mentoria | Recebe mentoria de QAs mais experientes | |
| Processo de qualidade | Segue processo estabelecido | |
| Métricas e KPIs | Conhece conceitos básicos | |
| Comunicação técnica | Comunica claramente com equipe sobre bugs e testes | |

---

## 3. Questionário de Avaliação - QA Junior

Este questionário contém perguntas específicas para avaliar o conhecimento técnico de um QA Junior. Use de forma conversacional, não como teste formal.

### 3.1 Sistema de Pontuação

- **0 pontos**: Não conhece ou resposta incorreta
- **1 ponto**: Conhece conceitualmente, mas não aplica
- **2 pontos**: Conhece e aplica em situações simples
- **3 pontos**: Domina e aplica em situações complexas (acima do esperado para Junior)

**Interpretação**:
- **0-40%**: Precisa de mais treinamento e prática
- **41-70%**: Nível adequado para Junior
- **71-100%**: Está acima do esperado, pode estar pronto para evoluir

---

### 3.2 Perguntas - Fundamentos de QA

**P1**: Explique o que é um caso de teste e quais elementos ele deve conter.
- **Esperado (2 pontos)**: Menciona pré-condições, passos numerados, resultado esperado
- **Bom (3 pontos)**: Inclui dados de teste, pós-condições, critérios de aceitação

**P2**: Qual a diferença entre severidade e prioridade de um bug?
- **Esperado (2 pontos)**: Severidade = impacto no sistema, Prioridade = urgência de correção
- **Bom (3 pontos)**: Dá exemplos práticos de cada combinação (ex: Crítica + Urgente, Baixa + Alta)

**P3**: Descreva o ciclo de vida de um bug desde a descoberta até o fechamento.
- **Esperado (2 pontos)**: Novo → Atribuído → Resolvido → Fechado
- **Bom (3 pontos)**: Inclui estados intermediários (Em Progresso, Retestado) e possibilidade de reabertura

---

### 3.3 Perguntas - Testes Manuais

**P4**: O que são testes exploratórios e quando você os utiliza?
- **Esperado (2 pontos)**: Testes sem script pré-definido, para descobrir bugs inesperados
- **Bom (3 pontos)**: Menciona sessões estruturadas, time-boxing, charter de exploração

**P5**: Como você valida se uma funcionalidade está funcionando corretamente?
- **Esperado (2 pontos)**: Compara comportamento com requisitos, testa cenários principais
- **Bom (3 pontos)**: Menciona casos positivos, negativos, limites, casos extremos

---

### 3.4 Perguntas - Postman (Básico)

**P6**: Como você cria uma requisição GET no Postman?
- **Esperado (2 pontos)**: Seleciona método GET, cola URL, clica Send
- **Bom (3 pontos)**: Menciona parâmetros de query, headers, autenticação

**P7**: O que são variáveis no Postman e para que servem?
- **Esperado (2 pontos)**: Armazenam valores reutilizáveis (URLs, tokens, etc.)
- **Bom (3 pontos)**: Diferencia variáveis de ambiente, globais, locais e quando usar cada uma

**P8**: Como você testa se uma API retornou o status code correto?
- **Esperado (2 pontos)**: Verifica visualmente o status code na resposta
- **Bom (3 pontos)**: Usa scripts de teste na aba Tests para validar automaticamente (ex: `pm.response.to.have.status(200)`)

**PM1**: Como você cria um workflow de testes onde o resultado de uma requisição é usado na próxima?
- **Esperado (1 ponto)**: Copia valor manualmente
- **Bom (2 pontos)**: Usa variáveis para armazenar resposta e reutilizar

**PM4**: Como você gerencia múltiplos ambientes (DEV, QA, PROD) no Postman?
- **Esperado (1 ponto)**: Cria collections separadas para cada ambiente
- **Bom (2 pontos)**: Usa environments do Postman com variáveis

---

### 3.5 Perguntas - Swagger (Básico)

**P9**: O que é Swagger e para que é usado?
- **Esperado (2 pontos)**: Ferramenta de documentação de API, permite ver endpoints disponíveis
- **Bom (3 pontos)**: Menciona OpenAPI, validação de contratos, geração de código

**P10**: Como você usa o Swagger para criar testes no Postman?
- **Esperado (2 pontos)**: Lê endpoints no Swagger, copia informações para criar requests no Postman
- **Bom (3 pontos)**: Importa collection diretamente do Swagger, valida esquemas

**SW1**: Como você identifica problemas em uma documentação Swagger?
- **Esperado (1 ponto)**: Testa manualmente e compara com documentação
- **Bom (2 pontos)**: Valida schema, verifica se exemplos estão corretos

**SW2**: Explique a diferença entre Swagger UI e Swagger Editor.
- **Esperado (1 ponto)**: UI visualiza documentação, Editor permite editar
- **Bom (2 pontos)**: Quando usar cada um, funcionalidades específicas

**SW5**: Como você gera testes automaticamente a partir de um arquivo Swagger?
- **Esperado (1 ponto)**: Importa collection no Postman a partir do Swagger
- **Bom (2 pontos)**: Usa ferramentas de geração de testes

---

### 3.6 Perguntas - Cypress (Básico)

**C1**: Qual a diferença entre `cy.visit()` e `cy.request()`?
- **Esperado (1 ponto)**: `cy.visit()` abre página no navegador, `cy.request()` faz chamada HTTP direta
- **Bom (2 pontos)**: Explica quando usar cada um (UI vs API)

**C3**: Explique o conceito de "retry-ability" no Cypress.
- **Esperado (1 ponto)**: Cypress tenta novamente automaticamente se um comando falhar
- **Bom (2 pontos)**: Explica como funciona, diferença entre comandos e assertions

**C5**: Como você organiza fixtures para diferentes ambientes no Cypress?
- **Esperado (1 ponto)**: Usa fixtures simples em `cypress/fixtures`
- **Bom (2 pontos)**: Organiza por ambiente, usa variáveis de ambiente

---

### 3.7 Perguntas - Ferramentas

**P11**: Como você usa o Jira para reportar um bug?
- **Esperado (2 pontos)**: Cria issue do tipo Bug, preenche campos obrigatórios, anexa evidências
- **Bom (3 pontos)**: Usa template, linka com story, adiciona labels, segue workflow

**P12**: O que você faz quando encontra um bug durante os testes?
- **Esperado (2 pontos)**: Documenta, tira screenshot, reporta no Jira
- **Bom (3 pontos)**: Verifica se já existe, tenta reproduzir, identifica severidade/prioridade, reporta detalhadamente

---

## 4. Guia de Interpretação

### 4.1 Respostas Esperadas de um QA Junior

- Conhece conceitos básicos de QA
- Precisa de orientação para aplicar conhecimento
- Foca em execução de tarefas guiadas
- Aprende fazendo, com suporte
- Comunica claramente sobre bugs encontrados

### 4.2 Sinais de que está Pronto para Evoluir

- Responde perguntas de nível Pleno com 2+ pontos
- Demonstra autonomia em tarefas
- Compartilha conhecimento com outros juniores
- Propõe melhorias no processo
- Automatiza tarefas repetitivas

### 4.3 Áreas que Precisam de Desenvolvimento

Se o QA Junior não consegue responder adequadamente:
- **Fundamentos**: Precisa de mais treinamento teórico
- **Ferramentas**: Precisa de prática com Postman, Jira
- **Cypress**: Precisa de curso básico e prática
- **Swagger**: Precisa de exposição a APIs e documentação

---

## 5. Plano de Desenvolvimento Sugerido

Com base na avaliação, criar um plano de desenvolvimento focado em:

1. **Fundamentos Sólidos** (Mês 1-2)
   - Completar curso de fundamentos de QA
   - Praticar criação de casos de teste
   - Dominar reporte de bugs

2. **Ferramentas Básicas** (Mês 2-3)
   - Dominar Jira (criar bugs, executar testes)
   - Aprender Postman (requests, collections, variáveis)
   - Entender Swagger (leitura de documentação)

3. **Início de Automação** (Mês 4-6)
   - Curso básico de Cypress
   - Automatizar primeiro teste
   - Praticar comandos básicos

4. **Consolidação** (Mês 7-12)
   - Praticar todos os conceitos
   - Automatizar mais testes
   - Preparar para próximo nível

---

## 6. Referências

- Guia Completo de Progressão: `../guia-progressao-carreira.md`
- Processo de Qualidade: `../processo-qualidade.md`
- Templates: `../../templates/`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
