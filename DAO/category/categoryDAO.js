var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertcategory = function (data, callback) {
    //console.log("insertcategory DAo",data);return callback(null,data);
    DaoManager.setData(models.category, data, callback);
};

var insertsubcategories = function (data, callback) {
    //console.log("insertcategory DAo",data);return callback(null,data);
    DaoManager.setData(models.subcategories, data, callback);
};

var getcategory =function(callback){ //console.log("getcategory");
  DaoManager.getData(models.category,'','','',callback);
};

var getallcategory =function(callback){ console.log("getallcategory");
    //var query ={"_id": "563320565e711d0b02aed2d2"};
    var query ={};
    DaoManager.getDatausingpopulate(models.category,query,'','',callback);
};

var getsubcategories =function(callback){ //console.log("getcategory");
        DaoManager.getData(models.subcategories,'','','',callback);
};


var push_subcategories =function(data,callback) {
    //console.log("anurag",data);
    var condition1 = {'_id':data._id};
    var data1      = {'subcategories':data.subcat_id};
    //return callback(null,data);
    DaoManager.push_subcategories(models.category,condition1,data1,callback);
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
    insertcategory:insertcategory,
    getcategory:getcategory,
    insertsubcategories:insertsubcategories,
    getsubcategories:getsubcategories,
    pushsubcategories:push_subcategories,
    getallcategory:getallcategory
     /*update:update,delete_user:delete_record*/
}