var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');

/** main category **/
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

/** main category **/
var insertsubcategories = function(data,callbackRoute) {  //return callbackRoute(null,data);
    var data_array = {'categoryName':data.categoryName,'status':data.status,'parentcategory':data.id};
    async.waterfall([
        function (callback)
        {
            DAO.categoryDAO.insertsubcategories(data_array,callback);
            //return callbackRoute(null,data);
        },function(insertedarr,callback)
        {   var new_insertedarr ={'_id':data.id,'subcat_id':insertedarr.id}
            //console.log("cc",insertedarr);
            DAO.categoryDAO.pushsubcategories(new_insertedarr,callback);
            //return callback(null,"okcc");
        }
    ],function (error, results) {
        if(error) {
           // console.log("if");
            return callbackRoute(error);
        }else {
        return callbackRoute(null,results);
        }
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

var allcategory= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.categoryDAO.getallcategory(callback);
            //return callbackRoute(null,"getallcategory");
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });

}


var subcategorieslist= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.categoryDAO.getsubcategories(callback);
            //return callbackRoute(null,"subcategorieslist");
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });

}


/*
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
*/
module.exports = {
    insertcategory: insertcategory,
    categorylist:categorylist,
    insertsubcategories:insertsubcategories,
    subcategorieslist:subcategorieslist,
    allcategory:allcategory,
    /*userupdate:userupdate,
    delete_user:delete_user,*/

}