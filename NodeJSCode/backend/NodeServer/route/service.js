const express = require("express");

const router = express.Router();

const Products = require("../model/serviceModel");

router.post("/register", async (req, res, next) => {
  const { title, price, description } = req.body;
  await Products.create({
    title: title,
    price: price,
    description: description,
  });

  req.session.user = 'testUser'


  res.json({ message: "Hello world" });
});

module.exports = router;
