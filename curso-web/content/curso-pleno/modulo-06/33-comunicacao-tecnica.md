# Comunicação técnica

---

## Jargões comuns em QA

Glossário completo: [glossario-qa.md](../../../../../docs/avaliacao/pdi/glossario-qa.md)

| Termo | Significado |
|-------|-------------|
| **Smoke** | Teste rápido para validar se o build básico funciona |
| **Regressão** | Testes para garantir que mudanças não quebraram o que já funcionava |
| **UAT** | User Acceptance Testing – validação com usuário/PO antes de produção |
| **Contrato** | O que a API promete (request/response) conforme documentado |
| **E2E** | End-to-end – teste que cobre fluxo completo na visão do usuário |
| **Fixture** | Dados estáticos usados nos testes |
| **Stub/Mock** | Simular resposta de API ou componente |
| **Escopo** | O que será testado (e o que não será) |
| **Critério de aceite** | Condições para considerar uma story concluída |
| **Severidade** | Impacto do defeito no sistema |
| **Prioridade** | Urgência de correção |

---

## Comunicar status de testes para stakeholders

### Estrutura objetiva

- **O que foi testado:** escopo, ambientes
- **Resultado:** passou/falhou, quantidade
- **Bloqueios:** o que impede conclusão
- **Riscos:** o que pode impactar a release

### Exemplo de daily

> "Ontem: executei 15 casos do fluxo de checkout, 2 falharam (bug no cálculo de frete). Hoje: reteste dos 2 após correção e 10 casos de integração. Bloqueio: ambiente QA instável."

### Exemplo de relatório de status

> "Sprint 12 – Testes: 45/50 passando (90%). 3 bugs abertos (1 crítico em login). Regressão smoke OK. Pendente: validação de relatório com PO."

---

## Exercício: explicar um bug para dev/PO

**Objetivo:** Praticar comunicação técnica clara.

**Recursos:** [boas-praticas-qa.md](../../../../docs/avaliacao/pdi/boas-praticas-qa.md)

**Enunciado:** Você encontrou um bug: ao cadastrar usuário com email já existente, a API retorna 201 em vez de 409, e o sistema exibe "Cadastro realizado" incorretamente. Escreva uma mensagem objetiva para o dev (em 3-4 linhas) explicando o problema de forma que ele entenda e possa reproduzir.

**Resposta esperada:** "POST /usuarios com email já cadastrado retorna 201 em vez de 409 (Conflict). O front exibe 'Cadastro realizado' porque interpreta 201 como sucesso. Esperado: 409 com mensagem de email já existente. Reprodução: cadastrar user@test.com duas vezes."

---

## Code review de automação

Ao revisar código de testes (Cypress, Postman scripts), verifique:

- **Seletores:** estáveis (data-cy, id)? Evitar classes CSS ou texto que muda
- **Fixtures:** dados em arquivos, não hardcoded
- **Nomenclatura:** descritiva (it('deve exibir erro ao login inválido'))
- **Organização:** um it = um cenário; POM quando há reutilização

**Exercício:** Revise um spec Cypress existente (seu ou de colega) e liste 2 melhorias seguindo as boas práticas acima.

---

## Mentoria de juniores

Dicas para apoiar QAs juniores:

- **Pair testing:** testar junto, explicando o "porquê" das decisões
- **Exemplos práticos:** mostrar um caso real (bug, caso de teste) em vez de só teoria
- **Feedback objetivo:** "O caso de teste X poderia incluir o cenário de limite" em vez de "está incompleto"
- **Encaminhar recursos:** [boas-praticas-qa.md](../../../../docs/avaliacao/pdi/boas-praticas-qa.md), documentação do projeto
