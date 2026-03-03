# Cypress: elementos e sincronismo

**Baseado no curso: Testes de aplicações modernas com Cypress (Udemy)**

---

## Elementos mais comuns

### Inputs e botões

```javascript
cy.get('input[name=email]').type('user@test.com');
cy.get('button').click();
cy.get('select').select('Opção 1');
cy.get('input[type=checkbox]').check();
```

### Links e textos

```javascript
cy.contains('Clique aqui').click();
cy.get('a').first().click();
```

### Formulários

```javascript
cy.get('#form').within(() => {
  cy.get('#nome').type('João');
  cy.get('#email').type('joao@test.com');
  cy.get('button').click();
});
```

---

## Sincronismo

O Cypress **automaticamente espera** os elementos existirem antes de interagir. Não precisa de `sleep` ou `wait` explícitos na maioria dos casos.

### Retry automático

- `cy.get()` espera o elemento aparecer (até 4s por padrão)
- `cy.contains()` idem
- Comandos encadeados esperam o anterior completar

### Quando usar cy.wait

```javascript
cy.intercept('GET', '/api/usuarios').as('getUsuarios');
cy.visit('/lista');
cy.wait('@getUsuarios');  // Espera a requisição completar
```

---

## Boas práticas de localização

| Estratégia | Exemplo | Quando usar |
|------------|---------|-------------|
| **data-cy** | `cy.get('[data-cy=btn-login]')` | Preferível: estável |
| **id** | `cy.get('#email')` | Quando existe |
| **name** | `cy.get('[name=email]')` | Formulários |
| **contains** | `cy.contains('Entrar')` | Texto visível |
| **Evitar** | `cy.get('.btn-primary')` | Classes mudam com CSS |
