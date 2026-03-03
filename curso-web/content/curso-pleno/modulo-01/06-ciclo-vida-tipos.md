# Testes no ciclo de vida e tipos

**CTFL 4.0 - Capítulo 2**

---

## Níveis de teste

| Nível | Objetivo |
|-------|----------|
| **Unitário** | Validar unidades (funções, classes) isoladamente |
| **Integração** | Validar comunicação entre componentes |
| **Sistema** | Validar o sistema completo |
| **Aceitação** | Validar com usuário/PO |

---

## Tipos de teste

| Tipo | O que valida |
|------|--------------|
| **Funcional** | Requisitos e funcionalidades |
| **Não-funcional** | Performance, usabilidade, segurança |
| **Estrutural** | Cobertura de código (caixa branca) |
| **Relacionado a mudanças** | Regressão, smoke, confirmação |

---

## Regressão e Smoke

- **Smoke:** teste rápido para ver se o build básico funciona
- **Regressão:** garantir que mudanças não quebraram o que já funcionava

---

## Modelos SDLC

| Modelo | Característica | Teste |
|--------|----------------|-------|
| **Waterfall** | Sequencial, fases bem definidas | Teste após desenvolvimento |
| **V-model** | Testes paralelos a cada fase de dev | Integração, sistema, aceitação |
| **Iterativo** | Ciclos incrementais | Teste em cada iteração |
| **Agile** | Sprints curtos, entrega contínua | Teste em cada sprint |
| **DevOps** | CI/CD, automação | Testes automatizados no pipeline |

---

## Shift-left

Antecipar testes para **antes** do código. Revisar requisitos, fazer testes estáticos, testar cedo. Reduz custo e tempo de correção.
