const express = require('express');

const router = express.Router();

router.get('/shop2',(req, res, next)=>{
    console.log(req.url)
})



module.exports = router;