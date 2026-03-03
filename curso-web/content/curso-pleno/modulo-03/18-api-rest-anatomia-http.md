# API Rest: anatomia HTTP

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

---

## Estrutura de uma requisição

| Parte | Exemplo |
|-------|---------|
| **Método** | GET, POST, PUT, PATCH, DELETE |
| **URL** | `https://api.com/usuarios` |
| **Headers** | `Content-Type: application/json`, `Authorization: Bearer token` |
| **Body** | JSON no POST/PUT/PATCH |

---

## Métodos HTTP

| Método | Uso | Idempotente? |
|--------|-----|--------------|
| **GET** | Buscar dados | Sim |
| **POST** | Criar recurso | Não |
| **PUT** | Atualizar completo | Sim |
| **PATCH** | Atualizar parcial | Não* |
| **DELETE** | Remover | Sim |

*PATCH pode ser idempotente dependendo da implementação.

---

## Status codes principais

| Código | Significado |
|--------|-------------|
| **200** | OK – sucesso (GET, PUT, PATCH) |
| **201** | Created – recurso criado (POST) |
| **204** | No Content – sucesso sem body (DELETE) |
| **400** | Bad Request – dados inválidos |
| **401** | Unauthorized – não autenticado |
| **403** | Forbidden – sem permissão |
| **404** | Not Found – recurso não existe |
| **500** | Internal Server Error – erro no servidor |

---

## Parâmetros

- **Query string:** `GET /usuarios?nome=João&limit=10`
- **Path:** `GET /usuarios/123` (ID no caminho)
- **Body:** JSON no POST/PUT/PATCH

---

## O que testar na anatomia

- Método correto para cada operação
- Status code esperado para sucesso e erro
- Headers obrigatórios (Content-Type, Authorization)
- Formato do body (request e response)
- Parâmetros obrigatórios e opcionais
