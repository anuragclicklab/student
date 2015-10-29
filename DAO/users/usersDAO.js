var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertuser = function (data, callback) {
    //console.log("insert",data);//return callback(null,data);
   DaoManager.setData(models.users, data, callback);
};

var getdata =function(callback){ //console.log("userDAO");
  DaoManager.getData(models.users,'','','',callback);
};

var update =function(condition,data,callback){ //console.log("usserDAo",condition);
    var options    = {};
    //DaoManager.update_data(models.users,condition,data,options,callback);
    DaoManager.findOneAndUpdateData(models.users,condition,data,options,callback);
};

var delete_record = function(conditions,callback){
       DaoManager.deleteData(models.users,conditions,callback);
       //callback(null,"userDAO");
}

module.exports ={
    insertuser:insertuser,getdata:getdata,update:update,delete_user:delete_record
}