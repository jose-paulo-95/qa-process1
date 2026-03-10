# Módulo 5: Automação Cypress

**Objetivo:** Ao final deste módulo, o aluno será capaz de configurar projetos Cypress, usar fixtures, implementar Page Object Model, usar cy.intercept e integrar com CI/CD básico.

**Duração estimada:** 8 horas

---

## Explicação

### 5.1 Setup e Configuração

```bash
npm init -y
npm install cypress --save-dev
npx cypress open
```

Estrutura padrão: `cypress/` (e2e, fixtures, support), `cypress.config.js`.

**Checklist para autonomia:** Documente os passos que você segue. Em < 15 min você deve conseguir criar um projeto do zero.

### 5.2 Fixtures

Arquivos em `cypress/fixtures/` com dados estáticos. Uso:
```javascript
cy.fixture('usuario.json').then((user) => {
  cy.get('#email').type(user.email);
  cy.get('#senha').type(user.senha);
});
```

**Organização:** Por cenário (login.json, produto.json) ou por ambiente.

### 5.3 Page Object Model (POM)

Encapsula elementos e ações de uma página em uma classe/objeto:

```javascript
// pages/LoginPage.js
export class LoginPage {
  visit() { cy.visit('/login'); }
  fillEmail(email) { cy.get('[data-cy=email]').type(email); }
  fillPassword(pwd) { cy.get('[data-cy=senha]').type(pwd); }
  submit() { cy.get('[data-cy=btn-login]').click(); }
  login(email, pwd) {
    this.fillEmail(email);
    this.fillPassword(pwd);
    this.submit();
  }
}
```

No spec: `const login = new LoginPage(); login.login('a@b.com', '123');`

### 5.4 cy.intercept

Intercepta requisições HTTP para mockar ou validar:

```javascript
cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' }).as('getUsuarios');
cy.visit('/lista');
cy.wait('@getUsuarios');
```

### 5.5 CI/CD (GitHub Actions)

Exemplo básico `.github/workflows/cypress.yml`:
```yaml
- run: npm ci
- run: npx cypress run
```

---

## Exercícios

### Exercício 1: Setup do zero

**Objetivo:** Configurar Cypress sem consultar material.

**Enunciado:** Crie um novo projeto Node, instale o Cypress, abra o Cypress e crie um spec que visita https://example.com e verifica que o título contém "Example".

**Resposta esperada:** cy.visit('https://example.com'); cy.title().should('include', 'Example');

### Exercício 2: Fixtures

**Objetivo:** Usar fixtures para dados de teste.

**Enunciado:** Crie um arquivo cypress/fixtures/login.json com email e password. No spec, use cy.fixture para preencher um formulário de login (ou simule em uma página de teste).

**Resposta esperada:** fixture com { "email": "...", "password": "..." }; no spec: cy.fixture('login').then((d) => { cy.get('#email').type(d.email); ... });

### Exercício 3: Page Object

**Objetivo:** Refatorar um spec usando POM.

**Enunciado:** Escolha um fluxo que você já automatizou (ex: login). Extraia os seletores e ações para uma classe LoginPage. Refatore o spec para usar a classe.

**Resposta esperada:** Arquivo pages/LoginPage.js com métodos; spec importa e usa login.login(email, pwd).

### Exercício 4: cy.intercept

**Objetivo:** Mockar uma API.

**Enunciado:** Use cy.intercept para interceptar um GET e retornar um fixture. No teste, visite uma página que faz essa chamada e valide que o conteúdo exibido vem do mock.

**Resposta esperada:** cy.intercept('GET', '**/api/...', { fixture: 'dados.json' }).as('api'); cy.visit(...); cy.wait('@api'); cy.get(...).should('contain', valorDoFixture);

### Exercício 5: GitHub Actions

**Objetivo:** Rodar Cypress no CI.

**Enunciado:** Crie um workflow que, em cada push, instala dependências e executa npx cypress run.

**Resposta esperada:** Arquivo .github/workflows/cypress.yml com jobs de install e cypress run.

---

## Prova (Avaliação)

### Questão 1 (Múltipla escolha)

Fixtures no Cypress servem para:

a) Configurar o navegador  
b) Armazenar dados de teste reutilizáveis  
c) Definir comandos customizados  
d) Interceptar requests  

### Questão 2 (Múltipla escolha)

Page Object Model tem como benefício:

a) Executar testes mais rápido  
b) Centralizar seletores e ações, facilitando manutenção  
c) Reduzir o número de specs  
d) Substituir o Cypress  

### Questão 3 (Múltipla escolha)

cy.intercept é usado para:

a) Navegar entre páginas  
b) Interceptar e mockar/validar requisições HTTP  
c) Fazer assertions  
d) Configurar timeouts  

### Questão 4 (Prática)

Escreva o código Cypress para: usar cy.request e fazer GET em https://dummyjson.com/users/1, validando que o status é 200 e que o body contém a propriedade "id".

### Questão 5 (Dissertativa)

Por que usar seletores como data-cy em vez de classes CSS para automação?

### Questão 6 (Prática)

Crie um fixture usuario.json com nome e email. No spec, use o fixture para preencher dois campos de input (assuma ids #nome e #email).

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | b |
| 4 | cy.request('GET', 'https://dummyjson.com/users/1').then((r) => { expect(r.status).to.eq(200); expect(r.body).to.have.property('id'); }); (ou cy.request(...).its('body').should('have.property','id')) |
| 5 | Classes CSS mudam com refatoração de layout; data-cy é estável e semântico para testes. Evita acoplamento com estilização. |
| 6 | cy.fixture('usuario').then((u) => { cy.get('#nome').type(u.nome); cy.get('#email').type(u.email); }); |

---

**Próximo:** [Módulo 6 - Ferramentas e Processo](modulo-06-ferramentas.md)
