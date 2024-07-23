const mongoose = require("mongoose");
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");

const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const isAuth = require("./util/isAuth");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use("/graphql", (req, res, next)=>{
  const handler = createHandler({
    schema,
    rootValue : resolvers,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }
      const errData = err.originalError.data;
      const message = err.message || "KKK";
      return { errData, message };
    },
    context : ()=>({req})
  });
  handler(req, res, next)
});

mongoose
  .connect(
    "mongodb+srv://feelchok1234:q2tlxm123@cluster0.o4tlmsf.mongodb.net/marketShop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("4000 Port Connect");
    });
  });
