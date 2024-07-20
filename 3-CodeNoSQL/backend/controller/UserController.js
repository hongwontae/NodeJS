const Users = require('../models/Users');
exports.postUser = (req, res, next) => {
  const { email, password } = req.body;

  const users = new Users({
    email : email,
    password : password
  })

  users.save().then(result => {
    console.log(result);
    return res.json(result)
  }).catch(err=>{
    throw new Error('save 중에 에러가 발생')
  })

};
