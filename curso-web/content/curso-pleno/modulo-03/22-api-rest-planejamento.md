# API Rest: planejamento de testes

**Referência:** [Descomplicando Testes de API Rest](https://descomplicando.juliodelima.com.br/)

> Apenas executar testes, sem planejamento, não te ajuda a fazer suas atividades com eficiência!

---

## Por que planejar

- Priorizar o que testar com tempo limitado
- Alinhar expectativas com o time
- Garantir cobertura dos riscos principais
- Executar testes de forma assertiva e profissional

---

## Riscos

Identificar riscos antes de testar:

- Quais endpoints são críticos? (login, pagamento, dados sensíveis)
- Onde há integrações externas?
- Quais regras de negócio são mais complexas?
- O que mudou recentemente?

Priorize testes nos pontos de maior risco.

---

## Integrações

- **APIs externas:** a API consome outras APIs? Testar com mocks quando necessário
- **Banco de dados:** dados de teste isolados, reset entre execuções
- **Frontend:** contrato alinhado para evitar surpresas na integração
- **CI/CD:** testes de API no pipeline (Newman, etc.)

---

## Ambiente de testes

- **DEV, QA, PROD:** ambientes separados, dados isolados
- **Configuração:** baseUrl, tokens, credenciais por ambiente
- **Disponibilidade:** ambiente estável e acessível para a equipe
- **Dados:** massa de dados controlada, sem efeitos colaterais entre testes

---

## Abordagens de teste

Definir a estratégia:

- **Funcional:** requisitos e regras de negócio
- **Contrato:** aderência ao Swagger/OpenAPI
- **Segurança:** autenticação, autorização, OWASP
- **Performance:** tempo de resposta, carga (quando aplicável)
- **Exploratório:** sessões para descobrir comportamentos inesperados

---

## Ferramentas

- **Postman/Newman:** execução, automação, CI
- **Swagger/OpenAPI:** documentação e validação de contrato
- **Cypress/cy.request:** testes de API no contexto de e2e
- **k6/JMeter:** performance (quando necessário)

Escolha conforme o contexto do projeto.

---

## Estimativas

- Quantos endpoints? Quantos cenários por endpoint?
- Tempo por cenário (manual vs automatizado)
- Priorização: smoke primeiro, depois críticos, depois complementares
- Buffer para bugs encontrados e reteste

---

## Automação de testes

- Quais testes automatizar? (smoke, regressão, críticos)
- Onde rodar? (CI/CD em cada build)
- Manutenção: testes automatizados exigem atualização quando a API muda
- ROI: priorize automação onde há maior retorno (regressão frequente)
