const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    const jsonToken = req.get('Authorization');

    if(!jsonToken){
        req.isAuth = false;
        return next();
    }

    const token = jsonToken.split(' ')[1];

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'somesupersecretkey');
    } catch (error) {
       req.isAuth = false;
       return next();
    }

    if(!decodedToken){
        req.isAuth = false;
        return next();
    }

    req.userId = decodedToken.userId;
    req.isAuth = true;
    next();
}