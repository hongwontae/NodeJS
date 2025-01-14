# NodeJS Mastery Repository
NodeJS의 기초, 개념, 이론 등 전반을 마스터하기 위한 종합 자료 모음입니다.


## NodeJS Concepts
1. **NodeJS 사용방법** : [NodeJS Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/1-NodeJS.txt)
2. **NodeJS 기초** : [NodeJS-Basic-1(nodemon, fs, uuid)](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/2-NodeJS.txt), [NodeJS-Basic-2(dynamicSegment, dirname, queryParameter..)](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/3-NodeJS.txt)
3. **Sequelize** : [Sequelize Info-1](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/4-NodeJS.txt), [Sequelize-Info-2](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/5-NodeJS.txt)
4. **Cookie** : [Cookie Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/6-NodeJS.txt)
5. **Session** : [Session Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/7-NodeJS.txt)
6. **Authentication** : [Authentication Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/8-NodeJS.txt(Authentication).txt), [Authentication High Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/9-NodeJS(AuthHigh).txt)
7. **Express-Validator** : [Express-Validator Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/10-NodeJS(%EA%B2%80%EC%A6%9D).txt)
8. **Express Error** : [Express Error Handling Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/11-NodeJS(%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC).txt)
9. **Multer** : [Multer Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/12-NodeJS(%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C%20%EB%B0%8F%20%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C).txt)
10. **Pagination** : [Pagination Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/13-Pagination.txt)
11. **Rest API** : [Rest API Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/14-RestAPI.txt)
12. **Web Socket** : [Web Socket Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/17-WebSocket.txt)
13. **NoSQL** : [NoSQL Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/19-NoSQL.txt)
14. **Mongo DB** : [Mongo DB Info](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/20-MongoDB.txt)
15. **Mongoose** : [Mongoose Info-1](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/21-1.Mongoose.txt), [Mongoose Info-2](https://github.com/hongwontae/NodeJS/blob/main/NodeJS-MEMO/21-2.Mogoose.txt)
16. **GraphQL** : [GraphQL Info](https://github.com/hongwontae/NodeJS/tree/main/NodeJS-MEMO/Graphql)

## Preview(Validator)
```javascript
const { validationResult } = require("express-validator");
const Post = require("../models/post");
const User = require("../models/user");

exports.postItem = async (req, res, next) => {
  const validator = validationResult(req);

  if (!validator.isEmpty()) {
    const validatorError = {};
    validatorError.message = validator.array();
    validatorError.statusCode = 404;
    throw validatorError;
  }

  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  try {
    const user = await User.findByPk(req.user.id);

    if (!user || user.id !== req.user.id) {
     next(new Error('유저가 없거나 일대다 관계 설정에서 벗어났습니다.'))
    }

    const postData = await Post.create({
      title,
      author,
      description,
      userId: req.user.id,
    });

    return res.json({ message: "Success Post", data: postData });

  } catch (error) {
    const postDataError = {};
    postDataError.errorObj = error;
    postDataError.statusCode = 401;
    throw postDataError;
  }
};
```