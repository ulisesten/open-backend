/**Ulisesten at viernes septiembre 28, 2018
 *Consultas a la base de datos*/
var db = require('./connect'),
    model= require('./models');

/***/
var user = db.collection('usuarios');
var pub = db.collection('publicaciones')

function setCount(ip, date){
    var count = new model.Count({
        ip: ip,
        date: date
    });

    count.save(function(err,data){
        if(err) console.error('Error at count.save: ', err);
    });
}

function getCount(cb){
    //var count = db.collection('counts');

    model.Count.find({},function (err, res) {
        if (err) console.error('getCount: ', err)
        cb(res)
    });
}


function checkUser(correo, callback){
    function checking(){
        return new Promise(function (done) {
            user.findOne({ 'correo': correo},'-imagen -role -ip -contrib -tiempo', function(err, doc){

                if(!doc){
                    console.log('usuario no existe',err)
                    done(null);
                } else {
                    console.log('usuario existe')
                    
                    done(doc);
                }
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}

function saveUser(data, cb){
    var info = new model.User(data);

    info.save((err, res) => {
            if (err) {
                console.log('saveUser: Error al intentar guardar',error);
                cb(null);
            } else {
                console.log('saveUser: El siguiente usuario se guard_o correctamente', res.usuario);
                cb({
                    id: res.id,
                    nombre: res.usuario,
                    _id: res._id});
            }
        });
}


function matchingUsers(nombre, callback){
    function checking(){
        return new Promise(function (done) {

            var regex = new RegExp(nombre,'gi')
            model.User.find({ 'usuario': regex},'id usuario -_id', function(err, res){

                if(!res){

                    console.log('no hay coincidencias',err)
                    done(null);

                } else {

                    console.log('Se encontraron coincidencias')
                    done(res);

                }
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}



function savePub(data, cb){
    var info = new model.Pub(data);

    info.save((err, res) => {
            if (err) {
                console.log('savePub: Error al intentar guardar',error);
                cb(null);
            } else {
                console.log('savePub: La siguiente publicaci_on se guard_o correctamente', res.id);
                cb(res);
            }
        });
}

/*function matchingPubs(nombre, callback){
    function checking(){
        return new Promise(function (done) {

            //var regex = new RegExp(nombre,'gi')
            model.Pub.find({ 'usuario': nombre },'-_id', function(err, res){

                if(!res){
                    console.log('no hay publicaciones',err)
                    done(null);
                } else {
                    console.log('Se encontraron publicaciones')

                    done(res);
                }
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}*/

function matchingPubs(arr, callback){
    function checking(){
        return new Promise(function (done) {

            //var regex = new RegExp(nombre,'gi')
            pub.find({ 'userid': { $in: arr }},'-_id').toArray(function (err, res) {
                if (err) console.log('lP:err', res)

                console.log('pubs',res);
                done(res)
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}

function setFriend(data, cb){
    var friend = new model.Friend(data);

    friend.save((err, res) => {
        if (err) {
            console.log('setFriend: Error al intentar guardar:',error);
            cb(null);
        } else {
            console.log('setFriend: El siguiente contacto se guardo_ con e_xito:', res.id);
            cb(res);
        }
    });
}

function getFriendsId(userid, callback){
    function checking(){
        return new Promise(function (done) {

            //var regex = new RegExp(nombre,'gi')
            model.Friend.find({ 'userid': userid }).distinct('friendid',function(err, res){

                if(!res){
                    console.log('No hay contactos id',err)
                    done(null);
                } else {
                    console.log('Se encontraron contactos id',res)
                    done(res);
                }
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}

function getFriends(userid, callback){
    function checking(){
        return new Promise(function (done) {

            //var regex = new RegExp(nombre,'gi')
            model.Friend.find({ 'userid': userid },'-_id -userid -user', function(err, res){

                if(!res){
                    console.log('No hay contactos',err)
                    done(null);
                } else {
                    console.log('Se encontraron contactos',res)
                    done(res);
                }
            })
        })
    }

    checking().then(function(res){
        callback(res);
    })
}

/**function dropDb(){
  db.dropDatabase();
  console.log('borrando base de datos')
}*/

module.exports = {
    setCount,
    getCount,
    checkUser,
    saveUser,
    matchingUsers,
    savePub,
    matchingPubs,
    setFriend,
    getFriendsId,
    getFriends
}
