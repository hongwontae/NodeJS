const {validationResult} = require('express-validator')

const promiseFunc = ()=>{
    return new Promise((resolve, reject)=>{
        return resolve('hello')
    })
}

exports.postValidation = (req, res, next)=>{

    // promiseFunc().then(result => {
    //     console.log('??')
    //     throw new Error('Error 발생했읍니다.')
    // }).catch(err => {
    //     next(err)
    // })

    const errors = validationResult(req);
    console.log(errors.array().map(ele => {
        return ele.msg
    }))
    if(!errors.isEmpty()){
        return res.json({message : errors.array().map(ele => ele.msg)})
    }

    return res.json('Hello')
}
