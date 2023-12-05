const express = require('express');

const router2 = express.Router();

router2.get('/',(req, res, next)=>{
    res.send('<h1>Hello World</h1>');
})


module.exports = router2;