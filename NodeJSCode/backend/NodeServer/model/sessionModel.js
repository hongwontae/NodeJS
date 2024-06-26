const { DataTypes } = require('sequelize');
const sequelize = require('../util/databaseSetting');

const Session = sequelize.define('Session', {
  sid: {
    type: DataTypes.STRING,
    allowNull : false,
    primaryKey : true
  },
  expires : {
    type : DataTypes.DATE,
    allowNull : false
  },
  data : {
    type : DataTypes.TEXT,
    allowNull : false
  }
}, {
  tableName: 'sessions',
  timestamps: false
});

module.exports = Session;