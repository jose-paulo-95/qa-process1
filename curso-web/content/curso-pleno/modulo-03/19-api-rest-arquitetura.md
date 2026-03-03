# API Rest: arquitetura e implementação

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

---

## Camadas típicas de uma API Rest

| Camada | Responsabilidade |
|--------|------------------|
| **Controller** | Recebe a requisição HTTP, valida entrada, delega ao Service |
| **Service** | Regras de negócio, orquestração |
| **Repository** | Acesso a dados (banco, cache) |
| **Entity/Model** | Estrutura dos dados |

Conhecer a arquitetura ajuda a **identificar onde falhas podem ocorrer** e a **planejar testes**.

---

## Autenticação e autorização

- **Autenticação:** quem é o usuário (login, token)
- **Autorização:** o que o usuário pode fazer (roles, permissões)

**JWT (JSON Web Token):** token assinado enviado no header `Authorization: Bearer <token>`. A API valida o token em cada request.

---

## Boas práticas de implementação

- **Validação na entrada:** rejeitar dados inválidos com 400
- **Tratamento de erros:** retornar mensagens claras e status adequados
- **Versionamento:** `/v1/usuarios` para evoluir sem quebrar clientes
- **Documentação:** OpenAPI/Swagger descreve o contrato

---

## Por que isso importa para testes

- **Controllers:** ponto de entrada – validação de parâmetros, formato
- **Services:** regras de negócio – cenários de sucesso e erro
- **Repositories:** integração com banco – dados de teste, isolamento
- **JWT:** testes de autenticação (token válido, expirado, inválido) e autorização (role insuficiente)
