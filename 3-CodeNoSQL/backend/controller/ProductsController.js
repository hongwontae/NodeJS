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

exports.getOneProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  Products.findById(prodId)
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateProduct = (req, res, next) => {
  console.log(req.body)
  const { title, price, description, _id } = req.body;

  Products.findById(_id)
    .then((product) => {
      product.title = title;
      product.price = price;
      product.description = description;
      return product.save();
    })
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next)=>{
  const prodId = req.params.prodId;

  Products.findByIdAndDelete(prodId).then(result => {
    console.log(result);
    return res.json(result)
  }).catch(err => {
    console.log(err);
  })

}
