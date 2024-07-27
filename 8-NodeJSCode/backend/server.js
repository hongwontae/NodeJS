const express = require("express");
const Mongoose = require("mongoose");
const { createHandler } = require("graphql-http/lib/use/express");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')


const Schema = require("./GraphQL/Schema");
const Resolvers = require("./GraphQL/Resolvers");
const morgan = require("morgan");

const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags : 'a'})

require('dotenv').config();

const app = express();

app.use(morgan('combined', {stream : logStream}));

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

Mongoose.connect(process.env.DB_URI).then((result) => {
  app.listen(4000, () => {
    console.log(`${process.env.PORT}`);
    console.log("4000 Port Open");
  });
});
