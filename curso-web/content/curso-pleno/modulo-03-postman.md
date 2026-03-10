# Módulo 3: Testes de API

**Objetivo:** Ao final deste módulo, o aluno será capaz de entender fundamentos de API Rest (mentalidade, anatomia HTTP, arquitetura), aplicar técnicas e abordagens de teste (contrato, heurísticas, destrutivos, performance, segurança, etc.), gerenciar inconsistências, planejar testes (riscos, integrações, ambiente, estimativas), e usar o Postman para automação (collections, variáveis, scripts, Newman, CI).

**Duração estimada:** ~12 horas

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

**API de prática:** [DummyJSON](https://dummyjson.com/) | Docs: https://dummyjson.com/docs

---

## Explicação

### 3.1 Métodos HTTP e Requests

| Método | Uso | Exemplo |
|--------|-----|---------|
| GET | Buscar dados | Listar usuários, buscar por ID |
| POST | Criar recurso | Cadastrar usuário, login |
| PUT | Atualizar completo | Editar usuário |
| PATCH | Atualizar parcial | Atualizar apenas nome |
| DELETE | Remover | Excluir usuário |

**Exemplo:** DummyJSON - POST /users/add cria usuário; GET /users lista; GET /users/{{id}} busca um.

### 3.2 Collections e Organização

- **Collection:** agrupa requests relacionados
- Organize por pasta: Login, Usuários, Produtos, Carrinhos
- Use nomes descritivos: "POST Criar usuário" em vez de "Request 1"

### 3.3 Variáveis

- **Locais:** só na request
- **Collection:** disponível em todas as requests da collection
- **Environment:** troca entre DEV, QA, PROD (baseUrl, token)
- **Globais:** em todo o Postman

**Exemplo:** `{{baseUrl}}/users` onde baseUrl = https://dummyjson.com no environment.

### 3.4 Scripts Pre-request e Tests

- **Pre-request:** executa antes de enviar (gerar dados dinâmicos, token)
- **Tests:** executa após receber resposta (validar status, body)

**Exemplo Tests:**
```javascript
pm.test("Status 200", () => pm.response.to.have.status(200));
pm.test("Tem campo _id", () => {
  const json = pm.response.json();
  pm.expect(json).to.have.property("id");
  pm.collectionVariables.set("userId", json.id);
});
```

### 3.5 Newman (CLI)

Executa collections via linha de comando:
```bash
newman run collection.json -e environment.json
```
Útil para CI/CD.

---

## Exercícios

### Exercício 1: Collection DummyJSON

**Objetivo:** Criar collection com CRUD de usuários.

**Recursos:** DummyJSON (https://dummyjson.com), Postman

**Enunciado:** Crie uma collection "DummyJSON - Usuários" com: POST /auth/login, POST /users/add, GET /users, GET /users/{{userId}}, PUT /users/{{userId}}, DELETE /users/{{userId}}. Use variável baseUrl no environment.

**Resposta esperada:** Collection com 6 requests, environment com baseUrl = https://dummyjson.com. Para PUT/DELETE por ID, usar variável userId preenchida pelo script Tests do POST /users/add. Login: username "emilys", password "emilyspass".

### Exercício 2: Scripts de validação

**Objetivo:** Adicionar assertions em 5 requests.

**Recursos:** Postman, DummyJSON, [boas-praticas-qa.md](../../../docs/avaliacao/pdi/boas-praticas-qa.md)

**Enunciado:** Em cada request da collection, adicione na aba Tests pelo menos: (1) validação de status code, (2) validação de que a resposta tem a estrutura esperada (ex: pm.expect(json).to.have.property("users")). Ao encontrar uma falha, documente seguindo [boas-praticas-qa.md](../../../docs/avaliacao/pdi/boas-praticas-qa.md) (título objetivo, passos, evidências).

**Resposta esperada:** Scripts como pm.test("Status 200", () => pm.response.to.have.status(200)); e validação de propriedades do JSON.

### Exercício 3: Workflow com variáveis

**Objetivo:** Fazer o resultado de uma request alimentar a próxima.

**Recursos:** Postman, DummyJSON (https://dummyjson.com)

**Enunciado:** Configure o fluxo: (1) POST /auth/login → salvar accessToken em variável; (2) GET /auth/me (requer Authorization) → usar Bearer {{token}}. Execute a collection na ordem.

**Resposta esperada:** No Tests do login: pm.collectionVariables.set("token", jsonData.accessToken). No GET /auth/me, header Authorization: Bearer {{token}}.

### Exercício 4: Newman

**Objetivo:** Executar collection via Newman.

**Recursos:** Postman (export), Newman (npm install -g newman)

**Enunciado:** Exporte a collection e o environment. Instale Newman (npm install -g newman) e execute: newman run collection.json -e environment.json

**Resposta esperada:** Relatório no terminal com pass/fail de cada request.

---

## Prova (Avaliação)

### Questão 1 (Múltipla escolha)

Qual método HTTP é usado para criar um novo recurso?

a) GET  
b) POST  
c) PUT  
d) DELETE  

### Questão 2 (Múltipla escolha)

Variáveis de environment são úteis para:

a) Armazenar dados dentro de uma única request  
b) Trocar entre ambientes (DEV, QA, PROD) sem alterar requests  
c) Executar scripts automáticos  
d) Documentar a API  

### Questão 3 (Múltipla escolha)

O script na aba Tests do Postman executa:

a) Antes de enviar a request  
b) Após receber a resposta  
c) A cada segundo  
d) Apenas manualmente  

### Questão 4 (Prática)

Escreva um script Tests que valide: (1) status 201, (2) que a resposta JSON tem a propriedade "message" contendo "Cadastro realizado com sucesso".

### Questão 5 (Dissertativa)

Para que serve o Newman? Em que cenário você o utilizaria no dia a dia?

### Questão 6 (Prática)

Crie um request POST /auth/login no Postman para a DummyJSON. Qual é o body necessário? Qual script você adicionaria na aba Tests para salvar o token retornado?

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | b |
| 4 | pm.test("Status 201", () => pm.response.to.have.status(201)); pm.test("Message correto", () => { const j = pm.response.json(); pm.expect(j.message).to.include("Cadastro realizado com sucesso"); }); |
| 5 | Newman executa collections via CLI. Usado em CI/CD para rodar testes de API automaticamente em cada build/deploy. |
| 6 | Body: {"username":"emilys","password":"emilyspass"}. Tests: var j = pm.response.json(); if(j.accessToken) pm.collectionVariables.set("token", j.accessToken); |

---

## Aplicar no seu projeto

- Liste 2–3 endpoints do seu projeto (TruMe, DeepClaim ou outro) e crie requests equivalentes no Postman
- Configure um environment com a baseUrl do seu projeto
- Adicione scripts Tests em pelo menos 3 requests dos endpoints reais

## Sugestão de pauta para mentoria

- "Posso mostrar minhas collections do Postman para feedback?"
- "Como aplicamos validação de API no nosso projeto?"
- "Quais endpoints são prioritários para automação?"

## Checklist de aplicação

- [ ] Fiz todos os exercícios
- [ ] Criei requests para endpoints do meu projeto
- [ ] Tenho 1 dúvida para levar à mentoria
- [ ] Sei explicar em 1 frase o que aprendi

---

**Próximo:** [Módulo 4 - Swagger e Contratos](modulo-04-swagger.md)
