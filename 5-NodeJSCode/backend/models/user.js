const Sequelize = require('sequelize');
const sequelize = require('../util/DB');
const Post = require('./post')

const User = sequelize.define('users', {
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
    },
    nickname : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

User.hasMany(Post);

module.exports = User;