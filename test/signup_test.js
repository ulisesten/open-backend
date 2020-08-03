var chai = require('chai');
var chaiHttp = require('chai-http');

var app = require('../bin/app');

chai.use(chaiHttp);
chai.should();

describe('POST /register', ()=>{

    it('send a new user info en return status 200', (done)=>{

        var identifier = new Date().getTime();

        let newUserInfo = {
            username: `test_user_${identifier}`,
            email: `test_user_${identifier}@test.com`,
            password: '123'
        }

        chai.request(app)
        .post('/mobileRegister')
        .send(newUserInfo)
        .end(( err, res )=>{

            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('credentials');

            done();

        });

    })
})




describe('POST register', ()=>{

    it('Send an already registered user and returns 401', (done)=>{

        let alreadyRegisteredUserInfo = {
            username: 'ulisesten',
            email: `ulises.mtz.el@gmail.com`,
            password: '123'
        }

        chai.request(app)
        .post('/mobileRegister')
        .send(alreadyRegisteredUserInfo)
        .end(( err, res )=>{
            res.should.have.status(401)

            done();
        })
    });
})