# Guia de Coleta de Métricas

## 1. Introdução

Este documento fornece instruções práticas sobre como coletar métricas de qualidade usando Jira, incluindo queries JQL, scripts e automação.

## 2. Coleta Manual no Jira

### 2.1 Usando JQL (Jira Query Language)

JQL é a linguagem de consulta do Jira. Use para criar filtros e buscar issues específicas.

#### 2.1.1 Sintaxe Básica

```jql
project = "PROJ" AND type = Bug
```

#### 2.1.2 Operadores Comuns

- `=` : Igual
- `!=` : Diferente
- `IN` : Em uma lista
- `NOT IN` : Não está em uma lista
- `~` : Contém (texto)
- `>=` : Maior ou igual
- `<=` : Menor ou igual
- `AND` : E (lógico)
- `OR` : OU (lógico)

#### 2.1.3 Funções de Data

- `startOfDay()` : Início do dia
- `startOfWeek()` : Início da semana
- `startOfMonth()` : Início do mês
- `startOfYear()` : Início do ano
- `-30d` : 30 dias atrás
- `-1w` : 1 semana atrás
- `-1m` : 1 mês atrás

---

### 2.2 Queries JQL para Métricas Principais

#### 2.2.1 Total de Bugs Criados (Último Mês)

```jql
project = "PROJ" AND type = Bug AND created >= startOfMonth()
```

#### 2.2.2 Bugs por Severidade

```jql
project = "PROJ" AND type = Bug AND created >= -30d
```

**Agrupar por**: Campo "Severity" no Jira

#### 2.2.3 Bugs Críticos Abertos

```jql
project = "PROJ" AND type = Bug 
AND severity = Critical 
AND status != Closed 
AND status != Resolved
```

#### 2.2.4 Bugs em Produção

```jql
project = "PROJ" AND type = Bug 
AND "Environment" = Production
```

#### 2.2.5 Bugs Resolvidos (Último Mês)

```jql
project = "PROJ" AND type = Bug 
AND resolved >= startOfMonth()
```

#### 2.2.6 Bugs por Módulo/Componente

```jql
project = "PROJ" AND type = Bug AND created >= -30d
```

**Agrupar por**: Campo "Component" no Jira

#### 2.2.7 Testes Executados (Sprint Atual)

```jql
project = "PROJ" AND type = "Test Execution" 
AND sprint in openSprints()
```

#### 2.2.8 Testes que Passaram

```jql
project = "PROJ" AND type = "Test Execution" 
AND status = Pass 
AND updated >= startOfMonth()
```

#### 2.2.9 Testes que Falharam

```jql
project = "PROJ" AND type = "Test Execution" 
AND status = Fail 
AND updated >= startOfMonth()
```

#### 2.2.10 Bugs Reabertos

```jql
project = "PROJ" AND type = Bug 
AND status = Reopened 
AND created >= -30d
```

#### 2.2.11 Stories com Bugs

```jql
project = "PROJ" AND type = Story 
AND issueFunction in linkedIssuesOf("type = Bug")
```

#### 2.2.12 Bugs por Desenvolvedor

```jql
project = "PROJ" AND type = Bug 
AND assignee = "usuario@exemplo.com" 
AND created >= -30d
```

---

### 2.3 Como Usar as Queries

1. **Acessar Jira** → **Issues** → **Search for issues**
2. **Clicar em "Advanced"** para usar JQL
3. **Colar a query** no campo
4. **Executar** a busca
5. **Salvar como filtro** (se for usar frequentemente)
6. **Exportar** resultados (CSV) se necessário

---

## 3. Cálculo de Métricas Específicas

### 3.1 Taxa de Defeitos

**Passo 1**: Contar bugs criados
```jql
project = "PROJ" AND type = Bug AND created >= startOfMonth()
```
Anotar o número: **X bugs**

**Passo 2**: Contar testes executados
```jql
project = "PROJ" AND type = "Test Execution" AND updated >= startOfMonth()
```
Anotar o número: **Y testes**

**Passo 3**: Calcular
```
Taxa de Defeitos = (X / Y) × 100
```

---

### 3.2 Taxa de Escape

**Passo 1**: Contar bugs em produção
```jql
project = "PROJ" AND type = Bug 
AND "Environment" = Production 
AND created >= startOfMonth()
```
Anotar o número: **A bugs**

**Passo 2**: Contar total de bugs
```jql
project = "PROJ" AND type = Bug AND created >= startOfMonth()
```
Anotar o número: **B bugs**

**Passo 3**: Calcular
```
Taxa de Escape = (A / B) × 100
```

---

### 3.3 Tempo Médio de Resolução (MTTR)

**Passo 1**: Buscar bugs resolvidos
```jql
project = "PROJ" AND type = Bug 
AND resolved >= startOfMonth()
```

**Passo 2**: Exportar para CSV com colunas:
- Created (data de criação)
- Resolved (data de resolução)

**Passo 3**: Calcular diferença em horas/dias para cada bug

**Passo 4**: Calcular média
```
MTTR = Soma dos tempos / Número de bugs
```

**Nota**: Jira pode calcular isso automaticamente se configurado.

---

### 3.4 Cobertura de Testes

**Passo 1**: Contar requisitos/stories
```jql
project = "PROJ" AND type = Story AND created >= startOfMonth()
```
Anotar: **R requisitos**

**Passo 2**: Contar requisitos com test cases
```jql
project = "PROJ" AND type = Story 
AND issueFunction in linkedIssuesOf("type = 'Test Case'")
AND created >= startOfMonth()
```
Anotar: **T requisitos com testes**

**Passo 3**: Calcular
```
Cobertura = (T / R) × 100
```

---

## 4. Automação de Coleta

### 4.1 Script Python com Jira API

**Requisitos**:
- Python 3.x
- Biblioteca `jira`: `pip install jira`

**Exemplo de Script**:

```python
from jira import JIRA
from datetime import datetime, timedelta
import json

# Configuração
jira_server = 'https://seu-jira.atlassian.net'
jira_user = 'seu-usuario@exemplo.com'
jira_token = 'seu-token-api'

# Conectar ao Jira
jira = JIRA(server=jira_server, basic_auth=(jira_user, jira_token))

# Data de início (último mês)
start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

# Buscar bugs criados no último mês
bugs_query = f'project = "PROJ" AND type = Bug AND created >= {start_date}'
bugs = jira.search_issues(bugs_query, maxResults=1000)

# Contar bugs por severidade
severity_count = {}
for bug in bugs:
    severity = bug.fields.customfield_XXXXX  # Substituir pelo ID do campo
    severity_count[severity] = severity_count.get(severity, 0) + 1

# Calcular métricas
total_bugs = len(bugs)
bugs_critical = severity_count.get('Critical', 0)
bugs_high = severity_count.get('High', 0)

# Imprimir resultados
print(f"Total de Bugs: {total_bugs}")
print(f"Bugs Críticos: {bugs_critical}")
print(f"Bugs Altos: {bugs_high}")
print(f"Taxa de Bugs Críticos: {(bugs_critical/total_bugs)*100:.2f}%")
```

**Como usar**:
1. Configurar credenciais
2. Ajustar IDs de campos customizados
3. Executar script: `python coletar_metricas.py`
4. Agendar execução (cron/task scheduler)

---

### 4.2 Script PowerShell (Windows)

**Exemplo**:

```powershell
# Configuração
$jiraUrl = "https://seu-jira.atlassian.net"
$username = "seu-usuario@exemplo.com"
$token = "seu-token-api"

# Headers
$headers = @{
    Authorization = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${username}:${token}"))
}

# Query JQL
$jql = "project = PROJ AND type = Bug AND created >= startOfMonth()"

# Fazer requisição
$uri = "$jiraUrl/rest/api/3/search?jql=$([System.Web.HttpUtility]::UrlEncode($jql))"
$response = Invoke-RestMethod -Uri $uri -Headers $headers -Method Get

# Processar resultados
$totalBugs = $response.total
Write-Host "Total de Bugs: $totalBugs"

# Exportar para CSV
$response.issues | Export-Csv -Path "bugs.csv" -NoTypeInformation
```

---

### 4.3 Google Apps Script (Google Sheets)

**Vantagem**: Atualização automática no Google Sheets

**Exemplo**:

```javascript
function coletarMetricasJira() {
  var jiraUrl = 'https://seu-jira.atlassian.net';
  var username = 'seu-usuario@exemplo.com';
  var token = 'seu-token-api';
  
  var auth = Utilities.base64Encode(username + ':' + token);
  
  var jql = 'project = PROJ AND type = Bug AND created >= startOfMonth()';
  var url = jiraUrl + '/rest/api/3/search?jql=' + encodeURIComponent(jql);
  
  var options = {
    'headers': {
      'Authorization': 'Basic ' + auth
    }
  };
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  
  // Escrever no Google Sheets
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange('A1').setValue('Total de Bugs');
  sheet.getRange('B1').setValue(data.total);
}
```

**Como usar**:
1. Criar Google Sheet
2. Ir em **Extensões** → **Apps Script**
3. Colar código
4. Configurar trigger para execução automática

---

## 5. Integração com CI/CD

### 5.1 Coleta Automática após Testes

**Exemplo (GitHub Actions)**:

```yaml
name: Coletar Métricas QA

on:
  schedule:
    - cron: '0 9 * * 1'  # Toda segunda-feira às 9h

jobs:
  coletar-metricas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Executar script de métricas
        run: |
          python scripts/coletar_metricas.py
          
      - name: Atualizar dashboard
        run: |
          # Enviar métricas para dashboard
          curl -X POST $DASHBOARD_WEBHOOK \
            -H "Content-Type: application/json" \
            -d @metricas.json
```

---

## 6. Relatórios Automatizados

### 6.1 Email Semanal

**Script para enviar relatório por email**:

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_relatorio_metricas():
    # Coletar métricas (usar código anterior)
    metricas = coletar_metricas()
    
    # Criar email
    msg = MIMEMultipart()
    msg['From'] = 'qa@exemplo.com'
    msg['To'] = 'equipe@exemplo.com'
    msg['Subject'] = 'Relatório Semanal de Métricas QA'
    
    body = f"""
    Relatório Semanal de Métricas QA
    
    Total de Bugs: {metricas['total_bugs']}
    Bugs Críticos: {metricas['bugs_criticos']}
    Taxa de Pass: {metricas['taxa_pass']}%
    Taxa de Escape: {metricas['taxa_escape']}%
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    # Enviar
    server = smtplib.SMTP('smtp.exemplo.com', 587)
    server.starttls()
    server.login('usuario', 'senha')
    server.send_message(msg)
    server.quit()
```

---

## 7. Ferramentas de Terceiros

### 7.1 eazyBI

**Descrição**: Plugin do Jira para dashboards avançados

**Vantagens**:
- Visualizações avançadas
- Cálculos automáticos
- Relatórios prontos

**Como usar**:
1. Instalar plugin no Jira
2. Configurar conexão
3. Criar relatórios usando templates

---

### 7.2 Zephyr Scale / Test Management

**Descrição**: Ferramenta de gestão de testes integrada ao Jira

**Vantagens**:
- Métricas de teste automáticas
- Relatórios de execução
- Rastreabilidade

---

## 8. Checklist de Coleta

### Diária
- [ ] Verificar bugs críticos abertos
- [ ] Verificar status de testes em execução
- [ ] Atualizar dashboard (se automático)

### Semanal
- [ ] Coletar métricas da semana
- [ ] Calcular taxas principais
- [ ] Gerar relatório semanal
- [ ] Compartilhar com equipe

### Mensal
- [ ] Coletar todas as métricas do mês
- [ ] Calcular todas as taxas
- [ ] Comparar com mês anterior
- [ ] Gerar relatório executivo
- [ ] Apresentar em reunião

---

## 9. Troubleshooting

### Problema: Query JQL não retorna resultados

**Soluções**:
- Verificar sintaxe da query
- Verificar permissões de acesso
- Verificar se campos customizados existem
- Testar query em partes menores

### Problema: Campos customizados não aparecem

**Soluções**:
- Verificar ID do campo customizado
- Usar nome do campo entre aspas: `"Custom Field Name"`
- Consultar administrador do Jira

### Problema: API retorna erro 401

**Soluções**:
- Verificar credenciais
- Verificar token API
- Verificar permissões do usuário

---

## 10. Referências

- Definições de KPIs: `kpi-definitions.md`
- Dashboard: `dashboard-metricas.md`
- Documentação Jira JQL: https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
