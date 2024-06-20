const express = require('express');
const Sequelize = require('sequelize')

const router = express.Router();

const Products = require('../model/serviceModel');

router.get('/findOne', (req, res, next)=>{
    const params = req.query.data;
    Products.findByPk(params).then((result)=>{
        res.json(result)
    })
})

router.get('/all', async (req, res, next)=>{
    Products.findAll({where : {
        price :{
            [Sequelize.Op.gt] : 0
        }
    }}).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
    })
})


module.exports = router;