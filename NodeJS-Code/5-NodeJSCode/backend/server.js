const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const sequelize = require('./util/DB')
const User = require('./models/user')
const Post = require('./models/post')

const AuthRoute = require('./route/AuthRoute')
const PostRoute = require('./route/PostRoute')
const ShowRoute = require('./route/ShowRoute')

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', AuthRoute)
app.use('/create', PostRoute)
app.use('/show', ShowRoute)


app.use((errors, req, res, next)=>{
    console.log(errors)
    return res.json({message : 'Error 미들웨어', errorData : errors, errorMessage : errors.message})
})


sequelize.sync().then(()=>{
    app.listen(4000);
})