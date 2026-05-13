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
  7: [
    {
      id: "p7-c1",
      temaSlug: "prova-7",
      question: "**Comparação:** A afirmação lógica 'dez é **maior** que dez' é:",
      options: [
        { id: "a", text: "Verdadeira", correct: false, feedbackWrong: "'Maior que' exige estritamente acima; dez não é maior que dez." },
        { id: "b", text: "Falsa", correct: true, feedbackCorrect: "Correto! Dez não é maior que ele mesmo." },
        { id: "c", text: "Indefinida", correct: false, feedbackWrong: "A comparação tem resultado definido: falso." },
        { id: "d", text: "Verdadeira só em notação científica", correct: false, feedbackWrong: "Em lógica comum, continua falsa." },
      ],
    },
    {
      id: "p7-c2",
      temaSlug: "prova-7",
      question: "**Comparação:** Uma regra diz 'idade **mínima** 18 anos', **incluindo** quem tem exatamente 18. A condição correta é:",
      options: [
        { id: "a", text: "idade é **maior** que 18", correct: false, feedbackWrong: "Quem tem 18 seria excluído." },
        { id: "b", text: "idade é **maior ou igual** a 18", correct: true, feedbackCorrect: "Correto! O limite inferior entra na regra." },
        { id: "c", text: "idade é **menor** que 18", correct: false, feedbackWrong: "Isso aceitaria menores de idade." },
        { id: "d", text: "idade é **diferente** de 18", correct: false, feedbackWrong: "Excluiria exatamente os 18 anos." },
      ],
    },
    {
      id: "p7-eq1",
      temaSlug: "prova-7",
      question: "**Igualdade:** O que descreve melhor a **igualdade estrita** (valor e tipo devem coincidir)?",
      options: [
        { id: "a", text: "Converte tipos automaticamente antes de comparar", correct: false, feedbackWrong: "Isso é típico de igualdade com coerção, não da estrita." },
        { id: "b", text: "Só é 'igual' se o valor **e** o tipo forem os mesmos", correct: true, feedbackCorrect: "Correto! Evita tratar número e texto como o mesmo quando não forem." },
        { id: "c", text: "Só se aplica a números inteiros", correct: false, feedbackWrong: "A ideia vale para qualquer tipo comparável." },
        { id: "d", text: "Ignora diferença entre maiúsculas e minúsculas em texto", correct: false, feedbackWrong: "Isso é regra de negócio ou função de texto, não definição de igualdade estrita." },
      ],
    },
    {
      id: "p7-eq2",
      temaSlug: "prova-7",
      question: "**Igualdade:** Em um cadastro, o número de matrícula é **10** (número) e o campo digitado é o texto **'10'**. Para igualdade **estrita**, 'são iguais'?",
      options: [
        { id: "a", text: "Sim, porque representam o mesmo valor", correct: false, feedbackWrong: "Na estrita, tipo texto ≠ tipo número." },
        { id: "b", text: "Não, porque número e texto são tipos diferentes", correct: true, feedbackCorrect: "Correto! Igualdade estrita exige mesmo tipo." },
        { id: "c", text: "Só se o texto tiver zero à esquerda", correct: false, feedbackWrong: "O ponto central é tipo (número vs texto), não zeros." },
        { id: "d", text: "Depende do dia da semana", correct: false, feedbackWrong: "Não há essa dependência na lógica da comparação." },
      ],
    },
    {
      id: "p7-e1",
      temaSlug: "prova-7",
      question: "**Operador E:** O resultado de **verdadeiro E verdadeiro** é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! As duas partes são verdadeiras." },
        { id: "b", text: "Falso", correct: false, feedbackWrong: "O **E** só é falso quando **alguma** parte é falsa." },
        { id: "c", text: "Depende da ordem em que as partes aparecem", correct: false, feedbackWrong: "Para valores fixos, a ordem não muda o resultado do **E**." },
        { id: "d", text: "Apenas 'nem verdadeiro nem falso'", correct: false, feedbackWrong: "O resultado é verdadeiro ou falso." },
      ],
    },
    {
      id: "p7-e2",
      temaSlug: "prova-7",
      question: "**Operador E:** O resultado de **falso E verdadeiro** é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "Uma parte falsa derruba o **E** inteiro." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! Basta uma parte falsa." },
        { id: "c", text: "Verdadeiro, porque a segunda parte é verdadeira", correct: false, feedbackWrong: "O **E** exige **todas** as partes verdadeiras." },
        { id: "d", text: "Só se avalia a segunda parte", correct: false, feedbackWrong: "O resultado já é falso pela primeira parte." },
      ],
    },
    {
      id: "p7-o1",
      temaSlug: "prova-7",
      question: "**Operador OU (inclusivo):** O resultado de **falso OU falso** é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "O **OU** inclusivo exige **pelo menos** um verdadeiro." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! Nenhuma parte é verdadeira." },
        { id: "c", text: "Verdadeiro se as partes forem a mesma variável", correct: false, feedbackWrong: "Falso OU falso continua falso." },
        { id: "d", text: "Indefinido", correct: false, feedbackWrong: "O resultado é falso." },
      ],
    },
    {
      id: "p7-o2",
      temaSlug: "prova-7",
      question: "**Operador OU (inclusivo):** O resultado de **falso OU verdadeiro** é:",
      options: [
        { id: "a", text: "Falso", correct: false, feedbackWrong: "Basta uma parte verdadeira no **OU** inclusivo." },
        { id: "b", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! Uma parte verdadeira basta." },
        { id: "c", text: "Falso, porque a primeira parte é falsa", correct: false, feedbackWrong: "A segunda parte é verdadeira; o **OU** vence." },
        { id: "d", text: "Só é verdadeiro se as duas forem verdadeiras", correct: false, feedbackWrong: "Isso descreveria o **E**, não o **OU**." },
      ],
    },
    {
      id: "p7-n1",
      temaSlug: "prova-7",
      question: "**Operador NÃO:** A negação de **falso** é:",
      options: [
        { id: "a", text: "Falso", correct: false, feedbackWrong: "Negação inverte o valor." },
        { id: "b", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! Não-falso é verdadeiro." },
        { id: "c", text: "Indefinido", correct: false, feedbackWrong: "Negação de booleano é booleano." },
        { id: "d", text: "Depende do contexto da frase", correct: false, feedbackWrong: "Em lógica, a negação de falso é sempre verdadeiro." },
      ],
    },
    {
      id: "p7-n2",
      temaSlug: "prova-7",
      question: "**Operador NÃO:** A negação de **(verdadeiro E falso)** é:",
      options: [
        { id: "a", text: "Falso", correct: false, feedbackWrong: "Dentro do parênteses, V E F = F; negar isso dá V." },
        { id: "b", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! Primeiro V E F = F; depois NÃO disso = V." },
        { id: "c", text: "Falso porque o E sempre prevalece sobre o NÃO", correct: false, feedbackWrong: "O **NÃO** aplica-se ao resultado do **E**." },
        { id: "d", text: "Não se pode negar uma conjunção", correct: false, feedbackWrong: "Pode-se negar qualquer expressão booleana bem formada." },
      ],
    },
    {
      id: "p7-t1",
      temaSlug: "prova-7",
      question: "**Teoria:** Quantas linhas tem a tabela verdade de **duas** variáveis proposicionais (A e B), se cada uma só pode ser V ou F?",
      options: [
        { id: "a", text: "2", correct: false, feedbackWrong: "São todas as combinações de V/F para A e B." },
        { id: "b", text: "4", correct: true, feedbackCorrect: "Correto! VV, VF, FV, FF." },
        { id: "c", text: "8", correct: false, feedbackWrong: "Oito linhas seriam para três variáveis (2 elevado a 3)." },
        { id: "d", text: "16", correct: false, feedbackWrong: "Isso corresponderia a quatro variáveis binárias (2 elevado a 4)." },
      ],
    },
    {
      id: "p7-t2",
      temaSlug: "prova-7",
      question: "**Teoria:** O **OU lógico inclusivo** entre duas condições é **falso** quando:",
      options: [
        { id: "a", text: "Pelo menos uma condição é verdadeira", correct: false, feedbackWrong: "Nesse caso o **OU** seria verdadeiro." },
        { id: "b", text: "As duas condições são falsas", correct: true, feedbackCorrect: "Correto! Só assim nenhuma parte sustenta o **OU**." },
        { id: "c", text: "As duas condições são verdadeiras ao mesmo tempo", correct: false, feedbackWrong: "No inclusivo, duas verdades ainda dão resultado verdadeiro." },
        { id: "d", text: "Sempre que as condições forem diferentes entre si", correct: false, feedbackWrong: "VF e FV ainda dão **OU** verdadeiro." },
      ],
    },
    {
      id: "p7-t3",
      temaSlug: "prova-7",
      question: "**Teoria:** Pelas **leis de De Morgan**, a negação de **(A E B)** equivale a:",
      options: [
        { id: "a", text: "(NÃO A) **E** (NÃO B)", correct: false, feedbackWrong: "Essa forma corresponderia à negação do **OU**, não do **E**." },
        { id: "b", text: "(NÃO A) **OU** (NÃO B)", correct: true, feedbackCorrect: "Correto! Negação do **E** vira **OU** das negações." },
        { id: "c", text: "(A **OU** B)", correct: false, feedbackWrong: "Não se remove só o **NÃO**; as partes também são negadas." },
        { id: "d", text: "A **E** B", correct: false, feedbackWrong: "A negação não deixa a expressão igual." },
      ],
    },
    {
      id: "p7-t4",
      temaSlug: "prova-7",
      question: "**Teoria:** Em muitas linguagens, o **curto-circuito** na expressão **A OU B** significa que, se **A** já for verdadeiro, então:",
      options: [
        { id: "a", text: "**B** pode não ser avaliado, pois o resultado do **OU** já é verdadeiro", correct: true, feedbackCorrect: "Correto! Basta uma parte verdadeira." },
        { id: "b", text: "**B** deve ser avaliado sempre, por segurança", correct: false, feedbackWrong: "Com curto-circuito, **B** pode ser ignorado nesse caso." },
        { id: "c", text: "O resultado passa a ser falso", correct: false, feedbackWrong: "Com **A** verdadeiro, o **OU** já é verdadeiro." },
        { id: "d", text: "Só ocorre quando A e B são números", correct: false, feedbackWrong: "Curto-circuito vale para expressões lógicas em geral." },
      ],
    },
    {
      id: "p7-c3",
      temaSlug: "prova-7",
      question: "**Comparação:** A afirmação 'sete é **menor** que cinco' é:",
      options: [
        { id: "a", text: "Verdadeira", correct: false, feedbackWrong: "Sete não é menor que cinco." },
        { id: "b", text: "Falsa", correct: true, feedbackCorrect: "Correto! Sete é maior que cinco." },
        { id: "c", text: "Indefinida", correct: false, feedbackWrong: "A comparação tem resultado definido." },
        { id: "d", text: "Verdadeira em escalas logarítmicas", correct: false, feedbackWrong: "Na comparação numérica usual, continua falsa." },
      ],
    },
    {
      id: "p7-c4",
      temaSlug: "prova-7",
      question: "**Comparação:** Promoção válida para compras de **até** 200 reais, **incluindo** exatamente 200. A condição correta é:",
      options: [
        { id: "a", text: "valor é **maior** que 200", correct: false, feedbackWrong: "Excluiria quem gastou exatamente 200." },
        { id: "b", text: "valor é **menor ou igual** a 200", correct: true, feedbackCorrect: "Correto! O teto inclui o limite." },
        { id: "c", text: "valor é **menor** que 200", correct: false, feedbackWrong: "Quem gastou 200 ficaria de fora." },
        { id: "d", text: "valor é **diferente** de 200", correct: false, feedbackWrong: "Excluiria o próprio limite." },
      ],
    },
    {
      id: "p7-c5",
      temaSlug: "prova-7",
      question: "**Comparação:** Duas quantidades são **diferentes** quando:",
      options: [
        { id: "a", text: "São iguais em valor e tipo", correct: false, feedbackWrong: "Iguais não são 'diferentes' nesse sentido." },
        { id: "b", text: "Não coincidem segundo a regra de comparação usada", correct: true, feedbackCorrect: "Correto! 'Diferente' nega a igualdade definida no contexto." },
        { id: "c", text: "Sempre que uma for número e a outra texto", correct: false, feedbackWrong: "Pode haver diferença mesmo com tipos iguais (ex.: 3 e 5)." },
        { id: "d", text: "Só quando a diferença for maior que 1%", correct: false, feedbackWrong: "Diferente não exige margem percentual; basta não coincidir." },
      ],
    },
    {
      id: "p7-eq3",
      temaSlug: "prova-7",
      question: "**Igualdade:** O que caracteriza uma comparação que **converte** tipos antes de decidir se são iguais?",
      options: [
        { id: "a", text: "Igualdade **estrita** (valor e tipo iguais)", correct: false, feedbackWrong: "A estrita não converte tipos para forçar igualdade." },
        { id: "b", text: "Igualdade com **coerção** (ajuste implícito de tipo)", correct: true, feedbackCorrect: "Correto! O sistema tenta alinhar representações antes de comparar." },
        { id: "c", text: "Sempre produz falso entre número e texto", correct: false, feedbackWrong: "Com coerção, às vezes passam a ser considerados iguais." },
        { id: "d", text: "Só existe em bancos relacionais", correct: false, feedbackWrong: "O conceito aparece em linguagens e ferramentas diversas." },
      ],
    },
    {
      id: "p7-eq4",
      temaSlug: "prova-7",
      question: "**Igualdade:** Duas etiquetas de texto vazias ('' e '') representam o **mesmo conteúdo**. Para igualdade de **valor** de texto, são iguais?",
      options: [
        { id: "a", text: "Sim", correct: true, feedbackCorrect: "Correto! Ambas não têm caracteres; o conteúdo coincide." },
        { id: "b", text: "Não, porque são duas variáveis diferentes", correct: false, feedbackWrong: "A pergunta é sobre conteúdo, não sobre endereço de memória." },
        { id: "c", text: "Só se tiverem o mesmo tamanho em bytes na codificação", correct: false, feedbackWrong: "Texto vazio costuma ser igual a texto vazio em valor." },
        { id: "d", text: "Depende da cor da interface", correct: false, feedbackWrong: "Cor não entra na igualdade lógica do texto." },
      ],
    },
    {
      id: "p7-eq5",
      temaSlug: "prova-7",
      question: "**Igualdade:** Se A e B representam **o mesmo estado** (ambos verdadeiros), então 'A é **diferente** de B' é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "Mesmo estado implica não haver diferença booleana entre eles." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! Não há diferença quando os dois são iguais." },
        { id: "c", text: "Indefinido", correct: false, feedbackWrong: "O resultado é falso." },
        { id: "d", text: "Verdadeiro se A vier antes de B na frase", correct: false, feedbackWrong: "A ordem na frase não muda a igualdade dos valores." },
      ],
    },
    {
      id: "p7-e3",
      temaSlug: "prova-7",
      question: "**Operador E:** O resultado de **verdadeiro E falso E verdadeiro** (avaliado da esquerda para a direita) é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "V E F dá falso; falso E qualquer coisa continua falso." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! Basta um falso no meio do **E**." },
        { id: "c", text: "Verdadeiro, pois há dois verdadeiros", correct: false, feedbackWrong: "O **E** exige **todos** verdadeiros em sequência." },
        { id: "d", text: "Depende da variável que for avaliada por último", correct: false, feedbackWrong: "O resultado já fica falso após o primeiro **E** com falso." },
      ],
    },
    {
      id: "p7-e4",
      temaSlug: "prova-7",
      question: "**Operador E:** O resultado de **falso E falso** é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "Nenhuma parte é verdadeira." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! O **E** exige todas as partes verdadeiras." },
        { id: "c", text: "Verdadeiro porque 'dois falsos se cancelam'", correct: false, feedbackWrong: "Em lógica, não há esse cancelamento no **E**." },
        { id: "d", text: "Indefinido", correct: false, feedbackWrong: "O resultado é falso." },
      ],
    },
    {
      id: "p7-o3",
      temaSlug: "prova-7",
      question: "**Operador OU (inclusivo):** O resultado de **verdadeiro OU verdadeiro** é:",
      options: [
        { id: "a", text: "Falso", correct: false, feedbackWrong: "No **OU** inclusivo, qualquer verdadeiro basta." },
        { id: "b", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! Ambas as partes sustentam o **OU**." },
        { id: "c", text: "Falso no inclusivo quando as duas são verdadeiras", correct: false, feedbackWrong: "O inclusivo **não** exclui o caso 'as duas verdadeiras'." },
        { id: "d", text: "Só é verdadeiro se as duas forem diferentes", correct: false, feedbackWrong: "V OU V continua verdadeiro." },
      ],
    },
    {
      id: "p7-o4",
      temaSlug: "prova-7",
      question: "**Operador OU (inclusivo):** O resultado de **verdadeiro OU falso** é:",
      options: [
        { id: "a", text: "Falso", correct: false, feedbackWrong: "A primeira parte já é verdadeira." },
        { id: "b", text: "Verdadeiro", correct: true, feedbackCorrect: "Correto! Basta uma parte verdadeira." },
        { id: "c", text: "Falso porque a segunda parte é falsa", correct: false, feedbackWrong: "O **OU** não exige as duas verdadeiras." },
        { id: "d", text: "Só é verdadeiro se a parte falsa for ignorada", correct: false, feedbackWrong: "O resultado já é verdadeiro pela primeira parte." },
      ],
    },
    {
      id: "p7-n3",
      temaSlug: "prova-7",
      question: "**Operador NÃO:** A negação de **verdadeiro** é:",
      options: [
        { id: "a", text: "Verdadeiro", correct: false, feedbackWrong: "Negação inverte verdadeiro para falso." },
        { id: "b", text: "Falso", correct: true, feedbackCorrect: "Correto! Não-verdadeiro é falso." },
        { id: "c", text: "Verdadeiro na segunda negação apenas", correct: false, feedbackWrong: "Uma negação já resolve." },
        { id: "d", text: "Indefinido", correct: false, feedbackWrong: "O resultado é falso." },
      ],
    },
    {
      id: "p7-n4",
      temaSlug: "prova-7",
      question: "**Operador NÃO:** A expressão **NÃO (NÃO A)**, quando A é uma condição booleana, equivale a:",
      options: [
        { id: "a", text: "Sempre falso", correct: false, feedbackWrong: "Dupla negação devolve o valor de A." },
        { id: "b", text: "A própria condição A", correct: true, feedbackCorrect: "Correto! NÃO(NÃO A) restaura A." },
        { id: "c", text: "NÃO A", correct: false, feedbackWrong: "Seria só uma negação a mais que A." },
        { id: "d", text: "A invertida só se A for falsa", correct: false, feedbackWrong: "Vale para qualquer valor de A." },
      ],
    },
    {
      id: "p7-t5",
      temaSlug: "prova-7",
      question: "**Teoria:** Em expressões que misturam **E** e **OU**, o uso de **parênteses** serve principalmente para:",
      options: [
        { id: "a", text: "Deixar o texto mais longo", correct: false, feedbackWrong: "Parênteses não são enfeite; mudam a ordem de avaliação." },
        { id: "b", text: "Definir **qual parte** se agrupa e avalia antes", correct: true, feedbackCorrect: "Correto! Remove ambiguidade entre **E** e **OU**." },
        { id: "c", text: "Tornar o **OU** exclusivo automaticamente", correct: false, feedbackWrong: "Parênteses não alteram o tipo do **OU** por si só." },
        { id: "d", text: "Impedir o uso do **NÃO**", correct: false, feedbackWrong: "O **NÃO** pode aparecer dentro ou fora dos parênteses." },
      ],
    },
    {
      id: "p7-t6",
      temaSlug: "prova-7",
      question: "**Teoria:** Pelas **leis de De Morgan**, a negação de **(A OU B)** equivale a:",
      options: [
        { id: "a", text: "(NÃO A) **OU** (NÃO B)", correct: false, feedbackWrong: "Essa forma corresponderia à negação do **E**." },
        { id: "b", text: "(NÃO A) **E** (NÃO B)", correct: true, feedbackCorrect: "Correto! Negação do **OU** vira **E** das negações." },
        { id: "c", text: "A **OU** B", correct: false, feedbackWrong: "A expressão não permanece igual." },
        { id: "d", text: "(A **E** B)", correct: false, feedbackWrong: "Faltam as negações em A e B." },
      ],
    },
    {
      id: "p7-t7",
      temaSlug: "prova-7",
      question: "**Teoria:** No **OU exclusivo** (XOR) entre duas condições, o resultado é **verdadeiro** quando:",
      options: [
        { id: "a", text: "As duas são verdadeiras ou as duas são falsas", correct: false, feedbackWrong: "No XOR, VV e FF costumam dar falso." },
        { id: "b", text: "**Exatamente uma** das duas é verdadeira", correct: true, feedbackCorrect: "Correto! XOR exige um 'sim' e um 'não'." },
        { id: "c", text: "Pelo menos uma é verdadeira", correct: false, feedbackWrong: "Isso descreve o **OU** inclusivo, não o exclusivo." },
        { id: "d", text: "Nunca; XOR sempre é falso", correct: false, feedbackWrong: "VF ou FV tipicamente dão verdadeiro no XOR." },
      ],
    },
    {
      id: "p7-t8",
      temaSlug: "prova-7",
      question: "**Teoria:** Com **curto-circuito** na expressão **A E B**, se **A** já for **falso**, então:",
      options: [
        { id: "a", text: "**B** pode não ser avaliado, pois o **E** já é falso", correct: true, feedbackCorrect: "Correto! Basta uma parte falsa." },
        { id: "b", text: "**B** deve ser avaliado sempre", correct: false, feedbackWrong: "Com curto-circuito, **B** pode ser pulado nesse caso." },
        { id: "c", text: "O resultado passa a ser verdadeiro", correct: false, feedbackWrong: "Com **A** falso, o **E** já é falso." },
        { id: "d", text: "O **E** vira **OU**", correct: false, feedbackWrong: "O operador não muda; só a avaliação de **B** pode ser omitida." },
      ],
    },
    {
      id: "p7-t9",
      temaSlug: "prova-7",
      question: "**Teoria:** Para qualquer condição A, a conjunção **A E (NÃO A)** é sempre:",
      options: [
        { id: "a", text: "Verdadeira", correct: false, feedbackWrong: "A e sua negação não podem ser verdadeiras ao mesmo tempo." },
        { id: "b", text: "Falsa", correct: true, feedbackCorrect: "Correto! É uma contradição clássica." },
        { id: "c", text: "Depende do contexto", correct: false, feedbackWrong: "Em lógica clássica, é sempre falsa." },
        { id: "d", text: "Indefinida", correct: false, feedbackWrong: "O resultado é falso." },
      ],
    },
    {
      id: "p7-t10",
      temaSlug: "prova-7",
      question: "**Teoria:** Para qualquer condição A, a disjunção **A OU (NÃO A)** (OU inclusivo) é sempre:",
      options: [
        { id: "a", text: "Falsa", correct: false, feedbackWrong: "Ou A vale ou sua negação vale; uma das partes é verdadeira." },
        { id: "b", text: "Verdadeira", correct: true, feedbackCorrect: "Correto! É uma tautologia: cobre todos os casos." },
        { id: "c", text: "Só verdadeira se A for verdadeira", correct: false, feedbackWrong: "Se A for falsa, **NÃO A** é verdadeira; o **OU** segue verdadeiro." },
        { id: "d", text: "Indefinida", correct: false, feedbackWrong: "O resultado é sempre verdadeiro na lógica clássica." },
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
  7: "Operadores lógicos e comparação",
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
