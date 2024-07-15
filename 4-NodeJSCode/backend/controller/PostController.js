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
