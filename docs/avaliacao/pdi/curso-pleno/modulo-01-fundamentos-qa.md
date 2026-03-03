# Módulo 1: Fundamentos de QA

**Objetivo:** Ao final deste módulo, o aluno será capaz de explicar o ciclo de vida do teste, tipos de teste, severidade/prioridade de bugs e reportar bugs com análise de impacto.

**Duração estimada:** 4 horas

---

## Explicação

### 1.1 Ciclo de Vida do Teste

O ciclo de vida do teste descreve as fases pelas quais passam as atividades de teste em um projeto. São **6 fases**:

```
Planejamento → Análise → Design → Execução → Relatório → Fechamento
```

**Exemplo prático:** Em um projeto de cadastro de usuários:
- **Planejamento:** Definir que testaremos o fluxo de cadastro, login e edição; estimar 2 dias
- **Análise:** Identificar que precisamos testar validação de email, senha fraca, campos obrigatórios
- **Design:** Criar 15 casos de teste com pré-condições, passos e resultado esperado
- **Execução:** Rodar os testes, reportar 3 bugs encontrados
- **Relatório:** Compilar que 12/15 passaram, 3 bugs abertos
- **Fechamento:** Arquivar artefatos, documentar que a release foi aprovada com ressalvas

**Exemplo 2:** Em Agile, o ciclo se repete a cada sprint. Planejamento e análise acontecem no planning; design e execução durante a sprint; relatório e fechamento na retrospectiva.

### 1.2 Tipos de Teste

| Tipo | O que valida | Quando usar |
|------|--------------|-------------|
| **Funcional** | Requisitos e funcionalidades | Sempre, em toda feature |
| **Regressão** | Que nada quebrou com as mudanças | Antes de cada release |
| **Integração** | Comunicação entre sistemas/APIs | Após desenvolver integrações |
| **Smoke** | Build básico funciona | Após cada deploy em ambiente |
| **Exploratório** | Descobrir bugs inesperados | Sessões com charter definido |
| **UAT** | Aceitação do usuário/PO | Antes de produção |

**Exemplo:** Ao testar um novo endpoint de login: primeiro smoke (a API responde?), depois funcional (login válido/inválido), depois integração (o token funciona nas outras APIs?).

### 1.3 Severidade vs Prioridade

- **Severidade:** Impacto do bug no sistema (o quão grave é o defeito)
  - Crítica: sistema quebra, perda de dados
  - Alta: funcionalidade principal não funciona
  - Média: funcionalidade secundária afetada
  - Baixa: cosmético, workaround existe

- **Prioridade:** Urgência de correção (quando corrigir)
  - P1: corrigir imediatamente
  - P2: corrigir antes da release
  - P3: pode esperar próxima release

**Exemplo:** Bug de typo no rodapé = Severidade Baixa, Prioridade P3. Bug que impede login = Severidade Crítica, Prioridade P1.

### 1.4 Reporte de Bugs (com análise de impacto)

Um bom reporte inclui:
- **Título objetivo:** "Campo email aceita formato inválido"
- **Passos para reproduzir:** numerados e reproduzíveis
- **Resultado esperado vs obtido**
- **Evidências:** screenshot, log
- **Análise de impacto:** "Usuários podem cadastrar emails inválidos, causando falha em notificações"
- **Sugestão:** "Validar formato com regex no front e back"

---

## Exercícios

### Exercício 1: Mapear fases do ciclo

**Objetivo:** Identificar em qual fase do ciclo você está em uma situação real.

**Enunciado:** Na sua última semana de trabalho, liste 3 atividades que você fez e classifique em qual fase do ciclo de vida do teste cada uma se encaixa.

**Resposta esperada:** Exemplo: "Executei 20 casos de teste do fluxo X" → Execução. "Criei 5 novos casos de teste para a story Y" → Design.

### Exercício 2: Classificar severidade e prioridade

**Objetivo:** Praticar classificação de bugs.

**Enunciado:** Classifique severidade e prioridade para cada cenário:
- A) Botão "Salvar" não funciona em nenhum formulário
- B) Label "Nome" aparece como "Nme" (typo)
- C) API retorna 500 quando enviado JSON malformado

**Resposta esperada:** A) Crítica/P1. B) Baixa/P3. C) Média ou Alta/P2 (depende se há validação esperada).

### Exercício 3: Escrever um bug completo

**Objetivo:** Praticar reporte com análise de impacto.

**Enunciado:** Imagine que você encontrou um bug: o campo "Quantidade" aceita valor negativo e o sistema permite finalizar compra. Escreva o reporte completo seguindo as boas práticas de [boas-praticas-qa.md](../boas-praticas-qa.md).

**Resposta esperada:** Título objetivo, passos numerados, esperado vs obtido, severidade Alta (pode gerar pedidos inválidos), prioridade P1, sugestão de validação.

---

## Prova (Avaliação)

**Instruções:** Responda as questões. Mínimo 70% para aprovação.

### Questão 1 (Múltipla escolha)

Qual a ordem correta das fases do ciclo de vida do teste?

a) Execução → Design → Planejamento → Análise → Relatório → Fechamento  
b) Planejamento → Análise → Design → Execução → Relatório → Fechamento  
c) Análise → Design → Execução → Planejamento → Fechamento → Relatório  
d) Planejamento → Execução → Design → Análise → Relatório → Fechamento  

### Questão 2 (Múltipla escolha)

Teste de regressão tem como objetivo:

a) Testar apenas funcionalidades novas  
b) Garantir que mudanças não quebraram funcionalidades existentes  
c) Validar performance do sistema  
d) Descobrir bugs explorando sem script  

### Questão 3 (Múltipla escolha)

Severidade de um bug refere-se a:

a) Urgência de correção  
b) Impacto do defeito no sistema  
c) Complexidade para corrigir  
d) Quantidade de usuários afetados  

### Questão 4 (Dissertativa)

Explique a diferença entre severidade e prioridade. Dê um exemplo em que um bug tenha severidade alta mas prioridade baixa.

### Questão 5 (Dissertativa)

Liste 3 elementos que um reporte de bug deve conter para ser considerado completo e útil para o desenvolvedor.

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | b |
| 4 | Severidade = impacto no sistema; Prioridade = urgência de correção. Exemplo: bug em funcionalidade que poucos usam, mas quando ocorre quebra tudo → Severidade Alta, Prioridade Baixa (pode esperar) |
| 5 | Título objetivo; Passos para reproduzir; Resultado esperado vs obtido; Evidências (screenshot/log); Severidade e prioridade (ou: análise de impacto, ambiente, versão) |

---

**Próximo:** [Módulo 2 - Técnicas de Teste](modulo-02-tecnicas-teste.md)
