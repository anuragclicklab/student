var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var cont  = Config.Constants;
var category = new Schema({
    categoryName:{type:'string',require:true,index: false},
    status:{type: String, enum: [cont.CATEGORY_STATUS.DISABLED,cont.CATEGORY_STATUS.ENABLED]},
    createdAt: {type: Date, default: Date.now},
    subcategories: [{type: Schema.ObjectId, ref: 'subcategories'}],
});
module.exports=mongoose.model('category',category);