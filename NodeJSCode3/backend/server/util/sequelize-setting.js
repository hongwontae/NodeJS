const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect : 'mysql',
    host : 'localhost',
    username : 'root',
    password : 'YourRootPassword',
    database : 'node-complete'
})

module.exports = sequelize;