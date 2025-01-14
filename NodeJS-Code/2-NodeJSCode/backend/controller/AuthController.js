const {validationResult} = require('express-validator');
const User = require('../models/User')
const fs = require('fs')
const path = require('path')
const pdfDocument = require('pdfkit')


exports.postValidation = (req, res, next)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    const fileData = req.fileData;

    const errors = validationResult(req);
    console.log(errors.array().map(ele => {
        return ele.msg
    }))
    if(!errors.isEmpty()){
        return res.json({message : errors.array().map(ele => ele.msg)})
    }
    User.create({email, password, imageURL : fileData.path, fileName : fileData.filename}).then(result => {
        res.json({message : result})
    })
}

exports.getShow = (req, res, next)=>{
    User.findAll().then(result => {
        return res.json(result)
    })
}

exports.getPDF = (req, res, next)=>{
    const imgName = 'data.pdf';
    const pdfStorePath = path.join(__dirname, '../', 'uploads', 'Order-Accointing.pdf');

    const pdf = new pdfDocument();
    res.setHeader('Content-Disposition', `filename="${imgName}"`);
    res.setHeader('Content-type', 'application/pdf');
    pdf.pipe(fs.createWriteStream(pdfStorePath));
    pdf.pipe(res);
    
    pdf.fontSize(26).text('Hello-World')
    pdf.text('-------------------------------')
    pdf.text('Good Die')

    pdf.end();

    // fs.readFile(pdfStorePath, (err, data)=>{
    //     if(err){
    //         next(err)
    //     }
    //     // res.setHeader('Content-Disposition', `inline; filename=${imgName}`);
    //     // res.setHeader('Content-Type', 'image/png'); // 적절한 MIME 설정
    // })
    // fs.readFile(pdfStorePath, (err, data)=>{
    //     if(err){
    //         next(err)
    //     }
    //     res.setHeader('Content-Disposition', `inline; filename=${imgName}`)
    //     res.setHeader('Content-Type', 'image/jpg')
    //     res.send(data)
    // })
// const file = fs.createReadStream(pdfStorePath);
// res.setHeader('Content-Disposition', `inline; filename="${imgName}"`);
// file.pipe(res)


}
