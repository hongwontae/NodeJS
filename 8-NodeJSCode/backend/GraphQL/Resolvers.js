const User = require("../models/User");
const Token = require("jsonwebtoken");

const Resolvers = {
  hello: () => {
    return {
      email: "kk",
      password: "dd",
      nickname: "korean",
    };
  },

  createUser: async ({ data }, req) => {
    const user = await User.find({ email: data.email });

    if (!user.length === 0) {
      throw new Error("동시 이메일");
    }
    console.log(data);

    const newUser = await User({
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });

    const userData = await newUser.save();

    return {
      ...userData._doc,
    };
  },

  login: async ({ data }, req) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);

    const user = await User.find({ email });

    if (!user) {
      throw new Error("ID Not 일치");
    }

    const passwordUser = await User.findOne({ password });

    if (!user) {
      throw new Error("password not 일치");
    }

    const token = Token.sign(passwordUser._id.toString(), "secretKey", {
    });

    return {
      email: passwordUser.email,
      password: passwordUser.password,
      nickname: passwordUser.nickname,
      token : token
    };
  },
};

module.exports = Resolvers;
