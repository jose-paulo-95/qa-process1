# Validação: Cursos modelo e Syllabus CTFL 4.0

Este documento valida a cobertura do curso QA Junior para Pleno em relação aos cursos usados como modelo e ao syllabus CTFL 4.0 BR.

---

## 1. Syllabus CTFL 4.0 BR

**Fonte:** `docs/avaliacao/syllabus_ctfl_4.0br.pdf`

### Capítulo 1: Fundamentos de Teste (180 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 1.1 O que é teste (objetivos, teste vs depuração) | ✅ | 01-o-que-e-teste |
| 1.2 Por que testes são necessários | ✅ | 02-por-que-testes |
| 1.2.3 Erro, Defeito, Falha, Causa-raiz | ✅ | 02-por-que-testes |
| 1.3 Sete princípios de teste | ✅ | 03-sete-principios |
| 1.4 Atividades de teste, Testware, Papéis | ✅ | 04-processo-teste |
| 1.5 Habilidades essenciais, equipe completa, independência | ✅ | 05-psicologia-teste |

### Capítulo 2: Testes ao longo do SDLC (130 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 2.1 SDLC, DevOps, Shift-Left | ✅ | 06-ciclo-vida-tipos |
| 2.2 Níveis de teste (unitário, integração, sistema, aceitação) | ✅ | 06-ciclo-vida-tipos |
| 2.2 Tipos de teste (funcional, não-funcional, regressão) | ✅ | 06-ciclo-vida-tipos |
| 2.2.3 Confirmação e Regressão | ✅ | 06-ciclo-vida-tipos |
| 2.3 Teste de Manutenção | ⚠️ | Mencionado em 06-ciclo-vida-tipos (breve) |

### Capítulo 3: Teste Estático (80 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 3.1 Fundamentos de teste estático | ✅ | 08-testes-estaticos |
| 3.2 Processo de feedback e revisão | ✅ | 08-testes-estaticos |
| 3.2.3 Funções e responsabilidades nas revisões | ✅ | 08-testes-estaticos |
| 3.2.4 Tipos de revisão | ✅ | 08-testes-estaticos |

### Capítulo 4: Análise e Modelagem de Teste (390 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 4.2.1 Particionamento de Equivalência | ✅ | 09-participacao-equivalencia |
| 4.2.2 Análise de Valor de Limite | ✅ | 10-valor-limite |
| 4.2.3 Tabela de Decisão | ✅ | 12-tabela-decisao-transicao-estados |
| 4.2.4 Transição de Estado | ✅ | 12-tabela-decisao-transicao-estados |
| 4.3.1 Teste de Instrução e Cobertura | ✅ | 13-caixa-branca-experiencia |
| 4.3.2 Cobertura de Ramificação | ✅ | 13-caixa-branca-experiencia |
| 4.4 Técnicas baseadas em experiência | ✅ | 13-caixa-branca-experiencia |
| 4.4.2 Testes Exploratórios | ✅ | 13-caixa-branca-experiencia |
| 4.5.2 Critérios de Aceite | ✅ | 14-bdd-atdd |
| 4.5.3 ATDD | ✅ | 14-bdd-atdd |

### Capítulo 5: Gerenciamento das Atividades de Teste (335 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 5.1 Planejamento de Teste | ✅ | 15-planejamento-riscos |
| 5.1.4 Técnicas de estimativa | ✅ | 15-planejamento-riscos |
| 5.1.5 Priorização de casos de teste | ✅ | 15-planejamento-riscos |
| 5.2 Gerenciamento de Risco | ✅ | 15-planejamento-riscos |
| 5.3 Monitoramento, Controle, Conclusão | ✅ | 16-monitoramento-defeitos |
| 5.3.1 Métricas | ✅ | 16-monitoramento-defeitos |
| 5.3.2 Relatórios de Teste | ✅ | 16-monitoramento-defeitos |
| 5.5 Gerenciamento de Defeitos | ✅ | 07-severidade-prioridade, 16-monitoramento-defeitos |

### Capítulo 6: Ferramentas de Teste (20 min)

| Tópico CTFL | Cobertura | Onde |
|-------------|-----------|------|
| 6.1 Suporte de Ferramentas | ✅ | Módulos 3, 4, 5, 6 (Postman, Swagger, Cypress, Git) |
| 6.2 Benefícios e Riscos da Automação | ✅ | 32-logs-metricas, módulo Cypress |

---

## 2. Curso Cypress (Udemy)

**Fonte:** [Testes de aplicações modernas com Cypress](https://www.udemy.com/course/testes-cypress/)

| Tópico do curso | Cobertura | Onde |
|-----------------|-----------|------|
| Cypress Básico (setup, visit, get, etc.) | ✅ | 26-cypress-setup-basico |
| Elementos mais comuns (inputs, botões, forms) | ✅ | 27-cypress-elementos-sincronismo |
| Sincronismo dos scripts | ✅ | 27-cypress-elementos-sincronismo |
| Helpers | ✅ | 28-cypress-fixtures-helpers |
| Pontos de atenção (localização, massa de dados) | ✅ | 27, 28 |
| Localizando elementos | ✅ | 27-cypress-elementos-sincronismo |
| Testes Funcionais (e2e) | ✅ | 29-cypress-testes-funcionais-api |
| Testes da API (cy.request) | ✅ | 29-cypress-testes-funcionais-api |
| Virtualização (cy.intercept) | ✅ | 30-cypress-intercept-pom |
| Page Object Model | ✅ | 30-cypress-intercept-pom |
| Gerenciamento de massa de dados | ✅ | 28-cypress-fixtures-helpers |
| Autenticação | ✅ | 29-cypress-testes-funcionais-api |

---

## 3. Curso Postman (Udemy)

**Fonte:** [Automação de testes de API com Postman](https://www.udemy.com/course/automacao-de-testes-de-api-com-postman-projeto-de-testes/)

| Tópico do curso | Cobertura | Onde |
|-----------------|-----------|------|
| Workspaces e ambientes | ✅ | 23-postman-workspaces-collections |
| Coleções | ✅ | 23-postman-workspaces-collections |
| Variáveis | ✅ | 24-postman-variaveis |
| Scripts pré-requisição | ✅ | 25-postman-scripts-suites |
| Scripts de testes | ✅ | 25-postman-scripts-suites |
| Suítes de testes | ✅ | 25-postman-scripts-suites |
| Newman CLI | ✅ | 27-postman-newman |
| Relatórios HTML | ✅ | 28-postman-relatorios |
| Integração CI (GitHub Actions) | ✅ | 29-postman-ci-github-actions |
| ~~Jenkins~~ | ❌ Removido | Conforme solicitado |

---

## 4. Curso Descomplicando Testes de API Rest

**Fonte:** [Descomplicando](https://descomplicando.juliodelima.com.br/)

| Tópico do curso | Cobertura | Onde |
|-----------------|-----------|------|
| Mentalidade, Front-Backend, desafios ágeis | ✅ | 17-api-rest-fundamentos-mentalidade |
| Anatomia HTTP (métodos, status, parâmetros) | ✅ | 18-api-rest-anatomia-http |
| Arquitetura (Controllers, Services, JWT) | ✅ | 19-api-rest-arquitetura |
| Técnicas e abordagens completas | ✅ | 20-api-rest-tecnicas-abordagens |
| Gerenciamento de inconsistências | ✅ | 21-api-rest-inconsistencias-gerenciamento |
| Planejamento (riscos, integrações, ambiente, etc.) | ✅ | 22-api-rest-planejamento |
| Automação (Postman, Data-Driven, Mocks) | ✅ | 23-29 |

---

## 5. Curso Git e Github (Udemy)

**Fonte:** [Git e Github para iniciantes](https://www.udemy.com/course/git-e-github-para-iniciantes/)

| Tópico do curso | Cobertura | Onde |
|-----------------|-----------|------|
| Controle de versão | ✅ | 31-git-jira |
| Instalação e configuração | ✅ | 31-git-jira |
| Comandos essenciais (add, commit, status, log) | ✅ | 31-git-jira |
| Repositórios remotos (push, pull, clone) | ✅ | 31-git-jira |
| Branches (checkout, merge) | ✅ | 31-git-jira |
| Fluxo GitHub (PR) | ✅ | 31-git-jira |
| Jira (JQL, integração Git) | ✅ | 31-git-jira |

---

## Resumo

| Fonte | Status | Observações |
|-------|--------|-------------|
| **CTFL 4.0 BR** | ✅ Coberto | Módulos 1 e 2 alinhados; referências FL-1.x em temas |
| **Cypress Udemy** | ✅ Coberto | Módulo 5 completo |
| **Postman Udemy** | ✅ Coberto | Jenkins removido; GitHub Actions mantido |
| **Descomplicando** | ✅ Coberto | Módulo 3 expandido |
| **Git Udemy** | ✅ Coberto | Módulo 6 |

---

*Última atualização: Março 2025*
