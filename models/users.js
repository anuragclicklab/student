var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var CONFIG = require('../Config');
var user = new Schema({
    email: {type: String, unique: false, sparse: true},
    password: {type: String, required: true, select: false, unique: false},
    status: {type: String, enum: ['Enabled','Disabled']},
    studentId: [{type: Schema.ObjectId, ref: 'student'}],
    //adminId: [{type: Schema.ObjectId, ref: 'subcategories'}],
    type: {type: String, enum: ['student','admin']},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', user);