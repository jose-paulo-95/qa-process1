# Particionamento de equivalência

---

## Conceito

Divide as entradas em **classes de equivalência**: grupos em que o sistema deve se comportar igual. Testa **um representante de cada classe**.

---

## Exemplo

Campo "Idade" aceita 18 a 120 anos:

- Classe válida: [18, 120] → testar 25
- Classe inválida (&lt; 18): testar 17
- Classe inválida (&gt; 120): testar 121
- Classe inválida (não numérico): testar "abc"

---

## Em APIs

Para `GET /usuarios/{{id}}`:
- ID válido → 200
- ID inexistente → 404
- ID inválido (formato) → 400
