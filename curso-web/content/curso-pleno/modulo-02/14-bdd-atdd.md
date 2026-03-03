# BDD e ATDD

**CTFL 4.0 - Capítulo 4 (Abordagens colaborativas)**

---

## ATDD (Acceptance Test-Driven Development)

Escreve **critérios de aceitação** antes do desenvolvimento. A equipe define "o que" deve funcionar; o dev implementa para passar nos testes.

---

## BDD (Behavior-Driven Development)

Formaliza critérios em linguagem **natural** e **estruturada**:

```gherkin
Dado que o usuário está logado
Quando acessa a lista de produtos
Então deve ver os produtos ordenados por preço
```

Ferramentas: Cucumber, SpecFlow, Behave.

---

## Benefícios

- Requisitos mais claros
- Menos ambiguidade
- Testes como documentação viva
- Colaboração entre negócio, dev e QA

---

## Papel do QA

- Participar da definição dos cenários
- Garantir que critérios sejam testáveis
- Automatizar cenários BDD quando aplicável

---

## Exercício: Cenário Gherkin para API

**Objetivo:** Escrever cenário BDD para endpoint.

**Recursos:** ServeRest (https://serverest.dev), documentação da API

**Enunciado:** Para o endpoint POST /login da ServeRest, escreva um cenário Gherkin (Dado/Quando/Então) cobrindo login com sucesso e outro para credenciais inválidas.

**Resposta esperada:**
```gherkin
Cenário: Login com credenciais válidas
  Dado que tenho um usuário cadastrado
  Quando envio POST /login com email e senha corretos
  Então recebo status 200 e um token de autorização

Cenário: Login com senha incorreta
  Dado que tenho um usuário cadastrado
  Quando envio POST /login com senha incorreta
  Então recebo status 401
```
