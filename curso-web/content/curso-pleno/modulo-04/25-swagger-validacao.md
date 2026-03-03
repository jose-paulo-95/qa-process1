# Swagger: validação de contratos

---

## Contrato

O que a API promete: formato de request e response. Validar = garantir que a API respeita o documentado.

---

## No Postman

Valide propriedades no script Tests:

```javascript
pm.test("usuarios é array", () => {
  const j = pm.response.json();
  pm.expect(j).to.have.property("usuarios");
  pm.expect(j.usuarios).to.be.an("array");
});
```

---

## Importar do Swagger

File → Import → Link → URL do Swagger. Postman gera a collection.
