var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertuser = function (data, callback) {
    //console.log("insert");
    DaoManager.setData(models.users, data, callback);
};

var getdata =function(callback){ //console.log("userDAO");
  DaoManager.getData(models.users,'','','',callback);
};

var update =function(condition,data,option,callback){ //console.log("usserDAo",condition);
    var options    = { multi: true };
    DaoManager.update_data(models.users,data,condition,options,callback);
};

module.exports ={
    insertuser:insertuser,getdata:getdata,update:update
}