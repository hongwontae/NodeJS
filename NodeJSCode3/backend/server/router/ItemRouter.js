const express = require('express');
const itemController = require('../controller/ItemsController')

const Router = express.Router();

Router.get('/items', itemController.getItems)

module.exports = Router;