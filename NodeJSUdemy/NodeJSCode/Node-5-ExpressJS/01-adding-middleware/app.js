const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Button</button></form>');
})

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello World</h1>');
})

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);