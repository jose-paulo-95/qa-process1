# Projeto Postman - ServeRest API

Projeto de prática para testes de API utilizando Postman, baseado na API [ServeRest](https://serverest.dev/).

## Objetivo

Este projeto é utilizado como exercício prático na **Fase 1 do PDI QA Junior**, para desenvolver competências em:
- Criação de requests (GET, POST, PUT, DELETE)
- Collections e organização
- Variáveis e environments
- Scripts de teste (Tests)
- Integração com Swagger

## Configuração

### 1. Importar no Postman

- Abra o Postman
- File → Import → Selecione a pasta `postman-serverest/` ou o arquivo `ServeRest-PDI-Pratica.postman_collection.json`
- Ou importe via URL do Swagger: https://serverest.dev/doc

### 2. Configurar Environment

- Importe o arquivo `ServeRest-PDI-Pratica.postman_environment.json` (File → Import)
- Ou crie manualmente um ambiente com a variável:
  - `baseUrl`: `https://serverest.dev`
- Selecione o environment "ServeRest - PDI Prática" no canto superior direito do Postman

### 3. Executar

- Execute a collection inteira (Runner) ou requests individuais
- Para login, o usuário padrão da ServeRest é:
  - email: `fulano@qa.com`
  - password: `teste`

## Estrutura da Collection

```
ServeRest - PDI Prática
├── Login
│   └── POST /login
├── Usuários
│   ├── POST /usuarios (criar)
│   ├── GET /usuarios (listar)
│   ├── GET /usuarios/{{_id}} (buscar por ID)
│   ├── PUT /usuarios/{{_id}} (editar)
│   └── DELETE /usuarios/{{_id}} (excluir)
├── Produtos
│   ├── POST /produtos (criar)
│   ├── GET /produtos (listar)
│   ├── GET /produtos/{{_id}} (buscar por ID)
│   ├── PUT /produtos/{{_id}} (editar)
│   └── DELETE /produtos/{{_id}} (excluir)
└── Carrinhos
    ├── POST /carrinhos (criar)
    ├── GET /carrinhos (listar)
    └── DELETE /carrinhos/concluir-compra
```

## Cenários de Teste Sugeridos

### Login
- [ ] Login com credenciais válidas (200)
- [ ] Login com credenciais inválidas (401)
- [ ] Login com email vazio (400)
- [ ] Login com formato de email inválido (400)

### Usuários
- [ ] Cadastrar usuário com dados válidos (201)
- [ ] Cadastrar usuário com email duplicado (400)
- [ ] Listar usuários (200)
- [ ] Buscar usuário por ID existente (200)
- [ ] Buscar usuário por ID inexistente (400)
- [ ] Editar usuário (200)
- [ ] Excluir usuário (200)

### Produtos
- [ ] CRUD completo de produtos
- [ ] Validação de campos obrigatórios
- [ ] Produto duplicado (nome)

## Documentação da API

- **API Base**: https://serverest.dev/
- **Swagger UI**: https://serverest.dev/doc
- **Repositório**: https://github.com/PauloGoncalvesBH/ServeRest

## Referências

- [Postman Learning Center](https://learning.postman.com/)
- [Test Automation University - Postman](https://testautomationu.applitools.com/postman-tutorial/)
- [Fase 1 Checklist](../fase1-checklist.md)
