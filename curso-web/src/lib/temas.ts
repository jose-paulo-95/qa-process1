export interface Tema {
  slug: string;
  title: string;
  moduloId: number;
  moduloTitle: string;
  order: number;
  duration?: string;
}

export const TEMAS: Tema[] = [
  // Módulo 1 - Fundamentos (CTFL 4.0 Cap 1 + 2)
  { slug: "01-o-que-e-teste", title: "O que é teste de software", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 1 },
  { slug: "02-por-que-testes", title: "Por que testes são necessários", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 2 },
  { slug: "03-sete-principios", title: "Os sete princípios de testes", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 3 },
  { slug: "04-processo-teste", title: "Processo de teste", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 4 },
  { slug: "05-psicologia-teste", title: "A psicologia do teste", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 5 },
  { slug: "06-ciclo-vida-tipos", title: "Testes no ciclo de vida e tipos", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 6 },
  { slug: "07-severidade-prioridade", title: "Severidade e prioridade de defeitos", moduloId: 1, moduloTitle: "Fundamentos de QA", order: 7 },
  // Módulo 2 - Técnicas e Gestão (CTFL 4.0 Cap 3, 4, 5)
  { slug: "08-testes-estaticos", title: "Testes estáticos e revisões", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 8 },
  { slug: "09-participacao-equivalencia", title: "Particionamento de equivalência", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 9 },
  { slug: "10-valor-limite", title: "Análise de valor limite", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 10 },
  { slug: "11-casos-positivos-negativos", title: "Casos positivos e negativos", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 11 },
  { slug: "12-tabela-decisao-transicao-estados", title: "Tabela de decisão e transição de estados", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 12 },
  { slug: "13-caixa-branca-experiencia", title: "Caixa branca e técnicas baseadas em experiência", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 13 },
  { slug: "14-bdd-atdd", title: "BDD e ATDD", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 14 },
  { slug: "15-planejamento-riscos", title: "Planejamento e gerenciamento de riscos", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 15 },
  { slug: "16-monitoramento-defeitos", title: "Monitoramento e ciclo de vida de defeitos", moduloId: 2, moduloTitle: "Técnicas de Teste", order: 16 },
  // Módulo 3 - Testes de API (Descomplicando completo + Postman)
  { slug: "17-api-rest-fundamentos-mentalidade", title: "API Rest: fundamentos e mentalidade", moduloId: 3, moduloTitle: "Testes de API", order: 17 },
  { slug: "18-api-rest-anatomia-http", title: "API Rest: anatomia HTTP", moduloId: 3, moduloTitle: "Testes de API", order: 18 },
  { slug: "19-api-rest-arquitetura", title: "API Rest: arquitetura e implementação", moduloId: 3, moduloTitle: "Testes de API", order: 19 },
  { slug: "20-api-rest-tecnicas-abordagens", title: "API Rest: técnicas e abordagens de teste", moduloId: 3, moduloTitle: "Testes de API", order: 20 },
  { slug: "21-api-rest-inconsistencias-gerenciamento", title: "API Rest: gerenciamento de inconsistências", moduloId: 3, moduloTitle: "Testes de API", order: 21 },
  { slug: "22-api-rest-planejamento", title: "API Rest: planejamento de testes", moduloId: 3, moduloTitle: "Testes de API", order: 22 },
  { slug: "23-postman-workspaces-collections", title: "Postman: workspaces, ambientes e collections", moduloId: 3, moduloTitle: "Testes de API", order: 23 },
  { slug: "24-postman-variaveis", title: "Postman: variáveis", moduloId: 3, moduloTitle: "Testes de API", order: 24 },
  { slug: "25-postman-scripts-suites", title: "Postman: scripts e suítes de testes", moduloId: 3, moduloTitle: "Testes de API", order: 25 },
  { slug: "26-postman-json-schema-dados", title: "Postman: JSON Schema e geração de dados", moduloId: 3, moduloTitle: "Testes de API", order: 26 },
  { slug: "27-postman-newman", title: "Postman: Newman", moduloId: 3, moduloTitle: "Testes de API", order: 27 },
  { slug: "28-postman-relatorios", title: "Postman: relatórios HTML", moduloId: 3, moduloTitle: "Testes de API", order: 28 },
  { slug: "29-postman-ci-github-actions", title: "Postman: integração com GitHub Actions", moduloId: 3, moduloTitle: "Testes de API", order: 29 },
  // Módulo 4 - Swagger
  { slug: "24-swagger-leitura", title: "Swagger: leitura e documentação", moduloId: 4, moduloTitle: "Swagger e Contratos", order: 30 },
  { slug: "25-swagger-validacao", title: "Swagger: validação de contratos", moduloId: 4, moduloTitle: "Swagger e Contratos", order: 31 },
  // Módulo 5 - Cypress (completo alinhado ao curso Udemy)
  { slug: "26-cypress-setup-basico", title: "Cypress: setup e fundamentos", moduloId: 5, moduloTitle: "Automação Cypress", order: 32 },
  { slug: "27-cypress-elementos-sincronismo", title: "Cypress: elementos e sincronismo", moduloId: 5, moduloTitle: "Automação Cypress", order: 33 },
  { slug: "28-cypress-fixtures-helpers", title: "Cypress: fixtures e helpers", moduloId: 5, moduloTitle: "Automação Cypress", order: 34 },
  { slug: "29-cypress-testes-funcionais-api", title: "Cypress: testes funcionais e de API", moduloId: 5, moduloTitle: "Automação Cypress", order: 35 },
  { slug: "30-cypress-intercept-pom", title: "Cypress: cy.intercept, virtualização e POM", moduloId: 5, moduloTitle: "Automação Cypress", order: 36 },
  // Módulo 6 - Ferramentas
  { slug: "31-git-jira", title: "Git e Jira", moduloId: 6, moduloTitle: "Ferramentas e Processo", order: 37 },
  { slug: "32-logs-metricas", title: "Logs, debugging e métricas", moduloId: 6, moduloTitle: "Ferramentas e Processo", order: 38 },
  { slug: "33-comunicacao-tecnica", title: "Comunicação técnica", moduloId: 6, moduloTitle: "Ferramentas e Processo", order: 39 },
  { slug: "34-sql-para-qa", title: "SQL para QA", moduloId: 6, moduloTitle: "Ferramentas e Processo", order: 40 },
];

export function getTemaBySlug(slug: string): Tema | undefined {
  return TEMAS.find((t) => t.slug === slug);
}

export function getTemasByModulo(moduloId: number): Tema[] {
  return TEMAS.filter((t) => t.moduloId === moduloId).sort((a, b) => a.order - b.order);
}

export function getPrevNextTema(slug: string): { prev: Tema | null; next: Tema | null } {
  const index = TEMAS.findIndex((t) => t.slug === slug);
  const prev = index > 0 ? TEMAS[index - 1] : null;
  const next = index >= 0 && index < TEMAS.length - 1 ? TEMAS[index + 1] : null;
  return { prev, next };
}
