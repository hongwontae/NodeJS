const express = require('express');

const ShopCotroller = require('../controllers/ShopController')

const router = express.Router();

router.get('/shop2',ShopCotroller.getProduct);

module.exports = router;