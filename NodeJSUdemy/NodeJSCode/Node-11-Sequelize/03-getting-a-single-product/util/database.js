const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'YourRootPassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
