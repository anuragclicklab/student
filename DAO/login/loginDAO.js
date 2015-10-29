var DaoManager = require('../DaoManager');
var async = require('async');
var models = require('../../Models');

var getdata_withconditions  =function(data,callback){
    //var conditions1 = { $and:[{'email':data.email},{'password':data.password}]};
    var conditions1 = [{'email':data.email},{'password':data.password}];
    DaoManager.getData_conditions(models.users, conditions1,callback);
    //callback(null,conditions1);
};

module.exports= {getdata_withconditions:getdata_withconditions}