# Módulo 6: Ferramentas e Processo

**Objetivo:** Ao final deste módulo, o aluno será capaz de usar Git (branch, merge, conflitos), Jira (JQL, dashboards), analisar logs para debugging, aplicar métricas e planejamento de testes, comunicar status com stakeholders (jargões, relatórios) e usar SQL básico para validação de dados.

**Duração estimada:** ~6 horas

---

## Explicação

### 6.1 Git Prático

**Cheat sheet – comandos do dia a dia:**

| Comando | Uso |
|---------|-----|
| `git status` | Ver estado dos arquivos |
| `git branch` | Listar branches |
| `git checkout -b nome` | Criar e mudar para branch |
| `git add .` | Adicionar alterações |
| `git commit -m "msg"` | Registrar commit |
| `git pull origin main` | Atualizar da main |
| `git push origin branch` | Enviar branch ao remoto |
| `git merge main` | Mesclar main na branch atual |
| `git log --oneline` | Ver histórico resumido |

**Conflitos:** Ao fazer merge, abra os arquivos marcados, resolva manualmente (remova marcadores <<<<, ====, >>>>), depois `git add` e `git commit`.

**Exercício de fixação:** Crie um arquivo pessoal com os 5 comandos que você mais usa e pratique 3x nesta semana.

### 6.2 Jira Avançado

- **JQL (Jira Query Language):** Filtros avançados
  - `project = QA AND status = "In Progress"`
  - `assignee = currentUser() AND sprint in openSprints()`
  - `issuetype = Bug AND created >= -7d`

- **Dashboards:** Painéis com filtros salvos, gráficos de burndown, bugs por status

### 6.3 Logs e Debugging

- **Stack trace:** Mostra onde o erro ocorreu (arquivo, linha)
- **DevTools Network:** Ver requests/responses, status, payload
- **Console do navegador:** Erros JavaScript
- **Logs da aplicação:** Arquivos de log do servidor (ex: application.log)

**Fluxo:** Reproduzir bug → abrir DevTools → ver Network/Console → identificar request ou erro → anexar no bug report.

### 6.4 Métricas e KPIs

Conceitos (ver [kpi-definitions.md](../../../metricas/kpi-definitions.md)):
- **Taxa de defeitos:** bugs / testes executados
- **Taxa de escape:** bugs em produção / total de bugs
- **Pass/Fail:** % de testes passando

### 6.5 Planejamento de Testes

- **Test Plan:** Escopo, abordagem, recursos, cronograma
- **Estimativa:** Baseada em complexidade, histórico, pontos da story
- **Critérios de conclusão:** Quando considerar os testes concluídos

---

## Exercícios

### Exercício 1: Git - Branch e merge

**Objetivo:** Praticar fluxo de branch.

**Recursos:** Git, repositório local ou GitHub

**Enunciado:** Em um repositório, crie uma branch `exercicio/meu-nome`, faça uma alteração em um arquivo, commit, e faça merge na main (ou abra PR se em projeto real).

**Resposta esperada:** git checkout -b exercicio/meu-nome; editar arquivo; git add .; git commit -m "..."; git checkout main; git merge exercicio/meu-nome.

### Exercício 2: JQL

**Objetivo:** Escrever queries JQL.

**Recursos:** Jira

**Enunciado:** Escreva uma JQL que retorne: (1) todos os bugs abertos no projeto atual; (2) todas as issues atribuídas a você que estão em progresso.

**Resposta esperada:** (1) project = X AND issuetype = Bug AND status != Done. (2) assignee = currentUser() AND status = "In Progress".

### Exercício 3: Documentar fluxo de debug

**Objetivo:** Praticar análise de logs.

**Recursos:** Navegador (DevTools), aplicação web ou ServeRest

**Enunciado:** Reproduza um bug (ou simule) em uma aplicação. Use DevTools Network e Console. Documente em 5 passos: como você identificou a causa do problema.

**Resposta esperada:** Passos como: 1) Reproduzi o bug; 2) Abri DevTools; 3) Verifiquei Network e identifiquei request com status 500; 4) Vi o body da resposta com mensagem de erro; 5) Correlacionei com o código/backend.

### Exercício 4: Explicar métricas

**Objetivo:** Comunicar KPIs.

**Recursos:** [kpi-definitions.md](../../../metricas/kpi-definitions.md)

**Enunciado:** Em 2-3 frases, explique para um gestor: o que é taxa de escape e por que é importante.

**Resposta esperada:** Taxa de escape é a % de bugs que chegaram em produção. Quanto menor, melhor a qualidade do processo de teste. Importante para priorizar melhorias.

---

## Prova (Avaliação)

### Questão 1 (Múltipla escolha)

Para criar uma nova branch e mudar para ela, o comando é:

a) git new branch x  
b) git checkout -b x  
c) git branch create x  
d) git create x  

### Questão 2 (Múltipla escolha)

JQL é usado no Jira para:

a) Criar projetos  
b) Escrever filtros e buscas avançadas  
c) Atribuir issues  
d) Gerar relatórios em PDF  

### Questão 3 (Múltipla escolha)

A aba Network do DevTools mostra:

a) Erros de JavaScript  
b) Requisições HTTP e respostas  
c) Estrutura do HTML  
d) Performance da CPU  

### Questão 4 (Dissertativa)

O que é taxa de escape? Como ela é calculada?

### Questão 5 (Prática)

Você encontrou um bug: ao clicar em "Salvar", a página mostra erro 500. Descreva o fluxo de debugging que você seguiria usando DevTools.

### Questão 6 (Dissertativa)

Quais 3 métricas de QA você mencionaria em uma reunião de status para demonstrar a saúde da qualidade do projeto?

---

## Gabarito

| Questão | Resposta |
|---------|----------|
| 1 | b |
| 2 | b |
| 3 | b |
| 4 | Taxa de escape = bugs em produção / total de bugs * 100. Mede quantos defeitos passaram pelos testes. |
| 5 | Abrir DevTools → Network → Reproduzir bug → Identificar request que retornou 500 → Ver Response para mensagem de erro → Ver Payload do request → Correlacionar com backend |
| 6 | Taxa de defeitos, taxa de escape, pass/fail dos testes (ou: cobertura de testes, MTTR, bugs por story point) |

---

## Aplicar no seu projeto

- Qual JQL você usaria para filtrar bugs do seu projeto? Crie e salve no Jira
- Em uma reunião de status, qual métrica você apresentaria? (taxa de escape, pass/fail, etc.)
- Reproduza um bug real e documente o fluxo de debug com DevTools (5 passos)

## Sugestão de pauta para mentoria

- "Como usamos logs e debugging no nosso ambiente?"
- "Quais JQLs são úteis no dia a dia do projeto?"
- "Posso mostrar meu fluxo de debug de um bug para feedback?"

## Checklist de aplicação

- [ ] Fiz todos os exercícios
- [ ] Usei JQL para filtrar issues do meu projeto
- [ ] Tenho 1 dúvida para levar à mentoria
- [ ] Sei explicar em 1 frase o que aprendi

---

## Conclusão do Curso

Parabéns por concluir o curso! Próximos passos:
- Reavaliar competências usando a matriz de [avaliacao-pleno.md](../../../avaliacao-pleno.md)
- Participar de code reviews de automação
- Aplicar o aprendizado nos projetos TruMe e DeepClaim
- Solicitar mentoria para consolidar (ver [template-mentoria.md](../template-mentoria.md))
