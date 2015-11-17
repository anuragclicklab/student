var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var configConstants = Config.Constants;
var studentStatus = configConstants.STUDENT_STATUS;
var studentDepartment = configConstants.STUDENT_DEPARTMENT;
var student = new Schema({
    studentName:{type:'string',require:true,index: false},
    fatherName:{type:'string',require:true,index: false},
    mothertName:{type:'string',require:true,index: false},
    startingYear:{type:'string',require:true,index: false},
    endYear:{type:'string',require:true,index: false},
    totalbacklocks:{type:'string',require:true,index: false},
    studentclass:{type:'string',require:true,index: false},
    rollName:{type:'Number',require:true,index: false},
    status:{type: String, enum: [  //Config.Constants.STUDENT_STATUS.ENABLED,
                                    studentStatus.ENABLED,
                                    studentStatus.DISABLED,
                                    studentStatus.PURSUING,
                                    studentStatus.PASSOUT
                                ]},
    department:{type:String,enum:[ studentDepartment.CSE,
                                   studentDepartment.ECE,
                                   studentDepartment.ME,
                                   studentDepartment.IT
                                 ],default:studentDepartment.ME},
    userId: {type: Schema.ObjectId, ref: 'users', required: false},
    percentage:{type:'Number',index: false,default:0},
    createdAt: {type: Date, default: Date.now},

    });
module.exports=mongoose.model('student',student);