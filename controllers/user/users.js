var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');


var createuser = function(data,callbackRoute) {  //return callbackRoute(null,data);
   async.waterfall([
        function (callback)
        {
           DAO.userDAO.insertuser(data,callback);
            //return callbackRoute(null,data);
        }
    ],function (error, results) {
      if(error)
        return callbackRoute(error);
      return callbackRoute(null,results);
    });
}
var userlist= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
             return DAO.userDAO.getdata(callback);
            //return callbackRoute(null,"kjkjk");
        }

    ],function(error,result){
       if(error)
         return callbackRoute(error);
       return callbackRoute(null,result);
    });

}

module.exports = {
    createuser: createuser,userlist
}