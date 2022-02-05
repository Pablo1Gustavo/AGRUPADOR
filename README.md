# Desafio técnico - AGRUPADOR

## 🤔 Problema

No início de cada semestre, é muito comum que alunos universitários criem grupos no WhatsApp para cada turma que frequentam. E aí existem dois problemas: nem todo mundo da turma se conhece ou tem os números de telefone uns dos outros; e mesmo pros que se conhecem, é um trabalho chato pro admin adicionar cada pessoa no grupo.

## 🎯 Objetivo

Criar o **AGRUPADOR**, um site que, por geolocalização, mostre os grupos de WhatsApp criados próximos de onde você está no momento, num raio de 1km, com um link para entrar no grupo.

Claro que, para isso, alguém tem que ter adicionado no **AGRUPADOR** um link para o grupo do WhatsApp criado. A ideia é que seja um processo fácil. Você entra no site e, além da exibição dos grupos próximos a você, haverá um botão para adicionar um novo grupo. Clicando neste botão, você indica o nome do grupo, uma breve descrição e o link de invite para entrar.

## 📑 Requisitos

- [ ]  Ao acessar o site, será solicitado o acesso à geolocalização do aparelho;
- [ ]  Após aprovar acesso à geolocalização, serão exibidos os grupos existentes dentro de um raio de 1km;
- [ ]  Ao clicar em um grupo será exibida sua descrição e o botão para entrar no grupo, que apontará para o link de invite;
- [ ]  Haverá um botão para criar um novo grupo a partir da sua geolocalização atual, informando Nome, Descrição e Link de Invite;
- [x]  O back-end da aplicação deverá ser feito em **Node.js.**
- [x]  O banco de dados deverá ser preferencialmente **Postgres** (ou outro banco relacional);
- [ ]  O front-end deverá ser uma Single-Page Application em **React**, que se comunique com o back-end através de API (REST ou GraphQL, o que preferir);
- [ ]  O readme do projeto deve conter instruções claras de como configurá-lo;
- [ ]  Sua aplicação (em especial o back-end) deve se preocupar em tratar/validar os dados inputados pelo usuário;

## ✍️ Observações

- Não é necessário ter um sistema de login na aplicação. A ideia é que qualquer pessoa consiga ver e criar grupos sem o trabalho de ter que criar/logar uma conta;
- O layout da aplicação pode ser simples, faça um produto que você gostaria de usar;
- Sinta-se livre para acrescentar features caso tenha ideias que possam melhorar a experiência do usuário :)

## 💻 Configuração

Antes de tudo você pode ver a prototipação visual do projeto no Figma por [esse link.](https://www.figma.com/file/CIoLpOSaAcfqH2AZl9thpN/AGRUPADOR)

### Backend

Certifique-se antes de ter disponível as seguintes ferramentas:
* Node.js (a versão utilizada é a 16.13.1)
* npm (a versão utilizada é a 8.1.2)
* PostgreSQL (a versão utilizada é a 14.1)

Em seu PostgreSQL crie a seguinte tabela:
```
create table groups (
	id serial primary key,
	name varchar(25) not null,
	description varchar(200) not null,
	link_code char(22) not null,
	latitude float(5) not null,
	longitude float(5) not null
);
```

Após isso e o projeto ter sido clonado, acesso o diretório "/backend" e digite os seguinte comando:
`npm install`

Por fim copie o arquivo ".env.example", renomeando-o para ".env" e configure preenchendo os campos necessários. Exemplo:
```
# Database
DB_USER=postgres
DB_PASSWORD=admin
DB_DATABASE=agrupador
DB_HOST=localhost
DB_PORT=5432

# Server
SERVER_PORT=3000
```

Após isso basta dar o seguinte comando para iniciar a aplicação:
`node app`
    
---
Serão adicionada outras instruções a medida que o projeto avançar.