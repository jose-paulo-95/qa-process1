# Template de Bug Report

## Informações Básicas

**ID do Bug**: [AUTO-GERADO PELO JIRA]  
**Título**: [Resumo claro e objetivo do problema]  
**Reportado por**: [Nome do QA]  
**Data**: [DD/MM/AAAA]  
**Status**: Novo  
**Atribuído a**: [Desenvolvedor responsável]

---

## Classificação

**Severidade**: 
- [ ] Crítica (P1 - Blocker)
- [ ] Alta (P2 - Major)
- [ ] Média (P3 - Minor)
- [ ] Baixa (P4 - Trivial)

**Prioridade**:
- [ ] Urgente
- [ ] Alta
- [ ] Média
- [ ] Baixa

**Tipo de Bug**:
- [ ] Funcional
- [ ] Visual/UI
- [ ] Performance
- [ ] Segurança
- [ ] Usabilidade
- [ ] Outro: _______________

**Categoria**:
- [ ] Frontend
- [ ] Backend/API
- [ ] Mobile
- [ ] Integração
- [ ] Banco de Dados
- [ ] Outro: _______________

---

## Ambiente

**Ambiente de Teste**: 
- [ ] Desenvolvimento (DEV)
- [ ] QA/Teste
- [ ] Staging
- [ ] Produção

**URL/Endpoint**: [URL completa ou endpoint da API]

**Versão/Build**: [Versão do software testada]

**Navegador**: 
- [ ] Chrome [Versão: _____]
- [ ] Firefox [Versão: _____]
- [ ] Safari [Versão: _____]
- [ ] Edge [Versão: _____]
- [ ] Mobile Browser [Nome: _____]

**Sistema Operacional**: 
- [ ] Windows [Versão: _____]
- [ ] macOS [Versão: _____]
- [ ] Linux [Distribuição: _____]
- [ ] iOS [Versão: _____]
- [ ] Android [Versão: _____]

**Dispositivo** (se aplicável):
- Desktop
- Tablet
- Mobile [Modelo: _____]

**Dados de Teste Utilizados**: [Descrever dados específicos usados]

---

## Descrição

### Resumo
[Breve descrição do problema em 1-2 frases]

### Descrição Detalhada
[Descrição mais completa do problema, contexto adicional]

---

## Passos para Reproduzir

**IMPORTANTE**: Listar passos numerados e sequenciais. Cada passo deve ser claro e específico.

1. [Primeiro passo - ex: "Acessar a URL https://app.exemplo.com/login"]
2. [Segundo passo - ex: "Preencher o campo 'Email' com 'usuario@exemplo.com'"]
3. [Terceiro passo - ex: "Preencher o campo 'Senha' com 'senha123'"]
4. [Quarto passo - ex: "Clicar no botão 'Entrar'"]
5. [Quinto passo - ex: "Observar o comportamento"]
6. [Continue adicionando passos conforme necessário...]

**Número mínimo de passos**: [Quantos passos são necessários para reproduzir?]

**Taxa de Reprodução**: 
- [ ] 100% (sempre reproduz)
- [ ] Intermitente (às vezes reproduz)
- [ ] Raro (difícil de reproduzir)

---

## Resultado Esperado

[Descrever o comportamento esperado quando os passos são executados corretamente]

**Exemplo**: 
"Após clicar em 'Entrar', o usuário deve ser redirecionado para a página inicial e ver uma mensagem de boas-vindas."

---

## Resultado Atual (Comportamento Observado)

[Descrever o que realmente acontece quando os passos são executados]

**Exemplo**: 
"Após clicar em 'Entrar', uma mensagem de erro 'Erro 500 - Internal Server Error' é exibida e o usuário permanece na página de login."

---

## Impacto

**Usuários Afetados**: 
- [ ] Todos os usuários
- [ ] Usuários específicos: [Descrever]
- [ ] Apenas em condições específicas: [Descrever]

**Funcionalidades Afetadas**: [Listar outras funcionalidades impactadas]

**Workaround Disponível**: 
- [ ] Sim: [Descrever workaround]
- [ ] Não

---

## Evidências

### Screenshots
[Inserir screenshots relevantes. Cada screenshot deve ter uma legenda explicando o que mostra]

**Screenshot 1**: [Descrição]
![Screenshot 1](caminho/para/screenshot1.png)

**Screenshot 2**: [Descrição]
![Screenshot 2](caminho/para/screenshot2.png)

### Vídeos
[Link para vídeo demonstrando o bug, se disponível]

### Logs
```
[Colar logs relevantes aqui. Incluir timestamps e contexto]
```

### Console do Navegador
```
[Colar erros do console do navegador, se aplicável]
```

### Resposta da API
```json
{
  "status": 500,
  "error": "Internal Server Error",
  "message": "..."
}
```

### Network Requests
[Descrever requisições HTTP relevantes ou anexar arquivo .har]

---

## Informações Técnicas Adicionais

**Stack Trace** (se aplicável):
```
[Stack trace completo]
```

**Query/Request que Causa o Problema**:
```
[SQL query ou HTTP request que causa o problema]
```

**Dados no Banco** (se relevante):
[Descrever estado dos dados no banco de dados]

---

## Histórico de Testes

**Testado em Outros Ambientes?**
- [ ] Sim: [Listar ambientes e resultados]
- [ ] Não

**Testado em Outros Navegadores?**
- [ ] Sim: [Listar navegadores e resultados]
- [ ] Não

**Testado em Outras Versões?**
- [ ] Sim: [Listar versões e resultados]
- [ ] Não

---

## Informações de Rastreamento

**Story/Feature Relacionada**: [Link para story no Jira]

**Test Case Relacionado**: [ID do test case, se aplicável]

**Bugs Relacionados**: [IDs de bugs relacionados, se houver]

**Dependências**: [Outros bugs ou stories que bloqueiam/estão bloqueados por este]

---

## Notas Adicionais

[Qualquer informação adicional que possa ajudar na resolução do bug]

**Observações**:
- [Observação 1]
- [Observação 2]

**Sugestões** (opcional):
[Se tiver sugestões de como corrigir ou melhorar]

---

## Checklist de Qualidade do Bug Report

Antes de submeter, verificar:

- [ ] Título é claro e descritivo
- [ ] Passos para reproduzir são completos e sequenciais
- [ ] Resultado esperado está descrito
- [ ] Resultado atual está descrito
- [ ] Severidade e prioridade estão corretas
- [ ] Ambiente e versão estão especificados
- [ ] Evidências (screenshots/logs) estão anexadas
- [ ] Bug é reproduzível (ou taxa de reprodução indicada)
- [ ] Informações técnicas relevantes estão incluídas
- [ ] Story relacionada está linkada

---

## Exemplo Completo

### Informações Básicas
**Título**: Erro 500 ao fazer login com email válido  
**Reportado por**: João Silva  
**Data**: 04/02/2026  
**Severidade**: Crítica (P1)  
**Prioridade**: Urgente

### Ambiente
- **Ambiente**: QA/Teste
- **URL**: https://qa.app.exemplo.com/login
- **Versão**: 2.1.3
- **Navegador**: Chrome 120.0.6099.109
- **OS**: Windows 11

### Descrição
Ao tentar fazer login com credenciais válidas, o sistema retorna erro 500 ao invés de autenticar o usuário.

### Passos para Reproduzir
1. Acessar https://qa.app.exemplo.com/login
2. Preencher campo "Email" com "usuario.teste@exemplo.com"
3. Preencher campo "Senha" com "Teste123!"
4. Clicar no botão "Entrar"
5. Observar a resposta

### Resultado Esperado
O usuário deve ser autenticado e redirecionado para a página inicial (dashboard).

### Resultado Atual
Uma mensagem de erro "500 - Internal Server Error" é exibida e o usuário permanece na página de login.

### Evidências
**Screenshot**: [anexo]
**Console Error**: 
```
POST https://qa.app.exemplo.com/api/auth/login 500 (Internal Server Error)
```

**Response**:
```json
{
  "status": 500,
  "error": "Internal Server Error",
  "message": "NullPointerException in UserService.validateCredentials"
}
```

### Story Relacionada
PROJ-123: Implementar autenticação de usuário

---

**Última atualização**: 2026-02-04  
**Versão do Template**: 1.0
