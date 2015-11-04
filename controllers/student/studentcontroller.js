var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');

var insertstudent = function(data,callbackRoute) {  //return callbackRoute(null,data);
    async.waterfall([
        function (callback)
        {
            DAO.studentDAO.insertstudent(data,callback);
            //return callbackRoute(null,"ccc");
        }
    ],function (error, results) {
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,results);
    });
}


var studentlist= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.studentDAO.getstudent(callback);
            //return callbackRoute(null,"kjkjk");
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });

}


var studentjobs= function(data,callbackRoute){
    async.waterfall([
        function (callback)
        {
           return DAO.studentDAO.getstudentbackloc(data,callback);
            //return callbackRoute(null,"studentjobsC");
        },function(studentbacklocks,callback){
            var jj = studentbacklocks[0].totalbacklocks;
            return DAO.jobsDAO.studentjobs(data,callback)
            //return callbackRoute(null,studentbacklocks);
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
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

module.exports = {
    insertstudent: insertstudent,
    studentlist:studentlist,
    studentjobs:studentjobs,
}