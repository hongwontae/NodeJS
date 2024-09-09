const User = require("../models/user");
const Post = require("../models/post");
const bcrypt = require("bcrypt");
const jsonToken = require("jsonwebtoken");
const validator = require("validator");

const resolvers = {
  createUser: async function ({ userInput }, req) {
    const email = userInput.email;
    const password = userInput.password;
    const name = userInput.name;

    const errors = [];

    if (!vaildator.isEmail(email)) {
      errors.push({ message: "E-Mail is Invalid" });
    }

    if (
      !vaildator.isLength(password, { min: 5 }) ||
      vaildator.isEmpty(password)
    ) {
      errors.push({ message: "Password too Short" });
    }

    if (errors.length > 0) {
      const error = new Error("resolver/ createUser Error");
      error.data = errors;
      throw error;
    }

    const userCheck = await User.findOne({ email });

    if (userCheck) {
      const error = new Error("User exist");
      throw error;
    }

    const bcryptPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email: email,
      password: bcryptPassword,
      name: name,
    });

    const userData = await user.save();

    return {
      ...userData._doc,
      _id: userData._id.toString(),
    };
  },

  login: async function ({ email, password }) {
    const user = await User.findOne({ email });

    if (!user) {
      const errorData = new Error("ID가 일치하지 않습니다.");
      errorData.code = 400;
      throw errorData;
    }

    const isEqualPassword = await bcrypt.compare(password, user.password);

    if (!isEqualPassword) {
      const errorData = new Error("password가 일치하지 않습니다.");
      errorData.code = 401;
      throw errorData;
    }

    const token = jsonToken.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      "somesupersecretkey",
      { expiresIn: "1h" }
    );

    return {
      token,
      userId: user._id.toString(),
    };
  },

  createPost: async function ({ userInput }, { req }) {
    console.log(req.isAuth)
    if (!req.isAuth) {
      throw new Error("인증 실패");
    }

    const title = userInput.title;
    const content = userInput.content;
    const imageUrl = userInput.imageUrl;

    if (validator.isEmpty(title)) {
      console.log("Fail");
    }

    const user = await User.findById(req.userId);

    if (!user) {
      throw new Error("해당되는 user 없음");
    }

    const post = new Post({
      title: title,
      content: content,
      imageUrl: imageUrl,
      creator: user,
    });

    const postData = await post.save();

    user.posts.push(postData);

    await user.save();
    console.log(user._doc);

    return {
      ...postData._doc,
      _id: postData._id.toString(),
      createdAt: postData.createdAt.toISOString(),
      updatedAt: postData.updatedAt.toISOString(),
    };
  },

  posts: async function () {
    const postAllCount = await Post.find().countDocuments();

    const post = await Post.find().sort({ createdAt: -1 }).populate("creator");

    return {
      posts: post.map((p) => {
        return {
          ...p._doc,
          _id: p._id.toString(),
          createdAt: p.createdAt.toISOString(),
          updatedAt: p.updatedAt.toISOString(),
        };
      }),
      totalPages : postAllCount
    }
  },
};

module.exports = resolvers;
