var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobs = new Schema({
    companyName:{type:'string',require:true,index:false},
    companydetails:{type:'string',require:false,index:false},
    backlog:{type:'Number',require:true,index:false},
    jobvVcancies:{type:'Number',require:false,index:false},
    status:{type: String, enum: ['Enabled','Disabled','Published','Unpublished']},
    createdAt: {type: Date, default: Date.now},

});
module.exports=mongoose.model('jobs',jobs);