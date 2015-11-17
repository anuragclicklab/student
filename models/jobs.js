var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var configConstants = Config.Constants;
var studentDepartment = configConstants.STUDENT_DEPARTMENT;
var jobs = new Schema({
    companyName:{type:'string',require:true,index:false},
    companydetails:{type:'string',require:false,index:false},
    backlog:{type:'Number',require:true,index:false},
    jobvVcancies:{type:'Number',require:false,index:false},
    status:{type:String , enum: [Config.Constants.JOB_STATUS.ENABLED,
                                 Config.Constants.JOB_STATUS.DISABLED,
                                 Config.Constants.JOB_STATUS.PUBLISHED,
                                 Config.Constants.JOB_STATUS.UNPUBLISHED
       ]},
    minimumpercentage:{type:'Number',require:true,index:false,default:60},
    maximumpercentage:{type:'Number',require:true,index:false,default:100},
    createdAt: {type: Date, default: Date.now},
    department:{type:String,enum:[ studentDepartment.CSE,
        studentDepartment.ECE,
        studentDepartment.ME,
        studentDepartment.IT
    ],default:studentDepartment.ME},
    department1:[{type:String,index:false}],
    //department1:[{type:'string',index:false}],
});
module.exports=mongoose.model('jobs',jobs);