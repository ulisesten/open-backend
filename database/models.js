var mongoose = require('mongoose');
//var db = require('./connect');


var Schema = mongoose.Schema;

var User = mongoose
                .model('users',new Schema({
                    id: String,
                    device_id: String,
                    email: String,
                    username: String,
                    password: String,
                    profile_picture: String,
                    profile_cover: String,
                    role: Number,
                    user_ip: Array,
                    founder: Boolean,
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
                    seller_device_id: String,
                    seller_name: String,
                    id: String,
                    product_name: String,
                    description: String,
                    price: Number,
                    category: String,
                    shape: String,
                    count: Number,
                    image_array: Array,
                    timestamp: Date,
                    updated: Date
                },{ collection: 'products' }))


var Message = mongoose
                .model('message',new Schema({
                    id: String,
                    from_id: String,
                    to_id: String,
                    from_device_id:String,
                    sender_name: String,
                    receiver_name: String,
                    message: String,
                    product_id: String,
                    timestamp: Date
                },{ collection: 'messages' }))

var Cover = mongoose
                .model('cover',new Schema({
                    id: String,
                    cover_id: String,
                    seller_id: String,
                    seller_name: String,
                    description: String,
                    category: String,
                    timestamp: Date,
                    exp_date: Date
                },{ collection: 'covers' }))

var TodayNumber = mongoose
                .model('number',new Schema({
                    id: String,
                    number: String,
                    description: String,
                    visible: Boolean,
                    timestamp: Date
                },{ collection: 'numbers' }))

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
     User
    ,Product
    ,Category
    ,Pub
    ,Message
    ,Cover
    ,TodayNumber
    ,Friend
}
