const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./databaseSetting');
const Session = require('../model/sessionModel');
const sequelize = require('./databaseSetting');

const sessionStore = new SequelizeStore({
    db,
    table : 'Session',
    checkExpirationInterval : 15 * 60 * 1000,
    expiration : 24 * 60 * 60 * 1000
});


module.exports = sessionStore;