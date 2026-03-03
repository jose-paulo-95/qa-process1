# Template de Test Case

## Informações Básicas

**ID do Test Case**: [AUTO-GERADO PELO JIRA]  
**Título**: [Nome descritivo do caso de teste]  
**Criado por**: [Nome do QA]  
**Data de Criação**: [DD/MM/AAAA]  
**Última Atualização**: [DD/MM/AAAA]  
**Versão**: 1.0

**Test Plan Relacionado**: [ID do Test Plan]  
**Story/Feature**: [ID da Story]  
**Requisito Relacionado**: [ID ou referência do requisito]

---

## Classificação

**Prioridade**: 
- [ ] Alta (Crítico)
- [ ] Média (Importante)
- [ ] Baixa (Desejável)

**Tipo de Teste**:
- [ ] Funcional
- [ ] Regressão
- [ ] Integração
- [ ] Performance
- [ ] Segurança
- [ ] Usabilidade
- [ ] Aceitação (UAT)

**Categoria**:
- [ ] Frontend
- [ ] Backend/API
- [ ] Mobile
- [ ] Integração
- [ ] Outro: _______________

**Automatizado**:
- [ ] Sim (ID do teste automatizado: _____)
- [ ] Não
- [ ] Planejado para automação

---

## Objetivo

[Descrever o objetivo deste caso de teste. O que se pretende validar?]

**Exemplo**: 
"Validar que o usuário consegue fazer login com credenciais válidas e é redirecionado para a página inicial."

---

## Pré-condições

**IMPORTANTE**: Listar todas as condições que devem ser atendidas ANTES de executar os passos do teste.

1. [Pré-condição 1 - ex: "Usuário deve estar cadastrado no sistema"]
2. [Pré-condição 2 - ex: "Ambiente de teste deve estar disponível e estável"]
3. [Pré-condição 3 - ex: "Usuário deve ter acesso à URL do sistema"]
4. [Continuar listando pré-condições conforme necessário...]

**Dados Necessários**:
- [Dado 1 - ex: "Email: usuario.teste@exemplo.com"]
- [Dado 2 - ex: "Senha: Teste123!"]
- [Listar dados específicos necessários]

**Configurações do Ambiente**:
- Ambiente: [QA/Staging/DEV]
- URL: [URL completa]
- Versão: [Versão do software]
- Navegador: [Chrome/Firefox/etc.] [Versão]

---

## Passos de Teste (Step-by-Step)

**IMPORTANTE**: Cada passo deve ser numerado, claro, específico e acionável. Um passo deve conter uma única ação.

### Passo 1: [Descrição da ação]
**Ação**: [O que fazer]  
**Dados**: [Dados a inserir, se aplicável]  
**Resultado Esperado do Passo**: [O que deve acontecer após este passo]

**Exemplo**:
- **Ação**: Acessar a URL https://app.exemplo.com/login
- **Dados**: N/A
- **Resultado Esperado**: Página de login é carregada e exibida corretamente

---

### Passo 2: [Descrição da ação]
**Ação**: [O que fazer]  
**Dados**: [Dados a inserir, se aplicável]  
**Resultado Esperado do Passo**: [O que deve acontecer após este passo]

**Exemplo**:
- **Ação**: Preencher o campo "Email"
- **Dados**: "usuario.teste@exemplo.com"
- **Resultado Esperado**: Campo é preenchido com o email fornecido

---

### Passo 3: [Descrição da ação]
**Ação**: [O que fazer]  
**Dados**: [Dados a inserir, se aplicável]  
**Resultado Esperado do Passo**: [O que deve acontecer após este passo]

---

### Passo 4: [Descrição da ação]
**Ação**: [O que fazer]  
**Dados**: [Dados a inserir, se aplicável]  
**Resultado Esperado do Passo**: [O que deve acontecer após este passo]

---

[Continuar adicionando passos conforme necessário. Recomendado: 3-10 passos por caso de teste]

---

## Dados de Teste

### Dados Válidos
| Campo | Valor | Observações |
|-------|-------|-------------|
| [Campo 1] | [Valor] | [Observações] |
| [Campo 2] | [Valor] | [Observações] |

### Dados Inválidos (se aplicável)
| Campo | Valor | Observações |
|-------|-------|-------------|
| [Campo 1] | [Valor inválido] | [Observações] |

### Dados de Teste Alternativos
[Descrever variações de dados para testar diferentes cenários]

---

## Resultado Esperado (Resultado Final)

[Descrever o resultado esperado após executar TODOS os passos do teste]

**Exemplo**: 
"Após executar todos os passos, o usuário deve ser autenticado com sucesso e redirecionado para a página inicial (dashboard). Uma mensagem de boas-vindas deve ser exibida com o nome do usuário."

**Critérios de Aceitação**:
- [ ] Critério 1: [ex: "Usuário é redirecionado para /dashboard"]
- [ ] Critério 2: [ex: "Mensagem de boas-vindas é exibida"]
- [ ] Critério 3: [ex: "Menu de navegação está visível"]
- [Listar todos os critérios que devem ser atendidos]

---

## Pós-condições

[Descrever o estado do sistema após a execução do teste]

**Exemplo**:
- Usuário está autenticado no sistema
- Sessão ativa está criada
- Cookies de autenticação estão configurados

**Limpeza Necessária** (se aplicável):
- [Ação de limpeza 1 - ex: "Fazer logout"]
- [Ação de limpeza 2 - ex: "Limpar dados de teste"]

---

## Execução do Teste

### Histórico de Execuções

| Data | Executado por | Ambiente | Resultado | Observações | Bugs Encontrados |
|------|---------------|----------|-----------|-------------|------------------|
| [DD/MM/AAAA] | [Nome] | [Ambiente] | [ ] Pass / [ ] Fail / [ ] Blocked | [Observações] | [IDs de bugs] |
| [DD/MM/AAAA] | [Nome] | [Ambiente] | [ ] Pass / [ ] Fail / [ ] Blocked | [Observações] | [IDs de bugs] |

### Resultado Atual
- **Status**: [ ] Não Executado / [ ] Pass / [ ] Fail / [ ] Blocked
- **Última Execução**: [DD/MM/AAAA]
- **Executado por**: [Nome]
- **Ambiente**: [Ambiente]
- **Versão Testada**: [Versão]

### Evidências da Execução

**Screenshots**:
- [Screenshot 1]: [Descrição]
- [Screenshot 2]: [Descrição]

**Logs** (se aplicável):
```
[Logs relevantes da execução]
```

---

## Casos de Teste Relacionados

**Casos Dependentes** (devem ser executados antes):
- [TC-XXX]: [Nome do caso de teste]

**Casos Dependentes** (devem ser executados depois):
- [TC-XXX]: [Nome do caso de teste]

**Casos Alternativos** (testam o mesmo requisito de forma diferente):
- [TC-XXX]: [Nome do caso de teste]

---

## Notas e Observações

[Qualquer informação adicional relevante para este caso de teste]

**Observações**:
- [Observação 1]
- [Observação 2]

**Riscos Identificados**:
- [Risco 1]
- [Risco 2]

**Sugestões de Melhoria**:
- [Sugestão 1]
- [Sugestão 2]

---

## Exemplo Completo

### Informações Básicas
**ID**: TC-001  
**Título**: Login com credenciais válidas  
**Prioridade**: Alta  
**Tipo**: Funcional

### Objetivo
Validar que o usuário consegue fazer login com credenciais válidas e é redirecionado para a página inicial.

### Pré-condições
1. Usuário deve estar cadastrado no sistema
2. Ambiente de teste deve estar disponível
3. Navegador deve estar atualizado

**Dados**:
- Email: usuario.teste@exemplo.com
- Senha: Teste123!

### Passos de Teste

**Passo 1**: Acessar a URL https://qa.app.exemplo.com/login
- **Ação**: Abrir navegador e navegar para a URL
- **Resultado Esperado**: Página de login é carregada

**Passo 2**: Preencher o campo "Email"
- **Ação**: Clicar no campo e digitar o email
- **Dados**: "usuario.teste@exemplo.com"
- **Resultado Esperado**: Campo é preenchido

**Passo 3**: Preencher o campo "Senha"
- **Ação**: Clicar no campo e digitar a senha
- **Dados**: "Teste123!"
- **Resultado Esperado**: Campo é preenchido (caracteres mascarados)

**Passo 4**: Clicar no botão "Entrar"
- **Ação**: Clicar no botão de submit
- **Resultado Esperado**: Requisição de autenticação é enviada

### Resultado Esperado
Após executar todos os passos, o usuário deve ser autenticado com sucesso e redirecionado para a página inicial (https://qa.app.exemplo.com/dashboard). Uma mensagem "Bem-vindo, [Nome do Usuário]" deve ser exibida.

**Critérios de Aceitação**:
- [ ] URL muda para /dashboard
- [ ] Mensagem de boas-vindas é exibida
- [ ] Menu de navegação está visível
- [ ] Sessão de usuário está ativa

### Pós-condições
- Usuário está autenticado
- Sessão ativa criada
- Cookies de autenticação configurados

**Limpeza**: Fazer logout após validação

---

## Checklist de Qualidade do Test Case

Antes de considerar o test case completo, verificar:

- [ ] Título é claro e descritivo
- [ ] Objetivo está definido
- [ ] Pré-condições estão completas
- [ ] Passos são numerados e sequenciais
- [ ] Cada passo contém uma única ação
- [ ] Dados de teste estão especificados
- [ ] Resultado esperado está claro e mensurável
- [ ] Critérios de aceitação estão definidos
- [ ] Pós-condições estão descritas
- [ ] Story/requisito está linkado
- [ ] Prioridade está definida

---

**Última atualização**: 2026-02-04  
**Versão do Template**: 1.0
