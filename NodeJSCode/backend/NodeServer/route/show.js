const express = require('express');
const db = require('../util/databaseSetting')

const router = express.Router();

router.get('', async (req, res, next)=>{
    const dbData = await db.execute('select * from product where product.id=2');
    console.log(dbData[0])
    res.json(dbData[0]);
})


module.exports = router;