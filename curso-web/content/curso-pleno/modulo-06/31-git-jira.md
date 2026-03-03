# Git e Jira

**Baseado no curso: Git e Github para iniciantes (Udemy)**

---

## O que é Git e GitHub

### Controle de versão

Git é o **sistema de controle de versão** mais usado no mundo. Permite:

- Rastrear alterações em arquivos ao longo do tempo
- Trabalhar em equipe sem sobrescrever alterações
- Recuperar versões anteriores
- Evitar pastas duplicadas com pequenas modificações

### História do Git

Criado por Linus Torvalds em 2005 para o desenvolvimento do Linux. Distribuído, rápido e open source.

### GitHub

**GitHub** é a principal plataforma para hospedar repositórios Git. Funciona como uma rede social para código: repositórios remotos, pull requests, issues, colaboração.

---

## Configurando o Git

### Instalação

- **Windows:** [git-scm.com](https://git-scm.com)
- **Linux:** `sudo apt install git` (Ubuntu/Debian)
- **macOS:** `brew install git`

### Configuração inicial

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## Essencial do Git

### Inicializar repositório

```bash
git init
```

### Ciclo de vida dos arquivos

| Status | Descrição |
|--------|-----------|
| **Untracked** | Arquivo novo, Git ainda não rastreia |
| **Staged** | Adicionado ao índice, pronto para commit |
| **Modified** | Alterado após último commit |
| **Unmodified** | Sem alterações desde último commit |

### Comandos principais

| Comando | Uso |
|---------|-----|
| `git status` | Ver status dos arquivos |
| `git add .` | Adicionar todos ao stage |
| `git add arquivo` | Adicionar arquivo específico |
| `git commit -m "mensagem"` | Registrar alterações |
| `git log` | Ver histórico de commits |
| `git diff` | Ver diferenças não commitadas |
| `git checkout -- arquivo` | Desfazer alterações não commitadas |

---

## Repositórios remotos

### Conectar ao GitHub

```bash
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
```

### Comandos remotos

| Comando | Uso |
|---------|-----|
| `git pull` | Buscar e mesclar alterações do remoto |
| `git push` | Enviar commits para o remoto |
| `git clone url` | Clonar repositório existente |
| `git fetch` | Buscar alterações sem mesclar |

---

## Ramificação (Branches)

Branches permitem trabalhar em funcionalidades isoladas sem afetar o código principal.

| Comando | Uso |
|---------|-----|
| `git branch` | Listar branches |
| `git branch nome` | Criar nova branch |
| `git checkout -b feature/x` | Criar e mudar para branch |
| `git merge branch` | Mesclar branch na atual |
| `git branch -d nome` | Deletar branch local |

### Fluxo típico para QA

1. `git checkout -b fix/teste-login` – criar branch para correção
2. Fazer alterações e commits
3. `git push origin fix/teste-login` – enviar para remoto
4. Abrir Pull Request no GitHub
5. Após aprovação, merge na main

---

## Jira

### JQL (Jira Query Language)

Filtros avançados para buscar issues. Exemplo:

```
project = QA AND status = "In Progress"
assignee = currentUser() AND sprint in openSprints()
```

### Dashboards

Painéis com filtros, gráficos e widgets para acompanhar o trabalho da equipe.

### Integração Git + Jira

- Vincule commits a issues: `git commit -m "QA-123: corrigir teste de login"`
- O Jira detecta automaticamente referências em commits e PRs
