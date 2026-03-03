export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
  feedbackWrong?: string;
  feedbackCorrect?: string;
}

export interface QuizQuestion {
  id: string;
  temaSlug: string;
  question: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    temaSlug: "04-processo-teste",
    question: "Qual a ordem correta das fases do ciclo de vida do teste?",
    options: [
      {
        id: "a",
        text: "Execução → Design → Planejamento → Análise → Relatório → Fechamento",
        correct: false,
        feedbackWrong: "A ordem começa com Planejamento, não Execução. O teste deve ser planejado antes de ser executado.",
      },
      {
        id: "b",
        text: "Planejamento → Análise → Design → Execução → Relatório → Fechamento",
        correct: true,
        feedbackCorrect: "Correto! O ciclo segue essa sequência: primeiro planejamos, analisamos e projetamos os testes, executamos, relatamos e finalizamos.",
      },
      {
        id: "c",
        text: "Análise → Design → Execução → Planejamento → Fechamento → Relatório",
        correct: false,
        feedbackWrong: "Planejamento deve vir antes da Análise. Não faz sentido executar testes antes de planejar a estratégia.",
      },
      {
        id: "d",
        text: "Planejamento → Execução → Design → Análise → Relatório → Fechamento",
        correct: false,
        feedbackWrong: "Design e Análise devem vir antes da Execução. Os casos de teste precisam ser criados antes de serem executados.",
      },
    ],
  },
  {
    id: "q2",
    temaSlug: "06-ciclo-vida-tipos",
    question: "Teste de regressão tem como objetivo:",
    options: [
      {
        id: "a",
        text: "Testar apenas funcionalidades novas",
        correct: false,
        feedbackWrong: "Regressão não foca só no novo. O objetivo é garantir que o que já funcionava continua funcionando.",
      },
      {
        id: "b",
        text: "Garantir que mudanças não quebraram funcionalidades existentes",
        correct: true,
        feedbackCorrect: "Correto! A regressão verifica se as alterações recentes não introduziram defeitos em funcionalidades que já estavam OK.",
      },
      {
        id: "c",
        text: "Validar performance do sistema",
        correct: false,
        feedbackWrong: "Validação de performance é um tipo de teste não-funcional. Regressão é sobre funcionalidades existentes.",
      },
      {
        id: "d",
        text: "Descobrir bugs explorando sem script",
        correct: false,
        feedbackWrong: "Exploração sem script é teste exploratório. Regressão geralmente usa casos de teste definidos para fluxos críticos.",
      },
    ],
  },
  {
    id: "q3",
    temaSlug: "07-severidade-prioridade",
    question: "Severidade de um bug refere-se a:",
    options: [
      {
        id: "a",
        text: "Urgência de correção",
        correct: false,
        feedbackWrong: "Urgência de correção é a prioridade. Severidade é outra dimensão.",
      },
      {
        id: "b",
        text: "Impacto do defeito no sistema",
        correct: true,
        feedbackCorrect: "Correto! Severidade mede o impacto: o quão grave é o defeito para o sistema (ex: Crítica, Alta, Média, Baixa).",
      },
      {
        id: "c",
        text: "Complexidade para corrigir",
        correct: false,
        feedbackWrong: "Complexidade de correção não define severidade. Um bug simples de corrigir pode ter severidade crítica.",
      },
      {
        id: "d",
        text: "Quantidade de usuários afetados",
        correct: false,
        feedbackWrong: "Quantidade de afetados pode influenciar prioridade, mas severidade é o impacto técnico no sistema.",
      },
    ],
  },
  {
    id: "q4",
    temaSlug: "03-sete-principios",
    question: "Qual princípio afirma que testes exaustivos são impossíveis?",
    options: [
      {
        id: "a",
        text: "Testes mostram a presença de defeitos",
        correct: false,
        feedbackWrong: "Esse princípio fala que testes evidenciam defeitos, mas não provam ausência deles. Não é sobre exaustividade.",
      },
      {
        id: "b",
        text: "Testes exaustivos são impossíveis",
        correct: true,
        feedbackCorrect: "Correto! Não é viável testar todas as combinações. Devemos priorizar com base em riscos e técnicas.",
      },
      {
        id: "c",
        text: "Testes antecipados economizam tempo",
        correct: false,
        feedbackWrong: "Esse princípio fala sobre encontrar defeitos cedo. Não trata da impossibilidade de testar tudo.",
      },
      {
        id: "d",
        text: "Os defeitos se agrupam",
        correct: false,
        feedbackWrong: "Esse princípio diz que defeitos tendem a se concentrar em certas áreas. Não é sobre exaustividade.",
      },
    ],
  },
  {
    id: "q5",
    temaSlug: "01-o-que-e-teste",
    question: "O que é teste de software?",
    options: [
      {
        id: "a",
        text: "Apenas executar o sistema para ver se funciona",
        correct: false,
        feedbackWrong: "Teste é mais que execução. Inclui planejamento, análise, design e atividades sistemáticas.",
      },
      {
        id: "b",
        text: "Conjunto de atividades que avaliam se o software atende aos requisitos",
        correct: true,
        feedbackCorrect: "Correto! O teste é um processo que inclui planejamento, análise, design, execução e conclusão para avaliar a qualidade.",
      },
      {
        id: "c",
        text: "Corrigir bugs no código",
        correct: false,
        feedbackWrong: "Corrigir bugs é atividade de desenvolvimento. Teste identifica e reporta defeitos.",
      },
      {
        id: "d",
        text: "Garantir que não existem defeitos",
        correct: false,
        feedbackWrong: "Testes não podem provar ausência de defeitos. Podem apenas evidenciar sua presença.",
      },
    ],
  },
  {
    id: "q6",
    temaSlug: "02-por-que-testes",
    question: "Qual a relação entre erro, defeito e falha?",
    options: [
      {
        id: "a",
        text: "São sinônimos",
        correct: false,
        feedbackWrong: "Não são sinônimos. Cada um tem um significado específico na cadeia causa-efeito.",
      },
      {
        id: "b",
        text: "Erro humano → Defeito no código → Falha na execução",
        correct: true,
        feedbackCorrect: "Correto! O erro humano causa um defeito no código; quando executado, o defeito pode causar uma falha visível.",
      },
      {
        id: "c",
        text: "Falha causa defeito que causa erro",
        correct: false,
        feedbackWrong: "A ordem é invertida. O erro humano vem primeiro, depois o defeito, depois a falha.",
      },
      {
        id: "d",
        text: "Defeito e falha são a mesma coisa",
        correct: false,
        feedbackWrong: "Defeito está no código; falha é a manifestação visível quando o defeito é executado.",
      },
    ],
  },
  {
    id: "q7",
    temaSlug: "17-api-rest-fundamentos-mentalidade",
    question: "Por que testar na camada de API é vantajoso em times ágeis?",
    options: [
      { id: "a", text: "Porque substitui testes de interface", correct: false, feedbackWrong: "API e interface são complementares, não substitutos." },
      { id: "b", text: "Permite validar o backend antes do front estar pronto e integra ao pipeline", correct: true, feedbackCorrect: "Correto! Testes de API permitem paralelismo e feedback rápido no CI." },
      { id: "c", text: "Porque é mais fácil que testar na interface", correct: false, feedbackWrong: "Cada camada tem seus desafios." },
      { id: "d", text: "Porque a API não muda", correct: false, feedbackWrong: "APIs evoluem; testes garantem o contrato." },
    ],
  },
  {
    id: "q7b",
    temaSlug: "18-api-rest-anatomia-http",
    question: "Qual método HTTP é usado para criar um novo recurso?",
    options: [
      { id: "a", text: "GET", correct: false, feedbackWrong: "GET é para buscar/ler dados, não criar." },
      { id: "b", text: "POST", correct: true, feedbackCorrect: "Correto! POST é o método padrão para criar novos recursos em APIs REST." },
      { id: "c", text: "PUT", correct: false, feedbackWrong: "PUT é para atualizar recurso existente, não criar novo." },
      { id: "d", text: "DELETE", correct: false, feedbackWrong: "DELETE remove recursos, não cria." },
    ],
  },
  {
    id: "q21a",
    temaSlug: "21-api-rest-inconsistencias-gerenciamento",
    question: "Severidade e prioridade de um defeito em API são:",
    options: [
      { id: "a", text: "Sinônimos", correct: false, feedbackWrong: "São conceitos distintos." },
      { id: "b", text: "Severidade = impacto no sistema; Prioridade = urgência de correção", correct: true, feedbackCorrect: "Correto! Severidade mede a gravidade; prioridade define quando corrigir." },
      { id: "c", text: "Definidas apenas pelo desenvolvedor", correct: false, feedbackWrong: "QA, PO e dev participam." },
      { id: "d", text: "Sempre iguais", correct: false, feedbackWrong: "Podem divergir (ex: severidade alta, prioridade baixa)." },
    ],
  },
  {
    id: "q22a",
    temaSlug: "22-api-rest-planejamento",
    question: "No planejamento de testes de API, considerar Riscos significa:",
    options: [
      { id: "a", text: "Ignorar endpoints menos usados", correct: false, feedbackWrong: "Priorizar não é ignorar." },
      { id: "b", text: "Identificar e priorizar testes nos pontos de maior impacto", correct: true, feedbackCorrect: "Correto! Riscos guiam onde concentrar esforço de teste." },
      { id: "c", text: "Testar apenas em produção", correct: false, feedbackWrong: "Produção não é ambiente de teste." },
      { id: "d", text: "Eliminar todos os riscos antes de testar", correct: false, feedbackWrong: "Riscos são identificados para priorizar, não eliminar antes." },
    ],
  },
  {
    id: "q8",
    temaSlug: "24-swagger-leitura",
    question: "OpenAPI/Swagger é usado principalmente para:",
    options: [
      { id: "a", text: "Executar testes automatizados", correct: false, feedbackWrong: "Swagger documenta a API; a execução é feita por ferramentas como Postman." },
      { id: "b", text: "Documentar e especificar APIs REST", correct: true, feedbackCorrect: "Correto! Swagger/OpenAPI é uma especificação para descrever APIs de forma padronizada." },
      { id: "c", text: "Substituir o Postman", correct: false, feedbackWrong: "Swagger documenta; Postman executa. São complementares." },
      { id: "d", text: "Gerar código de frontend", correct: false, feedbackWrong: "Pode gerar código, mas o uso principal é documentação e especificação da API." },
    ],
  },
  {
    id: "q10",
    temaSlug: "24-postman-variaveis",
    question: "Variáveis de Environment no Postman servem para:",
    options: [
      { id: "a", text: "Armazenar apenas IDs de usuário", correct: false, feedbackWrong: "Environment guarda configs por ambiente (baseUrl, etc), não só IDs." },
      { id: "b", text: "Trocar configurações entre DEV, QA e PROD", correct: true, feedbackCorrect: "Correto! Environments permitem alternar entre ambientes sem alterar as requests." },
      { id: "c", text: "Executar scripts de teste", correct: false, feedbackWrong: "Scripts são na aba Tests; variáveis armazenam dados." },
      { id: "d", text: "Gerar relatórios HTML", correct: false, feedbackWrong: "Relatórios são gerados pelo Newman com reporter." },
    ],
  },
  {
    id: "q11",
    temaSlug: "25-postman-scripts-suites",
    question: "O script na aba 'Tests' do Postman executa:",
    options: [
      { id: "a", text: "Antes de enviar a request", correct: false, feedbackWrong: "Pré-request executa antes; Tests executa depois." },
      { id: "b", text: "Após receber a resposta", correct: true, feedbackCorrect: "Correto! O script Tests valida a resposta e pode salvar dados em variáveis." },
      { id: "c", text: "Apenas em modo manual", correct: false, feedbackWrong: "Tests executa em qualquer execução, inclusive Newman." },
      { id: "d", text: "Só para requests POST", correct: false, feedbackWrong: "Tests funciona para qualquer método HTTP." },
    ],
  },
  {
    id: "q12",
    temaSlug: "26-postman-json-schema-dados",
    question: "JSON Schema no Postman é usado para:",
    options: [
      { id: "a", text: "Enviar dados no body da request", correct: false, feedbackWrong: "JSON Schema valida a resposta, não o body enviado." },
      { id: "b", text: "Validar se a resposta segue a estrutura esperada", correct: true, feedbackCorrect: "Correto! pm.response.to.have.jsonSchema(schema) valida o contrato da API." },
      { id: "c", text: "Configurar ambientes", correct: false, feedbackWrong: "Ambientes usam variáveis, não JSON Schema." },
      { id: "d", text: "Gerar relatórios", correct: false, feedbackWrong: "Relatórios são gerados pelo Newman." },
    ],
  },
  {
    id: "q13",
    temaSlug: "27-postman-newman",
    question: "Newman permite:",
    options: [
      { id: "a", text: "Editar collections na interface gráfica", correct: false, feedbackWrong: "Newman é CLI; edição é no Postman." },
      { id: "b", text: "Executar collections via linha de comando", correct: true, feedbackCorrect: "Correto! Newman roda collections no terminal, ideal para CI/CD." },
      { id: "c", text: "Substituir o Postman completamente", correct: false, feedbackWrong: "Newman complementa o Postman; não substitui." },
      { id: "d", text: "Criar variáveis de ambiente", correct: false, feedbackWrong: "Variáveis são criadas no Postman ou em arquivos JSON." },
    ],
  },
  {
    id: "q14",
    temaSlug: "28-postman-relatorios",
    question: "newman-reporter-htmlextra gera:",
    options: [
      { id: "a", text: "Apenas logs em texto", correct: false, feedbackWrong: "htmlextra gera relatório HTML rico." },
      { id: "b", text: "Relatório HTML com resumo, gráficos e detalhes", correct: true, feedbackCorrect: "Correto! htmlextra produz relatórios HTML detalhados para documentação." },
      { id: "c", text: "Collections exportadas", correct: false, feedbackWrong: "Collections são exportadas pelo Postman." },
      { id: "d", text: "Variáveis de ambiente", correct: false, feedbackWrong: "Reporter gera relatórios, não variáveis." },
    ],
  },
  {
    id: "q15",
    temaSlug: "29-postman-ci-github-actions",
    question: "Integrar Newman no GitHub Actions permite:",
    options: [
      { id: "a", text: "Editar collections no GitHub", correct: false, feedbackWrong: "GitHub Actions executa; edição é no Postman." },
      { id: "b", text: "Rodar testes de API em cada push no pipeline de CI", correct: true, feedbackCorrect: "Correto! Newman no GitHub Actions executa testes de API automaticamente no CI." },
      { id: "c", text: "Substituir o Postman pelo GitHub", correct: false, feedbackWrong: "GitHub Actions orquestra; Postman/Newman executa os testes." },
      { id: "d", text: "Criar ambientes no Postman", correct: false, feedbackWrong: "Ambientes são criados no Postman." },
    ],
  },
  {
    id: "q33",
    temaSlug: "33-comunicacao-tecnica",
    question: "UAT significa:",
    options: [
      { id: "a", text: "User Acceptance Testing – validação com usuário/PO", correct: true, feedbackCorrect: "Correto! UAT valida se o sistema atende às necessidades do usuário." },
      { id: "b", text: "Unit Automated Test", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
      { id: "c", text: "Universal API Test", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
      { id: "d", text: "Unified Acceptance Tool", correct: false, feedbackWrong: "UAT é User Acceptance Testing." },
    ],
  },
  {
    id: "q34",
    temaSlug: "34-sql-para-qa",
    question: "Ao usar DELETE em SQL, é essencial:",
    options: [
      { id: "a", text: "Usar sempre SELECT antes", correct: false, feedbackWrong: "SELECT antes pode ajudar, mas o essencial é WHERE." },
      { id: "b", text: "Usar WHERE para filtrar o que será removido", correct: true, feedbackCorrect: "Correto! DELETE sem WHERE apaga todas as linhas da tabela." },
      { id: "c", text: "Fazer backup manual sempre", correct: false, feedbackWrong: "Backup é boa prática, mas WHERE é obrigatório." },
      { id: "d", text: "Usar JOIN no DELETE", correct: false, feedbackWrong: "JOIN pode ser usado, mas WHERE é o essencial." },
    ],
  },
  {
    id: "q16",
    temaSlug: "31-git-jira",
    question: "git checkout -b feature/x faz:",
    options: [
      { id: "a", text: "Deletar a branch feature/x", correct: false, feedbackWrong: "git branch -d deleta; checkout -b cria." },
      { id: "b", text: "Criar e mudar para a branch feature/x", correct: true, feedbackCorrect: "Correto! -b cria a branch e checkout muda para ela." },
      { id: "c", text: "Mesclar a branch feature/x", correct: false, feedbackWrong: "git merge mescla; checkout -b cria e muda." },
      { id: "d", text: "Enviar a branch para o remoto", correct: false, feedbackWrong: "git push envia; checkout -b cria localmente." },
    ],
  },
  {
    id: "q17",
    temaSlug: "26-cypress-setup-basico",
    question: "Cypress permite testar aplicações web de três formas. Qual NÃO é uma delas?",
    options: [
      { id: "a", text: "Testes funcionais (e2e)", correct: false, feedbackWrong: "E2e é uma das formas." },
      { id: "b", text: "Testes de API (backend)", correct: false, feedbackWrong: "cy.request testa API diretamente." },
      { id: "c", text: "Testes de frontend com API virtualizada", correct: false, feedbackWrong: "cy.intercept virtualiza requisições." },
      { id: "d", text: "Testes de carga e performance", correct: true, feedbackCorrect: "Correto! Cypress não é focado em carga; use k6 ou JMeter para isso." },
    ],
  },
  {
    id: "q18",
    temaSlug: "27-cypress-elementos-sincronismo",
    question: "O Cypress aplica retry automático em cy.get() porque:",
    options: [
      { id: "a", text: "O elemento pode não existir ainda", correct: true, feedbackCorrect: "Correto! Cypress espera o elemento aparecer (até 4s) antes de falhar." },
      { id: "b", text: "Precisa de sleep entre comandos", correct: false, feedbackWrong: "Cypress evita sleep; usa retry automático." },
      { id: "c", text: "O navegador é lento", correct: false, feedbackWrong: "O retry é por elementos assíncronos, não lentidão." },
      { id: "d", text: "Só funciona com data-cy", correct: false, feedbackWrong: "Retry funciona com qualquer seletor." },
    ],
  },
  {
    id: "q19",
    temaSlug: "28-cypress-fixtures-helpers",
    question: "Fixtures no Cypress servem para:",
    options: [
      { id: "a", text: "Configurar o navegador", correct: false, feedbackWrong: "Configuração é no cypress.config." },
      { id: "b", text: "Armazenar dados de teste reutilizáveis (JSON)", correct: true, feedbackCorrect: "Correto! Fixtures são arquivos estáticos em cypress/fixtures/." },
      { id: "c", text: "Definir comandos customizados", correct: false, feedbackWrong: "Comandos são em cypress/support/commands." },
      { id: "d", text: "Interceptar requests", correct: false, feedbackWrong: "Interceptação é feita com cy.intercept()." },
    ],
  },
  {
    id: "q20",
    temaSlug: "29-cypress-testes-funcionais-api",
    question: "cy.request() no Cypress é usado para:",
    options: [
      { id: "a", text: "Enviar dados para um input", correct: false, feedbackWrong: "cy.get().type() envia para inputs." },
      { id: "b", text: "Testar a API REST diretamente", correct: true, feedbackCorrect: "Correto! cy.request faz requisições HTTP para testar o backend." },
      { id: "c", text: "Aguardar um elemento", correct: false, feedbackWrong: "cy.get() com retry aguarda elementos." },
      { id: "d", text: "Clicar em um botão", correct: false, feedbackWrong: "cy.get().click() clica." },
    ],
  },
  {
    id: "q21",
    temaSlug: "30-cypress-intercept-pom",
    question: "cy.intercept() permite:",
    options: [
      { id: "a", text: "Configurar o navegador", correct: false, feedbackWrong: "intercept mocka requisições HTTP." },
      { id: "b", text: "Interceptar e mockar requisições HTTP", correct: true, feedbackCorrect: "Correto! cy.intercept virtualiza ou espia chamadas à API." },
      { id: "c", text: "Aguardar elementos", correct: false, feedbackWrong: "cy.get() aguarda elementos." },
      { id: "d", text: "Ler fixtures", correct: false, feedbackWrong: "cy.fixture() lê fixtures." },
    ],
  },
  {
    id: "q13-charter",
    temaSlug: "13-caixa-branca-experiencia",
    question: "Um charter em teste exploratório serve para:",
    options: [
      { id: "a", text: "Documentar todos os casos de teste", correct: false, feedbackWrong: "Charter define o objetivo da sessão, não casos." },
      { id: "b", text: "Definir o objetivo da sessão em uma frase", correct: true, feedbackCorrect: "Correto! Charter foca a exploração (ex: 'Explorar fluxo de checkout')." },
      { id: "c", text: "Substituir o plano de teste", correct: false, feedbackWrong: "Charter complementa; não substitui planejamento." },
      { id: "d", text: "Automatizar testes", correct: false, feedbackWrong: "Charter é para sessões exploratórias manuais." },
    ],
  },
  {
    id: "q05-psicologia",
    temaSlug: "05-psicologia-teste",
    question: "O mindset de teste 'destruidor' significa:",
    options: [
      { id: "a", text: "Focar em quebrar o sistema e encontrar defeitos", correct: true, feedbackCorrect: "Correto! O testador precisa questionar e invalidar, não apenas validar." },
      { id: "b", text: "Focar em fazer o sistema funcionar", correct: false, feedbackWrong: "Esse é o mindset 'construtor', típico do desenvolvedor." },
      { id: "c", text: "Reportar bugs de forma agressiva", correct: false, feedbackWrong: "Comunicação deve ser objetiva e construtiva." },
      { id: "d", text: "Testar apenas o caminho feliz", correct: false, feedbackWrong: "Destruidor explora cenários que quebram." },
    ],
  },
  {
    id: "q08-estaticos",
    temaSlug: "08-testes-estaticos",
    question: "Testes estáticos são realizados:",
    options: [
      { id: "a", text: "Executando o código", correct: false, feedbackWrong: "Testes estáticos não executam o código." },
      { id: "b", text: "Analisando artefatos sem executar (requisitos, código, docs)", correct: true, feedbackCorrect: "Correto! Revisões de documentos e código são testes estáticos." },
      { id: "c", text: "Apenas em produção", correct: false, feedbackWrong: "Estáticos são feitos antes da execução." },
      { id: "d", text: "Só por ferramentas automatizadas", correct: false, feedbackWrong: "Walkthrough e inspeção são revisões manuais." },
    ],
  },
  {
    id: "q09-equivalencia",
    temaSlug: "09-participacao-equivalencia",
    question: "No particionamento de equivalência, o objetivo é:",
    options: [
      { id: "a", text: "Testar todos os valores possíveis", correct: false, feedbackWrong: "A técnica reduz testes usando classes." },
      { id: "b", text: "Testar um representante de cada classe de equivalência", correct: true, feedbackCorrect: "Correto! Classes agrupam entradas com comportamento esperado igual." },
      { id: "c", text: "Testar apenas valores válidos", correct: false, feedbackWrong: "Inclui classes válidas e inválidas." },
      { id: "d", text: "Testar apenas nos limites", correct: false, feedbackWrong: "Valor limite é outra técnica." },
    ],
  },
  {
    id: "q10-valor-limite",
    temaSlug: "10-valor-limite",
    question: "Para um campo que aceita 10 a 100, a análise de valor limite inclui testar:",
    options: [
      { id: "a", text: "Apenas 10 e 100", correct: false, feedbackWrong: "Inclui valores adjacentes aos limites." },
      { id: "b", text: "9, 10, 11, 99, 100, 101", correct: true, feedbackCorrect: "Correto! Mínimo-1, mínimo, mínimo+1, máximo-1, máximo, máximo+1." },
      { id: "c", text: "Apenas valores dentro do intervalo", correct: false, feedbackWrong: "Valores fora revelam bugs nos limites." },
      { id: "d", text: "Valores aleatórios", correct: false, feedbackWrong: "Valor limite usa valores específicos nos limites." },
    ],
  },
  {
    id: "q11-positivo-negativo",
    temaSlug: "11-casos-positivos-negativos",
    question: "Caso negativo em teste significa:",
    options: [
      { id: "a", text: "Entrada válida que o sistema deve aceitar", correct: false, feedbackWrong: "Esse é o caso positivo." },
      { id: "b", text: "Entrada inválida que o sistema deve rejeitar ou exibir erro", correct: true, feedbackCorrect: "Correto! Negativo testa que o sistema rejeita dados inválidos." },
      { id: "c", text: "Teste que falhou", correct: false, feedbackWrong: "Negativo é tipo de cenário, não resultado." },
      { id: "d", text: "Teste de performance", correct: false, feedbackWrong: "Negativo é sobre dados inválidos." },
    ],
  },
  {
    id: "q12-tabela-decisao",
    temaSlug: "12-tabela-decisao-transicao-estados",
    question: "A tabela de decisão é usada quando:",
    options: [
      { id: "a", text: "Há apenas uma condição", correct: false, feedbackWrong: "Tabela de decisão é para múltiplas condições." },
      { id: "b", text: "A lógica depende de combinações de condições", correct: true, feedbackCorrect: "Correto! Cada linha da tabela vira um caso de teste." },
      { id: "c", text: "Não há regras de negócio", correct: false, feedbackWrong: "Tabela de decisão modela regras com condições." },
      { id: "d", text: "O sistema não tem estados", correct: false, feedbackWrong: "Transição de estados é outra técnica para fluxos." },
    ],
  },
  {
    id: "q14-bdd",
    temaSlug: "14-bdd-atdd",
    question: "BDD usa linguagem:",
    options: [
      { id: "a", text: "Apenas técnica (código)", correct: false, feedbackWrong: "BDD prioriza linguagem de negócio." },
      { id: "b", text: "Natural e estruturada (Dado/Quando/Então)", correct: true, feedbackCorrect: "Correto! Gherkin usa Dado, Quando, Então para cenários legíveis." },
      { id: "c", text: "Diagramas UML", correct: false, feedbackWrong: "BDD usa texto estruturado." },
      { id: "d", text: "Apenas em inglês", correct: false, feedbackWrong: "Gherkin suporta múltiplos idiomas." },
    ],
  },
  {
    id: "q15-planejamento",
    temaSlug: "15-planejamento-riscos",
    question: "Teste baseado em riscos significa:",
    options: [
      { id: "a", text: "Ignorar áreas de baixo risco", correct: false, feedbackWrong: "Priorizar não é ignorar." },
      { id: "b", text: "Alocar mais esforço onde o risco é maior", correct: true, feedbackCorrect: "Correto! Áreas críticas e instáveis recebem mais atenção." },
      { id: "c", text: "Eliminar todos os riscos antes de testar", correct: false, feedbackWrong: "Riscos guiam priorização, não eliminação." },
      { id: "d", text: "Testar apenas em produção", correct: false, feedbackWrong: "Riscos são do produto e do processo de teste." },
    ],
  },
  {
    id: "q16-monitoramento",
    temaSlug: "16-monitoramento-defeitos",
    question: "No ciclo de vida de defeitos, o estado 'Resolvido' significa:",
    options: [
      { id: "a", text: "Defeito reportado", correct: false, feedbackWrong: "Esse é o estado 'Novo'." },
      { id: "b", text: "Corrigido pelo desenvolvedor", correct: true, feedbackCorrect: "Correto! Resolvido = correção feita; Fechado = verificado pelo QA." },
      { id: "c", text: "Verificado e aceito pelo QA", correct: false, feedbackWrong: "Esse é o estado 'Fechado'." },
      { id: "d", text: "Não será corrigido", correct: false, feedbackWrong: "Esse é o estado 'Rejeitado'." },
    ],
  },
  {
    id: "q19-arquitetura",
    temaSlug: "19-api-rest-arquitetura",
    question: "Na arquitetura de API Rest, a camada Controller é responsável por:",
    options: [
      { id: "a", text: "Acesso a dados (banco)", correct: false, feedbackWrong: "Repository acessa dados." },
      { id: "b", text: "Receber requisição HTTP, validar entrada e delegar ao Service", correct: true, feedbackCorrect: "Correto! Controller é o ponto de entrada da API." },
      { id: "c", text: "Regras de negócio", correct: false, feedbackWrong: "Service contém regras de negócio." },
      { id: "d", text: "Estrutura dos dados", correct: false, feedbackWrong: "Entity/Model define estrutura." },
    ],
  },
  {
    id: "q20-tecnicas-api",
    temaSlug: "20-api-rest-tecnicas-abordagens",
    question: "Teste de API 'isolado' significa:",
    options: [
      { id: "a", text: "Fluxo completo (login → criar → buscar → deletar)", correct: false, feedbackWrong: "Esse é o teste de cenário." },
      { id: "b", text: "Cada request testa um endpoint de forma independente", correct: true, feedbackCorrect: "Correto! Isolado usa dados mockados ou fixtures; cenário testa fluxo completo." },
      { id: "c", text: "Testar só em ambiente local", correct: false, feedbackWrong: "Isolado refere-se à independência dos testes." },
      { id: "d", text: "Ignorar autenticação", correct: false, feedbackWrong: "Isolado não significa sem auth." },
    ],
  },
  {
    id: "q23-workspaces",
    temaSlug: "23-postman-workspaces-collections",
    question: "Collections no Postman servem para:",
    options: [
      { id: "a", text: "Trocar entre DEV, QA e PROD", correct: false, feedbackWrong: "Environments trocam ambientes." },
      { id: "b", text: "Agrupar requests por pasta lógica (Login, Usuários, Produtos)", correct: true, feedbackCorrect: "Correto! Collections organizam requests relacionados." },
      { id: "c", text: "Armazenar variáveis globais", correct: false, feedbackWrong: "Variáveis são em Environment ou Collection." },
      { id: "d", text: "Executar testes via CLI", correct: false, feedbackWrong: "Newman executa; collections armazenam requests." },
    ],
  },
  {
    id: "q25-swagger-validacao",
    temaSlug: "25-swagger-validacao",
    question: "Validar contrato da API no Postman significa:",
    options: [
      { id: "a", text: "Verificar apenas se a API está online", correct: false, feedbackWrong: "Contrato é sobre formato e estrutura." },
      { id: "b", text: "Garantir que request/response respeitam o documentado", correct: true, feedbackCorrect: "Correto! pm.expect() ou jsonSchema validam a estrutura." },
      { id: "c", text: "Testar performance", correct: false, feedbackWrong: "Contrato valida estrutura, não performance." },
      { id: "d", text: "Importar o Swagger uma vez", correct: false, feedbackWrong: "Importar gera collection; validação é no script Tests." },
    ],
  },
  {
    id: "q32-logs",
    temaSlug: "32-logs-metricas",
    question: "A aba Network do DevTools é usada para:",
    options: [
      { id: "a", text: "Ver erros de JavaScript", correct: false, feedbackWrong: "Console mostra erros JS." },
      { id: "b", text: "Analisar requisições HTTP, status e payload", correct: true, feedbackCorrect: "Correto! Network exibe requests, responses e ajuda no debug de APIs." },
      { id: "c", text: "Editar HTML", correct: false, feedbackWrong: "Elements edita HTML." },
      { id: "d", text: "Medir tempo de CPU", correct: false, feedbackWrong: "Performance tab mostra CPU." },
    ],
  },
];

export function getQuizByTema(temaSlug: string): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter((q) => q.temaSlug === temaSlug);
}
