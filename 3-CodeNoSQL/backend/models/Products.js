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
  },
  userId : {
    type : Schema.Types.ObjectId,
    ref : 'User',
    required : true
  }
});

module.exports = Mongoose.model("Product", ProductShema);
