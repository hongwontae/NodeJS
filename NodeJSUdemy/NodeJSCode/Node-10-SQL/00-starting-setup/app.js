const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const db = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/test", async (req, res, next) => {
  const data =  await db.execute(
    "Insert into products (title, price, imageUrl, description) values (?,?,?,?)",
    [
      "Szoboszlai Dominik",
      "20000000",
      "https://i.namu.wiki/i/N8l2G8g66rdKEaYawtyXAFzlVjtqmf3uWio3kVdno8ZQ61t87AwBMWmy-yYDa7g3T272h3YCSmiac46LH9aMm7I9X-YTQQ026ZySYZkqdKxqvXs698CmGchWtnJYgTyjuYnsKBtPoScwDEGRfgFVbA.webp",
      '충신'
    ]
  )
  console.log(data);
});
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
