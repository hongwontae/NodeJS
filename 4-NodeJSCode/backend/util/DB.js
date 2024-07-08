const Sequelize = require('sequelize');

const db = new Sequelize.Sequelize({
    dialect : 'mysql',
    database : 'node',
    password : 'YourRootPassword',
    username : 'root',
})

module.exports = db;