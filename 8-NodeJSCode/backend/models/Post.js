const Mogoose = require('mongoose');
const Schema = Mogoose.Schema;

const PostSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    imageURL : {
        type : String,
        required : true
    },
    creator : [
        {
            type : Schema.Types.ObjectId,
            ref : 'User',
            required : true
        }
    ]
})

module.exports = Mogoose.model('Post', PostSchema);