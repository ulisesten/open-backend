var chai = require('chai');
var chaiHttp = require('chai-http');
// Interesting part
var app = require('../bin/app');
//var loginUser = require('./login.js');
//var auth = {token: ''};

chai.use(chaiHttp);
chai.should();

describe('/POST login', () => {
    it('It sends credentials and returns token and info', (done) => {
        let info = {
            email: "ulises.mtz.el@gmail.com",
            password: "123"
        }
      chai.request(app)
          .post('/mobileLogin')
          .send(info)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('username').eql('ulisesten');
              done();
          });
    });
  
  });

  describe('/POST login', () => {
    it('It sends wrong email and return 401', (done) => {
        let info = {
            email: "ulises.mtz.el@gmail.co",
            password: "123"
        }
      chai.request(app)
          .post('/mobileLogin')
          .send(info)
          .end((err, res) => {
              res.should.have.status(401);
              //res.body.should.be.a('object');
              //res.body.should.have.property('username').eql('ulisesten');
              done();
          });
    });
  
  });

  describe('/POST login', () => {
    it('It sends wrong password and return 403', (done) => {
        let info = {
            email: "ulises.mtz.el@gmail.com",
            password: "1234"
        }
      chai.request(app)
          .post('/mobileLogin')
          .send(info)
          .end((err, res) => {
              res.should.have.status(403);
              //res.body.should.be.a('object');
              //res.body.should.have.property('username').eql('ulisesten');
              done();
          });
    });
  
  });