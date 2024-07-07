exports.getItems = (req, res, next)=>{
    console.log('Hello-World')
    res.status(200).json({message : 'hello-world'});
}

exports.createItem = (req, res, next)=>{
    const title = req.body.title;
    const desc = req.body.desc;
    console.log(req.body)
    res.status(201).json({
        title,
        desc
    })
}