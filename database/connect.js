var mongoose = require('mongoose');
//import mongoose from 'mongoose';

var mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/nekidb';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL,{ useNewUrlParser: true }, function (err) {
    if (err) {
      console.log('mongoose.connect err:', err)
    } else {
        console.log('mongodb connection success')
    }
});

var db = mongoose.connection;
db.on('db.on: error', console.error.bind(console, 'connection error:'));

module.exports = db;
