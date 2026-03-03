# Metodologia de Trabalho - Kanban com Integração QA

> **Versão Final** - Processo completo com 6 colunas. Para versão simplificada (3 colunas, menos burocracia), veja [`versao-inicial/metodologia-trabalho.md`](versao-inicial/metodologia-trabalho.md).

## 1. Introdução

Este documento define a metodologia de trabalho **Kanban** para integrar o processo de QA com o desenvolvimento de software. O Kanban foi escolhido como metodologia principal por oferecer flexibilidade, foco em fluxo contínuo e adaptabilidade a demandas variáveis.

**Por que Kanban?**
- Flexibilidade para lidar com demandas variáveis
- Foco em fluxo contínuo de trabalho
- Menos cerimônias, mais execução
- Melhor para entrega contínua
- Permite visualização clara do trabalho em progresso

## 2. Visão Geral do Kanban

### 2.1 Princípios do Kanban

**Princípios fundamentais**:
1. **Visualizar o trabalho**: Usar quadro Kanban para ver todo o trabalho
2. **Limitar trabalho em progresso (WIP)**: Evitar sobrecarga e focar em conclusão
3. **Gerenciar fluxo**: Otimizar o fluxo de trabalho do início ao fim
4. **Tornar políticas explícitas**: Definir regras claras do processo
5. **Melhorar colaborativamente**: Melhorar continuamente baseado em dados

### 2.2 Benefícios para QA

- **Flexibilidade**: QA pode pegar trabalho assim que está pronto, sem esperar sprint
- **Feedback rápido**: Testes acontecem continuamente, não apenas no final
- **Visibilidade**: Fácil ver o que está aguardando teste
- **Foco**: WIP limits garantem que QA não fique sobrecarregado
- **Métricas claras**: Lead time e cycle time mostram eficiência do processo

## 3. Papéis e Responsabilidades

### 3.1 Product Owner (PO)
- Define e prioriza o backlog
- Aceita ou rejeita stories
- Representa o cliente/usuário
- Reabastece o backlog quando necessário

### 3.2 Desenvolvedores
- Desenvolvem as features
- Fazem code review
- Corrigem bugs
- Movem stories para "Ready for Testing" quando prontas

### 3.3 QA
- Cria e executa testes
- Reporta bugs
- Valida qualidade
- Move stories para "Done" após aprovação
- Participa de cerimônias Kanban

### 3.4 Tech Lead / Líder Técnico (Opcional)
- Remove impedimentos
- Garante que o processo Kanban seja seguido
- Facilita melhorias no fluxo

## 4. Kanban - Implementação Detalhada

### 4.1 Quadro Kanban

**Colunas sugeridas**:
```
Backlog → To Do → In Development → Ready for Testing → In Testing → Done
```

**Descrição das colunas**:

- **Backlog**: Todas as stories priorizadas, aguardando início
- **To Do**: Stories prontas para serem trabalhadas (requisitos claros)
- **In Development**: Stories em desenvolvimento ativo
- **Ready for Testing**: Stories prontas para QA testar (deploy feito, ambiente disponível)
- **In Testing**: Stories sendo testadas pelo QA
- **Done**: Stories testadas e aprovadas, prontas para release

**Coluna adicional (opcional)**:
- **Blocked**: Stories bloqueadas por impedimentos (pode ser uma coluna ou label)

### 4.2 WIP Limits (Work In Progress)

**Limites recomendados** (ajustar conforme tamanho da equipe):

- **In Development**: 3-5 stories
  - Evita que devs comecem muitas coisas ao mesmo tempo
  - Foca em conclusão

- **Ready for Testing**: 2-3 stories
  - Garante que há trabalho disponível para QA
  - Evita acúmulo excessivo

- **In Testing**: 2-3 stories
  - Permite que QA foque em completar testes
  - Evita sobrecarga

**Como definir WIP Limits**:
1. Começar com limites conservadores
2. Observar o fluxo por 1-2 semanas
3. Ajustar baseado em:
   - Tempo de espera nas colunas
   - Capacidade da equipe
   - Bloqueios frequentes

**Regra de ouro**: Se uma coluna está sempre cheia, o WIP limit pode estar muito alto. Se está sempre vazia, pode estar muito baixo.

### 4.3 Regras do Fluxo

#### Regras de Transição

1. **Backlog → To Do**
   - PO prioriza e move stories do Backlog para To Do
   - Story deve ter requisitos claros e aceitáveis

2. **To Do → In Development**
   - Desenvolvedor pega story quando tem capacidade (respeitando WIP limit)
   - Atualiza status no Jira
   - Atribui story para si mesmo

3. **In Development → Ready for Testing**
   - Dev marca story como "Ready for Testing" quando:
     - Código desenvolvido e revisado
     - Deploy feito em ambiente de teste
     - Ambiente estável e disponível
   - Notifica QA (via Jira, Slack, etc.)

4. **Ready for Testing → In Testing**
   - QA pega story quando tem capacidade (respeitando WIP limit)
   - Atualiza status no Jira
   - Inicia testes

5. **In Testing → Done**
   - QA aprova story após:
     - Testes funcionais completos
     - Bugs críticos/altos resolvidos (se houver)
     - Aprovação do QA
   - Move para "Done"

6. **In Testing → In Development** (Retorno)
   - Se bugs críticos encontrados, story volta para dev
   - Bugs são reportados e linkados à story
   - Após correção, story volta para "Ready for Testing"

7. **Qualquer coluna → Blocked**
   - Story pode ser bloqueada de qualquer coluna
   - Deve ter motivo claro e ação para desbloqueio
   - Revisar bloqueios diariamente

### 4.4 Cerimônias Kanban

#### 4.4.1 Daily Standup (15 minutos)

**Participantes**: Toda a equipe

**Formato focado no fluxo**:
- O que está bloqueado no fluxo?
- O que está travando o progresso?
- O que precisa de ajuda?

**QA deve reportar**:
- Stories em teste
- Bugs encontrados que podem bloquear outras stories
- Stories prontas para teste que estão aguardando
- Bloqueios (ambiente, dados, dependências)

**Dica**: Focar em remover bloqueios, não em status detalhado de cada pessoa.

#### 4.4.2 Reunião de Planning (Planejamento)

**Frequência**: Semanal

**Participantes**: PO, Tech Lead, representantes de Dev e QA

**Agenda**:
1. Revisar backlog atual
2. PO prioriza itens do backlog para mover para To-do
3. PO reprioriza itens que já estão em To-do (se necessário)
4. Equipe discute requisitos e esclarece dúvidas
5. QA pergunta sobre:
   - Critérios de aceite
   - Ambientes necessários
   - Dependências
   - Riscos de teste
6. Equipe revisa e estima stories priorizadas
7. Stories movidas para To-do conforme priorização

**Output**: To-do atualizado com stories priorizadas e prontas para desenvolvimento

#### 4.4.3 Retrospective (Retrospectiva)

**Frequência**: Mensal ou quando necessário (ex: após problemas significativos)

**Participantes**: Toda a equipe

**Formato focado no fluxo**:
1. **Análise de métricas**:
   - Lead time (tempo do backlog até done)
   - Cycle time (tempo de in development até done)
   - Throughput (stories entregues por período)
   - Taxa de bloqueios

2. **O que funcionou bem no fluxo?**
   - O que ajudou a entregar mais rápido?
   - O que melhorou a qualidade?

3. **O que está bloqueando o fluxo?**
   - Onde há gargalos?
   - O que está causando atrasos?

4. **Ações para melhorar o fluxo**
   - Ajustar WIP limits?
   - Mudar processo?
   - Melhorar comunicação?

**Output**: Action items específicos para melhorar o fluxo

#### 4.4.4 Revisão de WIP Limits (Opcional)

**Frequência**: Mensal ou quando necessário

**Participantes**: Tech Lead, representantes da equipe

**Agenda**:
1. Revisar métricas de fluxo
2. Analisar se WIP limits estão adequados
3. Ajustar limites se necessário
4. Documentar mudanças e razões

## 5. Integração QA no Processo

### 5.1 Shift-Left Testing no Kanban

**Conceito**: Testar o mais cedo possível no ciclo de desenvolvimento

**Práticas no Kanban**:
- QA participa do planning para entender requisitos
- QA revisa histórias no backlog antes do desenvolvimento começar
- QA cria casos de teste em paralelo ao desenvolvimento
- Testes exploratórios desde o início
- QA pode revisar código durante desenvolvimento (code review)

### 5.2 Testes Contínuos no Fluxo Kanban

**Durante o desenvolvimento**:
- QA testa features assim que ficam prontas (Ready for Testing)
- Não há "final de sprint" - testes acontecem continuamente
- Feedback rápido para desenvolvedores
- Bugs são reportados e corrigidos imediatamente

**Antes do deploy**:
- Smoke tests automatizados
- Testes de regressão críticos
- Validação de ambiente

**Vantagem do Kanban**: Testes acontecem assim que código está pronto, reduzindo lead time total.

### 5.3 Definição de Pronto (DoD)

Uma story só está "Done" quando:
- [ ] Código desenvolvido e revisado
- [ ] Testes unitários passando
- [ ] Testes funcionais executados e aprovados
- [ ] Bugs críticos/altos resolvidos
- [ ] Aprovado pelo QA
- [ ] Aprovado pelo PO

### 5.4 Definição de Pronto para Teste

Story pronta para QA testar quando:
- [ ] Código desenvolvido
- [ ] Deploy em ambiente de teste
- [ ] Ambiente disponível e estável
- [ ] Dados de teste preparados
- [ ] Documentação disponível

## 6. Comunicação e Colaboração

### 6.1 Comunicação Diária

**Canais recomendados**:
- **Slack/Teams**: Para comunicação rápida
- **Jira**: Para rastreamento formal
- **Email**: Para comunicações importantes/formal

**Boas práticas**:
- QA deve comunicar bugs claramente
- Devs devem avisar quando story está pronta
- Usar @mention para notificações importantes

### 6.2 Pair Testing

**Quando fazer**:
- Features complexas
- Quando QA tem dúvidas sobre comportamento esperado
- Para conhecimento compartilhado

**Como fazer**:
- QA e Dev testam juntos
- Dev explica comportamento esperado
- QA valida e reporta problemas

### 6.3 Code Review com Olhar de QA

**QA pode participar de code reviews para**:
- Verificar se há lógica de validação
- Identificar possíveis pontos de falha
- Sugerir melhorias de tratamento de erro

## 7. Métricas e Melhoria

### 7.1 Métricas do Kanban

**Métricas principais do fluxo**:

#### Lead Time
- **Definição**: Tempo desde que story entra no backlog até ser entregue (Done)
- **Como medir**: Data de criação → Data de conclusão
- **Meta**: Reduzir continuamente
- **Uso**: Entender tempo total de entrega

#### Cycle Time
- **Definição**: Tempo desde que story entra em "In Development" até "Done"
- **Como medir**: Data de início do desenvolvimento → Data de conclusão
- **Meta**: Reduzir continuamente
- **Uso**: Entender eficiência do processo de desenvolvimento

#### Throughput
- **Definição**: Número de stories entregues (Done) por período (semana/mês)
- **Como medir**: Contar stories em "Done" por período
- **Meta**: Aumentar ou manter estável
- **Uso**: Entender capacidade de entrega da equipe

#### WIP (Work In Progress)
- **Definição**: Número de stories em progresso simultaneamente
- **Como medir**: Contar stories em "In Development" + "In Testing"
- **Meta**: Respeitar WIP limits definidos
- **Uso**: Identificar sobrecarga

#### Taxa de Bloqueios
- **Definição**: % de stories bloqueadas vs. total em progresso
- **Como medir**: Stories bloqueadas / Total em progresso × 100
- **Meta**: < 10%
- **Uso**: Identificar problemas no fluxo

#### Tempo de Espera
- **Definição**: Tempo que stories ficam aguardando em cada coluna
- **Como medir**: Tempo médio em "Ready for Testing", "In Testing", etc.
- **Meta**: Minimizar tempo de espera
- **Uso**: Identificar gargalos

**Métricas de qualidade**:
- Bugs encontrados por fase
- Taxa de escape (bugs em produção)
- Tempo médio de teste por story
- Taxa de retorno (stories que voltam de "In Testing" para "In Development")

### 7.2 Retrospectivas Efetivas

**Formato sugerido**:
1. **Start/Stop/Continue**:
   - O que começar a fazer?
   - O que parar de fazer?
   - O que continuar fazendo?

2. **4Ls (Liked, Learned, Lacked, Longed for)**:
   - O que gostamos?
   - O que aprendemos?
   - O que faltou?
   - O que desejamos?

**Action Items**:
- Devem ser específicos e acionáveis
- Ter dono e prazo
- Ser revisados na próxima retro

## 8. Implementação Gradual

### 8.1 Fase 1: Preparação (Semana 1-2)
- [ ] Configurar quadro Kanban no Jira
- [ ] Definir colunas do fluxo
- [ ] Estabelecer WIP limits iniciais
- [ ] Configurar workflows no Jira
- [ ] Treinar equipe nos princípios do Kanban
- [ ] Definir papéis e responsabilidades

### 8.2 Fase 2: Piloto (Semana 3-4)
- [ ] Começar a usar o quadro Kanban
- [ ] Coletar métricas iniciais (lead time, cycle time)
- [ ] Ajustar WIP limits conforme necessário
- [ ] Realizar primeira retrospectiva
- [ ] Coletar feedback da equipe

### 8.3 Fase 3: Ajustes (Semana 5-8)
- [ ] Refinar processos baseado em aprendizado
- [ ] Ajustar WIP limits baseado em dados
- [ ] Otimizar fluxo (remover gargalos)
- [ ] Estabelecer ritmo de planning
- [ ] Melhorar comunicação

### 8.4 Fase 4: Maturidade (Semana 9+)
- [ ] Processo estabilizado
- [ ] Métricas sendo coletadas regularmente
- [ ] Melhoria contínua ativa
- [ ] WIP limits otimizados
- [ ] Fluxo eficiente e previsível

## 9. Ferramentas Recomendadas

### 9.1 Gestão de Projetos
- **Jira**: Para rastreamento de stories, bugs, testes
- **Confluence**: Para documentação

### 9.2 Comunicação
- **Slack/Teams**: Comunicação diária
- **Email**: Comunicações formais

### 9.3 Testes
- **Jira**: Para casos de teste e execuções
- **Postman**: Para testes de API
- **Selenium/Cypress**: Para automação web
- **Appium**: Para automação mobile

## 10. Checklist de Implementação

### Antes de Começar
- [ ] Quadro Kanban configurado no Jira
- [ ] Colunas do fluxo definidas
- [ ] WIP limits estabelecidos
- [ ] Equipe treinada nos princípios do Kanban
- [ ] Ferramentas configuradas (Jira com workflows)
- [ ] Processos documentados
- [ ] Papéis definidos

### Durante a Execução
- [ ] Cerimônias sendo realizadas
- [ ] Métricas sendo coletadas
- [ ] Retrospectivas gerando ações
- [ ] Comunicação fluindo

### Melhoria Contínua
- [ ] Processos sendo ajustados
- [ ] Feedback sendo coletado
- [ ] Ações sendo implementadas
- [ ] Equipe evoluindo

## 11. Referências

- Processo de Qualidade: `processo-qualidade.md`
- Templates: `../templates/`
- Métricas: `../metricas/`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
