var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');

var checkaccesstoken = function(data,callback){ //console.log("checkaccesstoken DAo",data);
    var data1 ={'accessToken':data};
    DaoManager.getData(models.users,data1,{},{}, callback);
}
var insertjobs = function (data, callback) {
    //console.log("insertstudent DAo",data);return callback(null,data);
    DaoManager.setData(models.jobs,data,callback);
};

var getalljobs =function(callback){ //console.log("getallcategory");
    DaoManager.getData(models.jobs,'','',callback);
};

var studentjobs = function(data,callback){
    DaoManager.getData(models.jobs,data,'','',callback);
}
module.exports ={
    insertjobs:insertjobs,
    getalljobs:getalljobs,
    studentjobs:studentjobs,
    checkaccesstoken:checkaccesstoken
}