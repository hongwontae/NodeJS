const express = require('express');
const db = require('../util/databaseSetting')

const router = express.Router();

const Products = require('../model/serviceModel')

router.post('/register', async (req, res, next)=>{
    const {title, price, description} = req.body;
    Products.create({
        title : title,
        price : price,
        description : description
    })
});







module.exports = router;