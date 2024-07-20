const express = require("express");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");

const UserRouter = require("./router/UserRouter");
const ProductRouter = require('./router/ProductRouter')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.use("/auth", UserRouter);

app.use('/product', ProductRouter)

Mongoose.connect(
  "mongodb+srv://feelchok1234:q2tlxm123@cluster0.o4tlmsf.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
).then(result => {
    app.listen(4000, ()=>{
        console.log('4000 Port Conenct')
    })
})
