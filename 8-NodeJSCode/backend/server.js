const express = require("express");
const Mongoose = require("mongoose");
const { createHandler } = require("graphql-http/lib/use/express");
const bodyParser = require('body-parser')

const Schema = require("./GraphQL/Schema");
const Resolvers = require("./GraphQL/Resolvers");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use("/graphql", (req, res, next) => {
  const handler = createHandler({
    schema: Schema,
    rootValue: Resolvers,
  });
  handler(req, res, next);
});

Mongoose.connect(
  "mongodb+srv://feelchok1234:q2tlxm123@cluster0.o4tlmsf.mongodb.net/customShop?retryWrites=true&w=majority&appName=Cluster0"
).then((result) => {
  app.listen(4000, () => {
    console.log("4000 Port Open");
  });
});
