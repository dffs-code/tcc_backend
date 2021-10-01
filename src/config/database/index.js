module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST || 'us-cdbr-east-04.cleardb.com',
  username: process.env.MYSQL_USERNAME || 'b12ce60e964ed7',
  password: process.env.MYSQL_PASSWORD || '6a520526',
  database: process.env.MYSQL_DATABASE || 'heroku_a1806d793618aee',
  port: process.env.MYSQL_PORT || 3306,
  define: {
    timestamps: true,
  },