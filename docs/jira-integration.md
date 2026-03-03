
# Guia de Integração com Jira

## 1. Introdução

Este documento fornece instruções detalhadas para configurar o Jira de forma a suportar o processo de QA, incluindo workflows, campos customizados, tipos de issue e dashboards.

## 2. Configuração de Tipos de Issue

### 2.1 Tipos de Issue Recomendados

#### Story/Feature
- **Uso**: Histórias de usuário e features
- **Workflow**: To Do → In Progress → Ready for Testing → In Testing → Done

#### Bug
- **Uso**: Reporte de bugs
- **Workflow**: Novo → Atribuído → Em Progresso → Resolvido → Retestado → Fechado

#### Test Case
- **Uso**: Casos de teste
- **Workflow**: Novo → Aprovado → Em Uso → Arquivado

#### Test Execution
- **Uso**: Execução de casos de teste
- **Workflow**: Não Executado → Em Execução → Pass → Fail → Blocked

#### Test Plan
- **Uso**: Planos de teste
- **Workflow**: Rascunho → Aprovado → Em Execução → Concluído

### 2.2 Como Criar Tipos de Issue

1. Acessar **Settings** → **Issues** → **Issue types**
2. Clicar em **Add issue type**
3. Preencher nome e descrição
4. Associar ao projeto

---

## 3. Campos Customizados

### 3.1 Campos Recomendados para Bugs

#### Severidade (Severity)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - Crítica (P1 - Blocker)
  - Alta (P2 - Major)
  - Média (P3 - Minor)
  - Baixa (P4 - Trivial)
- **Obrigatório**: Sim

#### Prioridade (Priority)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - Urgente
  - Alta
  - Média
  - Baixa
- **Obrigatório**: Sim

#### Ambiente (Environment)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - Desenvolvimento (DEV)
  - QA/Teste
  - Staging
  - Produção
- **Obrigatório**: Sim

#### Tipo de Bug (Bug Type)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - Funcional
  - Visual/UI
  - Performance
  - Segurança
  - Usabilidade
  - Outro
- **Obrigatório**: Não

#### Categoria (Category)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - Frontend
  - Backend/API
  - Mobile
  - Integração
  - Banco de Dados
  - Outro
- **Obrigatório**: Não

#### Reproduzível (Reproducible)
- **Tipo**: Checkbox
- **Opções**: Sim / Não
- **Obrigatório**: Não

#### Taxa de Reprodução (Reproduction Rate)
- **Tipo**: Select List (Single Choice)
- **Opções**:
  - 100% (sempre reproduz)
  - Intermitente (às vezes reproduz)
  - Raro (difícil de reproduzir)
- **Obrigatório**: Não

#### Passos para Reproduzir (Steps to Reproduce)
- **Tipo**: Text Area (Multi-line)
- **Obrigatório**: Sim

#### Resultado Esperado (Expected Result)
- **Tipo**: Text Area (Multi-line)
- **Obrigatório**: Sim

#### Resultado Atual (Actual Result)
- **Tipo**: Text Area (Multi-line)
- **Obrigatório**: Sim

#### Browser/OS
- **Tipo**: Text Field
- **Obrigatório**: Não

#### Versão Testada (Tested Version)
- **Tipo**: Text Field
- **Obrigatório**: Não

### 3.2 Campos Recomendados para Test Cases

#### Prioridade do Test Case
- **Tipo**: Select List (Single Choice)
- **Opções**: Alta, Média, Baixa
- **Obrigatório**: Sim

#### Tipo de Teste
- **Tipo**: Multi-select
- **Opções**: Funcional, Regressão, Integração, Performance, Segurança, Usabilidade
- **Obrigatório**: Sim

#### Automatizado
- **Tipo**: Checkbox
- **Opções**: Sim / Não
- **Obrigatório**: Não

#### ID do Teste Automatizado
- **Tipo**: Text Field
- **Obrigatório**: Não (apenas se automatizado)

#### Pré-condições
- **Tipo**: Text Area
- **Obrigatório**: Não

#### Resultado Esperado
- **Tipo**: Text Area
- **Obrigatório**: Sim

### 3.3 Campos Recomendados para Test Executions

#### Status de Execução
- **Tipo**: Select List (Single Choice)
- **Opções**: Pass, Fail, Blocked, Não Executado
- **Obrigatório**: Sim

#### Ambiente de Execução
- **Tipo**: Select List (Single Choice)
- **Opções**: DEV, QA, Staging, Produção
- **Obrigatório**: Sim

#### Data de Execução
- **Tipo**: Date Picker
- **Obrigatório**: Sim

#### Executado por
- **Tipo**: User Picker
- **Obrigatório**: Sim

#### Observações
- **Tipo**: Text Area
- **Obrigatório**: Não

### 3.4 Como Criar Campos Customizados

1. Acessar **Settings** → **Issues** → **Custom fields**
2. Clicar em **Add custom field**
3. Selecionar tipo de campo
4. Preencher nome e opções
5. Associar ao projeto e tipos de issue relevantes
6. Configurar como obrigatório (se necessário)

---

## 4. Workflows

### 4.1 Workflow para Bugs

```
Novo → Atribuído → Em Progresso → Resolvido → Retestado → Fechado
                    ↓                                    ↑
                 Reaberto ──────────────────────────────┘
```

#### Estados:
- **Novo**: Bug reportado, aguardando análise
- **Atribuído**: Bug atribuído ao desenvolvedor
- **Em Progresso**: Desenvolvedor trabalhando na correção
- **Resolvido**: Bug corrigido, aguardando reteste
- **Retestado**: QA verificou a correção
- **Fechado**: Bug confirmado como corrigido
- **Reaberto**: Bug ainda existe após correção

#### Transições:
- **Novo → Atribuído**: Atribuir bug
- **Atribuído → Em Progresso**: Desenvolvedor começa a trabalhar
- **Em Progresso → Resolvido**: Desenvolvedor corrigiu
- **Resolvido → Retestado**: QA aprovou correção
- **Retestado → Fechado**: Bug fechado
- **Resolvido → Reaberto**: Bug ainda existe
- **Reaberto → Em Progresso**: Desenvolvedor vai corrigir novamente

### 4.2 Workflow para Stories

```
To Do → In Progress → Ready for Testing → In Testing → Done
         ↓                                              ↑
      Blocked ─────────────────────────────────────────┘
```

#### Estados:
- **To Do**: Story criada, aguardando desenvolvimento
- **In Progress**: Desenvolvedor trabalhando
- **Ready for Testing**: Pronta para QA testar
- **In Testing**: QA executando testes
- **Blocked**: Bloqueada por dependência
- **Done**: Testada e aprovada

### 4.3 Workflow para Test Cases

```
Novo → Aprovado → Em Uso → Arquivado
```

#### Estados:
- **Novo**: Test case criado, aguardando aprovação
- **Aprovado**: Test case aprovado, pronto para uso
- **Em Uso**: Sendo usado em execuções
- **Arquivado**: Não usado mais, mas mantido para histórico

### 4.4 Workflow para Test Executions

```
Não Executado → Em Execução → Pass
                           → Fail
                           → Blocked
```

#### Estados:
- **Não Executado**: Ainda não foi executado
- **Em Execução**: Sendo executado no momento
- **Pass**: Teste passou
- **Fail**: Teste falhou
- **Blocked**: Teste bloqueado (ambiente, dados, etc.)

### 4.5 Como Criar/Editar Workflows

1. Acessar **Settings** → **Issues** → **Workflows**
2. Clicar em **Add workflow** ou editar existente
3. Adicionar estados
4. Criar transições entre estados
5. Configurar condições e validações (opcional)
6. Associar workflow ao projeto

---

## 5. Screens (Telas de Edição)

### 5.1 Screen para Criar Bug

**Campos a incluir**:
- Summary (título)
- Severidade
- Prioridade
- Ambiente
- Tipo de Bug
- Categoria
- Description (descrição)
- Passos para Reproduzir
- Resultado Esperado
- Resultado Atual
- Browser/OS
- Versão Testada
- Attachment (anexos)
- Assignee (atribuído a)
- Reporter (reportado por)

### 5.2 Screen para Editar Bug

**Campos adicionais**:
- Status
- Resolution (se resolvido)
- Comments (comentários)

### 5.3 Como Configurar Screens

1. Acessar **Settings** → **Issues** → **Screens**
2. Criar nova screen ou editar existente
3. Adicionar/remover campos
4. Organizar ordem dos campos
5. Associar screen ao workflow

---

## 6. Dashboards

### 6.1 Dashboard de QA

**Gadgets recomendados**:
- **Created vs Resolved Chart**: Bugs criados vs. resolvidos
- **Pie Chart**: Bugs por severidade
- **Filter Results**: Bugs críticos abertos
- **2D Filter Statistics**: Estatísticas de filtros
- **Activity Timeline**: Atividade recente

### 6.2 Dashboard de Release

**Gadgets recomendados**:
- **Sprint Burndown**: Progresso da sprint
- **Velocity Chart**: Velocity da equipe
- **Created vs Resolved**: Bugs da release
- **Filter Results**: Stories da release
- **Test Execution**: Status de testes

### 6.3 Como Criar Dashboard

1. Acessar **Dashboards** → **Create Dashboard**
2. Nomear o dashboard
3. Adicionar gadgets/widgets
4. Configurar cada gadget com filtros
5. Organizar layout
6. Compartilhar com equipe

---

## 7. Filtros e Queries JQL

### 7.1 Filtros Essenciais

#### Bugs Críticos Abertos
```jql
project = "PROJ" AND type = Bug 
AND severity = Critical 
AND status != Closed
```

#### Bugs da Sprint Atual
```jql
project = "PROJ" AND type = Bug 
AND sprint in openSprints()
```

#### Bugs em Produção
```jql
project = "PROJ" AND type = Bug 
AND "Environment" = Production
```

#### Stories Prontas para Teste
```jql
project = "PROJ" AND type = Story 
AND status = "Ready for Testing"
```

#### Testes Falhados
```jql
project = "PROJ" AND type = "Test Execution" 
AND status = Fail
```

### 7.2 Como Criar Filtros

1. Acessar **Issues** → **Search for issues**
2. Usar JQL para criar query
3. Executar busca
4. Clicar em **Save as** para salvar filtro
5. Nomear e compartilhar (se necessário)

---

## 8. Permissões

### 8.1 Permissões Recomendadas

#### QA Team
- **Criar**: Bugs, Test Cases, Test Executions, Test Plans
- **Editar**: Todos os tipos de issue relacionados a QA
- **Transicionar**: Workflows de bugs e testes
- **Comentar**: Em todas as issues
- **Visualizar**: Todas as issues do projeto

#### Developers
- **Criar**: Stories, Bugs
- **Editar**: Bugs atribuídos, Stories em desenvolvimento
- **Transicionar**: Workflows de bugs e stories
- **Comentar**: Em todas as issues

#### Product Owner
- **Criar**: Stories, Epics
- **Editar**: Stories, Epics
- **Transicionar**: Stories (aprovar/rejeitar)
- **Visualizar**: Todas as issues

### 8.2 Como Configurar Permissões

1. Acessar **Settings** → **Issues** → **Permission schemes**
2. Editar scheme do projeto
3. Configurar permissões por role/grupo
4. Aplicar ao projeto

---

## 9. Automação (Automation Rules)

### 9.1 Regras Recomendadas

#### Auto-atribuir Bugs Críticos
**Trigger**: Bug criado com severidade = Crítica  
**Action**: Atribuir ao Tech Lead

#### Notificar quando Bug é Resolvido
**Trigger**: Bug transicionado para "Resolvido"  
**Action**: Enviar email para QA que reportou o bug

#### Mover Story para "Ready for Testing"
**Trigger**: Story transicionada para "In Progress" e depois para "Done" pelo Dev  
**Action**: Transicionar para "Ready for Testing"

#### Criar Test Execution quando Test Case é Aprovado
**Trigger**: Test Case aprovado  
**Action**: Criar Test Execution linkado

### 9.2 Como Criar Regras de Automação

1. Acessar **Settings** → **Automation**
2. Clicar em **Create rule**
3. Configurar trigger
4. Adicionar condições (se necessário)
5. Configurar actions
6. Testar e ativar

---

## 10. Integração com Ferramentas Externas

### 10.1 Integração com CI/CD

**Exemplo (Jenkins)**:
1. Instalar plugin Jira no Jenkins
2. Configurar credenciais
3. Atualizar status de issues após build
4. Criar bugs automaticamente se testes falharem

### 10.2 Integração com Test Automation

**Exemplo (Selenium/Cypress)**:
1. Usar Jira API para criar/atualizar test executions
2. Reportar resultados automaticamente
3. Criar bugs automaticamente se testes falharem

### 10.3 Integração com Slack/Teams

**Configurar notificações**:
1. Instalar app Jira no Slack/Teams
2. Configurar webhooks
3. Receber notificações de mudanças importantes

### 10.4 Integração com BrowserStack Test Management

#### 10.4.1 Visão Geral

**Por que usar BrowserStack para armazenar casos de teste?**
- **Custos**: BrowserStack oferece armazenamento de casos de teste como parte de seu plano, reduzindo custos comparado a soluções dedicadas
- **Execução integrada**: Casos de teste podem ser executados diretamente no BrowserStack
- **Rastreabilidade**: Links entre Jira e BrowserStack mantêm rastreabilidade completa

**Benefícios da integração com Jira**:
- Rastreabilidade bidirecional entre casos de teste e stories/features
- Visibilidade de status de testes diretamente no Jira
- Histórico de execuções linkado às issues
- Facilita planejamento e estimativas baseadas em casos de teste

**Limitações e considerações**:
- Link é principalmente manual (via URLs e campos customizados)
- Sincronização de status pode requerer atualização manual
- BrowserStack Test Management pode ter limitações de API para integração automática
- Recomenda-se estabelecer processo claro de manutenção dos links

#### 10.4.2 Configuração no Jira

##### Campo Customizado: Link BrowserStack

**Criar campo customizado para link do BrowserStack**:

1. Acessar **Settings** → **Issues** → **Custom fields**
2. Clicar em **Add custom field**
3. Selecionar tipo: **URL Field** (recomendado) ou **Text Field**
4. Nome: "BrowserStack Test Case URL" ou "Link BrowserStack"
5. Descrição: "URL do caso de teste no BrowserStack Test Management"
6. Associar ao tipo de issue: **Test Case**
7. Tornar visível nas screens de criação e edição

**Configuração recomendada**:
- **Tipo**: URL Field (permite clicar diretamente no link)
- **Obrigatório**: Não (para permitir flexibilidade)
- **Visível em**: Create, Edit, View screens

##### Campo Customizado: ID BrowserStack

**Criar campo para ID do caso de teste**:

1. Acessar **Settings** → **Issues** → **Custom fields**
2. Clicar em **Add custom field**
3. Selecionar tipo: **Text Field (Single Line)**
4. Nome: "BrowserStack Test Case ID"
5. Descrição: "ID do caso de teste no BrowserStack (ex: TC-12345)"
6. Associar ao tipo de issue: **Test Case**
7. Adicionar validação (opcional): Formato esperado do ID

**Configuração recomendada**:
- **Tipo**: Text Field
- **Obrigatório**: Não
- **Validação**: Regex opcional para formato do ID (ex: `^TC-\d+$`)

##### Configuração de Screens

**Adicionar campos à screen de Test Case**:

1. Acessar **Settings** → **Issues** → **Screens**
2. Editar screen usada para Test Case
3. Adicionar campos:
   - BrowserStack Test Case URL
   - BrowserStack Test Case ID
4. Organizar campos em seção "Integração BrowserStack" (opcional)
5. Salvar alterações

#### 10.4.3 Estratégias de Link

##### Link Direto via URL

**Como funciona**:
- Caso de teste criado no BrowserStack Test Management
- URL do caso copiada e colada no campo "BrowserStack Test Case URL" no Jira
- Link permite acesso direto ao caso de teste no BrowserStack

**Formato da URL** (exemplo):
```
https://app.browserstack.com/test-management/test-cases/[TEST_CASE_ID]
```

**Vantagens**:
- Acesso rápido e direto
- Não requer configuração adicional
- Funciona imediatamente

**Desvantagens**:
- Link manual
- Pode quebrar se URL mudar
- Não sincroniza status automaticamente

##### Referência por ID

**Como funciona**:
- ID do caso de teste do BrowserStack armazenado no campo customizado
- Permite busca e referência sem depender de URL
- Útil para relatórios e queries

**Formato do ID** (exemplo):
```
TC-12345
BST-67890
```

**Vantagens**:
- Mais estável que URLs
- Facilita buscas e relatórios
- Pode ser usado em automações futuras

**Desvantagens**:
- Ainda requer link manual
- Não fornece acesso direto (precisa construir URL)

##### Sincronização Manual

**Processo recomendado**:

1. **Criar Test Case no Jira**
   - Criar issue do tipo "Test Case"
   - Preencher informações básicas (título, descrição, etc.)

2. **Criar Caso de Teste no BrowserStack**
   - Acessar BrowserStack Test Management
   - Criar novo caso de teste
   - Copiar URL e ID do caso

3. **Fazer Link no Jira**
   - Editar Test Case no Jira
   - Preencher campo "BrowserStack Test Case URL" com a URL
   - Preencher campo "BrowserStack Test Case ID" com o ID
   - Salvar

4. **Manutenção Contínua**
   - Atualizar status no Jira quando caso de teste for modificado no BrowserStack
   - Verificar links periodicamente
   - Documentar mudanças

##### Possíveis Automações via API

**BrowserStack API** (se disponível):
- Consultar casos de teste via API
- Atualizar informações no Jira via webhook ou script

**Jira API**:
- Criar/atualizar Test Cases via API
- Adicionar links automaticamente
- Sincronizar status

**Exemplo de script Python** (conceitual):
```python
# Exemplo conceitual - ajustar conforme APIs disponíveis
import requests

def sync_browserstack_to_jira(browserstack_test_id, jira_test_case_key):
    # Buscar caso de teste no BrowserStack
    bs_test = get_browserstack_test(browserstack_test_id)
    
    # Atualizar Jira
    jira_api.update_issue(
        jira_test_case_key,
        fields={
            'customfield_BrowserStackURL': bs_test['url'],
            'customfield_BrowserStackID': bs_test['id'],
            'summary': bs_test['name']
        }
    )
```

**Nota**: Verificar documentação atual do BrowserStack para APIs disponíveis.

#### 10.4.4 Workflow Recomendado

##### Fluxo Completo de Criação e Link

```
1. Planejamento
   ↓
2. Criar Test Case no Jira
   - Título: [Nome do caso de teste]
   - Descrição: [Descrição detalhada]
   - Story relacionada: [Link para story]
   ↓
3. Criar Caso de Teste no BrowserStack
   - Acessar BrowserStack Test Management
   - Criar novo caso de teste
   - Preencher informações (passos, dados, etc.)
   - Copiar URL e ID
   ↓
4. Fazer Link no Jira
   - Editar Test Case no Jira
   - Preencher "BrowserStack Test Case URL"
   - Preencher "BrowserStack Test Case ID"
   - Adicionar comentário com contexto (opcional)
   ↓
5. Validação
   - Verificar se link funciona
   - Confirmar que informações estão sincronizadas
   ↓
6. Uso Contínuo
   - Executar testes no BrowserStack
   - Atualizar status no Jira conforme necessário
   - Manter links atualizados
```

##### Atualização de Status

**Quando atualizar**:
- Após execução de teste no BrowserStack
- Quando caso de teste for modificado
- Quando status mudar (ativo, inativo, arquivado)

**Como atualizar**:
1. Verificar status no BrowserStack
2. Atualizar campo de status no Jira (se houver)
3. Adicionar comentário no Jira com resultado da execução
4. Linkar Test Execution no Jira (se aplicável)

#### 10.4.5 Boas Práticas

##### Nomenclatura Consistente

**Test Cases no Jira**:
- Formato: `TC-[Módulo]-[Funcionalidade]-[Número]`
- Exemplo: `TC-AUTH-LOGIN-001`

**Test Cases no BrowserStack**:
- Usar mesmo padrão de nomenclatura
- Incluir referência ao ID do Jira no título ou descrição
- Exemplo: `TC-AUTH-LOGIN-001 - Login com credenciais válidas (Jira: PROJ-123)`

##### Rastreabilidade

**Manter rastreabilidade completa**:
- Test Case no Jira → Story/Feature
- Test Case no Jira → BrowserStack Test Case
- Test Execution → Test Case → BrowserStack Execution
- Bugs → Test Cases relacionados

**Usar links do Jira**:
- Linkar Test Case com Story relacionada
- Linkar Test Execution com Test Case
- Linkar Bugs com Test Cases que encontraram o problema

##### Manutenção dos Links

**Checklist de manutenção** (mensal):
- [ ] Verificar se todos os Test Cases têm link para BrowserStack
- [ ] Validar se links ainda funcionam
- [ ] Atualizar links quebrados
- [ ] Documentar casos sem link (se houver)

**Processo de atualização**:
1. Revisar Test Cases sem link BrowserStack
2. Criar casos no BrowserStack se necessário
3. Atualizar links no Jira
4. Documentar mudanças

##### Documentação

**Documentar no Test Case do Jira**:
- Link para BrowserStack na descrição ou campo customizado
- ID do caso no BrowserStack
- Última atualização
- Responsável pela manutenção

**Template de descrição** (sugestão):
```
## Descrição do Test Case

[Descrição detalhada do caso de teste]

## Integração BrowserStack

- **URL**: [Link para BrowserStack]
- **ID**: [ID do caso]
- **Última atualização**: [Data]
- **Responsável**: [Nome]

## Rastreabilidade

- **Story relacionada**: [Link]
- **Requisito**: [Referência]
```

#### 10.4.6 Exemplos Práticos

##### Exemplo 1: Test Case no Jira com Link BrowserStack

**Test Case no Jira**:
- **Key**: `PROJ-TC-001`
- **Título**: Login com credenciais válidas
- **BrowserStack Test Case URL**: `https://app.browserstack.com/test-management/test-cases/TC-12345`
- **BrowserStack Test Case ID**: `TC-12345`
- **Story relacionada**: `PROJ-100` (Implementar autenticação)

**Como acessar**:
1. Abrir Test Case no Jira
2. Clicar no campo "BrowserStack Test Case URL"
3. Ser redirecionado para o caso de teste no BrowserStack

##### Exemplo 2: Query JQL para Test Cases com BrowserStack

**Buscar Test Cases com link BrowserStack**:
```jql
project = "PROJ" 
AND type = "Test Case" 
AND "BrowserStack Test Case URL" IS NOT EMPTY
```

**Buscar Test Cases sem link BrowserStack**:
```jql
project = "PROJ" 
AND type = "Test Case" 
AND "BrowserStack Test Case URL" IS EMPTY
```

**Buscar Test Cases por ID do BrowserStack**:
```jql
project = "PROJ" 
AND type = "Test Case" 
AND "BrowserStack Test Case ID" ~ "TC-12345"
```

##### Exemplo 3: Template de Test Case

**Estrutura recomendada no Jira**:

```
Título: [Nome descritivo do caso de teste]

Descrição:
## Objetivo
[Objetivo do teste]

## Pré-condições
[Pré-condições]

## Passos
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Resultado Esperado
[Resultado esperado]

## Integração BrowserStack
- URL: [Link]
- ID: [ID]
- Última execução: [Data/Status]

## Rastreabilidade
- Story: [Link]
- Requisito: [Referência]
```

#### 10.4.7 Troubleshooting

##### Link não funciona

**Problema**: URL do BrowserStack não abre ou retorna erro

**Soluções**:
1. Verificar se URL está correta
2. Verificar se caso de teste ainda existe no BrowserStack
3. Verificar permissões de acesso ao BrowserStack
4. Atualizar link se caso foi movido ou renomeado

##### ID não corresponde

**Problema**: ID no Jira não corresponde ao caso no BrowserStack

**Soluções**:
1. Verificar ID no BrowserStack
2. Atualizar campo no Jira
3. Verificar se há múltiplos casos com nomes similares
4. Padronizar formato de ID

##### Sincronização de status

**Problema**: Status no Jira não reflete status no BrowserStack

**Soluções**:
1. Estabelecer processo de atualização manual regular
2. Considerar automação via API (se disponível)
3. Usar comentários no Jira para documentar mudanças
4. Criar regra de automação no Jira para notificar sobre atualizações

---

## 11. Checklist de Configuração

### Configuração Inicial
- [ ] Tipos de issue criados (Bug, Test Case, Test Execution, Test Plan)
- [ ] Campos customizados criados
- [ ] Workflows configurados
- [ ] Screens configuradas
- [ ] Permissões configuradas
- [ ] Filtros essenciais criados
- [ ] Dashboards criados

### Configuração Avançada
- [ ] Regras de automação configuradas
- [ ] Integrações configuradas (CI/CD, automação)
- [ ] Integração BrowserStack configurada (campos customizados, screens)
- [ ] Notificações configuradas
- [ ] Templates de issue configurados

---

## 12. Referências

- Processo de Qualidade: `processo-qualidade.md`
- Templates: `../templates/`
- Métricas: `../metricas/`
- Documentação Jira: https://support.atlassian.com/jira/

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
