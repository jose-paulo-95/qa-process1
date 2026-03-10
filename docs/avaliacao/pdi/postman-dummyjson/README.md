# Projeto Postman - DummyJSON API

Projeto de prática para testes de API utilizando Postman, baseado na API [DummyJSON](https://dummyjson.com/).

## Objetivo

Este projeto é utilizado como exercício prático na **Fase 1 do PDI QA Junior**, para desenvolver competências em:
- Criação de requests (GET, POST, PUT, DELETE)
- Collections e organização
- Variáveis e environments
- Scripts de teste (Tests)
- Documentação de API

## Configuração

### 1. Importar no Postman

- Abra o Postman
- File → Import → Selecione a pasta `postman-dummyjson/` ou o arquivo `DummyJSON-PDI-Pratica.postman_collection.json`

### 2. Configurar Environment

- Importe o arquivo `DummyJSON-PDI-Pratica.postman_environment.json` (File → Import)
- Ou crie manualmente um ambiente com a variável:
  - `baseUrl`: `https://dummyjson.com`
- Selecione o environment "DummyJSON - PDI Prática" no canto superior direito do Postman

### 3. Executar

- Execute a collection inteira (Runner) ou requests individuais
- Para login, use credenciais de qualquer usuário da API (ex.: https://dummyjson.com/users):
  - username: `emilys`
  - password: `emilyspass`

## Estrutura da Collection

```
DummyJSON - PDI Prática
├── Auth
│   └── POST /auth/login
├── Usuários
│   ├── POST /users/add (criar)
│   ├── GET /users (listar)
│   ├── GET /users/{{id}} (buscar por ID)
│   ├── PUT /users/{{id}} (editar)
│   └── DELETE /users/{{id}} (excluir)
├── Produtos
│   ├── GET /products (listar)
│   └── GET /products/{{id}} (buscar por ID)
└── Carrinhos
    └── GET /carts (listar)
```

## Cenários de Teste Sugeridos

### Auth
- [ ] Login com credenciais válidas (200)
- [ ] Login com credenciais inválidas (400)
- [ ] Login com username vazio (400)

### Usuários
- [ ] Cadastrar usuário com dados válidos (201)
- [ ] Listar usuários (200)
- [ ] Buscar usuário por ID existente (200)
- [ ] Buscar usuário por ID inexistente (404)
- [ ] Editar usuário (200)
- [ ] Excluir usuário (200)

### Produtos
- [ ] Listar produtos (200)
- [ ] Buscar produto por ID (200)
- [ ] Paginação com limit e skip

## Documentação da API

- **API Base**: https://dummyjson.com/
- **Documentação**: https://dummyjson.com/docs
- **Recursos**: users, products, carts, auth, todos, posts, comments

## Referências

- [Postman Learning Center](https://learning.postman.com/)
- [Test Automation University - Postman](https://testautomationu.applitools.com/postman-tutorial/)
- [Fase 1 Checklist](../fase1-checklist.md)
