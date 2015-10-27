var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');


var createuser = function(data,callbackRoute) {  return callbackRoute(null,data);
   async.waterfall([
        function (callback)
        {
           // DAO.userDAO.insertuser(data,callback);
            return callbackRoute(null,data);
        }
    ],function (error, results) {
      if(error)
        return callbackRoute(error);
      return callbackRoute(null,results)
    });
}
module.exports = {
    createuser: createuser,
}