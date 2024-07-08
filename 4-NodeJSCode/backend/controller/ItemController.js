const {validationResult} = require('express-validator')
const Post = require('../models/Post')

exports.getItems = (req, res, next) => {
  console.log("Hello-World");
  res
    .status(200)
    .json([
      {
        title: "리버풀의 분기점, 목적은 승리가 아닌 높은 지속 발전 가능성",
        author: "HWT",
        description: "lorem............",
      },
    ]);
};

exports.createItem = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(errors.array())
    }

  const title = req.body.title;
  const description = req.body.description;
  const imageURL = req.body.imageURL;

    Post.create({title, description, imageURL}).then(result => {
        if(!result){
            return Promise.reject({message : 'form 누락 가능성이 높습니다.'})
        }
        return res.json({message : result})
    }).catch(err => {
        return res.json(err)
    })

};
