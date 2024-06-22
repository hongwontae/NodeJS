const express = require('express');
const db = require('../util/databaseSetting')

const router = express.Router();

const Products = require('../model/serviceModel')

router.post('/register', async (req, res, next)=>{
    const {title, price, description} = req.body;
    await Products.create({
        title : title,
        price : price,
        description : description
    })
    res.json({message : 'Succcess data in'})
});


router.post('/update', async (req, res, next)=>{
    const {id} = req.body
    console.log(id)
    await Products.findByPk(id).then((data)=>{
        data.title = 'updating!!';
        data.price = 10000000,
        data.description = 'Updating!!'
        return data.save();
    }).then(result => {
        res.json({data : result})
    })
} )

router.delete('/delete',(req, res, next)=>{
    const id = req.query.dele
    Products.findByPk(id).then((data)=>{
        return data.destroy()
    }).then(result => {
        res.json({message : result})
    })
})







module.exports = router;