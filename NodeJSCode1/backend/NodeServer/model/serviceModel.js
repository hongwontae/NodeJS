const Sequelize = require('sequelize');
const sequelize = require('../util/databaseSetting');

const Product = sequelize.define('products', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    title : {
        type : Sequelize.DataTypes.STRING
    },
    price : {
        type : Sequelize.DataTypes.DOUBLE,
        allowNull : false
    },
    description : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
});

module.exports = Product