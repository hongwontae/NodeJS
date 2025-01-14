const sequelize = require('sequelize');

const db = new sequelize.Sequelize({
    dialect : 'mysql',
    username : 'root',
    password : 'YourRootPassword',
    database : 'node',
    host : 'localhost'
})

module.exports = db;