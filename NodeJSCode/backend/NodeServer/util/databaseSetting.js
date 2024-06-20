const Sqeuelize = require('sequelize');

const sequelize = new Sqeuelize('node-complete', 'root', 'YourRootPassword', {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;