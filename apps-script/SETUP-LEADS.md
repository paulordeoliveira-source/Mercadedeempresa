# Integração de leads - Mercado de Empresas

## Google Sheet
Planilha: Leads - Treinamentos de IA
ID: 1A5KPdW6lq3zd9n2HEJ1JGKG7N8bxjP6-J7dxtALruCg
Aba: Leads

## Publicar o endpoint
1. Acesse https://script.google.com e crie um novo projeto.
2. Nome sugerido: MDE - Captura de Leads.
3. Substitua o conteúdo de Code.gs pelo arquivo apps-script/Code.gs deste repositório.
4. Clique em Implantar > Nova implantação.
5. Tipo: Aplicativo da Web.
6. Executar como: Eu.
7. Quem pode acessar: Qualquer pessoa.
8. Autorize e conclua a implantação.
9. Copie a URL terminada em /exec.

A URL /exec deve ser inserida na landing page para ativar o formulário.

## Segurança
O Web App não expõe credenciais do Google na página. O script valida os campos essenciais, limita o tamanho do conteúdo e neutraliza valores que poderiam ser interpretados como fórmulas na planilha.
