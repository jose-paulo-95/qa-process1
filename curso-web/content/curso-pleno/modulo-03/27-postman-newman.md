# Postman: Newman

**Baseado no curso: Automação de testes de API com Postman**

---

## O que é Newman

Newman é o **CLI do Postman**. Executa collections via linha de comando, sem abrir a interface.

---

## Instalação

```bash
npm install -g newman
```

---

## Execução básica

```bash
newman run collection.json -e environment.json
```

- `collection.json` – exporte da collection no Postman
- `-e environment.json` – arquivo de ambiente (opcional)

---

## Opções úteis

```bash
newman run collection.json \
  -e env.json \
  --reporters cli,html \
  --reporter-html-export report.html
```

- `--reporters` – formato de saída (cli, json, html)
- `--reporter-html-export` – gera relatório HTML
- `-n 3` – número de iterações

---

## Uso em CI/CD

Newman retorna exit code 0 (sucesso) ou 1 (falha). Integre no pipeline:

```bash
newman run collection.json -e env.json || exit 1
```
