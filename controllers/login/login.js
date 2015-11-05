var async     =  require('async');
var DAO       =  require('../../DAO');
var mongoose  =  require('mongoose');
var Path      = require('path');


var auth = function(data,callbackRoute) {
    async.waterfall([
        function(callback)
        {
            DAO.loginDAO.getdata_withconditions(data,callback);
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

