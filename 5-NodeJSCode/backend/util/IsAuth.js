const JWT = require('jsonwebtoken');
const secretKey = require('../controller/AuthController')


module.exports = (req, res, next)=>{
    const token = req.get('Authorization').split(' ')[1];

    if(!token){
        return res.json({message : 'Not Token'});
    }

    JWT.verify(token, secretKey.SECRET_KEY, (err,decoded)=>{
        if(err){
            if(err.name === 'TokenExpiredError'){
                return res.status(401).json({message : 'Token ha Exipred'});
            }
            return res.status(401).json({message : 'Token Verify Error Occurred!'});
        }
        req.user = decoded;
        next();
    })
}