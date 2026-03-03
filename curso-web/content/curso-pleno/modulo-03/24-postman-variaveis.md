# Postman: variáveis

**Baseado no curso: Automação de testes de API com Postman**

---

## Tipos de variáveis

| Tipo | Escopo | Uso |
|------|--------|-----|
| **Local** | Apenas na request atual | Dados temporários |
| **Collection** | Todas as requests da collection | IDs compartilhados (ex: userId) |
| **Environment** | Requests no ambiente ativo | baseUrl, tokens por ambiente |
| **Global** | Todo o workspace | Configurações gerais |

---

## Sintaxe

Use `{{nomeDaVariavel}}` nas URLs, headers e body:

```
{{baseUrl}}/usuarios/{{userId}}
```

---

## Definindo variáveis

**Environment:** variáveis por ambiente (DEV, QA, PROD).

**Collection:** em Collection → Variables. Útil para armazenar dados entre requests (ex: token de login, ID criado).

**Script:** defina em tempo de execução:

```javascript
pm.collectionVariables.set("userId", pm.response.json()._id);
pm.environment.set("token", pm.response.json().authorization);
```

---

## Boas práticas

- Use environments para trocar entre ambientes
- Use collection variables para dados que fluem entre requests
- Evite hardcode de URLs e credenciais
