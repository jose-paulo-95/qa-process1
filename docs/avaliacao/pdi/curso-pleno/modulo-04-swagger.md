# Módulo 4: Swagger e Contratos

**Objetivo:** Ao final deste módulo, o aluno será capaz de ler documentação Swagger/OpenAPI, validar contratos de request/response e usar Swagger para criar e validar testes no Postman.

**Duração estimada:** 4 horas

**Referência:** ServeRest Swagger - https://serverest.dev/doc

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

**Exemplo:** No Swagger da ServeRest, POST /usuarios exige body com nome, email, password, administrador. Resposta 201 com _id.

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
  pm.expect(j).to.have.property("usuarios");
  pm.expect(j.usuarios).to.be.an("array");
});
```

### 4.4 Importar Collection do Swagger

No Postman: File → Import → Link → colar URL do Swagger (ex: https://serverest.dev/doc). O Postman gera a collection com os endpoints.

---

## Exercícios

### Exercício 1: Analisar Swagger ServeRest

**Objetivo:** Extrair informações da documentação.

**Enunciado:** Abra https://serverest.dev/doc. Responda: (1) Quais endpoints existem para /usuarios? (2) Quais campos são obrigatórios no POST /usuarios? (3) Qual o formato da resposta do GET /usuarios?

**Resposta esperada:** (1) GET, POST, GET /usuarios/:id, PUT, DELETE. (2) nome, email, password, administrador. (3) Objeto com propriedade "usuarios" (array) e "quantidade".

### Exercício 2: Importar e validar

**Objetivo:** Importar collection do Swagger e adicionar validações.

**Enunciado:** Importe a collection da ServeRest via Swagger no Postman. Em 3 requests, adicione validação de que a resposta tem as propriedades esperadas conforme o schema do Swagger.

**Resposta esperada:** Scripts pm.expect(json).to.have.property("X") para cada propriedade documentada.

### Exercício 3: Identificar problemas na documentação

**Objetivo:** Pensamento crítico sobre documentação.

**Enunciado:** Ao comparar o Swagger com o comportamento real da API ServeRest, existem inconsistências? Teste um endpoint e verifique se a resposta bate com o documentado.

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

No Postman, como você validaria que a resposta do GET /usuarios da ServeRest contém um array na propriedade "usuarios"?

### Questão 5 (Dissertativa)

Por que é importante validar o contrato da API e não apenas verificar o status code?

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | Swagger UI visualiza a documentação de forma interativa. Swagger Editor permite editar o arquivo YAML/JSON da especificação. |
| 4 | pm.test("usuarios é array", () => { const j = pm.response.json(); pm.expect(j).to.have.property("usuarios"); pm.expect(j.usuarios).to.be.an("array"); }); |
| 5 | Status code pode ser 200 mas o body pode estar incorreto (campos faltando, tipo errado). Validar contrato garante que a API entrega o que prometeu, evitando bugs em integrações. |

---

**Próximo:** [Módulo 5 - Automação Cypress](modulo-05-cypress.md)
