const Sequelize = require('sequelize');
const sequelize = require('../util/DB');

const Posts = sequelize.define('posts', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    imageURL : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Posts;