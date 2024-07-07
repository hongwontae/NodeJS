const express = require("express");

const router = express.Router();

const Products = require("../model/serviceModel");

router.get("/findOne", (req, res, next) => {
  const params = req.query.data;
  Products.findByPk(params).then((result) => {
    res.json(result);
  });
});

router.get("/all", async (req, res, next) => {
  Products.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
    

});

router.get("/coo", (req, res, next) => {
  res.json(req.session);
});

module.exports = router;
