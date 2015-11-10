var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config.js');
var jobs = new Schema({
    companyName:{type:'string',require:true,index:false},
    companydetails:{type:'string',require:false,index:false},
    backlog:{type:'Number',require:true,index:false},
    jobvVcancies:{type:'Number',require:false,index:false},
    status:{type: String, enum: [Config.Constants.JOB_STATUS.ENABLED,
                                 Config.Constants.JOB_STATUS.DISABLED,
                                 Config.Constants.JOB_STATUS.PUBLISHED,
                                 Config.Constants.JOB_STATUS.UNPUBLISHED
       ]},
    createdAt: {type: Date, default: Date.now},

});
module.exports=mongoose.model('jobs',jobs);