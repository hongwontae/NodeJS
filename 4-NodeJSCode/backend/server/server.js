const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const sequelize = require("./util/sequelize-setting");
const Items = require('./models/Items')

const ItemsRouter = require('./router/ItemRouter')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/show', ItemsRouter)

app.use((errors, req, res, next)=>{
  return res.json({error : errors})
})

sequelize.sync().then(() => {
  app.listen(3000);
});
