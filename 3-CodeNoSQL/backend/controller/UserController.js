const Users = require("../models/Users");
exports.postUser = (req, res, next) => {
  const { email, password, name } = req.body;

  const users = new Users({
    email: email,
    password: password,
    name : name
  });

  users
    .save()
    .then((result) => {
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      throw new Error("save 중에 에러가 발생");
    });
};

exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;

  Users.find(email).then((result) => {
    if (!result) {
      throw new Error("일치하는 아이디가 없습니다.");
    }
    console.log(result)
    return res.json({ result });
  });
};
