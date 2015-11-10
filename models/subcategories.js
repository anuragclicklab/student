var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var subcategories = new Schema({
    categoryName:{type:'string',require:true,index: false},
    status:{type: String, enum: [Config.Constants.SUBCATEGORY_STATUS.DISABLED,Config.Constants.SUBCATEGORY_STATUS.ENABLED]},
    parentcategory: {type:Schema.ObjectId, ref: 'category', required: true},
});

module.exports=mongoose.model('subcategories',subcategories);