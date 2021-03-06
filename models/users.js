var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
//var xx= Config.Constants;
var user = new Schema({
    email: {type: String, unique: false, sparse: true},
    password: {type: String, required: true, select: false, unique: false},
    status: {type: String, enum: [Config.Constants.USER_STATUS.DISABLED,Config.Constants.USER_STATUS.ENABLED]},
    studentId: [{type: Schema.ObjectId, ref: 'student',default: null }],
    facultymemberId:[{type: Schema.ObjectId, ref: 'faculty',default: null }],
    adminId: [{type: Schema.ObjectId, ref: 'admin',default: null }],
    type: {type: String, enum: [Config.Constants.USER_TYPE.FACULTY,
                                Config.Constants.USER_TYPE.ADMIN,
                                Config.Constants.USER_TYPE.STUDENT
                               ]
    },
    accessToken:{'type':String,required: false,default: null},
    deviceToken:{'type':String,required: false,default: null},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', user);