# Configurar repositório no GitHub

O Git já está inicializado e o primeiro commit foi feito. Próximos passos para enviar ao GitHub:

---

## 1. Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name:** `qa-process1` (ou outro nome)
3. **Visibility:** Private ou Public
4. **Não** marque "Add a README" (o projeto já tem conteúdo)
5. Clique em **Create repository**

---

## 2. Conectar e enviar

No terminal, execute (substitua `SEU-USUARIO` pelo seu usuário do GitHub):

```powershell
cd c:\Projetos\qa-process1

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/qa-process1.git

# Enviar o código
git push -u origin main
```

Se usar **SSH** em vez de HTTPS:

```powershell
git remote add origin git@github.com:SEU-USUARIO/qa-process1.git
git push -u origin main
```

---

## 3. Autenticação

- **HTTPS:** O GitHub pode pedir usuário e senha. Use um [Personal Access Token](https://github.com/settings/tokens) em vez da senha.
- **SSH:** Certifique-se de que sua chave SSH está configurada no GitHub.

---

## 4. Próximos deploys

Após configurar, para enviar alterações:

```powershell
git add .
git commit -m "Descrição da alteração"
git push
```
