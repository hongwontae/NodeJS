const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const sequelize = require("./settings/DB-Setting");


const authRouter = require("./router/AuthRouter");

const User = require('./models/User');

async function syncfunction() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(err);
  }
}

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))


app.use("/auth", authRouter);

// app.use((error, req, res, next) => {
//   return res.json({ message: "범용 에러 처리 미들웨어입니다." });
// });

syncfunction();

app.listen(3000);
