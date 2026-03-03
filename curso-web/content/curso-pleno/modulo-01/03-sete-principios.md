# Os sete princípios de testes

**CTFL 4.0 - FL-1.3**

---

## 1. Testes mostram a presença de defeitos

Testes podem **evidenciar** defeitos, mas **não provam** que o sistema está livre de falhas. Ausência de falhas não significa ausência de defeitos.

---

## 2. Testes exaustivos são impossíveis

Não é viável testar todas as combinações. Devemos **priorizar** com base em riscos e técnicas de teste.

**Exemplo:** Campo com 10 opções = 10^10 combinações. Escolhemos casos representativos.

---

## 3. Testes antecipados economizam tempo e dinheiro

Encontrar defeitos cedo (requisitos, design) é mais barato que em produção.

---

## 4. Os defeitos se agrupam

Defeitos tendem a se **concentrar** em certas áreas. Se encontrou muitos bugs em um módulo, provavelmente há mais.

---

## 5. Os testes se degradam (paradoxo do pesticida)

Testes repetidos deixam de encontrar novos defeitos. É preciso **revisar e atualizar** os testes.

---

## 6. O teste depende do contexto

Abordagem varia: e-commerce ≠ sistema bancário ≠ app de entretenimento.

---

## 7. Ausência de erros é uma ilusão

Software sem defeitos conhecidos pode não atender ao que o usuário precisa. Foco em **valor**, não só em bugs.
