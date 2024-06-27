module.exports = (req, res, next)=>{
    if(!req.session.isLoggedIn){
        return res.json({message : '허용불가'})
    }
    next();
}