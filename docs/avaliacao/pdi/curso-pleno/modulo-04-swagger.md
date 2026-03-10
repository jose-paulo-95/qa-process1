# Módulo 4: Swagger e Contratos

**Objetivo:** Ao final deste módulo, o aluno será capaz de ler documentação Swagger/OpenAPI, validar contratos de request/response e usar Swagger para criar e validar testes no Postman.

**Duração estimada:** 4 horas

**Referência:** DummyJSON Docs - https://dummyjson.com/docs

---

## Explicação

### 4.1 O que é Swagger/OpenAPI

- **OpenAPI** (antigo Swagger): especificação para descrever APIs REST
- **Swagger UI:** interface visual que exibe a documentação
- **Swagger Editor:** editar arquivos YAML/JSON da especificação

Permite ver: endpoints, métodos, parâmetros, body esperado, códigos de resposta, schemas.

### 4.2 Leitura da Documentação

Ao abrir um Swagger, identifique:
- **Base URL:** onde a API está hospedada
- **Endpoints:** paths como /usuarios, /login, /produtos
- **Métodos:** GET, POST, etc.
- **Parâmetros:** query, path, body
- **Schemas:** estrutura do JSON (campos, tipos, obrigatórios)
- **Responses:** 200, 201, 400, 401, 404, 500

**Exemplo:** Na DummyJSON, POST /users/add exige body com firstName, lastName, age (entre outros). Resposta 201 com id.

### 4.3 Validação de Contratos

O **contrato** é o que a API promete: formato de request e response. Validar contrato = garantir que a API respeita o que documentou.

**No Postman:** Use scripts Tests para validar schema:
```javascript
pm.test("Schema válido", () => {
  const schema = { /* JSON Schema esperado */ };
  pm.response.to.have.jsonSchema(schema);
});
```

Ou valide propriedades manualmente:
```javascript
pm.test("Response tem estrutura correta", () => {
  const j = pm.response.json();
  pm.expect(j).to.have.property("users");
  pm.expect(j.users).to.be.an("array");
});
```

### 4.4 Importar Collection do Swagger

No Postman: crie requests manualmente ou use a documentação em https://dummyjson.com/docs para montar a collection.

---

## Exercícios

### Exercício 1: Analisar documentação DummyJSON

**Objetivo:** Extrair informações da documentação.

**Enunciado:** Abra https://dummyjson.com/docs/users. Responda: (1) Quais endpoints existem para /users? (2) Quais campos são usados no POST /users/add? (3) Qual o formato da resposta do GET /users?

**Resposta esperada:** (1) GET /users, GET /users/:id, POST /users/add, PUT /users/:id, PATCH /users/:id, DELETE /users/:id. (2) firstName, lastName, age, entre outros. (3) Objeto com propriedade "users" (array), "total", "skip", "limit".

### Exercício 2: Validar respostas

**Objetivo:** Criar requests e adicionar validações conforme documentação.

**Enunciado:** Crie requests para GET /users, GET /users/1 e GET /products no Postman. Em cada um, adicione validação de que a resposta tem as propriedades esperadas conforme a documentação.

**Resposta esperada:** Scripts pm.expect(json).to.have.property("users") ou pm.expect(json).to.have.property("id") conforme o endpoint.

### Exercício 3: Identificar problemas na documentação

**Objetivo:** Pensamento crítico sobre documentação.

**Enunciado:** Ao comparar a documentação com o comportamento real da API DummyJSON, existem inconsistências? Teste um endpoint e verifique se a resposta bate com o documentado.

**Resposta esperada:** Pode haver diferenças (ex: campos extras, formato de erro). O aluno deve documentar o que encontrou.

---

## Prova (Avaliação)

### Questão 1 (Múltipla escolha)

OpenAPI/Swagger é usado principalmente para:

a) Executar testes automatizados  
b) Documentar e especificar APIs REST  
c) Substituir o Postman  
d) Gerar código de frontend  

### Questão 2 (Múltipla escolha)

Validar contrato de uma API significa:

a) Testar apenas se a API está online  
b) Garantir que request/response respeitam o documentado  
c) Verificar performance  
d) Autenticar usuários  

### Questão 3 (Dissertativa)

Qual a diferença entre Swagger UI e Swagger Editor?

### Questão 4 (Prática)

No Postman, como você validaria que a resposta do GET /users da DummyJSON contém um array na propriedade "users"?

### Questão 5 (Dissertativa)

Por que é importante validar o contrato da API e não apenas verificar o status code?

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | Swagger UI visualiza a documentação de forma interativa. Swagger Editor permite editar o arquivo YAML/JSON da especificação. |
| 4 | pm.test("users é array", () => { const j = pm.response.json(); pm.expect(j).to.have.property("users"); pm.expect(j.users).to.be.an("array"); }); |
| 5 | Status code pode ser 200 mas o body pode estar incorreto (campos faltando, tipo errado). Validar contrato garante que a API entrega o que prometeu, evitando bugs em integrações. |

---

**Próximo:** [Módulo 5 - Automação Cypress](modulo-05-cypress.md)
