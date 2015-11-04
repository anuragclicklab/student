var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertjobs = function (data, callback) {
    //console.log("insertstudent DAo",data);return callback(null,data);
    DaoManager.setData(models.jobs,data,callback);
};

var getalljobs =function(callback){ console.log("getallcategory");
    DaoManager.getData(models.jobs,'','',callback);
};

var studentjobs = function(data,callback){
    var query ={backlog:{$gte:5}};
    DaoManager.getData(models.jobs,query,'','',callback);
}
module.exports ={
    insertjobs:insertjobs,
    getalljobs:getalljobs,
    studentjobs:studentjobs
}