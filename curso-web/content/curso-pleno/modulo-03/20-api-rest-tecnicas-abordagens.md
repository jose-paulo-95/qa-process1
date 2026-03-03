# API Rest: técnicas e abordagens de teste

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

---

## Testes de cenário vs isolados

| Abordagem | Descrição |
|-----------|-----------|
| **Isolado** | Cada request testa um endpoint de forma independente; dados mockados ou fixtures |
| **Cenário** | Fluxo completo: login → criar recurso → buscar → atualizar → deletar |

Use **isolados** para validações pontuais; use **cenário** para fluxos críticos.

---

## Validação de aderência a padrões

Verificar se a API segue convenções REST e boas práticas:

- **Nomenclatura:** URLs em plural (`/usuarios`), verbos HTTP corretos
- **Status codes:** 200 para sucesso em GET, 201 para POST, 404 para não encontrado
- **Formato:** JSON consistente, Content-Type correto
- **Versionamento:** `/v1/` quando aplicável

---

## Testes de contrato

Validar que a API **respeita o documentado** (Swagger/OpenAPI):

- Estrutura do response (campos, tipos)
- Status codes esperados
- Headers obrigatórios

Falhas de contrato quebram integrações com o frontend.

---

## Cobertura de testes de API Rest

- **Endpoints:** todos os recursos e métodos cobertos
- **Cenários:** positivos, negativos, limites
- **Integrações:** fluxos que dependem de múltiplos endpoints
- **Priorizar:** endpoints críticos e de maior risco primeiro

---

## Aderência a padrões arquiteturais

Validar se a implementação segue a arquitetura esperada:

- Separação Controller/Service/Repository
- Autenticação e autorização consistentes
- Tratamento de erros padronizado
- Respostas de erro com estrutura previsível

---

## Testes de compatibilidade

- **Versões da API:** v1 vs v2 – mudanças não quebram clientes antigos
- **Formatos:** JSON, Content-Type
- **Clientes:** diferentes consumidores (web, mobile, integrações)
- **Retrocompatibilidade:** novos campos opcionais, não remover campos existentes

---

## Validação de monitoramento

- A API expõe métricas ou health checks? (`/health`, `/metrics`)
- Logs adequados para debugging?
- Alertas configurados para erros 5xx?
- Tempo de resposta monitorado?

---

## Testes baseados na regra de negócio

Derivar casos de teste das regras:

- **Exemplo:** "Usuário VIP tem 20% desconto em compras > R$ 500"
  - Testar: VIP + R$ 600 → desconto aplicado
  - Testar: VIP + R$ 400 → sem desconto
  - Testar: não VIP + R$ 600 → sem desconto

---

## Heurísticas de teste de API

- **Positivos e negativos:** dados válidos e inválidos
- **Valores limite:** strings vazias, tamanhos máximos, números negativos
- **Campos obrigatórios:** omitir um por vez
- **Tipos incorretos:** string onde espera número, etc.
- **Autenticação:** sem token, token expirado, token inválido
- **Autorização:** acessar recurso de outro usuário

---

## Inconsistências: comportamento, estrutura e conteúdo

| Tipo | O que verificar |
|------|-----------------|
| **Comportamento** | Status code errado, ordem de operações, regras de negócio |
| **Estrutura** | Campos faltando, tipo errado, formato inesperado |
| **Conteúdo** | Valores incorretos, dados inconsistentes entre endpoints |

---

## Testes destrutivos

Enviar dados que podem quebrar o sistema:

- Payloads muito grandes
- Caracteres especiais, SQL injection
- IDs inexistentes, referências quebradas
- Valores extremos (números muito grandes, strings gigantes)

---

## Testes de performance

- **Tempo de resposta:** latência aceitável (ex: < 500ms)
- **Carga:** múltiplas requisições simultâneas
- **Ferramentas:** k6, JMeter, Artillery (Postman tem testes básicos de tempo)

---

## Testes de segurança

- **OWASP API Security:** top 10 vulnerabilidades em APIs
- Autenticação fraca, exposição de dados sensíveis
- Rate limiting, validação de entrada contra injection
- Tokens, CORS, headers de segurança

---

## Testes de portabilidade

- API funciona em diferentes ambientes? (DEV, QA, PROD)
- Dependências externas configuráveis?
- Comportamento consistente entre deploys?

---

## Testes baseados em risco

Priorizar pelo impacto e probabilidade:

- Endpoints de pagamento, autenticação → alta prioridade
- CRUD secundário → prioridade média
- Endpoints pouco usados → menor prioridade

---

## Testes exploratórios vs guiados

| Abordagem | Descrição |
|-----------|-----------|
| **Guiado** | Casos de teste definidos, script executado |
| **Exploratório** | Explorar a API sem script fixo, descobrir comportamentos inesperados |

Use exploratório para conhecer a API; use guiado para regressão e automação.
