# Template de Checklist

## 1. Checklist de Smoke Test

**Objetivo**: Validar rapidamente se as funcionalidades críticas estão funcionando após um deploy.

**Quando usar**: Após cada deploy em ambiente de teste/staging, antes de iniciar testes completos.

**Tempo estimado**: 15-30 minutos

---

### Funcionalidades Críticas

#### Autenticação
- [ ] Login com credenciais válidas funciona
- [ ] Logout funciona corretamente
- [ ] Recuperação de senha está acessível

#### Navegação
- [ ] Menu principal carrega
- [ ] Links principais funcionam
- [ ] Breadcrumbs estão corretos

#### Páginas Principais
- [ ] Página inicial carrega
- [ ] Dashboard carrega (se aplicável)
- [ ] Páginas críticas são acessíveis

#### APIs/Serviços
- [ ] API de autenticação responde
- [ ] APIs principais respondem corretamente
- [ ] Integrações críticas estão funcionando

#### Performance Básica
- [ ] Páginas carregam em tempo razoável (< 5 segundos)
- [ ] Não há erros 500/404 críticos
- [ ] Console do navegador não mostra erros críticos

**Resultado**: 
- [ ] ✅ Passou - Pode prosseguir com testes completos
- [ ] ❌ Falhou - Bloquear testes até correção

**Bugs Encontrados**: [Listar IDs de bugs críticos encontrados]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Ambiente**: [Ambiente testado]  
**Versão**: [Versão testada]

---

## 2. Checklist de Teste de Regressão

**Objetivo**: Garantir que mudanças não quebraram funcionalidades existentes.

**Quando usar**: Antes de releases, após correções de bugs, após mudanças em código compartilhado.

**Tempo estimado**: 2-4 horas (dependendo do escopo)

---

### Funcionalidades por Módulo

#### Módulo: Autenticação
- [ ] Login com credenciais válidas
- [ ] Login com credenciais inválidas
- [ ] Logout
- [ ] Recuperação de senha
- [ ] Alteração de senha
- [ ] Sessão expira após timeout

#### Módulo: [Nome do Módulo]
- [ ] [Funcionalidade 1]
- [ ] [Funcionalidade 2]
- [ ] [Funcionalidade 3]
- [ ] [Continuar listando...]

#### Módulo: [Nome do Módulo]
- [ ] [Funcionalidade 1]
- [ ] [Funcionalidade 2]
- [ ] [Funcionalidade 3]

---

### Integrações
- [ ] Integração com [Serviço 1] funciona
- [ ] Integração com [Serviço 2] funciona
- [ ] Webhooks estão funcionando
- [ ] APIs externas respondem

---

### Cross-Browser
- [ ] Chrome: Funcionalidades críticas funcionam
- [ ] Firefox: Funcionalidades críticas funcionam
- [ ] Safari: Funcionalidades críticas funcionam
- [ ] Edge: Funcionalidades críticas funcionam

---

### Mobile (se aplicável)
- [ ] iOS: Funcionalidades críticas funcionam
- [ ] Android: Funcionalidades críticas funcionam
- [ ] Responsividade está correta

---

**Resultado**: 
- [ ] ✅ Passou - Todas as funcionalidades críticas OK
- [ ] ⚠️ Parcial - Algumas funcionalidades com problemas
- [ ] ❌ Falhou - Múltiplas funcionalidades quebradas

**Bugs Encontrados**: [Listar IDs de bugs]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Ambiente**: [Ambiente testado]  
**Versão**: [Versão testada]

---

## 3. Checklist de Release

**Objetivo**: Validar que tudo está pronto para release em produção.

**Quando usar**: Antes de cada release em produção.

**Tempo estimado**: 4-8 horas

---

### Pré-Release

#### Documentação
- [ ] Release notes atualizadas
- [ ] Changelog atualizado
- [ ] Documentação técnica atualizada (se necessário)
- [ ] Guia de migração preparado (se necessário)

#### Ambiente
- [ ] Ambiente de staging está atualizado
- [ ] Dados de teste estão preparados
- [ ] Acesso a produção está configurado (se necessário para validação)

#### Código
- [ ] Todas as stories planejadas estão "Done"
- [ ] Code review aprovado para todas as mudanças
- [ ] Testes unitários passando
- [ ] Testes de integração passando

---

### Testes Funcionais

#### Features da Release
- [ ] Feature 1: [Nome] - Testada e aprovada
- [ ] Feature 2: [Nome] - Testada e aprovada
- [ ] Feature 3: [Nome] - Testada e aprovada
- [ ] [Listar todas as features da release]

#### Bugs Corrigidos
- [ ] Bug [ID]: Corrigido e retestado
- [ ] Bug [ID]: Corrigido e retestado
- [ ] [Listar todos os bugs corrigidos na release]

---

### Testes de Regressão

- [ ] Smoke test executado e passou
- [ ] Testes de regressão críticos executados
- [ ] Testes de integração executados
- [ ] Testes de performance básicos executados (se aplicável)

---

### Validação Final

#### Funcionalidades Críticas
- [ ] Login/autenticação funciona
- [ ] Fluxos principais funcionam
- [ ] APIs principais respondem
- [ ] Integrações críticas funcionam

#### Performance
- [ ] Tempo de resposta aceitável
- [ ] Não há memory leaks críticos
- [ ] Carga básica suportada

#### Segurança (Básico)
- [ ] Autenticação funciona
- [ ] Autorização funciona
- [ ] Dados sensíveis não expostos

#### Compatibilidade
- [ ] Navegadores principais suportados
- [ ] Mobile funciona (se aplicável)
- [ ] Responsividade OK

---

### Aprovações

- [ ] QA Lead aprovou
- [ ] Product Owner aprovou (UAT)
- [ ] Tech Lead aprovou (se necessário)
- [ ] Stakeholders notificados

---

### Deploy

- [ ] Plano de rollback preparado
- [ ] Equipe de deploy alinhada
- [ ] Janela de deploy agendada
- [ ] Monitoramento configurado

---

**Resultado**: 
- [ ] ✅ Aprovado para Release
- [ ] ⚠️ Aprovado com Riscos Conhecidos: [Descrever]
- [ ] ❌ Não Aprovado - Bloqueios: [Descrever]

**Bloqueios** (se houver):
- [Bloqueio 1]
- [Bloqueio 2]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Versão da Release**: [Versão]  
**Data Planejada de Release**: [DD/MM/AAAA]

---

## 4. Checklist de Teste de Integração

**Objetivo**: Validar integrações entre sistemas/componentes.

**Quando usar**: Após desenvolvimento de integrações, antes de releases com integrações.

**Tempo estimado**: 2-4 horas

---

### Integração: [Nome da Integração]

#### Configuração
- [ ] Credenciais configuradas corretamente
- [ ] Endpoints configurados
- [ ] Ambiente de teste da integração disponível

#### Testes Funcionais
- [ ] Envio de dados funciona
- [ ] Recebimento de dados funciona
- [ ] Transformação de dados está correta
- [ ] Tratamento de erros funciona

#### Cenários de Erro
- [ ] Timeout é tratado corretamente
- [ ] Erro 4xx é tratado corretamente
- [ ] Erro 5xx é tratado corretamente
- [ ] Dados inválidos são rejeitados

#### Performance
- [ ] Tempo de resposta aceitável
- [ ] Throughput adequado
- [ ] Não há timeouts frequentes

---

### Integração: [Nome da Integração 2]
[Repetir estrutura acima]

---

**Resultado**: 
- [ ] ✅ Todas as integrações funcionando
- [ ] ⚠️ Algumas integrações com problemas: [Listar]
- [ ] ❌ Integrações críticas falhando: [Listar]

**Bugs Encontrados**: [Listar IDs]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Ambiente**: [Ambiente testado]

---

## 5. Checklist de Teste de API

**Objetivo**: Validar endpoints de API.

**Quando usar**: Após desenvolvimento de APIs, antes de releases.

**Tempo estimado**: 1-3 horas

---

### Endpoint: [Nome/Método]

#### Testes Básicos
- [ ] GET/POST/PUT/DELETE funciona
- [ ] Resposta 200 OK para requisições válidas
- [ ] Estrutura JSON está correta
- [ ] Headers estão corretos

#### Validações
- [ ] Validação de campos obrigatórios
- [ ] Validação de tipos de dados
- [ ] Validação de formatos (email, data, etc.)
- [ ] Validação de limites (tamanho, range)

#### Autenticação/Autorização
- [ ] Autenticação funciona (token, API key)
- [ ] Autorização funciona (permissões)
- [ ] Token expirado é tratado
- [ ] Token inválido é tratado

#### Cenários de Erro
- [ ] 400 Bad Request para dados inválidos
- [ ] 401 Unauthorized para não autenticado
- [ ] 403 Forbidden para sem permissão
- [ ] 404 Not Found para recurso inexistente
- [ ] 500 Internal Server Error é tratado

#### Performance
- [ ] Tempo de resposta < [X]ms
- [ ] Suporta [X] requisições por segundo

---

**Resultado**: 
- [ ] ✅ Todos os endpoints funcionando
- [ ] ⚠️ Alguns endpoints com problemas: [Listar]
- [ ] ❌ Endpoints críticos falhando: [Listar]

**Bugs Encontrados**: [Listar IDs]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Ambiente**: [Ambiente testado]

---

## 6. Checklist de Teste Mobile

**Objetivo**: Validar aplicativo mobile.

**Quando usar**: Após desenvolvimento de features mobile, antes de releases.

**Tempo estimado**: 2-4 horas

---

### Plataforma: iOS

#### Instalação
- [ ] App instala corretamente
- [ ] App abre sem crashes
- [ ] Permissões são solicitadas corretamente

#### Funcionalidades Principais
- [ ] Login funciona
- [ ] Navegação funciona
- [ ] Features principais funcionam
- [ ] [Listar outras funcionalidades]

#### Performance
- [ ] App carrega em tempo razoável
- [ ] Navegação é fluida
- [ ] Não há travamentos

#### Compatibilidade
- [ ] iOS [Versão mínima] funciona
- [ ] iOS [Versão atual] funciona
- [ ] Diferentes tamanhos de tela (iPhone, iPad)

---

### Plataforma: Android

[Repetir estrutura acima para Android]

---

**Resultado**: 
- [ ] ✅ App funcionando em ambas plataformas
- [ ] ⚠️ Problemas em uma plataforma: [Especificar]
- [ ] ❌ Problemas críticos: [Listar]

**Bugs Encontrados**: [Listar IDs]

**Executado por**: [Nome]  
**Data**: [DD/MM/AAAA]  
**Versão**: [Versão testada]

---

## Como Usar os Checklists

1. **Selecionar o checklist apropriado** para o tipo de teste
2. **Personalizar** adicionando/removendo itens conforme necessário
3. **Executar** marcando cada item conforme testa
4. **Documentar** bugs encontrados
5. **Reportar** resultado final e observações
6. **Arquivar** checklist para referência futura

---

**Última atualização**: 2026-02-04  
**Versão do Template**: 1.0
