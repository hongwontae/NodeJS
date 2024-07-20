const express = require('express');

const ProductController = require('../controller/ProductsController')

const router = express.Router();

router.post('/register', ProductController.postProduct);
router.get('/showall', ProductController.getAllProducts);
router.get('/showone/:prodId', ProductController.getOneProduct)

module.exports = router;