# SQL para QA

---

## Para que o QA usa SQL

- **Validar dados** após executar testes (o registro foi criado?)
- **Preparar massa de dados** (inserir usuários de teste)
- **Limpar dados** entre execuções (reset de ambiente)
- **Investigar bugs** (consultar o que está no banco)

---

## SELECT – consultar dados

```sql
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE ativo = true;
SELECT * FROM pedidos WHERE data_criacao >= '2024-01-01';
```

- `*` – todas as colunas
- `WHERE` – filtrar linhas
- Operadores: `=`, `!=`, `>`, `<`, `>=`, `<=`, `LIKE`, `IN`

---

## WHERE – filtros

```sql
SELECT * FROM usuarios WHERE email = 'teste@email.com';
SELECT * FROM produtos WHERE preco > 100 AND estoque > 0;
SELECT * FROM usuarios WHERE nome LIKE 'João%';
SELECT * FROM pedidos WHERE status IN ('Pendente', 'Em processamento');
```

---

## JOIN – relacionar tabelas

```sql
SELECT p.id, p.valor, u.nome
FROM pedidos p
JOIN usuarios u ON p.usuario_id = u.id
WHERE p.status = 'Pago';
```

- `JOIN` (ou `INNER JOIN`): só retorna linhas que têm correspondência em ambas as tabelas
- `LEFT JOIN`: retorna todas da esquerda, mesmo sem correspondência

---

## INSERT – preparar massa de dados

```sql
INSERT INTO usuarios (nome, email, ativo) VALUES ('Teste QA', 'teste@email.com', true);
```

Use para criar dados de teste antes de rodar cenários.

---

## UPDATE – alterar dados

```sql
UPDATE usuarios SET ativo = false WHERE email = 'teste@email.com';
UPDATE pedidos SET status = 'Cancelado' WHERE id = 123;
```

**Cuidado:** Sempre use `WHERE` em UPDATE para não alterar todas as linhas.

---

## DELETE – remover dados

```sql
DELETE FROM usuarios WHERE email = 'teste@email.com';
DELETE FROM pedidos WHERE status = 'Cancelado' AND data_criacao < '2024-01-01';
```

**Cuidado:** Sempre use `WHERE` em DELETE. `DELETE FROM tabela` sem WHERE apaga tudo.

---

## Exercício: Validar dados após teste

**Objetivo:** Usar SQL para validar resultado de teste.

**Recursos:** Aplicação com banco de dados (projeto real, SQLite local ou ambiente de teste)

**Enunciado:** Imagine que você executou um cadastro de usuário via API ou interface. Escreva a query SELECT que você usaria para confirmar que o usuário foi criado no banco. Quais campos validaria?

**Resposta esperada:** `SELECT * FROM usuarios WHERE email = 'email_usado@test.com';` Validar: nome, email, _id (ou id), data de criação.

---

## Boas práticas para QA

- Use transações ou backups antes de DELETE em ambiente compartilhado
- Prefira ambientes de teste isolados
- Documente queries que você usa com frequência
- Valide dados após testes automatizados (SELECT para conferir)
