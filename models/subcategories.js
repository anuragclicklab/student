var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subcategories = new Schema({
    categoryName:{type:'string',require:true,index: false},
    status:{type: String, enum: ['Enabled','Disabled']},
    category: {type: Schema.ObjectId, ref: 'categories', required: true},
});

module.exports=mongoose.model('subcategories',subcategories);