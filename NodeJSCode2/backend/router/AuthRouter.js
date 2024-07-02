const express = require("express");
const { body, check } = require("express-validator");

const authCon = require("../controller/AuthController");

const router = express.Router();

router.post(
  "/val",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage({email : 'not',message : '이메일 형식을 갖추어 주십시오'})
      .custom((value, { req, location, path }) => {
        if (value === "test@test.com") {
          console.log({ location, path });
          throw new Error("test@test.com은 사라진 아이디 입니다.");
        }
        return true
      }),
    body("password")
      .isLength({ min: 5 })
      .withMessage({password : 'not', message : '5개 이상이여야 합니다.'})
      .isAlphanumeric()
      .trim()
      .withMessage({password : 'not', message : '숫자와 알파벳으로만 이루어지는 비밀번호여야 합니다.'}),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error({password : 'not', message : '일치하지 않습니다.'});
      }
      return true
    }),
  ],
  authCon.postValidation
);

module.exports = router;
