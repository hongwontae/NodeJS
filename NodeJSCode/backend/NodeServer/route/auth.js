const express = require("express");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email.trim() === "" || password.trim() === "") {
    return res.json({ message: "이메일이나 패스워드가 비워져 있습니다." });
  }

  User.findOne({ where: { email: email } })
    .then((result) => {
      if (result) {
        return Promise.reject({ message: "이미 존재하는 이메일입니다." });
      }
      return bcrypt.hash(password, 12);
    })
    .then((bcryptPassword) => {
      User.create({ email: email, password: bcryptPassword }).then((result) => {
        res.json({ message: "인증에 성공했습니다." });
      });
    })
    .catch((data) => {
      res.json(data);
    });
});

router.post("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email.trim() === "" || password.trim() === "") {
    return res.json({ message: "이메일이나 비밀번호를 채워야 합니다." });
  }

  const matchData = await User.findOne({ where: { email: email } });

  if (!matchData) {
    return res.json({ message: "해당되는 데이터가 없습니다." });
  }

  const matchPassword = await bcrypt.compare(password, matchData.password);

  if (matchPassword) {
    req.session.isLoggedIn = true;
    req.session.user = matchData;
    return req.session.save((err) => {
      console.log(err);
      res.json({ message: "로그인 완료" });
    });
  }
});

router.post("/reset", async (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      return res.json({ message: "버퍼 생성에 실패했습니다." });
    }
    const token = buffer.toString("hex");

    User.findOne({ email: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          return Promise.reject({
            message: "해당 되는 이메일이 존재하지 않습니다.",
          });
        }
        user.resetToken = token;
        user.resetTokenExpire = Date.now() + 3600000;
        return user.save();
      })
      .then((saveData) => {
        res.json({ message: saveData });
      })
      .catch((err) => {
        res.json({ err: err });
      });
  });
});

module.exports = router;
