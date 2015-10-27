var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var CONFIG = require('../Config');
var user = new Schema({
    email: {type: String, unique: false, sparse: true},
    fullName: {type: String,unique: false},
    phoneNumber: {type: String, unique: false, required: true, index: false},
    password: {type: String, required: true, select: false, unique: false},
    fullAddress: {type: String,unique: false},
    status: {type: String, enum: ['Enabled','Disabled']},
    createdAt: {type: Date, required: false}
});

module.exports = mongoose.model('users', user);