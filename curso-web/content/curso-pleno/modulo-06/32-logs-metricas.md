# Logs, debugging e métricas

---

## Debugging

- **Stack trace:** mostra arquivo e linha onde o erro ocorreu; leia de baixo para cima (causa raiz)
- **DevTools Network:** requests/responses, status, payload; filtre por XHR para APIs
- **DevTools Console:** erros JavaScript, logs da aplicação
- **DevTools Performance:** CPU, tempo de carregamento (para análise de lentidão)
- **Logs da aplicação:** arquivos do servidor (ex: application.log)

**Fluxo típico:** Reproduzir bug → DevTools Network → identificar request com erro → ver Response/Payload → correlacionar com backend ou logs.

---

## Métricas

Conceitos detalhados em [kpi-definitions.md](../../../../metricas/kpi-definitions.md):

| Métrica | Fórmula | Uso |
|---------|---------|-----|
| **Taxa de defeitos** | bugs / testes executados | Quantos bugs por teste |
| **Taxa de escape** | bugs em produção / total | Eficácia dos testes pré-release |
| **Pass/Fail** | % testes passando | Saúde da suíte de automação |
| **MTTR** | tempo médio de resolução | Velocidade de correção |

**Coletar no Jira:** JQL para bugs por ambiente, status, severidade. Dashboards para visualizar tendências.

---

## Exercício: Debug de bug real

**Objetivo:** Praticar análise de logs e DevTools.

**Recursos:** Aplicação web (projeto real ou DummyJSON), DevTools do navegador

**Enunciado:** Reproduza um bug real (ou simule um 500). Documente em 5 passos como você usou DevTools e stack trace para chegar à causa. Compartilhe na próxima mentoria para feedback.

**Resposta esperada:** Ex.: 1) Reproduzi o bug; 2) Abri DevTools → Network; 3) Identifiquei request com status 500; 4) Li o body da Response (mensagem de erro); 5) Correlacionei com backend ou stack trace.
