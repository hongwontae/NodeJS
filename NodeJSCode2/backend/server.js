const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const authRouter = require('./router/AuthRouter')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/auth',authRouter)

app.use((error, req, res, next)=>{
    console.log(error);
   return  res.json({message : '범용 에러 처리 미들웨어입니다.'})
})

app.listen(3000);



