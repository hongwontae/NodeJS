const Mogoose = require('mongoose');
const Schema = Mogoose.Schema;

const UserSchema = new Schema(
    {
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        nickname : {
            type : String,
            required : true
        },
        posts : [
            {
                type : Schema.Types.ObjectId,
                ref : 'Post'
            }
        ]
    }
)

module.exports = Mogoose.model('User', UserSchema);

// Mogoose 라이브러리를 가져온다. => Schema를 불러와서 변수에 할당한다. => new Schema({})를 통해서 Mogoose DB 모델을 정의한다.
// => 정의된 이 후 Mogoose.model()를 호출하고 식별한 이름과 정의된 변수를 인자에 넣고 module.exports로 내보낸다.