# Postman: workspaces, ambientes e collections

**Baseado no curso: Automação de testes de API com Postman**

---

## Workspaces

Workspaces organizam seu trabalho no Postman:

- **Personal:** seu espaço individual
- **Team:** compartilhado com a equipe
- **Public:** visível para qualquer um

Use workspaces para separar projetos (ex: ServeRest, API interna).

---

## Ambientes (Environments)

Permitem trocar configurações entre **DEV**, **QA** e **PROD** sem alterar as requests.

| Variável | DEV | QA | PROD |
|----------|-----|-----|------|
| baseUrl | http://localhost:3000 | https://qa.api.com | https://api.com |

Selecione o ambiente no canto superior direito do Postman.

---

## Métodos HTTP

| Método | Uso |
|--------|-----|
| GET | Buscar dados |
| POST | Criar recurso |
| PUT | Atualizar completo |
| PATCH | Atualizar parcial |
| DELETE | Remover |

---

## Collections

Agrupe requests por pasta lógica:

- **Login** – autenticação
- **Usuários** – CRUD de usuários
- **Produtos** – catálogo
- **Carrinho** – fluxo de compra

Use nomes descritivos para facilitar manutenção.

---

## API ServeRest

Base: **https://serverest.dev**

Exemplos de endpoints:

- `POST /login` – autenticar
- `GET /usuarios` – listar usuários
- `POST /usuarios` – criar usuário
- `GET /produtos` – listar produtos

ServeRest simula um e-commerce para praticar testes de API.
