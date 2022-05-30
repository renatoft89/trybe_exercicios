const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '22052015', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
})

module.exports = sequelize;