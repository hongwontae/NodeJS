const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/DB");
const Post = require('./models/Post')

const ItemRoute = require("./route/ItemRoute");

const app = express();

app.use(bodyParser.json()); // application/json 요청의 데이터를 받는다.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Headers", "Content-Type, Authroization");
  if (req.method === "OPTIONS") {
    console.log("Preflight Request Success");
    return res.sendStatus(204);
  } else {
    next();
  }
});

app.use("/show", ItemRoute);
app.use("/create", ItemRoute);

app.use((errors, req, res, next) => {
  return res.status(400).json({
    error: errors,
    message: "실패했습니다.",
  });
});

db.sync().then(()=>{
    app.listen(3000)
})
