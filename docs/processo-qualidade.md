# Processo de Qualidade - Documento Principal

> **Versão Final** - Processo completo. Para versão simplificada (menos burocracia), veja [`versao-inicial/`](versao-inicial/).

## 1. Visão Geral

Este documento estabelece o processo de qualidade de software da empresa, definindo padrões, práticas e procedimentos para garantir a entrega de produtos com alta qualidade.

## 2. Objetivos

- Garantir que todos os produtos atendam aos requisitos de qualidade estabelecidos
- Reduzir a taxa de defeitos em produção
- Estabelecer processos claros e padronizados para toda a equipe
- Facilitar a comunicação entre equipes (Dev, QA, Product)
- Melhorar continuamente a qualidade através de métricas e feedback

## 3. Ciclo de Vida do Teste

### 3.1 Fases do Teste

```
Planejamento → Análise → Design → Execução → Relatório → Fechamento
```

#### 3.1.1 Planejamento
- Análise de requisitos e histórias de usuário
- Definição de estratégia de teste
- Estimativa de esforço
- Alocação de recursos
- Criação do Test Plan

#### 3.1.2 Análise
- Identificação de casos de teste
- Análise de riscos
- Definição de dados de teste
- Identificação de dependências

#### 3.1.3 Design
- Criação de casos de teste detalhados
- Preparação de ambiente de teste
- Criação de dados de teste
- Configuração de ferramentas

#### 3.1.4 Execução
- Execução de casos de teste
- Reporte de bugs
- Reteste de bugs corrigidos
- Atualização de status

#### 3.1.5 Relatório
- Compilação de resultados
- Análise de métricas
- Relatório de status
- Recomendações

#### 3.1.6 Fechamento
- Arquivamento de artefatos
- Lições aprendidas
- Atualização de documentação
- Fechamento de issues

## 4. Tipos de Teste

### 4.1 Testes Funcionais
- **Objetivo**: Validar se a funcionalidade atende aos requisitos
- **Escopo**: Features, user stories, requisitos funcionais
- **Quando executar**: Durante desenvolvimento e antes de release

### 4.2 Testes de Regressão
- **Objetivo**: Garantir que mudanças não quebraram funcionalidades existentes
- **Escopo**: Funcionalidades críticas e principais fluxos
- **Quando executar**: Após cada release, antes de deploy em produção

### 4.3 Testes de Integração
- **Objetivo**: Validar a integração entre componentes/sistemas
- **Escopo**: APIs, serviços, integrações externas
- **Quando executar**: Após desenvolvimento de integrações


### 4.6 Testes de Usabilidade
- **Objetivo**: Validar experiência do usuário
- **Escopo**: Interface, fluxos principais, acessibilidade
- **Quando executar**: Durante desenvolvimento de novas features, antes de releases

### 4.7 Testes de Aceitação (UAT)
- **Objetivo**: Validação final pelo usuário/Product Owner
- **Escopo**: Features completas, fluxos end-to-end
- **Quando executar**: Antes de release em produção

## 5. Definição de Pronto (Definition of Done - DoD)

Uma feature/story é considerada **PRONTA** quando:

- [ ] Código desenvolvido e revisado (Code Review aprovado)
- [ ] Testes unitários criados e passando
- [ ] Testes funcionais executados e aprovados
- [ ] Testes de regressão executados (quando aplicável)
- [ ] Bugs críticos e altos resolvidos
- [ ] Documentação atualizada (quando aplicável)
- [ ] Deploy realizado em ambiente de QA/Staging
- [ ] Aprovado pelo QA
- [ ] Aprovado pelo Product Owner (UAT)
- [ ] Sempendências técnicas resolvidas

## 6. Definição de Pronto para Teste (Definition of Ready for Testing)

Uma feature/story está **PRONTA PARA TESTE** quando:

- [ ] Requisitos claros e documentados
- [ ] Código desenvolvido e deployado em ambiente de teste
- [ ] Ambiente de teste configurado e disponível
- [ ] Dados de teste preparados (quando necessário)
- [ ] Acesso ao ambiente concedido ao QA
- [ ] Documentação técnica disponível (quando aplicável)
- [ ] Dependências resolvidas
- [ ] Build estável disponível

## 7. Fluxo de Trabalho

### 7.1 Fluxo Completo (Story → Release)

```
1. Product Owner cria Story/Epic
   ↓
2. Desenvolvedor pega a story (To Do → In Progress)
   ↓
3. Desenvolvedor implementa e faz deploy em DEV
   ↓
4. Story movida para "Ready for Testing"
   ↓
5. QA analisa requisitos e cria Test Plan
   ↓
6. QA executa testes (In Testing)
   ↓
7. Bugs encontrados são reportados
   ↓
8. Desenvolvedor corrige bugs
   ↓
9. QA retesta bugs corrigidos
   ↓
10. Movida para Ready por STG
   ↓
11. Deploy em Staging
   ↓
12. Testes realizados pelo PO
   ↓
13. Aprovação final → Deploy em Produção
```

### 7.2 Estados da Story no Jira

- **To Do**: Story criada, aguardando desenvolvimento
- **In Progress**: Desenvolvedor trabalhando
- **Ready for Testing**: Pronta para QA testar
- **In Testing**: QA executando testes
- **Blocked**: Bloqueada por dependência ou impedimento
- **Done**: Testada e aprovada, pronta para release

## 8. Ambientes

### 8.1 Desenvolvimento (DEV)
- **Propósito**: Ambiente para desenvolvimento e testes iniciais
- **Acesso**: Desenvolvedores e QA
- **Dados**: Dados de teste, podem ser resetados
- **Deploy**: Automático via CI/CD após commit

### 8.2 QA/Teste
- **Propósito**: Ambiente principal para testes funcionais
- **Acesso**: QA e desenvolvedores
- **Dados**: Dados de teste controlados, resetados periodicamente
- **Deploy**: Manual ou automático após aprovação em DEV

### 8.3 Staging
- **Propósito**: Ambiente de pré-produção, testes finais
- **Acesso**: QA, Product Owner, stakeholders
- **Dados**: Dados similares à produção (mascarados)
- **Deploy**: Manual, antes de releases

### 8.4 Produção
- **Propósito**: Ambiente final, usuários reais
- **Acesso**: Limitado, apenas para monitoramento
- **Dados**: Dados reais de produção
- **Deploy**: Manual, após aprovação completa

## 9. Gestão de Bugs

### 9.1 Severidade do Bug

A severidade indica o **impacto** do bug no sistema:

#### Crítica (P1 - Blocker)
- Sistema inoperante ou funcionalidade crítica completamente quebrada
- Bloqueia testes de outras funcionalidades
- Exemplo: Login não funciona, sistema não carrega

#### Alta (P2 - Major)
- Funcionalidade importante quebrada, mas com workaround
- Impacta significativamente a experiência do usuário
- Exemplo: Checkout não funciona, mas há alternativa

#### Média (P3 - Minor)
- Funcionalidade parcialmente quebrada ou comportamento incorreto
- Impacto moderado, não bloqueia uso principal
- Exemplo: Validação de campo não funciona corretamente

#### Baixa (P4 - Trivial)
- Problemas cosméticos, textos, UI/UX
- Impacto mínimo na funcionalidade
- Exemplo: Botão desalinhado, texto com erro de digitação

### 9.2 Prioridade do Bug

A prioridade indica a **urgência** de correção:

#### Urgente
- Deve ser corrigido imediatamente (mesmo dia)
- Geralmente bugs críticos ou que bloqueiam release

#### Alta
- Deve ser corrigido antes da próxima release
- Bugs de alta severidade

#### Média
- Deve ser corrigido em release futura
- Bugs de média/baixa severidade

#### Baixa
- Pode ser corrigido quando houver tempo
- Melhorias, bugs cosméticos

### 9.3 Ciclo de Vida do Bug

```
Novo → Atribuído → Em Progresso → Resolvido → Retestado → Fechado
                                    ↓
                                 Reaberto (se necessário)
```

#### Estados do Bug:
- **Novo**: Bug reportado, aguardando análise
- **Atribuído**: Bug atribuído ao desenvolvedor responsável
- **Em Progresso**: Desenvolvedor trabalhando na correção
- **Resolvido**: Bug corrigido, aguardando reteste
- **Retestado**: QA verificou a correção
- **Fechado**: Bug confirmado como corrigido
- **Reaberto**: Bug ainda existe após correção
- **Rejeitado**: Bug não é válido ou não será corrigido

### 9.4 Critérios para Fechar Bug

Um bug pode ser fechado quando:
- [ ] Correção foi implementada
- [ ] Reteste foi executado e aprovado
- [ ] Testes de regressão relacionados foram executados
- [ ] Documentação atualizada (se necessário)

## 10. Integração com Jira

### 10.1 Configuração de Workflows

Workflows customizados devem ser configurados para:
- Stories/Features
- Bugs
- Test Cases
- Test Executions

### 10.2 Campos Customizados

Campos recomendados para adicionar no Jira:

- **Severidade**: Dropdown (Crítica, Alta, Média, Baixa)
- **Ambiente**: Dropdown (DEV, QA, Staging, Produção)
- **Tipo de Teste**: Multi-select (Funcional, Regressão, Performance, etc.)
- **Versão Testada**: Text field
- **Browser/OS**: Text field
- **Reproduzível**: Checkbox (Sim/Não)
- **Passos para Reproduzir**: Text area
- **Resultado Esperado**: Text area
- **Resultado Atual**: Text area

### 10.3 Dashboards

Dashboards recomendados no Jira:
- Dashboard de QA: Métricas de teste, bugs por severidade, status de stories
- Dashboard de Release: Progresso de release, bugs abertos, cobertura de testes
- Dashboard Executivo: Taxa de defeitos, tempo de resolução, qualidade geral

## 11. Comunicação e Colaboração

### 11.1 Daily Standup
- QA deve participar das dailies
- Reportar: O que testou ontem, o que vai testar hoje, impedimentos

### 11.2 Planning
- QA participa do planning para:
  - Entender requisitos
  - Estimar esforço de teste
  - Identificar riscos

### 11.3 Review/Demo
- QA apresenta resultados de testes
- Demonstra bugs encontrados
- Compartilha métricas de qualidade

### 11.4 Retrospective
- QA contribui com:
  - O que funcionou bem
  - O que pode melhorar
  - Ações para próxima sprint

## 12. Melhoria Contínua

### 12.1 Revisão Periódica
- Revisar processo trimestralmente
- Analisar métricas e identificar melhorias
- Ajustar processos conforme necessário

### 12.2 Feedback
- Coletar feedback da equipe regularmente
- Implementar melhorias sugeridas
- Documentar lições aprendidas

### 12.3 Automação
- Identificar oportunidades de automação
- Priorizar automação de testes repetitivos
- Expandir cobertura de testes automatizados

## 13. Referências

- Templates de bugs: `../templates/bug-report-template.md`
- Templates de test plan: `../templates/test-plan-template.md`
- Métricas: `../metricas/`
- Guia de progressão: `guia-progressao-carreira.md`

---

**Última atualização**: 2026-02-04  
**Responsável**: Equipe de QA  
**Versão**: 1.0
