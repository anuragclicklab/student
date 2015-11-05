var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var CONFIG = require('../Config');
var user = new Schema({
    email: {type: String, unique: false, sparse: true},
    password: {type: String, required: true, select: false, unique: false},
    status: {type: String, enum: ['Enabled','Disabled']},
    studentId: [{type: Schema.ObjectId, ref: 'student',default: null }],
    facultymemberId:[{type: Schema.ObjectId, ref: 'faculty',default: null }],
    adminId: [{type: Schema.ObjectId, ref: 'admin',default: null }],
    type: {type: String, enum: ['student','admin','faculty']},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', user);