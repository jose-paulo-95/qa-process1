# Boas Práticas QA - Guia Prático

Documento para apoiar os desafios declarados: **"Ser mais prático"**, **"Ter boas práticas"** e **"Técnicas de QA"**.

---

## 1. Ser Mais Prático

### Regra 60/40
- **60% prática** (fazer, codar, testar) vs **40% teoria** (ler, assistir)
- Após cada conceito aprendido: **aplicar imediatamente** em um exemplo real
- Exemplo: viu variáveis no Postman → criar 3 requests que usam variáveis no mesmo dia

### Checklist de Aplicação
- [ ] Ao terminar um curso/vídeo: fazer 1 exercício antes de passar para o próximo
- [ ] Ao aprender um comando: usar em 2 cenários diferentes
- [ ] Semanalmente: dedicar 1 bloco só para "prática livre" (sem material, só fazer)

### Aplicar no Projeto Real
- O que aprendi no ServeRest → como usaria nas APIs do meu projeto (TruMe, DeepClaim)?
- Listar 2-3 endpoints do projeto atual e criar requests equivalentes no Postman
- Pedir na mentoria: "Como conectar isso ao que testo no dia a dia?"

---

## 2. Boas Práticas por Área

### 2.1 Scripts Postman (Tests)
| Boas práticas | Evitar |
|---------------|--------|
| Validar status code em toda request | Só verificar visualmente |
| Validar estrutura da resposta (pm.expect(json).to.have.property('campo')) | Assumir que veio correto |
| Usar variáveis para dados dinâmicos | Valores fixos no body |
| Nomear requests de forma descritiva | "Request 1", "Teste" |
| Organizar por pasta (Login, Usuários, Produtos) | Tudo na raiz da collection |

### 2.2 Criação de Casos de Teste
| Boas práticas | Evitar |
|---------------|--------|
| Pré-condições, passos numerados, resultado esperado | Passos vagos |
| Incluir cenários negativos e de limite | Só cenário "feliz" |
| Um caso = um cenário testável | Casos gigantes com vários fluxos |
| Dados de teste explícitos | "Usar dados válidos" |

### 2.3 Reporte de Bugs
| Boas práticas | Evitar |
|---------------|--------|
| Título objetivo (ex: "Campo X não valida email inválido") | "Bug no cadastro" |
| Passos para reproduzir numerados | Parágrafo longo |
| Screenshot ou log anexado | Só descrição |
| Severidade e prioridade justificadas | Deixar em branco |

### 2.4 Código de Automação (Cypress)
| Boas práticas | Evitar |
|---------------|--------|
| Seletores estáveis (data-cy, id) | Seletores frágeis (classe CSS, texto) |
| Um describe = um fluxo; um it = um cenário | Vários it no mesmo describe sem critério |
| Fixtures para dados; não hardcode | Dados no meio do spec |
| Nomes descritivos (it('deve exibir erro ao login inválido')) | it('teste 1') |

---

## 3. Técnicas de QA que Vale Aprender

### Técnicas de Design de Testes
| Técnica | O que é | Quando usar |
|---------|---------|-------------|
| **Particionamento de equivalência** | Dividir entradas em classes (válidas/inválidas) e testar 1 de cada | Campos de formulário, APIs |
| **Análise de valor limite** | Testar nos limites (0, -1, max+1) | Campos numéricos, limites de caracteres |
| **Casos positivos e negativos** | Cenário que deve passar + cenário que deve falhar | Validações, autenticação |
| **Estado e transição** | Testar mudanças de estado (novo → em progresso → concluído) | Workflows, fluxos |

### Técnicas Exploratórias
| Técnica | O que é |
|---------|---------|
| **Charter** | Objetivo da sessão em 1 frase (ex: "Explorar fluxo de checkout") |
| **Time-boxing** | Sessão de 90 min com foco definido |
| **Anotações** | Registrar bugs e dúvidas durante a exploração |

### Aplicar no Dia a Dia
- Na próxima story: escolher 1 técnica e aplicar (ex: "vou usar valor limite no campo quantidade")
- Na mentoria: pedir exemplos de como o mentor usa essas técnicas

---

## 4. Comunicação Clara (menos redundância)

### Antes de escrever/falar
- Qual é a **pergunta** ou **ação** que quero que o outro faça?
- O que é **essencial** vs o que é contexto extra?

### Estrutura objetiva
- **Bug:** "O que aconteceu" + "O que era esperado" + "Passos para reproduzir"
- **Daily:** "O que fiz" + "O que farei" + "Bloqueio (se houver)"
- **Pergunta técnica:** "Contexto em 1 frase" + "Dúvida específica"

### Exemplo
- Evitar: "Então eu estava testando o cadastro e quando coloquei um email que não era email de verdade o sistema não mostrou erro e deixou cadastrar e acho que deveria validar."
- Melhor: "Campo email aceita valor inválido (ex: 'abc') sem exibir erro. Esperado: validação de formato."

---

## 5. Validação de Requisitos

### Checklist ao receber uma story
- [ ] Requisitos estão claros? (o quê, quando, como)
- [ ] Há critérios de aceitação?
- [ ] Há ambiguidade? (anotar e perguntar no planning)
- [ ] Consigo pensar em edge cases? (vazio, limite, duplicado, inválido)

### Pensamento crítico
- "E se o usuário fizer X?"
- "O que acontece quando o campo está vazio?"
- "Existe cenário em que isso quebra?"

---

## Referências

- [Templates de bug e casos de teste](../../templates/)
- [Processo de qualidade](../../processo-qualidade.md)
- [Glossário QA](glossario-qa.md)
