# Módulo 2: Técnicas de Teste

**Objetivo:** Ao final deste módulo, o aluno será capaz de aplicar particionamento de equivalência, análise de valor limite, casos positivos/negativos e pensar em edge cases.

**Duração estimada:** 3 horas

---

## Explicação

### 2.1 Particionamento de Equivalência

Divide as entradas em **classes de equivalência**: grupos em que se espera que o sistema se comporte igual. Testa **um representante de cada classe** em vez de todos os valores.

**Exemplo:** Campo "Idade" aceita 18 a 120 anos.
- Classe válida: [18, 120] → testar 1 valor, ex: 25
- Classe inválida (abaixo): < 18 → testar 17
- Classe inválida (acima): > 120 → testar 121
- Classe inválida (não numérico): "abc" → testar string

**Exemplo 2:** API de login.
- Classe 1: credenciais válidas → 200
- Classe 2: senha errada → 401
- Classe 3: usuário inexistente → 404
- Classe 4: campos vazios → 400

### 2.2 Análise de Valor Limite

Testa os **valores nos limites** das classes: mínimo, mínimo-1, máximo, máximo+1.

**Exemplo:** Campo aceita 1 a 100 caracteres.
- Valores a testar: 0, 1, 2, 99, 100, 101

**Exemplo 2:** Quantidade de itens no carrinho (máx 99).
- Testar: 0, 1, 98, 99, 100

### 2.3 Casos Positivos e Negativos

- **Positivo:** entrada válida, sistema deve aceitar e funcionar
- **Negativo:** entrada inválida, sistema deve rejeitar ou exibir erro adequado

**Exemplo:** Cadastro de email.
- Positivo: "usuario@email.com" → cadastro OK
- Negativo: "abc" (sem @), "" (vazio), "a@b" (domínio inválido) → mensagem de erro

### 2.4 Pensamento Crítico e Edge Cases

Perguntas para descobrir edge cases:
- "E se o campo estiver vazio?"
- "E se for o valor máximo/minimo?"
- "E se for duplicado?"
- "E se o usuário fizer a ação duas vezes seguidas?"
- "E se a sessão expirar no meio do fluxo?"

---

## Exercícios

### Exercício 1: Particionamento em API

**Objetivo:** Aplicar particionamento de equivalência em endpoint de usuários.

**Enunciado:** O endpoint `GET /usuarios/{{id}}` retorna usuário por ID. Quais classes de equivalência você identificaria e qual valor testaria em cada?

**Resposta esperada:** ID válido (ex: "abc123"); ID inexistente (404); ID inválido (ex: "abc" se esperado formato específico); ID vazio (400). Testar 1 valor de cada classe.

### Exercício 2: Valor limite

**Objetivo:** Definir casos de teste por valor limite.

**Enunciado:** Campo "Nome" aceita 3 a 50 caracteres. Liste os valores de teste que você usaria.

**Resposta esperada:** 0, 2, 3, 4, 49, 50, 51 caracteres (ou equivalente: mínimo-1, mínimo, mínimo+1, máximo-1, máximo, máximo+1).

### Exercício 3: Casos positivos e negativos

**Objetivo:** Criar matriz de cenários para login.

**Enunciado:** Para um endpoint POST /login com email e password, liste 5 cenários (positivos e negativos) que você testaria.

**Resposta esperada:** (1) Email e senha válidos → 200; (2) Email válido, senha errada → 401; (3) Email inexistente → 401 ou 404; (4) Email vazio → 400; (5) Senha vazia → 400.

---

## Prova (Avaliação)

### Questão 1 (Múltipla escolha)

No particionamento de equivalência, o objetivo é:

a) Testar todos os valores possíveis  
b) Reduzir testes testando um representante de cada classe  
c) Testar apenas valores válidos  
d) Testar apenas nos limites  

### Questão 2 (Múltipla escolha)

Para um campo que aceita valores de 10 a 100, a análise de valor limite inclui testar:

a) Apenas 10 e 100  
b) 9, 10, 11, 99, 100, 101  
c) Apenas valores dentro do intervalo  
d) Valores aleatórios  

### Questão 3 (Dissertativa)

Explique a diferença entre caso positivo e caso negativo. Dê um exemplo para um campo de CPF.

### Questão 4 (Prática)

Para um endpoint POST /produtos que recebe nome (obrigatório), preço (número > 0) e quantidade (inteiro >= 0), liste as classes de equivalência para cada campo.

### Questão 5 (Dissertativa)

O que são edge cases? Dê 2 exemplos de edge cases para um fluxo de "adicionar item ao carrinho".

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | Positivo: entrada válida, sistema aceita. Negativo: entrada inválida, sistema rejeita. Ex CPF: positivo = "123.456.789-00" válido; negativo = "111.111.111-11" (inválido), "" (vazio) |
| 4 | Nome: válido, vazio, null. Preço: >0, 0, negativo, não numérico. Quantidade: >=0, negativo, decimal, não numérico |
| 5 | Cenários extremos ou inesperados. Ex: adicionar 0 itens; adicionar quantidade máxima; adicionar mesmo item 2x; carrinho cheio; sessão expirada no meio |

---

**Próximo:** [Módulo 3 - Testes de API (Postman)](modulo-03-postman.md)
