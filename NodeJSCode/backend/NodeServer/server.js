const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const {body, validationResult, check } = require("express-validator");

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
    resave: true,
    saveUninitialized: false,
    store: sessionStore,
    cookie : {
      maxAge : Date.now() + 1000000,
      httpOnly : false
    }
  })
);

const checkUser = (req, res, next)=>{
  body('email').isEmail().withMessage('Error가 발생했습니다.');
  next();
}

app.use("/service", serviceRoute);
app.use("/show",  showRoute);
app.use('/auth', checkUser, authRoute)

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
