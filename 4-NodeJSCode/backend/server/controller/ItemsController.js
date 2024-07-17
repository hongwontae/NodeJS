const Items = require("../models/Items");

exports.getItems = async (req, res, next) => {
  const page = +req.query.page;

  const limit = 10;
  const offset = (page-1)*10;
  // limit은 가져올 데이터의 숫자.
  // offset은 가져올 데이터가 어디부터 시작하는지 알리는 숫자 => 0이라면 1부터, 10이라면 11부터

  try {
    const {count, rows} = await Items.findAndCountAll({
      limit,
      offset
    })

    return res.json({
      items : rows,
      currentPage : page,
      totalPages : Math.ceil(count/limit),
      totalItemsCount : count
    })


  } catch (error) {
    next(error)
  }

};
