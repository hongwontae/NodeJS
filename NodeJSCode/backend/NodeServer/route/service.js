const express = require('express');
const db = require('../util/databaseSetting')

const router = express.Router();

router.post('/register', async (req, res, next)=>{
    const {age, descr} = req.body;
    console.log(req.body)
    console.log(age, descr)
    await db.execute('insert into product (age, descr) values (?, ?)', [age, descr])
});

router.post('/query', (req, res, next)=>{
    const data = req.body
    console.log(data);
    const queryData = req.query;
    console.log(queryData)
    res.end(console.log('쿼리 파라미터 완료!'))
})

router.post('/:id', (req, res, next)=>{
    const data = req.body
    console.log(data);
    const id = req.params.id
    console.log(id)
    res.end(console.log('동적 세그먼트 완료!'))
})






module.exports = router;