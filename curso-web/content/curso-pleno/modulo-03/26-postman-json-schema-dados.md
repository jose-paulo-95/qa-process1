# Postman: JSON Schema e geração de dados

**Baseado no curso: Automação de testes de API com Postman**

---

## Validação com JSON Schema

Valide se a resposta segue a estrutura esperada:

```javascript
pm.test("Schema válido", () => {
  const schema = {
    type: "object",
    required: ["_id", "nome", "email"],
    properties: {
      _id: { type: "string" },
      nome: { type: "string" },
      email: { type: "string", format: "email" }
    }
  };
  pm.response.to.have.jsonSchema(schema);
});
```

---

## Geração dinâmica de massa de dados

Evite dados fixos. Gere dados únicos em cada execução:

```javascript
// Pré-request Script
const faker = require('postman-faker'); // ou use funções nativas
const nome = `Usuario ${Date.now()}`;
const email = `teste${Date.now()}@email.com`;
pm.variables.set("nome", nome);
pm.variables.set("email", email);
```

Ou com JavaScript puro:

```javascript
pm.variables.set("email", `user${Date.now()}@test.com`);
pm.variables.set("nome", "Teste " + Math.random().toString(36).slice(2));
```

---

## Data-Driven (testes com massa de dados)

Execute o mesmo request com diferentes dados:

- **Collection Runner:** importe CSV ou JSON com linhas de dados
- Cada linha vira uma iteração; use `{{var}}` no body
- Útil para testar múltiplos cenários (vários usuários, produtos) sem duplicar requests

---

## Benefícios

- **JSON Schema:** valida contrato da API automaticamente
- **Dados dinâmicos:** evita conflitos (email já existe) e torna testes repetíveis
