const express = require("express");
const { body } = require("express-validator");
const AuthController = require("../controller/AuthController");

const User = require("../models/user");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("이메일 형태를 갖춰주세요")
      .custom(async (value, { req }) => {
        const userMatchingData = await User.findOne({where : {email : value}});
        if (userMatchingData) {
          next("이메일 생성 에러");
        }
      })
      .normalizeEmail(),
      
      body('password').trim().isLength({min : 10}),
      body('nickname').trim().not().isEmpty()
  ],
  AuthController.signup
);

router.post('/login', AuthController.login)

module.exports = router;
