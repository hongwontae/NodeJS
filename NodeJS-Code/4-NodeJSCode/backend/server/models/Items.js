const sequelize = require('../util/sequelize-setting');
const {DataTypes} = require('sequelize');

const Items = sequelize.define('items',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {name : 'items'});

module.exports = Items;