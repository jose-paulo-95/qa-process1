# Postman: integração com GitHub Actions

**Baseado no curso: Automação de testes de API com Postman**

---

## GitHub Actions

Execute testes de API no pipeline de CI a cada push:

```yaml
name: API Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g newman newman-reporter-htmlextra
      - run: newman run collection.json -e env.json -r htmlextra --reporter-htmlextra-export report.html
      - uses: actions/upload-artifact@v4
        with:
          name: postman-report
          path: report.html
```

---

## Boas práticas

- Não commite credenciais; use **GitHub Secrets** para tokens e variáveis sensíveis
- Armazene environments separados por ambiente (dev, qa, prod)
- Publique o relatório para análise após cada build (artifact ou publicação em servidor)
