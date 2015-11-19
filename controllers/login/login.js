var async     =  require('async');
var DAO       =  require('../../DAO');
var mongoose  =  require('mongoose');
var Path      = require('path');
var Token = require('../../Utilities/TokenManager');

var auth = function(data,callbackRoute) {
    var newToken =null;
    var dataToken ;
    async.waterfall([
        function(callback)
        {
            DAO.loginDAO.getdata_withconditions(data,callback);
        },
        function (resData,callback)
        {  //console.log("resDF",resData);
            var TokenData = {_id:resData._id,email:resData.email};
            newToken  =  Token.generateToken(TokenData);

            var condition1 = {_id:resData[0]._id};
            //console.log("condition1",condition1);
             dataToken ={'accessToken':newToken};
            DAO.userDAO.updateToken(condition1,dataToken,callback);
            //callback(null,resData);
        },
        function(resToken,callback)
        {   var dd = {'status':200,'accessToken':newToken};
            callback(null,dd);
        }
    ],function(error,result){
       if(error)
         return callbackRoute(error);
       else
          return callbackRoute(null,result);
    });

}

module.exports={auth:auth

}

