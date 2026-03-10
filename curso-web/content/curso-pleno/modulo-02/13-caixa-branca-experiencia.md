# Caixa branca e técnicas baseadas em experiência

**CTFL 4.0 - Capítulo 4**

---

## Técnicas de caixa branca

Analisam a **estrutura interna** do código (o testador conhece a implementação).

### Cobertura de statement

Cada **instrução** é executada pelo menos uma vez.

### Cobertura de branch (decisão)

Cada **ramo** de decisão (if/else, switch) é exercido em ambos os caminhos (true e false).

---

## Técnicas baseadas em experiência

Quando especificações são incompletas ou há pouco tempo:

- **Teste exploratório:** aprender e testar ao mesmo tempo, sem script rígido
- **Ataques:** listas de cenários conhecidos de falha (ex: valores extremos, entradas inválidas)

---

## Testes exploratórios com charters

Para dar **estrutura** à exploração, use um **charter** (objetivo da sessão em uma frase):

**Exemplo de charter:**
> "Explorar o fluxo de checkout: identificar cenários em que o pedido pode ser finalizado incorretamente."

**Elementos do charter:**
- **Objetivo:** o que explorar (ex: fluxo X, tela Y)
- **Escopo:** o que está dentro e fora
- **Time-boxing:** duração da sessão (ex: 90 min)

**Exemplo prático:** Sessão de 60 min com charter "Explorar validações do formulário de cadastro de usuário". Anotar bugs e dúvidas; ao final, registrar descobertas.

### Exercício: Charter

**Objetivo:** Praticar definição de charter.

**Recursos:** Aplicação com login (ex: DummyJSON) ou cenário fictício

**Enunciado:** Para um fluxo de login (email + senha), escreva um charter em uma frase que defina o objetivo de uma sessão exploratória de 45 minutos.

**Resposta esperada:** Exemplo: "Explorar o fluxo de login: identificar cenários em que o sistema aceita ou rejeita credenciais de forma inesperada."

---

## Quando usar cada uma

| Técnica | Quando |
|---------|--------|
| Caixa preta | Requisitos claros, foco em comportamento |
| Caixa branca | Código disponível, foco em cobertura |
| Experiência | Pouco tempo, requisitos vagos, regressão rápida |
