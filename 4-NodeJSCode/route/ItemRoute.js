const express = require('express');

const ItemController = require('../controller/ItemController')

const router = express.Router();


router.get('/items', ItemController.getItems)
router.post('/items', ItemController.createItem)

module.exports = router;