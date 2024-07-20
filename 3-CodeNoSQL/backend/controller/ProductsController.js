const Products = require("../models/Products");

exports.postProduct = (req, res, next) => {
  const { title, price, description } = req.body;

  const product = new Products({
    title,
    price,
    description,
  });

  product.save().then((result) => {
    console.log(result);
    return res.json(result);
  });
};

exports.getAllProducts = (req, res, next) => {
  Products.find()
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOneProduct = (req, res, next)=>{
  const prodId = req.params.prodId
  Products.findById(prodId).then(result => {
    console.log(result);
    return res.json(result);
  }).catch(err => {
    console.log(err);
  })
}
