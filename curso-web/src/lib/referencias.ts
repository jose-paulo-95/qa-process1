export interface Referencia {
  title: string;
  url: string;
  type: "curso" | "video" | "documentacao";
  description?: string;
}

export const REFERENCIAS_POR_MODULO: Record<number, Referencia[]> = {
  1: [
    {
      title: "ISTQB CTFL Syllabus 4.0 BR (oficial)",
      url: "https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0",
      type: "documentacao",
      description: "Syllabus oficial da certificação CTFL 4.0",
    },
    {
      title: "O que é Teste de Software? - QA em 5 minutos",
      url: "https://www.youtube.com/watch?v=2L2V2naxM6c",
      type: "video",
      description: "Vídeo introdutório sobre testes de software",
    },
    {
      title: "Fundamentos de Testes - Canal do Eduardo",
      url: "https://www.youtube.com/results?search_query=teste+software+fundamentos",
      type: "video",
      description: "Vídeos sobre fundamentos de testes",
    },
    {
      title: "Curso de QA - Udemy",
      url: "https://www.udemy.com/courses/search/?q=qa+teste+software",
      type: "curso",
      description: "Cursos pagos de QA e testes",
    },
  ],
  2: [
    {
      title: "Técnicas de Teste Black Box e White Box",
      url: "https://www.youtube.com/results?search_query=tecnicas+teste+software+black+box",
      type: "video",
      description: "Vídeos sobre técnicas de caixa preta e branca",
    },
    {
      title: "BDD com Cucumber - Documentação",
      url: "https://cucumber.io/docs",
      type: "documentacao",
      description: "Documentação oficial do Cucumber/BDD",
    },
    {
      title: "ISTQB - Test Analysis & Design",
      url: "https://www.istqb.org/",
      type: "documentacao",
      description: "Capítulo 4 do syllabus CTFL",
    },
  ],
  3: [
    {
      title: "Descomplicando Testes de API Rest - Julio de Lima",
      url: "https://descomplicando.juliodelima.com.br/",
      type: "curso",
      description: "Mentalidade, anatomia HTTP, arquitetura, técnicas, heurísticas, planejamento",
    },
    {
      title: "Automação de testes de API com Postman - Udemy",
      url: "https://www.udemy.com/course/automacao-de-testes-de-api-com-postman-projeto-de-testes/",
      type: "curso",
      description: "Workspaces, variáveis, scripts, Newman, GitHub Actions, relatórios HTML",
    },
    {
      title: "Postman Learning Center",
      url: "https://learning.postman.com/",
      type: "documentacao",
      description: "Documentação oficial do Postman",
    },
    {
      title: "API DummyJSON",
      url: "https://dummyjson.com/",
      type: "documentacao",
      description: "API para praticar testes (usuários, produtos, carrinhos)",
    },
    {
      title: "Newman - npm",
      url: "https://www.npmjs.com/package/newman",
      type: "documentacao",
      description: "CLI do Postman para execução via linha de comando",
    },
    {
      title: "newman-reporter-htmlextra",
      url: "https://www.npmjs.com/package/newman-reporter-htmlextra",
      type: "documentacao",
      description: "Reporter para relatórios HTML detalhados",
    },
  ],
  4: [
    {
      title: "OpenAPI Specification",
      url: "https://swagger.io/specification/",
      type: "documentacao",
      description: "Especificação OpenAPI/Swagger",
    },
    {
      title: "Swagger Editor",
      url: "https://editor.swagger.io/",
      type: "documentacao",
      description: "Editor online para OpenAPI",
    },
    {
      title: "Contract Testing - YouTube",
      url: "https://www.youtube.com/results?search_query=contract+testing+api",
      type: "video",
      description: "Vídeos sobre testes de contrato",
    },
  ],
  5: [
    {
      title: "Testes de aplicações modernas com Cypress - Udemy",
      url: "https://www.udemy.com/course/testes-cypress/",
      type: "curso",
      description: "Curso completo: e2e, API, virtualização, sincronismo, localização",
    },
    {
      title: "Cypress Documentation",
      url: "https://docs.cypress.io/",
      type: "documentacao",
      description: "Documentação oficial do Cypress",
    },
    {
      title: "Cypress Best Practices",
      url: "https://docs.cypress.io/guides/references/best-practices",
      type: "documentacao",
      description: "Boas práticas do Cypress",
    },
    {
      title: "Cypress - YouTube",
      url: "https://www.youtube.com/results?search_query=cypress+e2e+tutorial",
      type: "video",
      description: "Tutoriais de automação com Cypress",
    },
  ],
  6: [
    {
      title: "Git e Github para iniciantes - Udemy",
      url: "https://www.udemy.com/course/git-e-github-para-iniciantes/",
      type: "curso",
      description: "Curso completo: controle de versão, branches, repositórios remotos",
    },
    {
      title: "Git - Documentação",
      url: "https://git-scm.com/doc",
      type: "documentacao",
      description: "Documentação oficial do Git",
    },
    {
      title: "Jira Software - Atlassian",
      url: "https://www.atlassian.com/software/jira",
      type: "documentacao",
      description: "Documentação do Jira",
    },
    {
      title: "Git e Jira para QA - YouTube",
      url: "https://www.youtube.com/results?search_query=git+jira+qa",
      type: "video",
      description: "Vídeos sobre Git e Jira para testadores",
    },
  ],
};
