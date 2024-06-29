const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const sequelize = require("./util/databaseSetting");
const serviceRoute = require("./route/service");
const showRoute = require("./route/show");
const authRoute = require('./route/auth')
const sessionStore = require("./util/sessionStore");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());



app.use(
  session({
    secret: "SECRET-KEY-2017-Q2TLXM1234@",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie : {
      maxAge : 10000000,
      httpOnly : true
    }
  })
);



app.use("/service", serviceRoute);
app.use("/show",  showRoute);
app.use('/auth',authRoute)

sequelize
  .sync({force : true})
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
