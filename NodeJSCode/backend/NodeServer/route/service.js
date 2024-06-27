const express = require("express");
const isAuth = require('../authMiddleware/isAuth')

const router = express.Router();

const Products = require("../model/serviceModel");

router.post("/register", async (req, res, next) => {

  if(!req.session.isLoggedIn){
    return res.json({message : '로그인 안함'})
  }

  if(req.body.title === '' || req.body.description === '' || req.body.price === ''){
    return res.json({message : 'No data'})
  }
  console.log(req.body.title)
  console.log(typeof(req.body.title))

  const { title, price, description } = req.body;

  await Products.create({
    title: title,
    price: price,
    description: description,
  });

  res.json({ message: "Hello world" });
});

module.exports = router;
