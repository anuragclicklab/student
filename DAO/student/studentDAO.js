var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertstudent = function (data, callback) {
    //console.log("insertstudent DAo",data);return callback(null,data);
    DaoManager.setData(models.student, data, callback);
};

var insertsubcategories = function (data, callback) {
    //console.log("insertcategory DAo",data);return callback(null,data);
    DaoManager.setData(models.subcategories, data, callback);
};

var getstudent =function(callback){ //console.log("getcategory");
    DaoManager.getData(models.student,'','','',callback);
};

var getstudentbackloc =function(data,callback){ //console.log("getstudentbackloc",data);
    var query          =  {"_id": data.id};
    //var query          =  {$and: [{"_id": data.id},{"totalbacklocks":{ $gte: 3 }}]};//var query ={};
    var selectedfields =  {_id : 1, fullName : 1, totalbacklocks: 1,status:1,department:1,percentage:1};
    DaoManager.getDataSelectedFields(models.student,query,'','',selectedfields,callback);
};

var getstudent_backloc =function(data,callback){ //console.log("student ll",data);
    var conditions1 = {"totalbacklocks":{$gte:data}};
    //callback(null,"dsada");
    DaoManager.getData(models.student,conditions1,'','',callback);
};

module.exports ={
    insertstudent:insertstudent,
    getstudent:getstudent,
    getstudentbackloc:getstudentbackloc,
    getstudent_backloc:getstudent_backloc,

}