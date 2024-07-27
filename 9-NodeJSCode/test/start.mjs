const chai = require('chai');

const exprect = chai.expect;

it('Good Game', function(){
    exprect(1+1).to().be(2)
})