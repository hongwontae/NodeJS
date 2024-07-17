const express = require('express');

const ShowController = require('../controller/ShowController')

const IsAuth = require('../util/IsAuth')

const router = express.Router();

router.get('/items', IsAuth, ShowController.getItems)

module.exports = router;