# Cypress: setup e fundamentos

**Baseado no curso: Testes de aplicações modernas com Cypress (Udemy)**

---

## O que é Cypress

Cypress é um framework de testes **moderno** para aplicações web. Permite testar em três formas:

| Tipo | O que testa |
|------|-------------|
| **Funcional (e2e)** | Aplicação completa, visão do usuário |
| **Backend (API)** | API REST diretamente |
| **Frontend** | Interface com requisições virtualizadas |

---

## Setup

```bash
npm init -y
npm install cypress --save-dev
npx cypress open
```

Ou com `npx`:

```bash
npx cypress open
```

---

## Estrutura do projeto

```
cypress/
├── e2e/          # Specs de teste
├── fixtures/     # Dados estáticos (JSON)
├── support/
│   ├── commands.js   # Comandos customizados
│   └── e2e.js        # Config antes de cada teste
cypress.config.js
```

---

## Comandos básicos

| Comando | Uso |
|---------|-----|
| `cy.visit(url)` | Navegar para uma URL |
| `cy.get(seletor)` | Localizar elemento |
| `cy.contains(texto)` | Localizar por texto |
| `.click()` | Clicar |
| `.type(texto)` | Digitar em campo |
| `.should(assertiva)` | Fazer assertiva |

---

## Exemplo mínimo

```javascript
describe('Login', () => {
  it('deve fazer login com sucesso', () => {
    cy.visit('/login');
    cy.get('#email').type('user@test.com');
    cy.get('#senha').type('123456');
    cy.get('button[type=submit]').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});
```
