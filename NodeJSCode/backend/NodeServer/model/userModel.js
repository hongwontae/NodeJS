const Sequelize = require('sequelize');
const sequelize = require('../util/databaseSetting');

const User = sequelize.define('User', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    email : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = User;