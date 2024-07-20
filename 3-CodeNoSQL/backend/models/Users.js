const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  }
})

module.exports = Mongoose.model('User', UserSchema);