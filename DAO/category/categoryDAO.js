var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertcategory = function (data, callback) {
    //console.log("insertcategory DAo",data);return callback(null,data);
    DaoManager.setData(models.category, data, callback);
};

var getcategory =function(callback){ //console.log("getcategory");
  DaoManager.getData(models.category,'','','',callback);
};
/*
var update =function(condition,data,callback){ //console.log("usserDAo",condition);
    var options    = {};
    //DaoManager.update_data(models.users,condition,data,options,callback);
    DaoManager.findOneAndUpdateData(models.users,condition,data,options,callback);
};

var delete_record = function(conditions,callback){
       DaoManager.deleteData(models.users,conditions,callback);
       //callback(null,"userDAO");
}
*/
module.exports ={
    insertcategory:insertcategory,getcategory:getcategory,/*update:update,delete_user:delete_record*/
}