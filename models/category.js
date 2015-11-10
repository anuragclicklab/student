var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var category = new Schema({
    categoryName:{type:'string',require:true,index: false},
    status:{type: String, enum: [Config.Constants.CATEGORY_STATUS.DISABLED,Config.Constants.CATEGORY_STATUS.ENABLED]},
    createdAt: {type: Date, default: Date.now},
    subcategories: [{type: Schema.ObjectId, ref: 'subcategories'}],
});
module.exports=mongoose.model('category',category);