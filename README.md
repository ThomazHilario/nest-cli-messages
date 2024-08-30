# Criar um projeto com o nestJS/CLI

## Instalar o nestJS/CLI:
` npm i -g @nestjs/cli `

## Criar o projeto com o comando:
` nest new <name project> `

## Run Project:
` npm run start:dev `

## Comandos do nest:
- Gerar um modulo: ` nest generate module <Name Module> `
- Gerar um controller: ` nest generate controller <Name Controller> `
- Gerar um controller em uma pasta: ` nest generate controller messages/messages --flat `

## Sequência para criar a APi:
- 1-Controller > 2-DTOS > 3-main(config DTOS) > 4-Repository > 5-Services > 6-Controller

1.Configurar as rotas e requisições.
2.Criar um DTOS(schema) para as requisições necessárias.
3.Configurar o DTOS no main.
4.Criar a lógica de requisição de um banco de dados.
5.Aplicar as regras de negócio.
6.Adaptar as regras de negócio com cada requisição.