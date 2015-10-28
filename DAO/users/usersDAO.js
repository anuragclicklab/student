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

var update =function(condition,data,callback){ //console.log("usserDAo",condition);
    var options    = {};
    DaoManager.update_data(models.users,condition,data,options,callback);
    console.log(data);
    console.log(condition);

    //DaoManager.findOneAndUpdateData(models.users,data,condition,options,callback);

};

module.exports ={
    insertuser:insertuser,getdata:getdata,update:update
}