# Operadores lógicos e de comparação (guia para iniciantes)

**Módulo 7 — Operadores lógicos e comparação**

Este tema assume **nenhum conhecimento prévio** de programação. A sequência segue o **ritmo de um curso introdutório de algoritmos e lógica**: primeiro lemos e montamos condições (“se maior que”, “se é igual a”, “se isso **e** aquilo”), depois ligamos isso a critérios de aceite e a JavaScript em Postman/Cypress. Os exercícios são **genéricos** (papel, pseudocódigo ou fluxograma), no nível de quem está começando — **sem** exigir API ou automação antes.

---

## 1. Ideias básicas (leia primeiro)

### O que é uma “condição”?

Uma **condição** é uma frase sobre o sistema que pode ser **verdadeira** ou **falsa**. Em código, isso vira um valor **booleano**:

- **Verdadeiro** → em JavaScript: `true` (muitas vezes abreviamos como **V** neste material)
- **Falso** → `false` (**F**)

**Exemplos em linguagem natural:** “A temperatura está acima de 30 °C”, “A idade é maior ou igual a 16”, “O número digitado é igual a zero”, “Chove **e** venta forte”. Cada uma pode ser respondida com sim ou não (V ou F).

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

### Fronteira (importante na lógica e depois em QA)

Quando uma regra diz “**no mínimo**” ou “**no máximo**”, os limites costumam entrar na conta (como nas aulas de algoritmo com “maior ou igual” e “menor ou igual”):

- mínimo 1 e máximo 100 (inclusive): `tamanho >= 1` e `tamanho <= 100`
- quem programa às vezes troca `>` por `>=` por engano; em testes de software, testamos os **valores no limite** (exatamente 1, exatamente 100)

### Comparação com “entre” no dia a dia

“Entre 18 e 65” quase sempre significa **os dois limites válidos**:

```text
idade >= 18 && idade <= 65
```

São **duas** comparações ligadas por **E** (`&&`), não um operador mágico “entre”.

---

## 3. Igualdade: `==`, `===`, `!=`, `!==`

### O que queremos dizer com “igual”?

Para **programas e testes** em JavaScript, quando você quiser comparar “de verdade” valor **e** tipo, o mais seguro é usar **`===`** e **`!==`**. Em materiais de algoritmo, às vezes aparece só “=” para igualdade; em JavaScript para quem está começando em automação, memorize: **`===` para “é igual a?”** nas suas condições.

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

Isso importa em **testes automatizados** porque um `==` pode dar “igual” mesmo com tipos diferentes (ex.: número 5 e texto `"5"`), e aí o teste não reflete o que o usuário vê.

**Regra prática:** quando for escrever scripts de teste (Postman, Cypress), prefira **`===`** e **`!==`**, salvo situação bem específica em que você queira aceitar conversão automática de tipo (raro no começo).

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

Use **V** ou **F**. Quando pedir “expressão”, use **pseudocódigo** no caderno, fluxograma ou a notação que você aprender em um material introdutório de algoritmo; use JavaScript se já estiver confortável.

1. A temperatura é 35 °C. A condição `temperatura > 30` é V ou F?
2. A altura da criança é 1,20 m. O brinquedo exige “altura **maior ou igual** a 1,20 m”. A criança pode ir? (Sim/Não; relacione com `>=` ou `>`.)
3. `15 < 15` é V ou F?
4. `15 <= 15` é V ou F?
5. João tirou 6,0 na prova. A regra é “nota **maior ou igual** a 7,0 para aprovar”. João foi aprovado? Com `nota = 6`, a condição `nota >= 7` é V ou F?
6. Um estacionamento cobra “até 2 horas inclusive”. Se `horas = 2`, a condição `horas <= 2` é V ou F?
7. Escreva em uma linha: “`n` está entre 1 e 10 **inclusive**” (duas comparações e um **E**).
8. “Desconto para compras **acima de** R$ 100,00”. Compra de exatamente R$ 100,00 tem desconto? Qual operador a regra costuma usar, `>` ou `>=`?
9. Compare: “idade **maior que** 18” vs “idade **maior ou igual a** 18” — quem pode entrar com exatamente 18 anos em cada caso?
10. `100 >= 99` é V ou F?

**11 (extra):** Invente uma situação do dia a dia (não precisa ser computador) em que “maior ou igual” seja mais justo que só “maior”.

**12 (extra):** Em uma piscina, a regra é “profundidade entre 1,20 m e 1,80 m **inclusive**”. Escreva as duas comparações com `altura` (use `>=` e `<=`).

---

## Exercícios — Igualdade (`==`, `===`, `!=`, `!==`)

1. Em JavaScript, `3 === 3` é V ou F?
2. `3 === "3"` (número três e texto três) é V ou F?
3. Em uma frase: por que `===` é mais “honesto” que `==` para comparar número e texto?
4. Se `senhaCorreta` é `"gato123"` e o usuário digitou `"Gato123"`, só pela diferença de maiúsculas, `senhaDigitada === senhaCorreta` é V ou F?
5. `10 !== 10` é V ou F?
6. Reescreva “**não** é verdade que `a` é igual a `b`” usando `!==` (uma expressão).
7. O contador de vidas no jogo é `0`. A condição `vidas === 0` é V ou F?
8. `null === undefined` em JavaScript é V ou F?
9. Explique com suas palavras: o que significa “coerção” quando falamos de `==` em JavaScript?
10. O código de barras lido **não** pode ser `"000000"`. Escreva a condição com `!==`.

**11 (extra):** Dê um exemplo em que `5 == "5"` seria V e `5 === "5"` seria F.

**12 (extra):** Por que, em teste automatizado, comparar resposta com `===` ajuda a achar erro de tipo (número vs string)?

---

## Exercícios — Operador E (`&&`)

Cada item é uma mini-história. Diga se a condição composta é **V** ou **F**.

1. “Vou à praia **se** faz sol **e** tenho protetor.” Faz sol = V, tenho protetor = F.
2. “Ligo o videogame **se** a lição de casa está feita **e** já são 18h ou mais.” Lição feita = V, hora atual = 17h.
3. “Entro no cinema meia-entrada **se** apresento documento de estudante **e** documento com foto.” Documento de estudante = V, documento com foto = V.
4. “Aprovação na escola: média ≥ 7 **e** faltas ≤ 10.” Média 8, faltas 12.
5. “Abrir cofre **se** duas pessoas digitam senha correta **e** o relógio está no horário permitido.” Senhas = V, horário permitido = F.
6. “Luz da sala acende **se** interruptor A ligado **e** B ligado **e** C **des**ligado.” A=V, B=V, C=V (C está ligado).
7. “Vou ao parque **se** **não** chove **e** é fim de semana.” Chove = F, fim de semana = V.
8. “Passei na etapa **se** acerto 40 questões **e** o tempo **não** acabou.” Acertos = 25, tempo acabou = F (ainda há tempo).
9. Escreva com `&&`: “Pode emprestar a bicicleta **se** tem capacete **e** idade ≥ 12.” (só a expressão com nomes de variáveis à sua escolha.)
10. Na tabela verdade de duas entradas A e B, quantas linhas têm `A && B` igual a V?

**11 (extra):** Dê um exemplo cotidiano em que **uma** condição falsa já derruba todo um **E** de várias partes.

**12 (extra):** Em `A && B`, se `A` é falso, por que em muitas linguagens `B` nem é avaliado? (uma frase: curto-circuito.)

---

## Exercícios — Operador OU (`||`)

1. “Vou de bicicleta **se** está seco **ou** tenho capa de chuva.” Está seco = F, tenho capa = V.
2. “Comprei ingresso em promoção **se** promoção ativa **ou** sou sócio.” Promoção = F, sou sócio = F.
3. “Alarme dispara se sensor da frente **ou** sensor de trás aciona.” Só frente = V, trás = F.
4. “Posso usar faixa exclusiva se sou médico **ou** levo paciente urgente.” Sou médico = F, paciente urgente = F.
5. “Ganho brinde se compro 3 unidades **ou** o cupom ‘PROMO’ está ativo.” 3 unidades = V, cupom = F.
6. “Passo na etapa se acerto 40 questões **ou** (tempo acaba **e** tenho pelo menos 30 acertos).” Parte A: “acertei 40” = F. Parte B: “tempo acabou e ≥30 acertos” = V.
7. `(temLeite = F) || (temSuco = F)` — na geladeira “tem leite **ou** tem suco” está satisfeita?
8. Traduza em uma linha: “Aceita-se dinheiro **ou** cartão **ou** PIX” (três condições ligadas por **OU**).
9. Para duas variáveis A e B, em quantas das quatro linhas da tabela verdade o **OU inclusivo** dá **F**?
10. “Liberar brinde se criança é aniversariante **ou** bilhete é VIP.” Os dois são V — o OU inclusivo libera?

**11 (extra):** Qual a diferença entre “A **ou** B” no sentido de cardápio (“vem sopa **ou** salada”) e o **OU lógico** da programação?

**12 (extra):** Por que, ao testar uma regra com **OU**, testar só “primeiro V, segundo F” pode não ser suficiente?

---

## Exercícios — Operador NÃO (`!`)

1. Se “luz acesa” = V, a frase “a luz **não** está acesa” é verdadeira no mundo real? (V ou F)
2. Se “porta trancada” = F, a frase “a porta **não** está trancada” é V ou F?
3. Escreva usando `!` e a variável `chove`: “vou pendurar roupa quando **não** chove”.
4. `!(V && F)` — resultado V ou F? (Use a tabela de **E** e depois **não**.)
5. `!(F || F)` — resultado?
6. “**Não** posso dirigir se bebi álcool.” Bebi álcool = V. Posso dirigir? (Sim/Não.)
7. Negue em linguagem natural: “Todos os ingressos foram vendidos.” (Dica: “existe algum ingresso…”)
8. Se `!(idade >= 16)` é V, a pessoa tem menos de 16 anos?
9. Por que em expressões longas `!( ... )` com parênteses ajuda mais que colar `!` só no início sem agrupar?
10. Complete (De Morgan): `!(A && B)` tem o mesmo resultado que `( !A ) ___ ( !B )` — **E** ou **OU**?

**11 (extra):** Dê um exemplo de “duplo negativo” no dia a dia que confunde.

**12 (extra):** Em testes, “caso negativo” muitas vezes força uma condição a ser **F**. Relacione com o operador `!` em uma frase.

---

## Gabarito sugerido (respostas curtas)

### Comparação

1. V · 2. Sim; `altura >= 1.20` (inclusive) · 3. F · 4. V · 5. Não; F · 6. V · 7. `n >= 1 && n <= 10` · 8. Não; “acima de 100” costuma ser `> 100` (se fosse “a partir de 100”, seria `>=`) · 9. “Maior que 18” não inclui 18; “maior ou igual a 18” inclui 18 · 10. V.

11. Aberto. · 12. `altura >= 1.20 && altura <= 1.80`.

### Igualdade

1. V · 2. F · 3. `===` não converte tipos; `==` pode converter e esconder diferença número/texto · 4. F · 5. F · 6. `a !== b` · 7. V · 8. F · 9. Conversão automática de tipos antes de comparar com `==` · 10. Ex.: `codigo !== "000000"`.

11. Como no enunciado (`5 == "5"` V, `5 === "5"` F). · 12. `===` exige mesmo tipo; número vs string vira F.

### E (`&&`)

1. F · 2. F · 3. V · 4. F · 5. F · 6. F (C deveria estar desligado) · 7. V (`não chove` com chove=F é V; fim de semana V) · 8. F (não acertou 40) · 9. Ex.: `temCapacete && idade >= 12` · 10. Uma linha (V,V).

11. Ex.: falta um documento no **e** da fila. · 12. Curto-circuito: o resultado já é falso.

### OU (`||`)

1. V · 2. F · 3. V · 4. F · 5. V · 6. V · 7. F (nenhuma bebida) · 8. Aberto (três condições com OU). · 9. Uma linha (F,F) · 10. Sim.

11. Aberto (cardápio às vezes é exclusivo; em código o OU é inclusivo salvo regra explícita). · 12. Porque combinações (V,V), (F,V) etc. podem se comportar diferente.

### NÃO (`!`)

1. F (luz acesa, então “não acesa” é falso). · 2. V · 3. `!chove` (ou equivalente) · 4. V · 5. V · 6. Não · 7. “Existe ingresso não vendido” / “Pelo menos um não vendido”. · 8. Sim. · 9. Deixa explícito o que está sendo negado. · 10. **OU**.

11–12. Abertos.

---

## Aplicar no seu projeto

- Opcional: refaça os mesmos enunciados em **fluxograma** ou em **pseudocódigo** numa ferramenta de algoritmo da sua escolha antes de escrever em JavaScript.
- Quando ler um critério de aceite, sublinhe os **E**, **OU**, **não** e os **maior / menor / igual**.
- Quando chegar em Postman/Cypress, use **`===`** e **`!==`** nas primeiras asserções que compararem números e textos.

---

## Checklist

- [ ] Consigo responder V/F em histórias do dia a dia com `>`, `<`, `>=`, `<=`
- [ ] Sei explicar em uma frase por que `===` é mais seguro que `==` no começo
- [ ] Li as tabelas verdade de `&&`, `||`, `!`
- [ ] Sei por que parênteses ajudam com `!`
- [ ] Fiz os exercícios no papel ou em pseudocódigo (e anotei dúvidas)
