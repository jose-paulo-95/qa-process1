# API Rest: fundamentos e mentalidade

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

---

## Mentalidade de quem testa APIs

Testar na camada de API exige uma visão diferente de testes funcionais na interface:

- **Foco no contrato:** o que a API promete vs o que entrega
- **Antecipação:** encontrar inconsistências antes do frontend consumir
- **Visão sistêmica:** entender a comunicação entre componentes

---

## Interação Front-Backend

| Camada | Responsabilidade |
|--------|------------------|
| **Frontend** | Interface, UX, validações de formulário |
| **API (Backend)** | Regras de negócio, persistência, autenticação |
| **Testes de API** | Validar que o backend entrega o correto |

O frontend depende da API. Se a API retorna dados incorretos, o bug se propaga. Testar a API **isoladamente** reduz riscos e acelera feedback.

---

## Desafios em times ágeis

- **Paralelismo:** front e back desenvolvem ao mesmo tempo – testes de API permitem validar o backend antes do front estar pronto
- **Integração contínua:** testes de API rodam rápido e se integram ao pipeline
- **Contrato:** documentação (Swagger/OpenAPI) + testes garantem que front e back estão alinhados

---

## O que é uma API Rest

**REST** (Representational State Transfer) é um estilo arquitetural para APIs que usa:

- **HTTP** como protocolo
- **Recursos** identificados por URLs (ex: `/usuarios`, `/produtos`)
- **Métodos HTTP** para operações (GET, POST, PUT, DELETE)
- **Stateless:** cada request é independente; o servidor não guarda estado entre chamadas

---

## Ambiente de prática

Para praticar, use a **ServeRest** (https://serverest.dev): API REST pronta, sem instalação. Simula um e-commerce com usuários, produtos e carrinhos. Documentação Swagger em https://serverest.dev/doc.

---

## Próximo passo

No próximo tema: anatomia de uma requisição e resposta – métodos HTTP, status codes e parâmetros.
