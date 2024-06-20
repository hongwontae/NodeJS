const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const Products = require('./model/serviceModel')

const serviceRoute = require("./route/service");
const showRoute = require("./route/show");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/service", serviceRoute);
app.use("/show", showRoute);

Products.sync().then((result) => {
  app.listen(3000);
}).catch(err => {
    console.log(err)
})

