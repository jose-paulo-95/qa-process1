# Postman: scripts e suítes de testes

**Baseado no curso: Automação de testes de API com Postman**

---

## Scripts

### Pré-request Script

Executa **antes** de enviar a request. Use para:

- Gerar dados dinâmicos (timestamp, UUID)
- Preparar variáveis
- Fazer setup necessário

```javascript
pm.environment.set("timestamp", Date.now());
pm.variables.set("email", `teste${Date.now()}@email.com`);
```

### Tests Script

Executa **após** receber a resposta. Use para:

- Validar status code
- Validar estrutura da resposta
- Salvar dados para requests seguintes

```javascript
pm.test("Status 200", () => pm.response.to.have.status(200));
pm.test("Resposta tem _id", () => {
  const j = pm.response.json();
  pm.expect(j).to.have.property("_id");
  pm.collectionVariables.set("userId", j._id);
});
```

---

## Suítes de testes

Cada request pode ter múltiplos `pm.test()`. Ao rodar a collection:

- Todos os testes são executados
- Resultado pass/fail por teste
- Use **Collection Runner** para executar em lote

---

## Assertivas comuns

```javascript
pm.response.to.have.status(200);
pm.response.to.have.header("Content-Type");
pm.expect(pm.response.json()).to.have.property("nome");
pm.expect(pm.response.time).to.be.below(500); // performance
```
