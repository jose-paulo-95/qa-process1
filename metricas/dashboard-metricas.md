# Dashboard de Métricas de Qualidade

## 1. Introdução

Este documento descreve o dashboard de métricas de qualidade, incluindo visualizações recomendadas e como configurá-las no Jira ou outras ferramentas.

## 2. Estrutura do Dashboard

### 2.1 Visão Geral (Overview)

Métricas principais em destaque para visão rápida do status atual.

### 2.2 Métricas de Qualidade

Foco na qualidade do produto entregue.

### 2.3 Métricas de Processo

Foco na eficiência do processo de teste.

### 2.4 Tendências

Gráficos de tendência ao longo do tempo.

## 3. Visualizações Recomendadas

### 3.1 Cards de Métricas Principais

**Métricas a Exibir**:
- Taxa de Defeitos (atual)
- Taxa de Escape (último mês)
- Cobertura de Testes (%)
- Taxa de Pass/Fail (atual)
- Bugs Abertos (total)
- Bugs Críticos Abertos

**Formato**: Cards com número grande, indicador de tendência (↑↓), e comparação com período anterior.

**Exemplo**:
```
┌─────────────────────┐
│ Taxa de Defeitos     │
│      4.2%            │
│    ↓ 0.5% (vs. mês)  │
└─────────────────────┘
```

---

### 3.2 Gráfico de Bugs por Severidade

**Tipo**: Gráfico de barras ou pizza

**Dados**: 
- Quantidade de bugs por severidade (Crítica, Alta, Média, Baixa)

**Período**: Último mês ou sprint atual

**JQL Sugerido**:
```jql
project = "PROJ" AND type = Bug AND created >= -30d
GROUP BY severity
```

**Uso**: Identificar distribuição de severidade e focar em bugs críticos.

---

### 3.3 Gráfico de Taxa de Pass/Fail

**Tipo**: Gráfico de barras ou pizza

**Dados**: 
- Testes que passaram
- Testes que falharam
- Testes bloqueados

**Período**: Sprint atual ou último mês

**JQL Sugerido**:
```jql
project = "PROJ" AND type = "Test Execution" AND status in (Pass, Fail, Blocked)
GROUP BY status
```

**Uso**: Ver saúde geral dos testes.

---

### 3.4 Gráfico de Tendência de Bugs

**Tipo**: Gráfico de linha

**Dados**: 
- Bugs criados por dia/semana
- Bugs resolvidos por dia/semana

**Período**: Últimos 3-6 meses

**JQL Sugerido**:
```jql
project = "PROJ" AND type = Bug AND created >= -90d
ORDER BY created ASC
```

**Uso**: Identificar tendências e padrões ao longo do tempo.

---

### 3.5 Gráfico de Taxa de Escape

**Tipo**: Gráfico de linha ou barras

**Dados**: 
- Taxa de escape por mês/release

**Período**: Últimos 6-12 meses

**Cálculo**: Bugs em produção / Total de bugs × 100

**Uso**: Medir efetividade dos testes antes da release.

---

### 3.6 Gráfico de Tempo Médio de Resolução (MTTR)

**Tipo**: Gráfico de barras

**Dados**: 
- MTTR por severidade
- MTTR por mês

**Período**: Últimos 3-6 meses

**Uso**: Identificar se bugs estão sendo resolvidos dentro do SLA.

---

### 3.7 Gráfico de Cobertura de Testes

**Tipo**: Gráfico de barras ou gauge

**Dados**: 
- Cobertura por módulo/funcionalidade
- Cobertura geral

**Período**: Atual

**Uso**: Identificar áreas com baixa cobertura.

---

### 3.8 Gráfico de Bugs por Módulo

**Tipo**: Gráfico de barras horizontal

**Dados**: 
- Quantidade de bugs por componente/módulo

**Período**: Último mês ou sprint

**JQL Sugerido**:
```jql
project = "PROJ" AND type = Bug AND created >= -30d
GROUP BY component
```

**Uso**: Identificar áreas problemáticas que precisam de mais atenção.

---

### 3.9 Tabela de Bugs Críticos Abertos

**Tipo**: Tabela

**Colunas**:
- ID do Bug
- Título
- Severidade
- Prioridade
- Atribuído a
- Dias aberto
- Story relacionada

**Filtro**: Bugs críticos (P1) e altos (P2) abertos

**JQL Sugerido**:
```jql
project = "PROJ" AND type = Bug AND severity in (Critical, High) AND status != Closed
ORDER BY priority DESC, created ASC
```

**Uso**: Acompanhar bugs críticos que precisam de atenção imediata.

---

### 3.10 Gráfico de Velocity vs. Bugs

**Tipo**: Gráfico de barras duplas

**Dados**: 
- Story points entregues por sprint
- Bugs encontrados por sprint

**Período**: Últimos 6-12 sprints

**Uso**: Correlacionar produtividade com qualidade.

---

## 4. Configuração no Jira

### 4.1 Criando o Dashboard

1. Acessar **Dashboards** → **Create Dashboard**
2. Nomear: "QA Metrics Dashboard"
3. Adicionar gadgets/widgets conforme necessário

### 4.2 Gadgets Recomendados

**Jira Native Gadgets**:
- **Created vs Resolved Chart**: Bugs criados vs. resolvidos
- **Pie Chart**: Distribuição de bugs por severidade
- **Filter Results**: Lista de bugs críticos
- **2D Filter Statistics**: Estatísticas de filtros
- **Activity Timeline**: Atividade recente

**Gadgets de Terceiros** (se disponíveis):
- **eazyBI**: Dashboards avançados
- **Tempo Timesheet**: Métricas de tempo
- **Custom Charts**: Gráficos customizados

### 4.3 Filtros Necessários

Criar filtros salvos no Jira para usar nos gadgets:

**Filtro: Bugs do Mês**
```jql
project = "PROJ" AND type = Bug AND created >= startOfMonth()
```

**Filtro: Bugs Críticos Abertos**
```jql
project = "PROJ" AND type = Bug AND severity = Critical AND status != Closed
```

**Filtro: Bugs em Produção**
```jql
project = "PROJ" AND type = Bug AND "Environment" = Production
```

**Filtro: Testes Executados (Sprint Atual)**
```jql
project = "PROJ" AND type = "Test Execution" AND sprint in openSprints()
```

---

## 5. Dashboard em Outras Ferramentas

### 5.1 Google Sheets / Excel

**Vantagens**: 
- Fácil de compartilhar
- Customizável
- Gráficos nativos

**Como fazer**:
1. Exportar dados do Jira (CSV)
2. Importar no Sheets/Excel
3. Criar gráficos e tabelas dinâmicas
4. Atualizar periodicamente

### 5.2 Power BI / Tableau

**Vantagens**: 
- Visualizações avançadas
- Conectores com Jira
- Dashboards interativos

**Como fazer**:
1. Conectar com Jira via API ou CSV
2. Criar modelo de dados
3. Criar visualizações
4. Publicar dashboard

### 5.3 Grafana (se houver integração)

**Vantagens**: 
- Tempo real
- Alertas
- Integração com múltiplas fontes

---

## 6. Layout Sugerido do Dashboard

### Linha 1: Métricas Principais (Cards)
```
[Taxa de Defeitos] [Taxa de Escape] [Cobertura] [Taxa de Pass]
```

### Linha 2: Gráficos de Qualidade
```
[Bugs por Severidade] [Taxa de Pass/Fail]
```

### Linha 3: Tendências
```
[Tendência de Bugs] [Taxa de Escape ao Longo do Tempo]
```

### Linha 4: Análise Detalhada
```
[Bugs por Módulo] [MTTR por Severidade]
```

### Linha 5: Ações
```
[Bugs Críticos Abertos] [Stories Bloqueadas]
```

---

## 7. Frequência de Atualização

### 7.1 Tempo Real
- Bugs abertos/fechados
- Testes executados
- Status de stories

### 7.2 Diária
- Métricas do dia anterior
- Bugs críticos
- Status geral

### 7.3 Semanal
- Métricas da semana
- Tendências semanais
- Relatório para equipe

### 7.4 Mensal
- Métricas mensais
- Comparação com mês anterior
- Relatório para stakeholders

---

## 8. Alertas e Notificações

### 8.1 Alertas Críticos

Configurar alertas para:
- Bugs críticos (P1) abertos > 3
- Taxa de escape > 10%
- Taxa de pass < 70%
- MTTR de bugs críticos > SLA

### 8.2 Notificações

- **Diária**: Resumo de métricas para equipe
- **Semanal**: Relatório para gestão
- **Mensal**: Relatório executivo

---

## 9. Exemplo de Dashboard Completo

### Visão Geral
```
┌─────────────────────────────────────────────────────────┐
│              QA METRICS DASHBOARD                       │
│                  Última atualização: 04/02/2026         │
└─────────────────────────────────────────────────────────┘

┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ Defeitos │ │  Escape  │ │ Cobertura│ │   Pass   │
│   4.2%   │ │   3.5%   │ │   78%    │ │   87%    │
│   ↓ 0.5% │ │   ↓ 1.2% │ │   ↑ 5%   │ │   ↑ 3%   │
└──────────┘ └──────────┘ └──────────┘ └──────────┘

┌─────────────────────┐ ┌─────────────────────┐
│ Bugs por Severidade │ │   Taxa Pass/Fail    │
│  [Gráfico Pizza]    │ │   [Gráfico Barras] │
└─────────────────────┘ └─────────────────────┘

┌─────────────────────┐ ┌─────────────────────┐
│ Tendência de Bugs   │ │  Taxa de Escape     │
│  [Gráfico Linha]    │ │  [Gráfico Linha]    │
└─────────────────────┘ └─────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Bugs Críticos Abertos (5)                               │
│ [Tabela com bugs críticos]                               │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Referências

- Definições de KPIs: `kpi-definitions.md`
- Guia de Coleta: `coleta-metricas.md`
- Queries JQL: Ver `coleta-metricas.md` para mais exemplos

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
