var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');


var insertcategory = function(data,callbackRoute) {  //return callbackRoute(null,data);
    async.waterfall([
        function (callback)
        {
            DAO.categoryDAO.insertcategory(data,callback);
            //return callbackRoute(null,"ccc");
        }
    ],function (error, results) {
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,results);
    });
}

var categorylist= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.categoryDAO.getcategory(callback);
            //return callbackRoute(null,"kjkjk");
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });

}

var userupdate = function(conditions,data,callbackRoute){
    async.waterfall([
        function (callback)
        {
            DAO.userDAO.update(conditions,data,callback); //
            //return callbackRoute(null,"controller");
        }

    ],function(error,res){
        if(error)
            return callbackRoute(error);
        else
            return callbackRoute(null,res);
    });

}
var delete_user = function(conditions ,callbackRoute){
    async.waterfall([
        function (callback)
        {
            DAO.userDAO.delete_user(conditions,callbackRoute);
            //return callbackRoute(null,"controller");
        }
    ],function(error,res){
        if(error)
            return callbackRoute(error);
        else
            return callbackRoute(null,"cccc");
    });

}

module.exports = {
    insertcategory: insertcategory,
    categorylist:categorylist,
    /*userupdate:userupdate,
    delete_user:delete_user,*/

}