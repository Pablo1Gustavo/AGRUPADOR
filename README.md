# Desafio técnico - AGRUPADOR

## 🤔 Problema

No início de cada semestre, é muito comum que alunos universitários criem grupos no WhatsApp para cada turma que frequentam. E aí existem dois problemas: nem todo mundo da turma se conhece ou tem os números de telefone uns dos outros; e mesmo pros que se conhecem, é um trabalho chato pro admin adicionar cada pessoa no grupo.

## 🎯 Objetivo

Criar o **AGRUPADOR**, um site que, por geolocalização, mostre os grupos de WhatsApp criados próximos de onde você está no momento, num raio de 1km, com um link para entrar no grupo.

Claro que, para isso, alguém tem que ter adicionado no **AGRUPADOR** um link para o grupo do WhatsApp criado. A ideia é que seja um processo fácil. Você entra no site e, além da exibição dos grupos próximos a você, haverá um botão para adicionar um novo grupo. Clicando neste botão, você indica o nome do grupo, uma breve descrição e o link de invite para entrar.

## 📑 Requisitos

- [x]  Ao acessar o site, será solicitado o acesso à geolocalização do aparelho;
- [x]  Após aprovar acesso à geolocalização, serão exibidos os grupos existentes dentro de um raio de 1km;
- [x]  Ao clicar em um grupo será exibida sua descrição e o botão para entrar no grupo, que apontará para o link de invite;
- [x]  Haverá um botão para criar um novo grupo a partir da sua geolocalização atual, informando Nome, Descrição e Link de Invite;
- [x]  O back-end da aplicação deverá ser feito em **Node.js.**
- [x]  O banco de dados deverá ser preferencialmente **Postgres** (ou outro banco relacional);
- [x]  O front-end deverá ser uma Single-Page Application em **React**, que se comunique com o back-end através de API (REST ou GraphQL, o que preferir);
- [x]  O readme do projeto deve conter instruções claras de como configurá-lo;
- [x]  Sua aplicação (em especial o back-end) deve se preocupar em tratar/validar os dados inputados pelo usuário;

## ✍️ Observações

- Não é necessário ter um sistema de login na aplicação. A ideia é que qualquer pessoa consiga ver e criar grupos sem o trabalho de ter que criar/logar uma conta;
- O layout da aplicação pode ser simples, faça um produto que você gostaria de usar;
- Sinta-se livre para acrescentar features caso tenha ideias que possam melhorar a experiência do usuário :)

## 💻 Configuração

Antes de tudo você pode ver a prototipação visual do projeto no Figma por [esse link](https://www.figma.com/file/CIoLpOSaAcfqH2AZl9thpN/AGRUPADOR).

Certifique-se de ter disponível as seguintes ferramentas antes de clonar e executar o projeto:
* Node.js (a versão utilizada é a 16.13.1)
* npm (a versão utilizada é a 8.1.2)
* PostgreSQL (a versão utilizada é a 14.1)

### Backend

Para lidar com as coordenadas geográficas e calcular distâncias usaremos algumas extensões do PostgreSQL, para adicioná-las execute os seguintes comandos na sua database, um após o outro:
```
CREATE EXTENSION cube;
CREATE EXTENSION earthdistance;
```

Agora, em sua database do PostgreSQL, crie a seguinte tabela:
```
CREATE TABLE GROUPS (
	ID SERIAL NOT NULL,
	NAME VARCHAR(25) NOT NULL,
	DESCRIPTION VARCHAR(200) NOT NULL,
	LINK_CODE CHAR(22) NOT NULL,
	LATITUDE FLOAT(5) NOT NULL,
	LONGITUDE FLOAT(5) NOT NULL
);
```

Após criar a tabela, acesse a pasta "backend" e execute o comando `npm install` para instalar as depêndencias necessárias.

Ainda na pasta "backend", copie o arquivo ".env.example", renomeando-o para ".env" e configure preenchendo os campos necessários. Exemplo:
```
# Database
DB_USER=postgres
DB_PASSWORD=admin
DB_DATABASE=agrupador
DB_HOST=localhost
DB_PORT=5432

# Server
SERVER_PORT=5000
```
Se atente de não usar a mesma porta em que o frontend será executado.

Após isso, basta executar o comando `node app` para iniciar a aplicação.

### Frontend 

**Lembre-se de iniciar o backend para usar o frontened corretamente.**

Com o projeto clonado, acesse a pasta "frontend" e execute o comando `npm install` para instalar as depêndencias necessárias.

Também na pasta "frontend", copie o arquivo ".env.example", renomeando-o para ".env" e configure inserido a URL de consumo da api (definida pelo backend). Exemplo:
```
REACT_APP_API_URL=http://localhost:5000
```

 Após isso, execute o comando `npm start` para iniciar a aplicação.