#! /sur/bin/env node

var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../bin/app');


chai.use(chaiHttp);
chai.should();

describe('GET /getProductDetails', ()=>{

    it('returns object', (done)=>{
        
        chai.request(app)
        .get('/getProductDetails?id=product-qHLo-VmFGe8IArwS84z8A')
        .end(( err, res )=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('id')
            res.body.should.have.property('image_array')
            res.body.should.have.property('product_name')
            res.body.should.have.property('price')
            res.body.should.have.property('description')
            res.body.should.have.property('category')

            done()
        })
    })
})