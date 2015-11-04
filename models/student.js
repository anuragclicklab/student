var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student = new Schema({
    studentName:{type:'string',require:true,index: false},
    fatherName:{type:'string',require:true,index: false},
    mothertName:{type:'string',require:true,index: false},
    startingYear:{type:'string',require:true,index: false},
    endYear:{type:'string',require:true,index: false},
    totalbacklocks:{type:'string',require:true,index: false},
    studentclass:{type:'string',require:true,index: false},
    rollName:{type:'Number',require:true,index: false},
    status:{type: String, enum: ['Enabled','Disabled','Pursuing','PassOut']},
    userId: {type: Schema.ObjectId, ref: 'users', required: false},
    createdAt: {type: Date, default: Date.now},
    //subcategories: [{type: Schema.ObjectId, ref: 'subcategories'}],
});
module.exports=mongoose.model('student',student);