var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');

var insertjobs = function(data,callbackRoute) {  //return callbackRoute(null,data);
    async.waterfall([
        function (callback)
        {
            DAO.jobsDAO.insertjobs(data,callback);
            //return callbackRoute(null,"ccc");
        }
    ],function (error, results) {
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,results);
    });
}

var alljobs= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.jobsDAO.getalljobs(callback);
            //return callbackRoute(null,"alljobs");
        }
    ],function(error,result){
        if(error)
            return callbackRoute(error);
        return callbackRoute(null,result);
    });
}

module.exports = {
    insertjobs: insertjobs,
    alljobs:alljobs,
}