# Por que testes são necessários

**CTFL 4.0 - FL-1.2**

---

## Erro, Defeito e Falha

São conceitos distintos na cadeia causa-efeito:

| Termo | Definição | Exemplo |
|-------|-----------|---------|
| **Erro** | Ação humana que produz um resultado incorreto | Desenvolvedor esquece validar email |
| **Defeito** | Manifestação do erro no código/documento | Código não tem validação de formato |
| **Falha** | Comportamento incorreto visível ao usuário | Sistema aceita "abc" como email |

**Fluxo:** Erro humano → Defeito no código → Falha na execução

---

## Por que testar?

1. **Reduzir riscos** – defeitos em produção custam caro
2. **Fornecer informação** – stakeholders precisam saber a qualidade
3. **Compliance** – normas e regulamentações exigem evidências
4. **Prevenir** – testes antecipados evitam retrabalho

---

## Exemplo prático

Um bug de validação de CPF pode:
- **Erro:** Analista não especificou a regra
- **Defeito:** Código aceita CPF inválido
- **Falha:** Usuário cadastra com CPF falso, gera problemas fiscais

Testar evita que a falha chegue ao usuário.
