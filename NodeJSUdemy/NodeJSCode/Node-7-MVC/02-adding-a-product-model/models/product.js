const fs = require('fs');
const path = require('path');

const products = [];

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'product.json'
);


const getProductsFromFile = (cb)=>{  
    const p = path.join(
        path.dirname(require.main.filename),
        'data',
        'product.json'
    );
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            return cb([]);
        } else{
            cb(JSON.parse(fileContent));
        }
    })
}


module.exports = class Product {
    constructor(t) {
        this.title = t;
        console.log(p);
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);
            })
        });
        fs.readFile(p, (err, fileContent)=>{

        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}