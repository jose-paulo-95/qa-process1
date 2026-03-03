# Cypress: cy.intercept, virtualização e POM

**Baseado no curso: Testes de aplicações modernas com Cypress (Udemy)**

---

## cy.intercept

Intercepta requisições HTTP para **mockar** ou **espiar**:

```javascript
cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' }).as('getUsuarios');
cy.visit('/lista');
cy.wait('@getUsuarios');
```

### Virtualizar API

Em vez de chamar o backend real, retorne uma resposta fixa:

```javascript
cy.intercept('GET', '/api/produtos', {
  statusCode: 200,
  body: [{ id: 1, nome: 'Produto 1' }]
}).as('getProdutos');
```

### Benefícios

- Testes mais **rápidos**
- Foco na **interface**, sem depender do backend
- Testar cenários de erro (status 500, 404, etc.)

---

## Page Object Model (POM)

Encapsula elementos e ações em classes:

```javascript
// cypress/support/pages/LoginPage.js
export class LoginPage {
  visit() {
    cy.visit('/login');
  }
  login(email, senha) {
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=senha]').type(senha);
    cy.get('[data-cy=btn-login]').click();
  }
}

// No teste
const loginPage = new LoginPage();
loginPage.visit();
loginPage.login('user@test.com', '123456');
```

### Vantagens

- Código reutilizável
- Manutenção centralizada
- Testes mais legíveis

---

## Custom commands

Comandos reutilizáveis em `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=senha]').type(senha);
  cy.get('[data-cy=btn-login]').click();
});

// No teste
cy.login('user@test.com', '123456');
cy.contains('Bem-vindo').should('be.visible');
```

**Quando criar:** ações repetidas em vários specs (login, setup, navegação).

**Exercício:** Crie um custom command `cy.login()` para uma tela de login e use em 2 specs diferentes.
