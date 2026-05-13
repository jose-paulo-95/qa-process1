# Operadores lógicos e de comparação (guia para iniciantes)

**Módulo 7 — Operadores lógicos e comparação**

Este tema assume **nenhum conhecimento prévio** de programação. O foco é **ler e escrever condições** como aparecem em critérios de aceite, **Postman (Tests)** e **Cypress (JavaScript)**. A referência de sintaxe é **JavaScript**, porque é a mesma família usada na maior parte dos exemplos do curso.

---

## 1. Ideias básicas (leia primeiro)

### O que é uma “condição”?

Uma **condição** é uma frase sobre o sistema que pode ser **verdadeira** ou **falsa**. Em código, isso vira um valor **booleano**:

- **Verdadeiro** → em JavaScript: `true` (muitas vezes abreviamos como **V** neste material)
- **Falso** → `false` (**F**)

**Exemplos em linguagem natural:** “O status HTTP é 200”, “A idade é maior que 18”, “O campo e-mail não está vazio”. Cada uma pode ser avaliada como sim ou não.

### O que é uma “expressão”?

É **qualquer trecho de código que produz um valor**. Por exemplo:

- `10 + 5` é uma expressão cujo valor é o número `15`
- `idade >= 18` é uma expressão cujo valor é `true` ou `false`

Você pode **combinar** expressões com operadores. O resultado de `idade >= 18 && temDocumento` é `true` só quando **as duas** partes forem verdadeiras.

### Tipos de operadores (mapa mental)

| Família | Exemplos | Resultado típico |
|--------|----------|-------------------|
| **Aritméticos** | `+`, `-`, `*`, `/`, `%` | número |
| **Comparação** | `>`, `<`, `>=`, `<=` | boolean (`true` / `false`) |
| **Igualdade** | `==`, `===`, `!=`, `!==` | boolean |
| **Lógicos** | `&&` (E); OU lógico em JS são dois caracteres pipe seguidos; `!` (NÃO) | boolean |

Neste tema aprofundamos **comparação**, **igualdade** e **lógicos**. Aritméticos aparecem só quando combinados com os outros (ex.: `preco * quantidade <= limite`).

---

## 2. Operadores de comparação: `>`, `<`, `>=`, `<=`

Eles comparam **dois valores** (geralmente números; em alguns contextos também texto, com regras próprias) e respondem **true** ou **false**.

| Operador | Leitura | Exemplo (supondo variáveis) | Resultado se… |
|----------|---------|----------------------------|-----------------|
| `>` | maior que | `10 > 3` | 10 é maior que 3 → **true** |
| `<` | menor que | `10 < 3` | 10 não é menor que 3 → **false** |
| `>=` | maior ou **igual** | `5 >= 5` | cinco é maior **ou igual** a cinco → **true** |
| `<=` | menor ou **igual** | `4 <= 10` | **true** |

### Por que `>=` e `<=` têm o sinal `=` junto?

O símbolo **não** é `==`. É um **único** operador de duas letras: “maior-ou-igual” ou “menor-ou-igual”. Em regras de negócio isso aparece o tempo todo:

- “Aceita idade **de 18 a 65 anos**” → em geral: `idade >= 18 && idade <= 65`
- “Frete grátis para compra **a partir de** R$ 200” → `valorCompra >= 200`

### Fronteira (muito importante para QA)

Se a regra diz “mínimo 1 e máximo 100 caracteres”, os limites **inclusivos** costumam ser testados assim:

- mínimo: `tamanho >= 1` (valor 1 deve ser **válido**)
- máximo: `tamanho <= 100` (valor 100 deve ser **válido**)

Erros de implementação frequentes misturam `>` com `>=`. Seu caso de teste no **limite** (exatamente 1 ou exatamente 100) existe justamente para pegar isso.

### Comparação com “entre” no dia a dia

“Entre 18 e 65” quase sempre significa **os dois limites válidos**:

```text
idade >= 18 && idade <= 65
```

São **duas** comparações ligadas por **E** (`&&`), não um operador mágico “entre”.

---

## 3. Igualdade: `==`, `===`, `!=`, `!==`

### O que queremos dizer com “igual”?

Em testes automatizados você quase sempre quer saber: “**é exatamente o mesmo valor e o mesmo tipo que eu espero?**” Por isso, em JavaScript, a boa prática em asserts é o **`===` (igualdade estrita)**.

| Operador | Nome comum | Comportamento (resumo) |
|----------|------------|-------------------------|
| `===` | igualdade **estrita** | Mesmo **valor** e mesmo **tipo** → `true`. Sem “conversão mágica” de tipos. |
| `!==` | desigualdade **estrita** | Oposto de `===`: `true` quando **não** são estritamente iguais. |
| `==` | igualdade **com coerção** | Pode converter tipos antes de comparar. **Surpresas** são comuns. |
| `!=` | desigualdade com coerção | Oposto de `==`. |

### Exemplo clássico da diferença entre `==` e `===`

Em JavaScript:

- `5 == "5"` → **true** (a string `"5"` pode ser convertida para número)
- `5 === "5"` → **false** (número não é string; tipos diferentes)

Para **QA**, isso importa porque um teste com `==` pode **passar** quando na prática o sistema entregou tipo errado (ex.: número onde deveria ser string), escondendo bug.

**Regra prática:** em Postman/Cypress, prefira **`===`** e **`!==`** nas asserções, salvo quando você **intencionalmente** quer aceitar coerção (raro em teste).

---

## 4. Operadores lógicos: `&&`, `||`, `!`

Use **V** / **F** como atalho mental para `true` / `false`.

### Convenções

- **`&&` — E (AND):** “A **e** B” — **só** verdadeiro se **ambos** forem verdadeiros.
- **OU lógico em JavaScript:** escreve-se com **dois** caracteres “pipe” (barra vertical) um após o outro — o mesmo símbolo usado em teclados ABNT2 como “Shift + tecla à esquerda do Z”. **Não** digitamos isso aqui dentro de tabelas Markdown para não quebrar o layout; na prática é o operador OR inclusivo entre duas condições.
- **`!` — NÃO (NOT):** inverte: `!true` → `false`, `!false` → `true`.

**OU lógico é inclusivo:** se ambas as condições forem verdadeiras, o resultado continua verdadeiro.

**Curto-circuito:** em `A && B`, se `A` já é falso, `B` pode nem ser avaliado. No OU lógico em JavaScript (dois pipes entre condições), se `A` já é verdadeiro, `B` pode ser ignorado. Exemplo em código:

```js
if (estoque > 0 || permiteBackorder) { /* ... */ }
```

Isso muda depuração e cobertura de ramos.

### Tabelas verdade (E e OU)

**E (`&&`):**

| A | B | A && B |
|---|---|--------|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

**OU (OR inclusivo):**

| A | B | A OU B |
|---|---|--------|
| V | V | **V** |
| V | F | **V** |
| F | V | **V** |
| F | F | F |

**NÃO (`!`):**

| A | !A |
|---|-----|
| V | F |
| F | V |

### Leis de De Morgan (úteis para casos negativos)

- `!(A && B)` equivale a `(!A) || (!B)`
- `!(A || B)` equivale a `(!A) && (!B)`

---

## 5. Outros operadores que você pode cruzar (“etc.”)

Não são “lógicos” no sentido estrito, mas aparecem **nas mesmas expressões** que você testa:

| Símbolo | Nome | Uso típico em testes |
|---------|------|----------------------|
| `??` | **Nullish coalescing** | `valor ?? "padrão"` — usa o lado direito só se o esquerdo for `null` ou `undefined` (comportamento distinto do OU lógico quando o valor é `0` ou string vazia) |
| `?.` | **Optional chaining** | `usuario?.endereco?.cep` — evita erro se `usuario` ou `endereco` for `null`/`undefined` |
| `? :` | **Ternário** | `condicao ? "sim" : "não"` — if/else em uma linha |
| `+ - * / %` | Aritméticos | Ex.: `pm.response.responseTime < 500` |

**`!!valor`** — alguns códigos “forçam” valor para boolean com dupla negação. Não é um terceiro operador lógico novo; é `!` aplicado duas vezes.

---

## 6. Precedência (por que parênteses salvam o seu assert)

Em uma expressão **sem parênteses**, o JavaScript aplica regras de **ordem** (precedência). Ordem simplificada (do que costuma “acontecer primeiro” para o que acontece depois):

1. `!` (negação)
2. `* / %`
3. `+ -` (soma e subtração)
4. `< <= > >=`
5. `===` `!==` `==` `!=`
6. `&&` (E lógico)
7. OU lógico (dois pipes em JavaScript)

**Exemplo da armadilha:** `!pm.response.code === 200` **não** significa “código diferente de 200” da forma que parece. O `!` pode ser aplicado antes da comparação com `===`, gerando resultado estranho. O seguro é:

```js
!(pm.response.code === 200)
// ou
pm.response.code !== 200
```

**Regra para QA:** quando misturar `!`, comparações e `&&` / `||`, **use parênteses** até ficar óbvio para qualquer pessoa da equipe.

---

## Exercícios — Comparação (`>`, `<`, `>=`, `<=`)

Suponha números inteiros quando não dito o contrário.

1. `7 > 7` é V ou F?
2. `7 >= 7` é V ou F?
3. `3 < 10` é V ou F?
4. `10 <= 9` é V ou F?
5. Idade mínima 18: com `idade = 18`, `idade >= 18` é V ou F?
6. Teto máximo 100 unidades: com `q = 100`, `q <= 100` é V ou F?
7. Escreva em uma linha a condição “`x` está no intervalo fechado de 1 a 10” (inclui 1 e 10).
8. Uma API aceita página `page >= 1`. `page = 0` deve ser aceita pela regra? (sim/não + qual comparação falha)
9. “Desconto se compra **strictly greater** que 100” → use `>` ou `>=`?
10. Se `a < b` é F e `a = 5` e `b = 5`, isso contradiz a matemática ou está coerente com `<=`?

**11 (extra):** Dê um exemplo de bug que só aparece no limite porque o dev usou `>` em vez de `>=`.

**12 (extra):** Traduza: “nota mínima 7 e máxima 10” em duas comparações com `&&`.

---

## Exercícios — Igualdade (`==`, `===`, `!=`, `!==`)

1. Em JavaScript, `0 === false` é V ou F?
2. `0 == false` é V ou F? (pesquise ou teste no console se precisar)
3. Por que em testes automatizados se recomenda `===` em vez de `==`?
4. `"200" === 200` é V ou F?
5. `"200" == 200` é V ou F?
6. Reescreva `!(a === b)` usando apenas `!==`.
7. O que significa `status !== 200` em um assert de API?
8. `null === undefined` é V ou F?
9. `null == undefined` é V ou F?
10. Você espera `userId` como string na API; o JSON veio com número. Qual operador revela o problema com mais facilidade, `==` ou `===`? Por quê?

**11 (extra):** Quando `!=` e `!==` dão resultados diferentes? Dê um par de valores exemplo.

**12 (extra):** Explique em uma frase o que é “coerção de tipos” no contexto de `==`.

---

## Exercícios — Operador E (`&&`)

1. `(Cliente VIP = V) && (Compra > R$ 500 = V)`
2. `(Cliente VIP = V) && (Compra > R$ 500 = F)`
3. `(Email válido = F) && (Senha correta = V)`
4. `(Estoque > 0 = V) && (Produto ativo = V) && (Preço > 0 = V)`
5. `(Usuário logado = F) && (Token não expirado = V)`
6. Regra: “Aprovar se nota ≥ 7 **e** faltas ≤ 10”. Nota = 8, faltas = 12. Satisfeita?
7. `(Idade ≥ 18 = V) && (Idade ≤ 120 = F)` para cadastro válido
8. “Cupom válido **e** ainda não usado”: válido=V, já usado=V. Pode aplicar?
9. Escreva com `&&`: pagamento com cartão só se cartão habilitado **e** valor ≤ limite.
10. Quantas linhas (A,B) têm A=V e B=V em tabela binária?

**11 (extra):** Cenário em que “rascunho salvo && revisão aprovada && sem palavras proibidas” falha por uma só parte falsa.

**12 (extra):** Por que `if (a && b)` com `a` falso pode não “executar” o que depende de `b`?

---

## Exercícios — Operador OU (`||`)

1. `(Cliente VIP = F) || (Compra > R$ 200 = V)`
2. `(Cliente VIP = F) || (Compra > R$ 200 = F)`
3. `(Erro 404 = V) || (Erro 500 = V)`
4. `(Frete grátis por valor = F) || (Frete grátis por promoção = F)`
5. “Pode ver se leitura **ou** admin”: leitura=V, admin=F
6. Notificar se estoque < 5 **ou** validade < 7 dias. Estoque=10, validade=3 dias. Notifica?
7. `(PIX = F) || (cartão = F) || (boleto = V)`
8. Traduza com `||`: aceita RG, CNH ou passaporte.
9. Em 4 combinações de A e B, em quantas `A || B` é F?
10. Banner se “novo **ou** campanha”: ambos V — o banner aparece (OU inclusivo)?

**11 (extra):** OU inclusivo vs “exatamente um dos dois”.

**12 (extra):** Por que testar só (A=V, B=F) não basta para `A || B`?

---

## Exercícios — Operador NÃO (`!`)

1. Se “conta ativa” = V, `!("conta ativa" é V)` → na prática, conta ativa?
2. Se “pagamento pendente” = F, negação é V ou F?
3. Reescreva: pode logar quando **não** bloqueado.
4. `!(a && b)` com a=V, b=F → V ou F?
5. `!(a || b)` com a=F, b=F → V ou F?
6. “Não enviar e-mail se opt-out”: opt-out=V. Envia?
7. Negue: “todos os obrigatórios preenchidos”.
8. Se `!(idade >= 18)` é V, a pessoa é menor de idade na regra?
9. Por que `!(condicao)` com parênteses é mais claro que colar `!` na frente de expressões longas?
10. Complete De Morgan: `!(A && B)` equivale a `(!A) ___ (!B)` (E ou OU?).

**11 (extra):** Reescreva um critério com “não” em linguagem natural sem usar “não” na condição principal.

**12 (extra):** Relacione negação com “caso de teste negativo”.

---

## Gabarito sugerido (respostas curtas)

### Comparação

1. F · 2. V · 3. V · 4. F · 5. V · 6. V · 7. `x >= 1 && x <= 10` · 8. Não; `page >= 1` falha para 0 · 9. `>` (estritamente maior) · 10. Coerente: 5 não é menor que 5; `5 <= 5` seria V.

11. Ex.: desconto “a partir de 50”: com 50 o cliente não recebe se código usou `> 50`. · 12. `nota >= 7 && nota <= 10`.

### Igualdade

1. F · 2. V (coerção) · 3. Evita surpresas de tipo; assert reflete valor e tipo reais · 4. F · 5. V · 6. `a !== b` · 7. Resposta não é exatamente 200 (útil para assert de erro) · 8. F · 9. V (`==` trata `null` e `undefined` como “iguais” nessa comparação) · 10. `===` detecta string vs número.

11. Ex.: `0 != false` é F, `0 !== false` é V. · 12. Conversão automática de tipos antes de comparar com `==`.

### E, OU, NÃO

(Mesmo gabarito da versão anterior do tema; conferir seção correspondente nos exercícios 1–10 de E/OU/NÃO.)

---

## Aplicar no seu projeto

- Marque em um critério de aceite: comparações (`>=`, etc.), igualdades (`===`), e lógicos (`&&`, `||`, `!`).
- Escreva **um** assert em Postman usando `===` e `!==` para status e um campo do JSON.
- Liste **três** valores limite para uma regra `>=` / `<=` da sprint.

---

## Checklist

- [ ] Entendi diferença entre `>=` / `>` e `<=` / `<` nos limites
- [ ] Sei explicar `==` vs `===` em uma frase
- [ ] Li as tabelas verdade de `&&`, `||`, `!`
- [ ] Sei por que parênteses ajudam com `!`
- [ ] Resolvi os exercícios ou levei dúvidas à mentoria
