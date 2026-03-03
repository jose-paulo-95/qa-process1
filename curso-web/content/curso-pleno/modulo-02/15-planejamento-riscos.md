# Planejamento de testes e gerenciamento de riscos

**CTFL 4.0 - Capítulo 5**

---

## Planejamento de testes

Define **o que** testar, **como**, **quando** e **quem**. Inclui:

- Escopo e objetivos
- Abordagem (níveis, tipos, técnicas)
- Critérios de entrada/saída
- Recursos e cronograma
- Riscos e mitigações

---

## Gerenciamento de riscos

Riscos de **teste** (ex: ambiente instável) e riscos de **produto** (ex: módulo crítico com muitos bugs).

- **Identificar** riscos
- **Avaliar** probabilidade e impacto
- **Priorizar** testes nas áreas de maior risco
- **Mitigar** quando possível

---

## Teste baseado em riscos

Aloca mais esforço onde o risco é maior. Áreas críticas, pouco testadas ou instáveis recebem mais atenção.

---

## Critérios de conclusão

- Cobertura atingida
- Taxa de defeitos aceitável
- Prazos cumpridos
- Critérios de negócio atendidos

---

## Validação de requisitos

Antes de testar, analise se os requisitos estão **claros e testáveis**:

- **DoR (Definition of Ready):** critérios para a story estar pronta para teste (requisitos claros, critérios de aceite, ambiente disponível)
- **DoD (Definition of Done):** critérios para considerar a story concluída (testes passando, bugs críticos resolvidos, documentação atualizada)
- **Checklist:** requisitos objetivos? critérios de aceite? ambiguidades?
- **Pensamento crítico:** "E se o campo estiver vazio?" "E se for duplicado?"
- **Gaps:** anotar dúvidas e levar ao planning

**Exemplo:** Story "Campo quantidade aceita 1 a 99" → validar: 0 e 100 são rejeitados? decimal? negativo?

---

## Estimativa

Estimar esforço de teste com base em:

- **Complexidade** da funcionalidade
- **Histórico** (stories similares)
- **Pontos da story** (proporcional)
- **Riscos** identificados

**Exemplo:** Story de 5 pontos, módulo estável → ~4h de teste. Story de 8 pontos, área nova → ~8h.
