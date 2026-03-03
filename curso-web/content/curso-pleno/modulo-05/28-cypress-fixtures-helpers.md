# Cypress: fixtures e helpers

**Baseado no curso: Testes de aplicações modernas com Cypress (Udemy)**

---

## Fixtures

Arquivos em `cypress/fixtures/` com dados estáticos (JSON):

```javascript
cy.fixture('login.json').then((user) => {
  cy.get('#email').type(user.email);
  cy.get('#senha').type(user.senha);
});
```

### Organização

- `login.json` – credenciais de teste
- `produto.json` – dados de produto
- `usuarios.json` – lista de usuários

---

## Gerenciamento de massa de dados

Três pontos críticos em testes funcionais:

1. **Localização de elementos** – seletores estáveis
2. **Sincronismo** – esperar no momento certo
3. **Massa de dados** – dados consistentes e isolados

### Estratégias

- **Fixtures:** dados estáticos, leitura simples
- **API para setup:** criar dados via `cy.request()` antes do teste
- **Banco:** em alguns cenários, seed direto no DB

---

## Helpers e comandos customizados

Em `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('#email').type(email);
  cy.get('#senha').type(senha);
  cy.get('button[type=submit]').click();
});

// Uso no teste
cy.login('user@test.com', '123456');
```

### before / beforeEach

```javascript
beforeEach(() => {
  cy.visit('/');
  cy.login('admin@test.com', 'senha123');
});
```
