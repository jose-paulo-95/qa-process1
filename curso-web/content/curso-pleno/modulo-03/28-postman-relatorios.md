# Postman: relatórios HTML

**Baseado no curso: Automação de testes de API com Postman**

---

## Newman HTML Reporter

O reporter padrão do Newman (`--reporters html`) gera relatório básico. Para relatórios mais ricos, use **newman-reporter-htmlextra**.

---

## Instalação

```bash
npm install -g newman-reporter-htmlextra
```

---

## Geração do relatório

```bash
newman run collection.json \
  -e environment.json \
  -r htmlextra \
  --reporter-htmlextra-export report.html
```

---

## O que o relatório inclui

- Resumo de pass/fail
- Tempo de execução por request
- Detalhes de cada request e resposta
- Gráficos e estatísticas
- Histórico de execuções (se configurado)

---

## Documentação de testes

O relatório HTML serve como **documentação viva** dos testes. Compartilhe com a equipe ou publique em um servidor (ex: GitHub Pages) após cada execução no CI.
