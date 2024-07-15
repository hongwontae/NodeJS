const Post = require("../models/post");

exports.getItems = async (req, res, next) => {
  console.log(req.query)
  const userId = req.user.id;
  const page = +req.query.page;
  const limit = 10;
  const offset = (page - 1) * limit;

  const { count, rows } = await Post.findAndCountAll({
    where: {
      userId: userId,
    },
    limit,
    offset,
  });

  return res.json({
    items: rows,
    currentPage: page,
    totalCount: count,
    totalBtn: Math.ceil(count/limit),
  });
};
