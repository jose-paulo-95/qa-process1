# Curso QA Junior para Pleno - Aplicação Web

Aplicação Next.js para exibir o curso de evolução QA Junior para Pleno.

## Executar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Estrutura

- `content/curso-pleno/` - Conteúdo em Markdown (módulos do curso)
- `src/app/` - Páginas (início, módulos)
- `src/components/` - Sidebar, MarkdownContent
- `src/lib/` - Lógica de leitura de conteúdo

## Sincronizar conteúdo

O conteúdo é copiado de `docs/avaliacao/pdi/curso-pleno/`. Para atualizar:

```powershell
Copy-Item "..\docs\avaliacao\pdi\curso-pleno\*.md" "content\curso-pleno\"
```

## Evolução futura

A estrutura permite adicionar:
- Autenticação (NextAuth, Clerk)
- Progresso por usuário (banco de dados)
- Provas interativas com correção
- Certificado de conclusão
