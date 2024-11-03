# Projeto de Prática com Docker, API e MySQL

Este projeto é um exercício de containerização utilizando Docker, desenvolvido com o objetivo de praticar o uso de contêineres para facilitar o deploy e a execução de aplicações. A aplicação consiste em uma API simples, que conecta-se a um banco de dados MySQL utilizando **Sequelize** e **Express**.

## Tecnologias Utilizadas

- **Node.js** com **Express** para criação da API
- **MySQL** como banco de dados
- **Sequelize** como ORM para interagir com o banco de dados
- **Docker** para containerização da aplicação e banco de dados

## Estrutura do Projeto

- **API**: Uma rota simples que realiza apenas operação de GET todos os `alunos` (read) do banco de dados.
- **MySQL**: Configurado como um serviço dentro de um contêiner Docker para facilitar o gerenciamento do banco.
- **Dockerfile**: Arquivo de configuração do contêiner.
