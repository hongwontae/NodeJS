const express = require('express');

const bodyParser = require('body-parser')

const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

const shopRouter = require('./routers/shop')
const errorRouter = require('./controllers/Error')


app.use('/shop',shopRouter);


app.use(errorRouter.errorHandler)



app.listen(3000);