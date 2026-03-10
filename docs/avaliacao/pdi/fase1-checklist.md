# Fase 1: Fundamentos + Testes de API (Meses 1-3)

Checklist de execução da Fase 1 do PDI QA Junior.

## Objetivo

Eliminar gaps em ciclo de vida de software, Postman e Swagger. Alinhado às metas declaradas: **API**, **melhorar código**, **automação**; e aos desafios: **ser mais prático**, **ter boas práticas**, **técnicas de QA**. Preferência de aprendizado: **mentoria + prática com exemplos**.

---

## Regra 60/40 (Ser mais prático)

- **60% prática** (fazer, codar, testar) vs **40% teoria** (ler, assistir)
- Após cada conceito: aplicar imediatamente. Ver [boas-praticas-qa.md](boas-praticas-qa.md) seção 1.

---

## Mês 1

### Ciclo de vida de software
- [ ] Ler [docs/processo-qualidade.md](../../processo-qualidade.md) - Seções 3 (Ciclo de Vida do Teste) e 4 (Tipos de Teste)
- [ ] Anotar as 6 fases: Planejamento → Análise → Design → Execução → Relatório → Fechamento
- [ ] Conseguir explicar cada fase em 1-2 frases
- [ ] (Opcional) Vídeo Alura "Ciclo de vida de testes"

### Postman do zero
- [ ] Acessar [Test Automation University - API Test Automation with Postman](https://testautomationu.applitools.com/postman-tutorial/) (grátis, ~1h)
- [ ] Completar o curso
- [ ] Criar primeira requisição GET
- [ ] Criar requisição POST
- [ ] Criar collection e organizar requests
- [ ] Usar variáveis em requests
- [ ] Aplicar **boas práticas** de scripts: ver [boas-praticas-qa.md](boas-praticas-qa.md) seção 2.1

### Métrica de sucesso Mês 1
- [ ] Consegue explicar as 6 fases do ciclo de vida
- [ ] Cria GET/POST, collections e variáveis no Postman

---

## Mês 2

### Postman prático - DummyJSON
- [ ] Acessar API DummyJSON: https://dummyjson.com/
- [ ] Documentação: https://dummyjson.com/docs
- [ ] Criar collection "DummyJSON - Prática PDI" com:
  - [ ] POST /auth/login (autenticação - username: emilys, password: emilyspass)
  - [ ] GET /users (listar usuários)
  - [ ] POST /users/add (criar usuário)
  - [ ] GET /users/{{id}} (buscar por ID)
  - [ ] PUT /users/{{id}} (editar)
  - [ ] DELETE /users/{{id}} (excluir)
  - [ ] GET /products, GET /carts, etc.
- [ ] Adicionar scripts na aba **Tests** em pelo menos 5 requests (ex: `pm.response.to.have.status(200)`)
- [ ] Meta: 10+ requests com scripts de validação

### Documentação + Postman
- [ ] Ler [DIO - Preparando Postman com Swagger UI](https://www.dio.me/articles/preparando-postman-com-auxilio-do-swagger-ui)
- [ ] Importar collection do [postman-dummyjson/](postman-dummyjson/) ou criar manualmente com base em https://dummyjson.com/docs
- [ ] Configurar variáveis de ambiente (base URL: https://dummyjson.com)

### Mentoria
- [ ] Agendar 1 sessão com QA Pleno (usar [template-mentoria.md](template-mentoria.md))
- [ ] Tópicos: Postman collections, validação de API, scripts Tests
- [ ] Incluir na pauta: **"Como aplicar o que aprendi no DummyJSON ao meu projeto (TruMe, DeepClaim)?"**

### Métrica de sucesso Mês 2
- [ ] Collection com 10+ requests e scripts Tests
- [ ] Importou ou criou collection com base na documentação

---

## Mês 3

### Consolidação e exercícios
- [ ] [GitHub - MuriloGMunhoz/desafio-api-QA](https://github.com/MuriloGMunhoz/desafio-api-QA) - resolver cenários de teste
- [ ] [GitHub - marisilveirat/Testes_Postman_Serverest](https://github.com/marisilveirat/testes_postman_serverest) - estudar exemplos (adaptar para DummyJSON)
- [ ] Aplicar feedback da mentoria no projeto
- [ ] Documentar cenários testados no projeto postman-dummyjson
- [ ] **Aplicabilidade:** Listar 2-3 endpoints do projeto atual e criar requests equivalentes no Postman (ver [boas-praticas-qa.md](boas-praticas-qa.md))
- [ ] **Validação de requisitos:** Na próxima story, usar checklist de [boas-praticas-qa.md](boas-praticas-qa.md) seção 5

### Revisão
- [ ] Refazer autoavaliação das competências Postman e Swagger
- [ ] Meta: nível 3 em Criação de requests, Collections, Variáveis, Scripts

---

## Recursos Rápidos

| Recurso | Link |
|---------|------|
| TAU Postman | https://testautomationu.applitools.com/postman-tutorial/ |
| DummyJSON API | https://dummyjson.com/ |
| DummyJSON Docs | https://dummyjson.com/docs |
| Postman Learning Center | https://learning.postman.com/ |
| DIO Postman + Swagger | https://www.dio.me/articles/preparando-postman-com-auxilio-do-swagger-ui |

---

## Próxima Fase

Após concluir a Fase 1, seguir para Fase 2 (Cypress Sólido + Swagger) conforme o plano completo.
