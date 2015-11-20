var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');
var log4js = require('log4js');
var logger = log4js.getLogger('[ADMIN_BASE_CONTROLLER]');
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
            //return callbackRoute(null,data);

        },function(studentbacklocks,callback){
           // {$gte:5}
            //console.log("student data",studentbacklocks);
            var jj = {'backlog':{$gte:studentbacklocks[0].totalbacklocks },
                      department:studentbacklocks[0].department,
                      minimumpercentage:{$lte:studentbacklocks[0].percentage }
                     };
            return DAO.jobsDAO.studentjobs(jj,callback);
            //return callbackRoute(null,studentbacklocks);
        }

    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });

}

var studentseries = function (data,callbackRoute){
    var studentlist =[]
    async.series([
        function(callback)
        {
             DAO.studentDAO.getstudent_backloc(4,function(error,data){
                 if(error){
                   callback(error);
                 }else {
                     studentlist= data; //console.log("sss",studentlist);
                     callback(null,studentlist);
                 }
             });
        },
        function(callback)
        {
            /*async.forEachSeries(studentlist.length,function(i,next) {
                console.log("sss",studentlist[i].id,next);

            },callback); */

            async.eachSeries(studentlist,function iterator(item, callback) {
                console.log("sss",item);

            });
        }

    ],function(err,result){
        if(err)
           return callbackRoute(err);
        else
           return callbackRoute(null,result);
    }) ;

}
module.exports = {
    insertstudent: insertstudent,
    studentlist:studentlist,
    studentjobs:studentjobs,
    studentseries:studentseries
}