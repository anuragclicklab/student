var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');


var createuser = function(data,callbackRoute) {  //return callbackRoute(null,data);
   async.waterfall([
       function(callback)
       {
            if(data.type=='student') {
             var userData = {email: data.email, password: data.password, status: 'Enabled', type: 'student'};
            }else if(data.type=='admin'){
                var userData = {email: data.email, password: data.password, status: 'Enabled', type: 'admin'};
            }
           callback(null,userData);
       },
       function callback(userData,callback)
        {
           DAO.userDAO.insertuser(userData,callback);
            //return callbackRoute(null,userData);
        },
        function(resultdata,callback){
           if(data.type=='student') {
               var studentData ={ userId:resultdata._id,
                                  studentName:data.studentName,
                                  fatherName:data.fatherName,
                                  mothertName:data.mothertName,
                                  startingYear:data.startingYear,
                                  endYear:data.endYear,
                                  totalbacklocks:data.totalbacklocks,
                                  status:data.status,
               };
           }else if(data.type=='admin'){
               var studentData ={ userId:resultdata._id,
                   Name:data.studentName,
                   fatherName:data.fatherName,
               };
           }
           callback(null,studentData);
        },
        function callback(instudentData,callback){
            if(data.type=='student') {
                DAO.studentDAO.insertstudent(instudentData, callback);
            }else if(data.type=='admin'){
              DAO.adminDAO.insertuser(instudentData,callback);
            }
        },
        function callback(resStudentData,callback){
            var condition1 = {_id:resStudentData.userId};
            if(data.type=='student') {
                var data1 = {studentId: resStudentData._id};
            }else if(data.type=='admin'){
                //console.log("admin id",resStudentData._id);
                var data1 = {adminId: resStudentData._id};
            }
            DAO.userDAO.updateStudentId(condition1,data1,callback);
            //callback(null,condition1);
        },
    ],function (error, results) {
      if(error)
        return callbackRoute(error);
       else
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
var userdetaillist= function(callbackRoute){
    async.waterfall([
        function (callback)
        {
            return DAO.userDAO.userdetaillist(callback);
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
    createuser: createuser,
    userlist:userlist,
    userupdate:userupdate,
    delete_user:delete_user,
    userdetaillist:userdetaillist

}