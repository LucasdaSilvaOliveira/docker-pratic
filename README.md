Projeto de Prática com Docker, API e MySQL
Este projeto é um exercício de containerização utilizando Docker, desenvolvido com o objetivo de praticar o uso de contêineres para facilitar o deploy e a execução de aplicações. A aplicação consiste em uma API simples, que conecta-se a um banco de dados MySQL utilizando Sequelize e Express.

Tecnologias Utilizadas
Node.js com Express para criação da API
MySQL como banco de dados
Sequelize como ORM para interagir com o banco de dados
Docker para containerização da aplicação e banco de dados
Estrutura do Projeto
API: Uma rota simples que realiza operações básicas de CRUD (create, read, update, delete) no banco de dados.
MySQL: Configurado como um serviço dentro de um contêiner Docker para facilitar o gerenciamento do banco.
Docker Compose: Arquivo de configuração para orquestrar os contêineres da API e do banco de dados.
Como Rodar o Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até a pasta do projeto:

bash
Copiar código
cd nome-do-repositorio
Inicie os contêineres:

bash
Copiar código
docker-compose up -d
Acesse a API em http://localhost:3000 (ou a porta configurada).

Estrutura dos Contêineres
API: O contêiner da API está configurado para conectar-se automaticamente ao banco de dados MySQL.
MySQL: Contêiner separado para o banco de dados, com dados persistidos em um volume.
Próximos Passos
Este projeto é uma base para explorar mais recursos do Docker, além de permitir experimentações com escalabilidade e deploy em ambientes reais.

