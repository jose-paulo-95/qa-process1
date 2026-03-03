# Especificação - Avaliação QA Junior para Google Forms

Este documento descreve a estrutura completa do formulário de avaliação QA Junior para ser criado no Google Forms. Use como guia ao montar o formulário manualmente em [forms.google.com](https://forms.google.com).

---

## Visão Geral

**Estratégia recomendada**: Criar **2 formulários** separados para melhor fluxo e controle de acesso:

| Formulário | Quem preenche | Momento |
|------------|---------------|---------|
| **Form 1 - Autoavaliação** | QA avaliado | Antes da reunião de avaliação |
| **Form 2 - Avaliação do Gestor** | Avaliador/Líder | Durante e após a reunião |

**Alternativa**: Um único formulário com todas as seções (QA preenche até "Auto-Reflexão", avaliador continua). Use a alternativa se preferir um único link.

---

## Formulário 1: Autoavaliação do QA Junior

### Configurações gerais
- **Título**: Avaliação QA Junior - Autoavaliação
- **Descrição**: Preencha este formulário antes da sua reunião de avaliação. Suas respostas ajudarão a personalizar o Plano de Desenvolvimento Individual (PDI).
- **Coletar endereços de e-mail**: Opcional
- **Limitar a 1 resposta**: Sim (por pessoa)

---

### Seção 1: Perfil e Contexto

| # | Tipo | Texto da pergunta | Opções/Config |
|---|------|------------------|---------------|
| 1 | Resposta curta | Nome completo | Obrigatório |
| 2 | Data | Data desta autoavaliação | Obrigatório |
| 3 | Lista suspensa | Tempo de experiência em QA | 0-6 meses / 6 meses - 1 ano / 1-2 anos |
| 4 | Parágrafo | Projetos ou áreas em que você atuou (breve descrição) | Obrigatório |
| 5 | Resposta curta | Nome do seu líder/avaliador | Obrigatório |

---

### Seção 2: Auto-Reflexão

**Bloco de descrição** (antes das perguntas):
```
As perguntas abaixo ajudam a entender suas metas e preferências. 
Não há resposta certa ou errada - seja sincero para que o PDI seja personalizado.
```

| # | Tipo | Texto da pergunta | Opções/Config |
|---|------|------------------|---------------|
| 6 | Parágrafo | Quais são suas metas de carreira para os próximos 12 meses? O que você quer alcançar? | Obrigatório |
| 7 | Caixas de seleção | Quais áreas de QA mais te interessam? (selecione até 3) | Automação / Testes de API / Testes manuais / Performance / Segurança / Mobile / Acessibilidade / Outro (especificar) |
| 8 | Parágrafo | Quais são seus principais desafios atuais no dia a dia? O que mais te dificulta? | Obrigatório |
| 9 | Caixas de seleção | Como você prefere aprender? (selecione todas que se aplicam) | Curso online / Mentoria 1:1 / Prática hands-on / Leitura / Pair programming / Workshops |
| 10 | Parágrafo | O que você gostaria de desenvolver primeiro? Priorize até 3 itens. | Obrigatório |

---

### Seção 3: Matriz de Competências - Autoavaliação

**Bloco de descrição**:
```
Avalie seu próprio nível em cada competência usando a escala:
1 = Não conhece | 2 = Conheço o conceito | 3 = Conheço parcialmente | 4 = Utilizo com autonomia | 5 = Domino
```

**Nota**: O Google Forms permite "Multiple choice grid" com até 10 colunas. Use escala 1-5 nas colunas. Para muitas linhas, divida em subseções por bloco de competências.

#### 3.1 Fundamentos de QA

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Ciclo de vida de software, Tipos de teste, Criação de casos de teste, Severidade/Prioridade, Reporte de bugs. Colunas: 1, 2, 3, 4, 5. Limitar 1 por coluna: Não |

#### 3.2 Testes Manuais

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Execução de testes, Testes exploratórios, Validação de requisitos, Testes de regressão. Colunas: 1, 2, 3, 4, 5 |

#### 3.3 Automação - Cypress (Básico)

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Instalação e setup, Comandos básicos (cy.get, cy.click...), Seletores, Assertions, Fixtures, Custom Commands, Page Object Model, Interceptação, CI/CD, Debugging. Colunas: 1, 2, 3, 4, 5 |

#### 3.4 Automação - Selenium

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Setup e configuração, WebDriver, Page Object Model, Waits e sincronização. Colunas: 1, 2, 3, 4, 5 |

#### 3.5 Testes de API - Postman

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Criação de requests, Collections, Variáveis, Scripts Pre/Test, Testes automatizados, Newman, Documentação, Mock servers. Colunas: 1, 2, 3, 4, 5 |

#### 3.6 Testes de API - Swagger

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Leitura de documentação, Validação de contratos, Testes baseados em Swagger, OpenAPI specs. Colunas: 1, 2, 3, 4, 5 |

#### 3.7 Ferramentas e Tecnologias

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Jira, Git, SQL, Docker, DevTools, Logs e debugging. Colunas: 1, 2, 3, 4, 5 |

#### 3.8 Liderança e Processo

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Planejamento de testes, Estimativa, Code review, Mentoria, Processo de qualidade, Métricas e KPIs, Comunicação técnica. Colunas: 1, 2, 3, 4, 5 |

#### 3.9 Competências Comportamentais (Soft Skills)

| Tipo | Configuração |
|------|--------------|
| Grade de múltipla escolha | Linhas: Comunicação clara, Atenção aos detalhes, Trabalho em equipe, Pensamento crítico, Curiosidade e aprendizado, Empatia (advocacia do usuário). Colunas: 1, 2, 3, 4, 5 |

---

## Formulário 2: Avaliação do Gestor - QA Junior

### Configurações gerais
- **Título**: Avaliação QA Junior - Avaliação do Gestor
- **Descrição**: Preencha durante e após a reunião de avaliação. Use as respostas do QA e suas observações para preencher este formulário.
- **Coletar endereços de e-mail**: Opcional
- **Limitar a 1 resposta**: Não (pode ser usado para múltiplos avaliados)

---

### Seção 1: Identificação

| # | Tipo | Texto da pergunta | Opções/Config |
|---|------|------------------|---------------|
| 1 | Resposta curta | Nome do QA avaliado | Obrigatório |
| 2 | Data | Data da avaliação | Obrigatório |
| 3 | Resposta curta | Nome do avaliador | Obrigatório |

---

### Seção 2: Questionário Técnico - Pontuação

**Bloco de descrição**:
```
Pontuação: 0 = Não conhece | 1 = Conceitual | 2 = Aplica em situações simples | 3 = Domina (acima do esperado)
Atribua a pontuação com base nas respostas do QA durante a conversa.
```

Use **Escala linear** (0 a 3) para cada pergunta. Configure: Mín=0, Máx=3, Rótulo esquerdo="0", Rótulo direito="3".

| ID | Pergunta | Tipo |
|----|----------|------|
| P1 | Explique o que é um caso de teste e quais elementos ele deve conter. | Escala linear 0-3 |
| P2 | Qual a diferença entre severidade e prioridade de um bug? | Escala linear 0-3 |
| P3 | Descreva o ciclo de vida de um bug desde a descoberta até o fechamento. | Escala linear 0-3 |
| P4 | O que são testes exploratórios e quando você os utiliza? | Escala linear 0-3 |
| P5 | Como você valida se uma funcionalidade está funcionando corretamente? | Escala linear 0-3 |
| P6 | Como você cria uma requisição GET no Postman? | Escala linear 0-3 |
| P7 | O que são variáveis no Postman e para que servem? | Escala linear 0-3 |
| P8 | Como você testa se uma API retornou o status code correto? | Escala linear 0-3 |
| PM1 | Como você cria um workflow onde o resultado de uma requisição é usado na próxima? | Escala linear 0-2 |
| PM4 | Como você gerencia múltiplos ambientes (DEV, QA, PROD) no Postman? | Escala linear 0-2 |
| P9 | O que é Swagger e para que é usado? | Escala linear 0-3 |
| P10 | Como você usa o Swagger para criar testes no Postman? | Escala linear 0-3 |
| SW1 | Como você identifica problemas em uma documentação Swagger? | Escala linear 0-2 |
| SW2 | Explique a diferença entre Swagger UI e Swagger Editor. | Escala linear 0-2 |
| SW5 | Como você gera testes automaticamente a partir de um arquivo Swagger? | Escala linear 0-2 |
| C1 | Qual a diferença entre cy.visit() e cy.request()? | Escala linear 0-2 |
| C3 | Explique o conceito de retry-ability no Cypress. | Escala linear 0-2 |
| C5 | Como você organiza fixtures para diferentes ambientes no Cypress? | Escala linear 0-2 |
| P11 | Como você usa o Jira para reportar um bug? | Escala linear 0-3 |
| P12 | O que você faz quando encontra um bug durante os testes? | Escala linear 0-3 |

**Nota**: Para PM1, PM4, SW1, SW2, SW5, C1, C3, C5 use escala 0-2 (máx 2 pts). Para as demais use 0-3.

---

### Seção 3: Perguntas de Cenário - Observações

**Bloco de descrição**:
```
Registre as respostas e sua avaliação qualitativa para cada cenário.
```

| ID | Cenário | Campos no Form |
|----|---------|----------------|
| C1 | Você recebeu uma story sem critérios de aceitação claros. O que você faz? | Parágrafo: "Resposta do QA" + Parágrafo: "Observações do avaliador" |
| C2 | Encontrou um bug que o desenvolvedor diz que "não é bug". Como você procede? | Parágrafo: "Resposta do QA" + Parágrafo: "Observações do avaliador" |
| C3 | O prazo está apertado e não dá para testar tudo. Como você prioriza? | Parágrafo: "Resposta do QA" + Parágrafo: "Observações do avaliador" |

**Implementação**: Para cada cenário, crie 2 perguntas de parágrafo (uma para resposta, outra para observações).

---

### Seção 4: Perguntas Comportamentais - Observações

| ID | Pergunta | Campo no Form |
|----|----------|---------------|
| B1 | Descreva uma situação em que você encontrou um bug crítico. Como você comunicou ao desenvolvedor? | Parágrafo: "Resposta (método STAR)" + Parágrafo: "Observações" |
| B2 | Conte sobre um momento em que você precisou aprender algo novo rapidamente para um projeto. | Parágrafo: "Resposta" + Parágrafo: "Observações" |
| B3 | Como você lida quando recebe feedback negativo sobre um bug que reportou? | Parágrafo: "Resposta" + Parágrafo: "Observações" |

---

### Seção 5: Soft Skills - Avaliação do Avaliador

**Bloco de descrição**:
```
Avalie as soft skills com base no que observou durante a conversa.
Escala: 1=Não observado/Baixo | 5=Excelente
```

| Competência | Tipo | Config |
|-------------|------|--------|
| Comunicação clara (oral e escrita) | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |
| Atenção aos detalhes | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |
| Trabalho em equipe | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |
| Pensamento crítico | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |
| Curiosidade e aprendizado | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |
| Empatia (advocacia do usuário) | Escala linear 1-5 | + Parágrafo: "Evidências/observações" |

**Implementação**: Para cada competência, crie 1 pergunta de escala (1-5) e 1 pergunta de parágrafo para evidências. Ou use uma grade: linhas = competências, colunas = 1 a 5, e depois um único parágrafo "Observações gerais sobre soft skills".

---

### Seção 6: Interpretação e Plano de Desenvolvimento

| # | Tipo | Texto da pergunta | Opções/Config |
|---|------|------------------|---------------|
| 1 | Lista suspensa | Nível geral do QA | Precisa de treinamento / Adequado para Junior / Pronto para evoluir |
| 2 | Parágrafo | Top 3 prioridades de desenvolvimento (gaps identificados) | Obrigatório |
| 3 | Parágrafo | Top 3 pontos fortes | Obrigatório |
| 4 | Parágrafo | Objetivos SMART para o PDI (próximos 3-6 meses) | Obrigatório |
| 5 | Parágrafo | Ações específicas (cursos, mentoria, prática) | Obrigatório |
| 6 | Parágrafo | Recursos sugeridos (links, cursos, documentação) | Opcional |
| 7 | Resposta curta | Próximos passos imediatos (1-2 ações) | Obrigatório |
| 8 | Data | Data da próxima revisão | Obrigatório |
| 9 | Parágrafo | Observações adicionais | Opcional |

---

## Integração com Google Sheets

1. Em cada formulário: **Respostas** > **Criar nova planilha** (ou vincular a existente)
2. As respostas serão registradas em tempo real
3. Use filtros e fórmulas no Sheets para:
   - Calcular total de pontos do questionário técnico
   - Calcular percentual (0-40% treinamento, 41-70% adequado, 71-100% evoluir)
   - Cruzar dados do Form 1 (autoavaliação) com Form 2 (avaliação gestor)

---

## Fórmulas úteis para Google Sheets (Form 2)

Se as colunas do questionário técnico estiverem em sequência (ex: D4:W4 para as 20 perguntas):

```
Total de pontos: =SUM(D4:W4)
Percentual: =Total/43*100
Interpretação: =IF(Percentual<=40,"Treinamento",IF(Percentual<=70,"Adequado Junior","Pronto para evoluir"))
```

**Nota**: Ajuste o divisor (43) conforme a soma dos pontos máximos de cada pergunta.

---

## Checklist de Criação

- [ ] Criar Form 1 (Autoavaliação) no Google Forms
- [ ] Criar Form 2 (Avaliação Gestor) no Google Forms
- [ ] Vincular ambos a planilhas Google Sheets
- [ ] Configurar notificações por e-mail (opcional)
- [ ] Testar fluxo completo com um QA piloto
- [ ] Compartilhar link do Form 1 com QAs (preencher antes da avaliação)
- [ ] Avaliador usa Form 2 durante/após a reunião

---

## Arquivos para importação direta

Na pasta `import-forms/` estão os arquivos CSV prontos para importar:

- **avaliacao-junior-autoavaliacao.csv** – Formulário 1 (Autoavaliação)
- **avaliacao-junior-gestor.csv** – Formulário 2 (Avaliação do Gestor)

**Como usar**: Importe o CSV no Google Sheets e use o add-on [Form Builder for Google Sheets](https://workspace.google.com/marketplace/app/form_builder_for_google_sheets/862607242665) para criar o formulário. Veja o [README](import-forms/README.md) na pasta `import-forms/`.

---

**Última atualização**: 2026-02-25  
**Versão**: 1.0
