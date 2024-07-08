const express = require('express');
const {body} = require('express-validator');

const ItemController = require('../controller/ItemController')

const router = express.Router();


router.get('/items', ItemController.getItems)
router.post('/items', [
    body('title').trim().isLength({min : 5}),
    body('description').trim().isLength({min : 20})
], ItemController.createItem)

module.exports = router;