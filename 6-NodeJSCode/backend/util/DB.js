const Sequelize= require('sequelize');

const DB = new Sequelize.Sequelize({
    database : 'node5',
    username : 'root',
    password : 'YourRootPassword',
    dialect : 'mysql',
})

module.exports = DB;