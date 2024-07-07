const {DataTypes} = require('sequelize');
const sequelize = require('../settings/DB-Setting');

const User = sequelize.define('users', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    imageURL : {
        type : DataTypes.STRING,
        allowNull : false
    },
    fileName : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = User;