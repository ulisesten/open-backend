var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../bin/app');

chai.use(chaiHttp);
chai.should();


describe('Home Page', function() {

  it('returns status 200', function(done) {

    chai.request(app)
    .get('/')
    .end(function (err,res) {
      res.should.have.status(200);
      done();
    })
    
  });
})



describe('Page to add a product', ()=>{

  it('expect to be redirect', (done)=>{

    chai.request(app)
    .get('/new-product')
    .end(( err, res )=>{
      res.should.to.redirect
      //res.should.to.redirectTo('/ingresar');
      done();
    })

  })
      
})


//beforeEach(function(done) {
    //loginUser(auth, done);
  //});

//res.should.be.json;
      //res.body.should.be.instanceof(Array).and.have.length(1);
      //res.body[0].should.have.property('username').equal('admin');