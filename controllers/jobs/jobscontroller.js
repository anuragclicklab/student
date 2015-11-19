var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');

var insertjobs = function(data1,accesstoken,callbackRoute) {  //return callbackRoute(null,data);
    var dta =data1;
    async.waterfall([
        function (callback)
        {
          DAO.jobsDAO.checkaccesstoken(accesstoken,callback);
           //console.log("ccc",accesstoken);
           // callbackRoute(null);
        },
        function (accessTokenData,callback){
            if(accessTokenData.length==0)
            {
                callbackRoute(null,"Access is denied");
            }else{
                callback(null,data1);
            }
        },
        function (dd,callback)
        {   //console.log("dd",dta);
            DAO.jobsDAO.insertjobs(dta,callback);
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