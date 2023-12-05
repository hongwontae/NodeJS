const express = require('express');

const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'))
});


// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);