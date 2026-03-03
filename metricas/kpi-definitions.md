# Definições de KPIs e Métricas de Qualidade

## 1. Introdução

Este documento define os principais KPIs (Key Performance Indicators) e métricas utilizadas para medir a qualidade do software e a eficiência do processo de QA.

## 2. Categorias de Métricas

### 2.1 Métricas de Qualidade
Medem a qualidade do produto entregue.

### 2.2 Métricas de Processo
Medem a eficiência e efetividade do processo de teste.

### 2.3 Métricas de Produtividade
Medem a produtividade da equipe de QA.

## 3. KPIs Principais

### 3.1 Taxa de Defeitos (Defect Rate)

**Definição**: Número de bugs encontrados por unidade de medida (testes executados, story points, horas de teste).

**Fórmula**: 
```
Taxa de Defeitos = (Número de Bugs Encontrados / Total de Testes Executados) × 100
```

**Variações**:
- Bugs por Story Point: `Total de Bugs / Total de Story Points`
- Bugs por Hora de Teste: `Total de Bugs / Total de Horas de Teste`

**Meta**: 
- < 5% (excelente)
- 5-10% (bom)
- 10-15% (aceitável)
- > 15% (precisa atenção)

**Como Coletar**: 
- Contar bugs criados no Jira
- Dividir pelo número de testes executados

**Frequência**: Semanal/Mensal

---

### 3.2 Taxa de Escape (Defect Escape Rate)

**Definição**: Porcentagem de bugs encontrados em produção em relação ao total de bugs.

**Fórmula**: 
```
Taxa de Escape = (Bugs Encontrados em Produção / Total de Bugs) × 100
```

**Meta**: 
- < 5% (excelente)
- 5-10% (bom)
- 10-15% (aceitável)
- > 15% (precisa atenção)

**Como Coletar**: 
- Bugs com ambiente = "Produção" no Jira
- Dividir pelo total de bugs do período

**Frequência**: Mensal/Trimestral

**Importância**: Indica a efetividade dos testes antes da release.

---

### 3.3 Cobertura de Testes (Test Coverage)

**Definição**: Porcentagem de funcionalidades/requisitos cobertos por casos de teste.

**Fórmula**: 
```
Cobertura = (Requisitos com Test Cases / Total de Requisitos) × 100
```

**Variações**:
- Cobertura de Requisitos
- Cobertura de Código (code coverage)
- Cobertura de Funcionalidades

**Meta**: 
- > 80% (excelente)
- 60-80% (bom)
- 40-60% (aceitável)
- < 40% (precisa atenção)

**Como Coletar**: 
- Contar requisitos/stories com test cases linkados no Jira
- Dividir pelo total de requisitos/stories

**Frequência**: Mensal

---

### 3.4 Tempo Médio de Resolução de Bugs (Mean Time to Resolution - MTTR)

**Definição**: Tempo médio desde a criação do bug até sua resolução.

**Fórmula**: 
```
MTTR = Soma dos Tempos de Resolução / Número de Bugs Resolvidos
```

**Unidade**: Horas ou Dias

**Meta** (por severidade):
- Crítica (P1): < 4 horas
- Alta (P2): < 1 dia
- Média (P3): < 3 dias
- Baixa (P4): < 1 semana

**Como Coletar**: 
- Jira calcula automaticamente (Created → Resolved)
- Usar campos de data do Jira

**Frequência**: Semanal/Mensal

---

### 3.5 Taxa de Pass/Fail (Test Pass Rate)

**Definição**: Porcentagem de testes que passam vs. falham.

**Fórmula**: 
```
Taxa de Pass = (Testes que Passaram / Total de Testes Executados) × 100
Taxa de Fail = (Testes que Falharam / Total de Testes Executados) × 100
```

**Meta**: 
- Taxa de Pass > 85% (excelente)
- Taxa de Pass 70-85% (bom)
- Taxa de Pass < 70% (precisa atenção)

**Como Coletar**: 
- Status dos test executions no Jira
- Contar Pass vs. Fail

**Frequência**: Semanal/Mensal

---

### 3.6 Densidade de Defeitos (Defect Density)

**Definição**: Número de bugs por ponto de função ou story point.

**Fórmula**: 
```
Densidade = Total de Bugs / Total de Story Points (ou Function Points)
```

**Meta**: 
- < 0.5 bugs/SP (excelente)
- 0.5-1.0 bugs/SP (bom)
- 1.0-1.5 bugs/SP (aceitável)
- > 1.5 bugs/SP (precisa atenção)

**Como Coletar**: 
- Total de bugs por sprint/release
- Dividir pelo total de story points entregues

**Frequência**: Por Sprint/Release

---

### 3.7 Eficiência de Teste (Test Efficiency)

**Definição**: Número de bugs encontrados por hora de teste.

**Fórmula**: 
```
Eficiência = Total de Bugs Encontrados / Total de Horas de Teste
```

**Meta**: 
- > 2 bugs/hora (excelente)
- 1-2 bugs/hora (bom)
- 0.5-1 bug/hora (aceitável)
- < 0.5 bug/hora (precisa atenção)

**Como Coletar**: 
- Registrar horas de teste (Jira ou timesheet)
- Dividir pelo número de bugs encontrados

**Frequência**: Semanal/Mensal

---

### 3.8 Taxa de Reteste (Retest Rate)

**Definição**: Porcentagem de bugs que precisam ser retestados após correção.

**Fórmula**: 
```
Taxa de Reteste = (Bugs Retestados / Bugs Resolvidos) × 100
```

**Meta**: 
- 100% (todos os bugs devem ser retestados)
- < 100% indica bugs não retestados

**Como Coletar**: 
- Bugs com status "Retestado" no Jira
- Dividir pelo total de bugs resolvidos

**Frequência**: Semanal/Mensal

---

### 3.9 Taxa de Reabertura (Bug Reopen Rate)

**Definição**: Porcentagem de bugs que são reabertos após serem marcados como resolvidos.

**Fórmula**: 
```
Taxa de Reabertura = (Bugs Reabertos / Bugs Resolvidos) × 100
```

**Meta**: 
- < 5% (excelente)
- 5-10% (bom)
- 10-15% (aceitável)
- > 15% (precisa atenção - indica problemas na correção)

**Como Coletar**: 
- Bugs com status "Reaberto" no Jira
- Dividir pelo total de bugs resolvidos

**Frequência**: Mensal

---

### 3.10 Tempo de Ciclo (Cycle Time)

**Definição**: Tempo desde o início do desenvolvimento até a entrega em produção.

**Fórmula**: 
```
Cycle Time = Data de Deploy em Produção - Data de Início do Desenvolvimento
```

**Unidade**: Dias

**Meta**: 
- < 7 dias (excelente)
- 7-14 dias (bom)
- 14-21 dias (aceitável)
- > 21 dias (precisa atenção)

**Como Coletar**: 
- Campos de data no Jira (Created → Released)
- Calcular diferença em dias

**Frequência**: Por Sprint/Release

---

### 3.11 Taxa de Automação (Automation Rate)

**Definição**: Porcentagem de testes que são automatizados.

**Fórmula**: 
```
Taxa de Automação = (Testes Automatizados / Total de Testes) × 100
```

**Meta**: 
- > 60% (excelente)
- 40-60% (bom)
- 20-40% (aceitável)
- < 20% (precisa atenção)

**Como Coletar**: 
- Contar test cases marcados como "Automatizado" no Jira
- Dividir pelo total de test cases

**Frequência**: Mensal/Trimestral

---

### 3.12 Custo por Bug (Cost per Bug)

**Definição**: Custo médio para encontrar e corrigir um bug.

**Fórmula**: 
```
Custo por Bug = (Custo Total de QA + Custo Total de Desenvolvimento) / Total de Bugs
```

**Unidade**: Moeda (R$, USD, etc.)

**Meta**: Reduzir continuamente através de:
- Melhor prevenção de bugs
- Testes mais eficientes
- Automação

**Como Coletar**: 
- Calcular custo de horas de QA
- Calcular custo de horas de Dev para correção
- Dividir pelo número de bugs

**Frequência**: Trimestral/Anual

---

## 4. Métricas Secundárias

### 4.1 Distribuição de Bugs por Severidade

**Definição**: Quantidade de bugs por nível de severidade.

**Como Coletar**: 
- Agrupar bugs no Jira por campo "Severidade"
- Contar por categoria

**Frequência**: Semanal/Mensal

**Meta**: 
- Maioria dos bugs deve ser Média/Baixa
- Poucos bugs Críticos/Alta

---

### 4.2 Distribuição de Bugs por Módulo/Funcionalidade

**Definição**: Quantidade de bugs por área do sistema.

**Como Coletar**: 
- Agrupar bugs por componente/módulo no Jira
- Identificar áreas problemáticas

**Frequência**: Mensal

**Uso**: Identificar áreas que precisam de mais atenção.

---

### 4.3 Bugs Encontrados por Fase

**Definição**: Distribuição de bugs encontrados em diferentes fases (Desenvolvimento, QA, Produção).

**Como Coletar**: 
- Campo "Ambiente" ou "Fase" no Jira
- Agrupar por fase

**Frequência**: Mensal

**Meta**: 
- Mais bugs encontrados em QA (shift-left)
- Menos bugs em produção

---

### 4.4 Taxa de Aprovação de Stories

**Definição**: Porcentagem de stories aprovadas na primeira tentativa.

**Fórmula**: 
```
Taxa de Aprovação = (Stories Aprovadas na 1ª Tentativa / Total de Stories) × 100
```

**Meta**: 
- > 80% (excelente)
- 60-80% (bom)
- < 60% (precisa atenção)

**Frequência**: Por Sprint

---

## 5. Como Usar as Métricas

### 5.1 Coleta Regular

- **Diária**: Métricas operacionais (bugs do dia, testes executados)
- **Semanal**: Métricas de progresso (taxa de pass, bugs por semana)
- **Mensal**: Métricas estratégicas (taxa de escape, cobertura)
- **Trimestral**: Métricas de longo prazo (tendências, ROI)

### 5.2 Análise e Ação

1. **Coletar** métricas regularmente
2. **Analisar** tendências e padrões
3. **Identificar** problemas e oportunidades
4. **Agir** com melhorias baseadas em dados
5. **Monitorar** impacto das ações

### 5.3 Comunicação

- **Dashboard**: Visualizar métricas em tempo real
- **Relatórios**: Compartilhar com stakeholders
- **Retrospectivas**: Discutir métricas e melhorias

## 6. Referências

- Dashboard de Métricas: `dashboard-metricas.md`
- Guia de Coleta: `coleta-metricas.md`
- Processo de Qualidade: `../docs/processo-qualidade.md`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
