const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  cart : {
    items : [
      {
        prodId : {type : Schema.Types.ObjectId, ref : 'Product', required : true},
        quantity : {type : Number, required : true}

      }
    ]
  }
})

UserSchema.methods.addToCart = function(product){
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.prodId.toString() === product._id.toString()
  });

  let newQuantity;

  const updateCartItems = [...this.cart.items];

  if(cartProductIndex >=0){
    newQuantity = 1;
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updateCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updateCartItems.push({
      prodId : product._id,
      quantity : newQuantity
    });
  }

  const updatedCart = {
    items : updateCartItems
  }

  this.cart = updatedCart;

  return this.save();

}

module.exports = Mongoose.model('User', UserSchema);