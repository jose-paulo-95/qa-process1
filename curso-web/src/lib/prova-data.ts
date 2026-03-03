import type { QuizQuestion } from "./quiz-data";

export interface ProvaConfig {
  moduloId: number;
  moduloTitle: string;
  minCorrectToPass: number;
  questions: QuizQuestion[];
}

const PROVA_QUESTIONS: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: "p1-q1",
      temaSlug: "prova-1",
      question: "Qual princípio de teste afirma que defeitos tendem a se concentrar em certas áreas?",
      options: [
        { id: "a", text: "Testes exaustivos são impossíveis", correct: false, feedbackWrong: "Esse princípio fala sobre a impossibilidade de testar tudo." },
        { id: "b", text: "Agrupamento de defeitos", correct: true, feedbackCorrect: "Correto! O princípio do agrupamento diz que defeitos se concentram em módulos específicos." },
        { id: "c", text: "Paradoxo do pesticida", correct: false, feedbackWrong: "O paradoxo do pesticida fala que testes repetidos perdem eficácia." },
        { id: "d", text: "Testes dependem do contexto", correct: false, feedbackWrong: "Esse princípio fala que o tipo de teste varia conforme o contexto." },
      ],
    },
    {
      id: "p1-q2",
      temaSlug: "prova-1",
      question: "Qual nível de teste valida o sistema completo de ponta a ponta?",
      options: [
        { id: "a", text: "Unitário", correct: false, feedbackWrong: "Unitário testa componentes isolados." },
        { id: "b", text: "Integração", correct: false, feedbackWrong: "Integração testa a comunicação entre componentes." },
        { id: "c", text: "Sistema", correct: true, feedbackCorrect: "Correto! O teste de sistema valida o sistema completo." },
        { id: "d", text: "Aceitação", correct: false, feedbackWrong: "Aceitação valida com o usuário/negócio." },
      ],
    },
    {
      id: "p1-q3",
      temaSlug: "prova-1",
      question: "Severidade e prioridade de defeitos são:",
      options: [
        { id: "a", text: "Sinônimos", correct: false, feedbackWrong: "São conceitos diferentes. Severidade = impacto; prioridade = urgência." },
        { id: "b", text: "Independentes: severidade = impacto, prioridade = quando corrigir", correct: true, feedbackCorrect: "Correto! Severidade mede o quão grave; prioridade define a ordem de correção." },
        { id: "c", text: "Sempre iguais", correct: false, feedbackWrong: "Um bug pode ter severidade alta e prioridade baixa." },
        { id: "d", text: "Definidas apenas pelo desenvolvedor", correct: false, feedbackWrong: "QA, PO e dev podem participar da definição." },
      ],
    },
    {
      id: "p1-q4",
      temaSlug: "prova-1",
      question: "Teste de smoke tem como objetivo:",
      options: [
        { id: "a", text: "Testar todas as funcionalidades em detalhe", correct: false, feedbackWrong: "Smoke é rápido, não exaustivo." },
        { id: "b", text: "Validar rapidamente se o build básico funciona", correct: true, feedbackCorrect: "Correto! Smoke verifica se o sistema inicia e responde." },
        { id: "c", text: "Validar aceitação do usuário", correct: false, feedbackWrong: "UAT valida aceitação; smoke valida build." },
        { id: "d", text: "Testar apenas performance", correct: false, feedbackWrong: "Smoke é funcional básico, não performance." },
      ],
    },
    {
      id: "p1-q5",
      temaSlug: "prova-1",
      question: "Um bom reporte de bug deve incluir:",
      options: [
        { id: "a", text: "Apenas o título do problema", correct: false, feedbackWrong: "Precisa de passos, evidências, severidade." },
        { id: "b", text: "Título objetivo, passos para reproduzir, resultado esperado vs obtido, evidências", correct: true, feedbackCorrect: "Correto! Esses elementos permitem ao dev reproduzir e corrigir." },
        { id: "c", text: "Apenas screenshot", correct: false, feedbackWrong: "Screenshot ajuda, mas passos e contexto são essenciais." },
        { id: "d", text: "Descrição longa e detalhada sem estrutura", correct: false, feedbackWrong: "Objetividade e estrutura facilitam o entendimento." },
      ],
    },
  ],
  2: [
    {
      id: "p2-q1",
      temaSlug: "prova-2",
      question: "Testes estáticos são realizados:",
      options: [
        { id: "a", text: "Executando o código", correct: false, feedbackWrong: "Testes estáticos não executam o código." },
        { id: "b", text: "Analisando artefatos sem executar", correct: true, feedbackCorrect: "Correto! Revisões de código, requisitos e documentos são testes estáticos." },
        { id: "c", text: "Apenas em produção", correct: false, feedbackWrong: "Estáticos são feitos antes da execução." },
        { id: "d", text: "Só por ferramentas automatizadas", correct: false, feedbackWrong: "Revisões manuais também são estáticas." },
      ],
    },
    {
      id: "p2-q2",
      temaSlug: "prova-2",
      question: "Particionamento de equivalência divide as entradas em:",
      options: [
        { id: "a", text: "Valores aleatórios", correct: false, feedbackWrong: "As classes são definidas pelo comportamento esperado." },
        { id: "b", text: "Classes onde o sistema deve se comportar igual", correct: true, feedbackCorrect: "Correto! Testa um representante de cada classe de equivalência." },
        { id: "c", text: "Apenas valores válidos", correct: false, feedbackWrong: "Inclui classes válidas e inválidas." },
        { id: "d", text: "Ordem alfabética", correct: false, feedbackWrong: "A divisão é por comportamento, não alfabética." },
      ],
    },
    {
      id: "p2-q3",
      temaSlug: "prova-2",
      question: "BDD (Behavior-Driven Development) usa linguagem:",
      options: [
        { id: "a", text: "Apenas técnica", correct: false, feedbackWrong: "BDD usa linguagem natural estruturada." },
        { id: "b", text: "Natural e estruturada (ex: Dado/Quando/Então)", correct: true, feedbackCorrect: "Correto! Gherkin usa Dado, Quando, Então para cenários legíveis." },
        { id: "c", text: "Apenas código", correct: false, feedbackWrong: "BDD prioriza cenários em linguagem de negócio." },
        { id: "d", text: "Diagramas UML", correct: false, feedbackWrong: "BDD usa texto estruturado, não UML." },
      ],
    },
    {
      id: "p2-q4",
      temaSlug: "prova-2",
      question: "Na análise de valor limite, para um campo que aceita 10 a 100, devemos testar:",
      options: [
        { id: "a", text: "Apenas 10 e 100", correct: false, feedbackWrong: "Valor limite inclui limites e adjacentes." },
        { id: "b", text: "9, 10, 11, 99, 100, 101", correct: true, feedbackCorrect: "Correto! Testa mínimo-1, mínimo, mínimo+1, máximo-1, máximo, máximo+1." },
        { id: "c", text: "Apenas valores dentro do intervalo", correct: false, feedbackWrong: "Valores fora do intervalo revelam bugs nos limites." },
        { id: "d", text: "Valores aleatórios", correct: false, feedbackWrong: "Valor limite usa valores específicos nos limites." },
      ],
    },
    {
      id: "p2-q5",
      temaSlug: "prova-2",
      question: "Um charter em teste exploratório serve para:",
      options: [
        { id: "a", text: "Documentar todos os casos de teste", correct: false, feedbackWrong: "Charter define o objetivo da sessão, não casos." },
        { id: "b", text: "Definir o objetivo da sessão em uma frase", correct: true, feedbackCorrect: "Correto! Charter foca a exploração (ex: 'Explorar fluxo de checkout')." },
        { id: "c", text: "Substituir o plano de teste", correct: false, feedbackWrong: "Charter complementa; não substitui planejamento." },
        { id: "d", text: "Automatizar testes", correct: false, feedbackWrong: "Charter é para sessões exploratórias manuais." },
      ],
    },
  ],
  3: [
    {
      id: "p3-q0",
      temaSlug: "prova-3",
      question: "No planejamento de testes de API, o que significa considerar 'Ambiente de testes'?",
      options: [
        { id: "a", text: "Usar apenas produção", correct: false, feedbackWrong: "Produção não é ambiente de teste." },
        { id: "b", text: "Ter DEV, QA, PROD separados com dados isolados e configuráveis", correct: true, feedbackCorrect: "Correto! Ambientes isolados evitam efeitos colaterais." },
        { id: "c", text: "Testar só no Postman", correct: false, feedbackWrong: "Ambiente é onde a API roda, não a ferramenta." },
        { id: "d", text: "Ignorar credenciais", correct: false, feedbackWrong: "Credenciais fazem parte da configuração." },
      ],
    },
    {
      id: "p3-q0b",
      temaSlug: "prova-3",
      question: "Inconsistências de Comportamento, Estrutura e Conteúdo em APIs referem-se a:",
      options: [
        { id: "a", text: "Três tipos de bugs: status errado, campos/tipos incorretos, valores incorretos", correct: true, feedbackCorrect: "Correto! Comportamento = status/regras; Estrutura = formato; Conteúdo = valores." },
        { id: "b", text: "Três métodos HTTP", correct: false, feedbackWrong: "São classificações de inconsistências, não métodos." },
        { id: "c", text: "Três ambientes (DEV, QA, PROD)", correct: false, feedbackWrong: "São fontes de inconsistências para guiar testes." },
        { id: "d", text: "Três níveis de teste", correct: false, feedbackWrong: "São dimensões para investigar defeitos em API." },
      ],
    },
    {
      id: "p3-q1",
      temaSlug: "prova-3",
      question: "POST em REST é usado para:",
      options: [
        { id: "a", text: "Buscar dados", correct: false, feedbackWrong: "GET é para buscar." },
        { id: "b", text: "Criar novo recurso", correct: true, feedbackCorrect: "Correto! POST cria novos recursos em APIs REST." },
        { id: "c", text: "Deletar recurso", correct: false, feedbackWrong: "DELETE remove recursos." },
        { id: "d", text: "Atualizar parcialmente", correct: false, feedbackWrong: "PATCH é para atualização parcial." },
      ],
    },
    {
      id: "p3-q2",
      temaSlug: "prova-3",
      question: "Newman é usado para:",
      options: [
        { id: "a", text: "Editar collections no Postman", correct: false, feedbackWrong: "Newman executa, não edita." },
        { id: "b", text: "Executar collections via linha de comando/CI", correct: true, feedbackCorrect: "Correto! Newman roda collections do Postman em CI/CD." },
        { id: "c", text: "Substituir o Postman", correct: false, feedbackWrong: "Newman complementa o Postman." },
        { id: "d", text: "Gerar documentação", correct: false, feedbackWrong: "Newman executa testes." },
      ],
    },
    {
      id: "p3-q3",
      temaSlug: "prova-3",
      question: "Variáveis de Environment no Postman permitem:",
      options: [
        { id: "a", text: "Trocar entre DEV, QA e PROD sem alterar requests", correct: true, feedbackCorrect: "Correto! Environments armazenam baseUrl e configs por ambiente." },
        { id: "b", text: "Executar scripts de teste", correct: false, feedbackWrong: "Variáveis armazenam dados; scripts executam lógica." },
        { id: "c", text: "Gerar relatórios HTML", correct: false, feedbackWrong: "Relatórios são do Newman com htmlextra." },
        { id: "d", text: "Validar JSON Schema", correct: false, feedbackWrong: "JSON Schema é validado no script Tests." },
      ],
    },
    {
      id: "p3-q4",
      temaSlug: "prova-3",
      question: "newman-reporter-htmlextra gera:",
      options: [
        { id: "a", text: "Relatório HTML detalhado dos testes", correct: true, feedbackCorrect: "Correto! htmlextra produz relatórios HTML ricos para documentação." },
        { id: "b", text: "Collections exportadas", correct: false, feedbackWrong: "Collections são exportadas pelo Postman." },
        { id: "c", text: "Variáveis de ambiente", correct: false, feedbackWrong: "Reporter gera relatórios." },
        { id: "d", text: "Pipeline do GitHub Actions", correct: false, feedbackWrong: "GitHub Actions usa o relatório; não o gera." },
      ],
    },
  ],
  4: [
    {
      id: "p4-q1",
      temaSlug: "prova-4",
      question: "OpenAPI/Swagger especifica:",
      options: [
        { id: "a", text: "Apenas endpoints GET", correct: false, feedbackWrong: "Swagger descreve todos os métodos e recursos." },
        { id: "b", text: "APIs REST de forma padronizada", correct: true, feedbackCorrect: "Correto! OpenAPI é a especificação para documentar APIs REST." },
        { id: "c", text: "Apenas respostas de erro", correct: false, feedbackWrong: "Inclui requests, responses, schemas." },
        { id: "d", text: "Código de automação", correct: false, feedbackWrong: "Swagger documenta; ferramentas geram código." },
      ],
    },
    {
      id: "p4-q2",
      temaSlug: "prova-4",
      question: "Validar contrato de uma API significa:",
      options: [
        { id: "a", text: "Testar apenas se a API está online", correct: false, feedbackWrong: "Contrato é sobre formato e estrutura." },
        { id: "b", text: "Garantir que request/response respeitam o documentado", correct: true, feedbackCorrect: "Correto! Validar contrato = API entrega o que prometeu no Swagger." },
        { id: "c", text: "Verificar performance", correct: false, feedbackWrong: "Contrato é sobre estrutura, não performance." },
        { id: "d", text: "Autenticar usuários", correct: false, feedbackWrong: "Contrato valida formato, não autenticação." },
      ],
    },
    {
      id: "p4-q3",
      temaSlug: "prova-4",
      question: "No Postman, para validar que a resposta segue o schema do Swagger:",
      options: [
        { id: "a", text: "Comparar manualmente com a documentação", correct: false, feedbackWrong: "Pode automatizar com pm.response.to.have.jsonSchema()." },
        { id: "b", text: "Usar pm.response.to.have.jsonSchema(schema) no script Tests", correct: true, feedbackCorrect: "Correto! JSON Schema valida a estrutura automaticamente." },
        { id: "c", text: "Apenas verificar o status code", correct: false, feedbackWrong: "Status 200 não garante estrutura correta." },
        { id: "d", text: "Importar o Swagger uma vez", correct: false, feedbackWrong: "Importar gera collection; validação é no script." },
      ],
    },
    {
      id: "p4-q4",
      temaSlug: "prova-4",
      question: "Swagger UI e Swagger Editor diferem em:",
      options: [
        { id: "a", text: "Swagger UI visualiza; Swagger Editor permite editar a especificação", correct: true, feedbackCorrect: "Correto! UI = leitura; Editor = edição do YAML/JSON." },
        { id: "b", text: "São a mesma ferramenta", correct: false, feedbackWrong: "São ferramentas diferentes com propósitos distintos." },
        { id: "c", text: "Swagger Editor executa testes", correct: false, feedbackWrong: "Editor edita specs; não executa testes." },
        { id: "d", text: "Swagger UI substitui o Postman", correct: false, feedbackWrong: "UI documenta; Postman executa requests." },
      ],
    },
    {
      id: "p4-q5",
      temaSlug: "prova-4",
      question: "Por que validar o contrato da API e não apenas o status code?",
      options: [
        { id: "a", text: "Status code é irrelevante", correct: false, feedbackWrong: "Status é importante, mas insuficiente." },
        { id: "b", text: "Status 200 pode vir com body incorreto (campos faltando, tipo errado)", correct: true, feedbackCorrect: "Correto! Validar contrato garante que a API entrega o que documentou." },
        { id: "c", text: "Contrato substitui todos os testes", correct: false, feedbackWrong: "Contrato é um tipo de validação; outros testes complementam." },
        { id: "d", text: "Swagger exige validação de contrato", correct: false, feedbackWrong: "É boa prática para evitar bugs em integrações." },
      ],
    },
  ],
  5: [
    {
      id: "p5-q1",
      temaSlug: "prova-5",
      question: "cy.intercept() no Cypress serve para:",
      options: [
        { id: "a", text: "Configurar o navegador", correct: false, feedbackWrong: "intercept mocka requisições HTTP." },
        { id: "b", text: "Interceptar e mockar requisições HTTP", correct: true, feedbackCorrect: "Correto! cy.intercept() permite mockar APIs nos testes." },
        { id: "c", text: "Aguardar elementos", correct: false, feedbackWrong: "cy.get() com timeout aguarda elementos." },
        { id: "d", text: "Ler fixtures", correct: false, feedbackWrong: "cy.fixture() lê fixtures." },
      ],
    },
    {
      id: "p5-q2",
      temaSlug: "prova-5",
      question: "cy.request() no Cypress é usado para:",
      options: [
        { id: "a", text: "Testar a API REST diretamente", correct: true, feedbackCorrect: "Correto! cy.request faz requisições HTTP para testar o backend." },
        { id: "b", text: "Enviar dados para inputs", correct: false, feedbackWrong: "cy.get().type() envia para inputs." },
        { id: "c", text: "Clicar em botões", correct: false, feedbackWrong: "cy.get().click() clica." },
        { id: "d", text: "Navegar para URLs", correct: false, feedbackWrong: "cy.visit() navega; cy.request faz HTTP." },
      ],
    },
    {
      id: "p5-q3",
      temaSlug: "prova-5",
      question: "O Cypress aplica retry automático em cy.get() para:",
      options: [
        { id: "a", text: "Esperar o elemento aparecer na página", correct: true, feedbackCorrect: "Correto! Cypress espera até 4s o elemento existir antes de falhar." },
        { id: "b", text: "Evitar erros de digitação", correct: false, feedbackWrong: "Retry é para elementos assíncronos." },
        { id: "c", text: "Acelerar os testes", correct: false, feedbackWrong: "Retry garante estabilidade, não velocidade." },
        { id: "d", text: "Suportar múltiplos navegadores", correct: false, feedbackWrong: "Retry é independente do navegador." },
      ],
    },
    {
      id: "p5-q4",
      temaSlug: "prova-5",
      question: "Fixtures no Cypress servem para:",
      options: [
        { id: "a", text: "Configurar o navegador", correct: false, feedbackWrong: "Fixtures armazenam dados de teste." },
        { id: "b", text: "Armazenar dados de teste reutilizáveis (JSON)", correct: true, feedbackCorrect: "Correto! cy.fixture() carrega dados de cypress/fixtures/." },
        { id: "c", text: "Interceptar requisições", correct: false, feedbackWrong: "cy.intercept() intercepta; fixtures são dados." },
        { id: "d", text: "Definir comandos customizados", correct: false, feedbackWrong: "Comandos são em cypress/support/commands." },
      ],
    },
    {
      id: "p5-q5",
      temaSlug: "prova-5",
      question: "Page Object Model (POM) no Cypress tem como benefício:",
      options: [
        { id: "a", text: "Executar testes mais rápido", correct: false, feedbackWrong: "POM não acelera execução." },
        { id: "b", text: "Centralizar seletores e ações, facilitando manutenção", correct: true, feedbackCorrect: "Correto! POM encapsula elementos e ações em classes." },
        { id: "c", text: "Substituir fixtures", correct: false, feedbackWrong: "POM e fixtures têm propósitos diferentes." },
        { id: "d", text: "Evitar uso de cy.intercept", correct: false, feedbackWrong: "POM é sobre organização; intercept é sobre mock." },
      ],
    },
  ],
  6: [
    {
      id: "p6-q1",
      temaSlug: "prova-6",
      question: "Git é usado principalmente para:",
      options: [
        { id: "a", text: "Gerenciar tarefas", correct: false, feedbackWrong: "Jira gerencia tarefas; Git versiona código." },
        { id: "b", text: "Controle de versão de código", correct: true, feedbackCorrect: "Correto! Git é um sistema de controle de versão distribuído." },
        { id: "c", text: "Executar testes", correct: false, feedbackWrong: "Git não executa testes." },
        { id: "d", text: "Documentar APIs", correct: false, feedbackWrong: "Swagger documenta APIs." },
      ],
    },
    {
      id: "p6-q2",
      temaSlug: "prova-6",
      question: "JQL no Jira é usado para:",
      options: [
        { id: "a", text: "Criar projetos", correct: false, feedbackWrong: "JQL cria filtros e buscas." },
        { id: "b", text: "Escrever filtros e buscas avançadas", correct: true, feedbackCorrect: "Correto! JQL permite queries como project = QA AND status = 'In Progress'." },
        { id: "c", text: "Atribuir issues manualmente", correct: false, feedbackWrong: "JQL busca; atribuição é outra ação." },
        { id: "d", text: "Gerar relatórios em PDF", correct: false, feedbackWrong: "JQL filtra; relatórios usam outras ferramentas." },
      ],
    },
    {
      id: "p6-q3",
      temaSlug: "prova-6",
      question: "A aba Network do DevTools mostra:",
      options: [
        { id: "a", text: "Erros de JavaScript", correct: false, feedbackWrong: "Console mostra erros JS." },
        { id: "b", text: "Requisições HTTP e respostas", correct: true, feedbackCorrect: "Correto! Network exibe requests, status, payload, response." },
        { id: "c", text: "Estrutura do HTML", correct: false, feedbackWrong: "Elements mostra HTML." },
        { id: "d", text: "Performance da CPU", correct: false, feedbackWrong: "Performance tab mostra CPU." },
      ],
    },
    {
      id: "p6-q4",
      temaSlug: "prova-6",
      question: "UAT significa:",
      options: [
        { id: "a", text: "User Acceptance Testing – validação com usuário/PO", correct: true, feedbackCorrect: "Correto! UAT valida se o sistema atende às necessidades." },
        { id: "b", text: "Unit Automated Test", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
        { id: "c", text: "Universal API Test", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
        { id: "d", text: "Unified Acceptance Tool", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
      ],
    },
    {
      id: "p6-q5",
      temaSlug: "prova-6",
      question: "Ao usar DELETE em SQL, é essencial:",
      options: [
        { id: "a", text: "Usar sempre SELECT antes", correct: false, feedbackWrong: "SELECT pode ajudar, mas não é o essencial." },
        { id: "b", text: "Usar WHERE para filtrar o que será removido", correct: true, feedbackCorrect: "Correto! DELETE sem WHERE apaga todas as linhas." },
        { id: "c", text: "Fazer backup manual sempre", correct: false, feedbackWrong: "Backup é boa prática; WHERE é obrigatório." },
        { id: "d", text: "Usar JOIN no DELETE", correct: false, feedbackWrong: "JOIN pode ser usado; WHERE é o essencial." },
      ],
    },
  ],
};

const MODULO_TITLES: Record<number, string> = {
  1: "Fundamentos de QA",
  2: "Técnicas de Teste",
  3: "Testes de API",
  4: "Swagger e Contratos",
  5: "Automação Cypress",
  6: "Ferramentas e Processo",
};

export function getProvaByModulo(moduloId: number): ProvaConfig | null {
  const questions = PROVA_QUESTIONS[moduloId];
  if (!questions || questions.length === 0) return null;
  return {
    moduloId,
    moduloTitle: MODULO_TITLES[moduloId],
    minCorrectToPass: Math.ceil(questions.length * 0.7),
    questions,
  };
}
