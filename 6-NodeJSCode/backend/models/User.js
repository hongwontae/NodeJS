const Sequelize = require('sequelize');
const sequelize = require('../util/DB');

const Users = sequelize.define('users', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    email : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    name : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
});

module.exports = Users;