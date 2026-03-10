# Tabela de decisão e transição de estados

**CTFL 4.0 - Capítulo 4 (Técnicas de caixa preta)**

---

## Tabela de decisão

Usada quando a lógica depende de **combinações de condições**.

| Condição 1 | Condição 2 | Ação |
|------------|------------|------|
| Sim | Sim | A |
| Sim | Não | B |
| Não | Sim | C |
| Não | Não | D |

Cada linha vira um caso de teste. Evita esquecer combinações.

---

## Exemplo

Desconto em loja: cliente VIP **e** compra > R$ 500 → 20% desconto.

| VIP? | Compra > 500? | Desconto |
|------|---------------|----------|
| Sim | Sim | 20% |
| Sim | Não | 0% |
| Não | Sim | 0% |
| Não | Não | 0% |

---

## Transição de estados

Usada para sistemas com **estados** e **transições** (ex: fluxo de pedido).

- Estados: Rascunho, Enviado, Pago, Entregue
- Transições: enviar, pagar, entregar
- Cada transição válida e inválida vira caso de teste

---

## Quando usar

- **Tabela de decisão:** regras de negócio com múltiplas condições
- **Transição de estados:** fluxos com estados bem definidos

---

## Exercício: Tabela de decisão

**Objetivo:** Praticar tabela de decisão.

**Recursos:** Papel e caneta ou planilha

**Enunciado:** Regra: "Frete grátis se compra > R$ 200 **ou** cliente VIP". Monte a tabela de decisão com as condições e ações. Quantos casos de teste?

**Resposta esperada:** 2 condições (compra > 200?, VIP?) → 4 linhas. Ações: frete grátis (Sim/Sim, Sim/Não, Não/Sim) e frete pago (Não/Não).

---

## Exercício: Transição de estados

**Objetivo:** Praticar transição de estados.

**Recursos:** Fluxo de pedido (DummyJSON ou fictício)

**Enunciado:** Estados de um pedido: Rascunho → Enviado → Pago → Entregue. Liste 3 transições válidas e 2 inválidas (ex: Pago → Rascunho) que você testaria.

**Resposta esperada:** Válidas: Rascunho→Enviado, Enviado→Pago, Pago→Entregue. Inválidas: Pago→Rascunho, Enviado→Entregue (pular estado).
