# Entrada de Demandas - Versão Inicial (simplificada)

## 1. Princípio

**Menos burocracia, mais ação.** A demanda precisa ter apenas o essencial para que alguém consiga trabalhar.

---

## 2. Campos Obrigatórios (Apenas 3)

| Campo | O que colocar |
|-------|---------------|
| **Título** | O que precisa ser feito (ex: "Login com email e senha") |
| **Descrição** | Contexto em 2-3 frases. O que, por que e para quem |
| **Critérios de Aceite** | 3-5 itens em formato checkbox. Como saber que está pronto |

---

## 3. Exemplo Completo

### Título
```
Login com email e senha
```

### Descrição
```
Permitir que o usuário faça login no sistema usando email e senha. 
Necessário para acessar a área logada do produto.
```

### Critérios de Aceite
```
- [ ] Usuário consegue entrar com email e senha válidos
- [ ] Mensagem de erro para credenciais inválidas
- [ ] Após login, redireciona para o dashboard
- [ ] Sessão mantida por 24h
```

**Pronto.** Com isso já dá para colocar no Kanban e começar.

---

## 4. O que NÃO é obrigatório (versão inicial)

- ❌ Story points / estimativa formal
- ❌ Epic link
- ❌ Requisitos técnicos detalhados
- ❌ Design/UX aprovado (pode ir evoluindo)
- ❌ Documentação de ambientes
- ❌ Definition of Ready formal
- ❌ Campos de prioridade complexos

Se precisar de algo disso, adicione **apenas** o que for necessário. Sem preencher formulário gigante.

---

## 5. Priorização

**Simples**: O que está mais em cima na coluna "A Fazer" tem prioridade.  
Quem prioriza: Product Owner, coordenador ou quem cria as demandas.  
Basta ordenar a lista. Sem campo de prioridade se não precisar.

---

## 6. Onde registrar

- **Jira**: Criar issue tipo Story com título, descrição e critérios de aceite
- **Trello/Notion**: Card com os 3 campos
- **Planilha**: 3 colunas (Título, Descrição, Critérios)

---

## 7. Template Rápido

Use o [Template de Demanda Simplificado](../../templates/user-story-template-inicial.md) quando quiser um checklist mínimo.

---

## 8. Evolução

Quando a equipe precisar de mais rastreabilidade (dependências, estimativas, design), use o [Template completo de User Story](../../templates/user-story-template.md) da versão final.

---

**Última atualização**: 2026-02-11  
**Versão**: 1.0 - Inicial
