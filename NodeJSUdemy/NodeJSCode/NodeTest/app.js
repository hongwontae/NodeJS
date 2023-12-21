const express = require('express');

const bodyParser = require('body-parser')

const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


const ShopRouter = require('./routers/shop')

app.use('/shops',ShopRouter);


app.listen(3000);