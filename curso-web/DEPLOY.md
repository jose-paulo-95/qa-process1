# Deploy do Curso QA Junior → Pleno

Guia para disponibilizar a aplicação na web.

---

## Opção 1: Vercel (recomendado – gratuito)

A Vercel é a plataforma oficial do Next.js e oferece plano gratuito.

### Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta na [Vercel](https://vercel.com) (login com GitHub)

### Passos

1. **Enviar o projeto para o GitHub**
   ```bash
   cd c:\Projetos\qa-process1
   git init
   git add .
   git commit -m "Curso QA Junior para Pleno"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/qa-process1.git
   git push -u origin main
   ```

2. **Importar na Vercel**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Clique em "Import Git Repository" e selecione o repositório
   - **Importante:** Se o repositório contém a pasta `curso-web`, configure:
     - **Root Directory:** `curso-web`
     - **Build Command:** `npm run build` (padrão)
     - **Output Directory:** `.next` (padrão)
   - Clique em "Deploy"

3. **Aguardar o build** (cerca de 1–2 minutos)

4. **Acessar a URL** – algo como `qa-process1.vercel.app`

### Deploy automático

Cada `git push` na branch `main` gera um novo deploy automaticamente.

---

## Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com) e faça login com GitHub
2. "Add new site" → "Import an existing project"
3. Selecione o repositório
4. Configure:
   - **Base directory:** `curso-web`
   - **Build command:** `npm run build`
   - **Publish directory:** `curso-web/.next` (ou use o plugin Next.js da Netlify)
5. Deploy

---

## Opção 3: Rodar localmente (desenvolvimento)

```bash
cd c:\Projetos\qa-process1\curso-web
npm run dev
```

Acesse: http://localhost:3000

---

## Opção 4: Build para produção local

```bash
cd c:\Projetos\qa-process1\curso-web
npm run build
npm run start
```

A aplicação ficará em http://localhost:3000 (porta padrão).

---

## Links de recursos

Os links no curso apontam para arquivos locais (`docs/`, `templates/`, `metricas/`). Em produção, eles podem não funcionar se esses arquivos não estiverem no repositório. Opções:

1. **Manter links** – funcionam se o repositório incluir `docs/` e `templates/`
2. **Ajustar links** – apontar para URLs externas ou documentação hospedada
3. **Copiar recursos** – incluir os arquivos necessários dentro de `curso-web/public/`

---

## Variáveis de ambiente

O curso não usa variáveis de ambiente no momento. Se precisar no futuro, configure em:

- **Vercel:** Settings → Environment Variables
- **Netlify:** Site settings → Environment variables
