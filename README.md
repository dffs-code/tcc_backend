## Backend da Aplicação ENSINA.ME

### Tecnologias Utilizadas

Neste projeto, é utilizado NodeJS para o servidor, o framework ExpressJS para estruturação e roteamento da aplicação e outras dependências que podem ser encontradas no arquivo package.json.
Para banco de dados, a tecnologia escolhida é o MySQL, por existirem muitos relacionamentos no Modelo Entidade-Relacionamento. Para realizar consultas, optou-se por utilizar o Sequelize ORM.

### Boas praticas

Manter o nome da migration no plural
Manter models no singular e com letra maiuscula

### Comandos iniciais

-- cria banco
`yarn sequelize db:create`

-- executa migrations
`yarn sequelize db:migrate`

-- apaga migrations
`yarn sequelize db:migrate:undo:all`

-- executa seeds
`yarn sequelize-cli db:seed:all`

-- apaga seed
`yarn sequelize-cli db:seed:undo:all`
-------------------------------------------------------

-- criar novas migrations
`yarn sequelize migration:create --name=exemple`

-- criar novas seeds
`yarn sequelize-cli seed:generate --name demo-exemple`