const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ProductShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description : {
    type : String
  }
});

module.exports = Mongoose.model("Product", ProductShema);
