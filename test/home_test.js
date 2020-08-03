var chai = require('chai');
var chaiHttp = require('chai-http');
// Interesting part
var app = require('../bin/app');
//var loginUser = require('./login.js');
//var auth = {token: ''};

chai.use(chaiHttp);
chai.should();


describe('Home Page', function() {

  it('returns status 200', function(done) {

    chai.request(app)
    .get('/')
    //.set('Authorization', auth.token)
    .end(function (err,res) {
      res.should.have.status(200);
      done();
    })
    
  });
})



describe('Page to add a product', ()=>{

  it('return status 304', (done)=>{

    chai.request(app)
    .get('/new-product')
    .then((res)=>{
      res.should.have.status(200);
      done();
    })
    .catch((err)=>{
      return done(err);
    })

  })
      
})


//beforeEach(function(done) {
    //loginUser(auth, done);
  //});

//res.should.be.json;
      //res.body.should.be.instanceof(Array).and.have.length(1);
      //res.body[0].should.have.property('username').equal('admin');