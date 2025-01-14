const User = require("../models/user");
const { validationResult } = require("express-validator");
const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const SECRET_KEY = "Some-Secret-Key-JSONWEBTOKEN-980223-8489-q2tlxm@123";

exports.SECRET_KEY = "Some-Secret-Key-JSONWEBTOKEN-980223-8489-q2tlxm@123";

exports.signup = async (req, res, next) => {
  const expressValidatorOBJ = validationResult(req);
  if (!expressValidatorOBJ.isEmpty()) {
    const errorData = new Error(
      "express-validator의 유효성 검사에서 에러가 발생했습니다."
    );
    errorData.reason = expressValidatorOBJ.array();
    errorData.statusCode = 404
    next(errorData);
  }

  const email = req.body.email;
  const password = req.body.password;
  const nickname = req.body.nickname;

  try {
    const passwordHashData = await Bcrypt.hash(password, 12);
    const userCreateSuccess = User.create({
      email,
      password: passwordHashData,
      nickname,
    });
    return res.json({ message: "Sign Up Success!", data: userCreateSuccess });
  } catch (error) {
    error.statusCode = 404;
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const expressValidatorOBJ = validationResult(req);

  if (!expressValidatorOBJ.isEmpty()) {
    const errorData = new Error("validator을 통과하지 못했습니다.");
    errorData.reason = expressValidatorOBJ.array();
    next(errorData);
  }

  const email = req.body.email;
  const password = req.body.password;

  const userData = await User.findOne({ where: { email: email } });

  if (!userData) {
    const errorData = new Error("userData가 존재하지 않습니다.");
    errorData.statusCode = 404;
    return next(errorData);
  }

  const comparePassword = await Bcrypt.compare(password, userData.password);

  if (!comparePassword) {
    const errorData = new Error("CompoarePassword Not");
    errorData.reason = "비밀번호 불일치";
    errorData.statusCode = 404;
    return next(errorData);
  }

  const token = JWT.sign(
    { id: userData.id, email: userData.email },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  return res.json({
    message: "Success Login",
    nickname: userData.nickname,
    token: token,
  });
};
