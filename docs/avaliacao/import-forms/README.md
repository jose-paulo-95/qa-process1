# Importação para Google Forms - Avaliação QA Junior

Arquivos CSV prontos para importar no Google Forms usando o add-on **Form Builder for Google Sheets**.

## Pré-requisito

1. Instale o add-on [Form Builder for Google Sheets](https://workspace.google.com/marketplace/app/form_builder_for_google_sheets/862607242665)
2. Abra uma nova planilha no Google Sheets

## Como importar

### Passo 1: Carregar o CSV no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com) e crie uma nova planilha
2. **Arquivo** > **Importar** > **Fazer upload** > Selecione o arquivo CSV
3. Escolha "Inserir nova planilha" ou "Substituir planilha"
4. Certifique-se de que a codificação está como **UTF-8** (para acentuação correta)

### Passo 2: Usar o Form Builder

1. No Google Sheets, vá em **Complementos** > **Form Builder for Sheets** > **Open**
2. Selecione a planilha/aba que contém os dados importados
3. Escolha o padrão **"Question and Answers"**
4. Mapeie as colunas:
   - **Questions** → Coluna A (Question)
   - **Types** → Coluna B (Type)
   - **Descriptions** → Coluna C (Description)
   - **Starting Answer** → Coluna D (Option1)
   - **Ending Answer** → Última coluna com opções (Option8 ou conforme)
   - **Required** → Coluna L (Required)
5. Clique em **Get** para visualizar as perguntas
6. Clique em **Create** para criar um novo formulário ou **Choose** para adicionar a um existente

### Arquivos disponíveis

| Arquivo | Formulário | Uso |
|---------|------------|-----|
| `avaliacao-junior-autoavaliacao.csv` / `.xlsx` | Autoavaliação | QA preenche antes da reunião |
| `avaliacao-junior-gestor.csv` / `.xlsx` | Avaliação do Gestor | Avaliador preenche durante/após |

**XLSX**: Importe diretamente no Google Sheets (Arquivo > Importar > Fazer upload).  
**CSV**: Alternativa para planilhas que preferem CSV.

## Tipos de pergunta (coluna Type)

| Tipo no CSV | Tipo no Google Forms |
|-------------|----------------------|
| TEXT | Resposta curta |
| PARAGRAPH | Parágrafo |
| DATE | Data |
| DROPDOWN | Lista suspensa |
| CHECKBOX | Caixas de seleção |
| LINEAR SCALE | Escala linear |
| SECTION | Divisor de seção |
| TITLE AND DESCRIPTION | Título e descrição |

## Observações

- **LINEAR SCALE**: As opções (1-5 ou 0-3) nas colunas D-I definem a escala. O Form Builder pode interpretar como escala linear.
- Se algum tipo não for reconhecido, o Form Builder usará "Text" por padrão. Ajuste manualmente após a importação.
- Para perguntas com muitas opções (CHECKBOX), as opções estão nas colunas D até K.

## Alternativa: Formswrite

Se preferir usar [Formswrite.com](https://formswrite.com):

1. Importe o CSV no Google Sheets
2. Acesse Formswrite e conecte sua conta Google
3. Selecione a planilha com os dados
4. Clique em converter para gerar o formulário

**Nota**: O Formswrite pode interpretar o formato de forma diferente. Ajustes manuais podem ser necessários.
