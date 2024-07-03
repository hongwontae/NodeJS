const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");

const authCon = require("../controller/AuthController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Math.random().toFixed(4) + file.originalname); 
  },
});

const fileFilter = (req, file, cb)=>{
  if(file.mimetype === 'image/png' || file.minetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    cb(new Error('Hello'), false)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage, fileFilter });

const router = express.Router();

router.post(
  "/val",
  upload.single("image"),
  (req, res, next) => {
    req.fileData = req.file;
    next();
  },
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage({ email: "not", message: "이메일 형식을 갖추어 주십시오" })
      .custom((value, { req, location, path }) => {
        if (value === "test@test.com") {
          console.log({ location, path });
          throw new Error("test@test.com은 사라진 아이디 입니다.");
        }
        return true;
      }),
    body("password")
      .isLength({ min: 5 })
      .withMessage({ password: "not", message: "5개 이상이여야 합니다." })
      .isAlphanumeric()
      .trim()
      .withMessage({
        password: "not",
        message: "숫자와 알파벳으로만 이루어지는 비밀번호여야 합니다.",
      }),
  ],

  authCon.postValidation
);

module.exports = router;
