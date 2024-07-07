const express = require('express');
const bodyParser = require('body-parser');

const ItemRoute = require('./route/ItemRoute')

const app = express();

app.use(bodyParser.json()); // application/json 요청의 데이터를 받는다.

app.use('/show', ItemRoute);
app.use('/create', ItemRoute)



app.listen(3000);