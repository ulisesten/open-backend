var mongoose = require('mongoose');
var db = require('./connect');


var Schema = mongoose.Schema;

var User = mongoose
                .model('users',new Schema({
                    user_id: String,
                    email: String,
                    username: String,
                    password: String,
                    image: String,
                    role: Number,
                    user_ip: Array,
                    contrib: Boolean,
                    timestamp: Date
                },{collection: 'usuarios'}))

var Pub = mongoose
                .model('pubs',new Schema({
                    id: String,
                    userid: String,
                    username: String,
                    content: String,
                    timestamp: String,
                    mg: Number,
                    nmg: Number,
                    coments: Number
                },{collection: 'publicaciones'}))


var Product = mongoose
                .model('product',new Schema({
                    seller_id: String,
                    seller_name: String,
                    id: String,
                    product_name: String,
                    description: String,
                    price: Number,
                    category: String,
                    count: Number,
                    image_array: String,
                    timestamp: Date,
                    updated: Date
                },{ collection: 'products' }))

var Category = mongoose
                .model('category',new Schema({
                    id: String,
                    category: String,
                    description: String,
                    imageurl: String,
                    timestamp: Date,
                    updated: Date
                },{ collection: 'categories' }))


var Friend = mongoose
                .model('friends', new Schema({
                    userid: String,
                    user: String,
                    friendid: String,
                    friend: String
                },{collection: 'amigos'}))


module.exports = {
    User,
    Product,
    Category,
    Pub,
    Friend
}
