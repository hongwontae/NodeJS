const {validationResult} = require('express-validator');


exports.postValidation = (req, res, next)=>{
    

    console.log(req.fileData)
    console.log(req.body.email, req.body.password)

    const errors = validationResult(req);
    console.log(errors.array().map(ele => {
        return ele.msg
    }))
    if(!errors.isEmpty()){
        return res.json({message : errors.array().map(ele => ele.msg)})
    }

    return res.json('Hello')
}
