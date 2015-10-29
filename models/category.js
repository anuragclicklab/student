var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = new Schema({
    categoryName:{type:'string',require:true,index: false},
    status:{type: String, enum: ['Enabled','Disabled']},
    createdAt: {type: Date, default: Date.now},
    subcategories: [{type: Schema.ObjectId, ref: 'subcategories'}],
});
module.exports=mongoose.model('category',category);