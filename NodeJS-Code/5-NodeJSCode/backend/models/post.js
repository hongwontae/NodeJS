const Sequelize = require('sequelize');
const sequelize = require('../util/DB');
const User = require('./user')

const Post = sequelize.define('posts', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    author : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})




module.exports = Post;