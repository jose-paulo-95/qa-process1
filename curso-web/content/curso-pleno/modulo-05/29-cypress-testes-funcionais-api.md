# Cypress: testes funcionais e de API

**Baseado no curso: Testes de aplicações modernas com Cypress (Udemy)**

---

## Testes funcionais (e2e)

Testam a aplicação sob a **visão do usuário**: acessam URLs, clicam, digitam, verificam resultados.

### Fluxo típico

1. `cy.visit()` – acessar a página
2. Interagir com elementos (click, type, select)
3. Assertivas com `.should()`
4. Gerenciar dados (fixtures, API para setup)

### Autenticação

```javascript
beforeEach(() => {
  cy.login('user@test.com', '123456');
  // ou
  cy.request('POST', '/api/login', { email, senha }).then((res) => {
    window.localStorage.setItem('token', res.body.token);
  });
});
```

---

## Testes de API (backend)

Com `cy.request()` você testa a API REST **diretamente**, sem abrir o browser:

```javascript
it('GET /usuarios retorna 200', () => {
  cy.request('GET', '/api/usuarios', {
    headers: { Authorization: 'Bearer ' + token }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.an('array');
  });
});

it('POST /usuarios cria usuário', () => {
  cy.request('POST', '/api/usuarios', {
    nome: 'João',
    email: 'joao@test.com'
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('id');
  });
});
```

### Benefícios

- Testes mais rápidos
- Não depende da UI
- Foco em contrato e resposta da API
