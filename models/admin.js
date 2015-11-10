var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var admin = new Schema({
    Name:{type:'string',require:true,index: false},
    fatherName:{type:'string',require:true,index: false},
    userId: {type: Schema.ObjectId, ref: 'users', required: false},
    createdAt: {type: Date, default: Date.now},
    //subcategories: [{type: Schema.ObjectId, ref: 'subcategories'}],
});
module.exports=mongoose.model('admin',admin);