var async = require('async');
var DAO = require('../../DAO');
var mongoose = require('mongoose');
var Path = require('path');
var hapi = require('hapi');
var fs = require('fs');
var Config = require('../../config/config.js');
var createuser = function(data,callbackRoute) {  //return callbackRoute(null,data);
   async.waterfall([
       function(callback)
       {  //console.log("path2",__dirname);
          if (data.userImage) {
               var name = data.userImage.hapi.filename;
               var path = __dirname + "/../../uploads/" + name;
               var userImage = fs.createWriteStream(path);
              userImage.on('error', function (err) {
                   console.error(err)
               });
              data.userImage.pipe(userImage);
              data.userImage.on('end', function (err) {
                  var ret = {
                      filename: data.userImage.hapi.filename,
                      headers: data.userImage.hapi.headers
                  }
                  //reply(JSON.stringify(ret));
              });
              var insertfilename = {filename:name };
           }else{
              var insertfilename = {filename:null };
          }
           callback(null,insertfilename);
       },
       function(insertfilename,callback)
       { //console.log("insertfilename",insertfilename);
            if(data.type=='student') {
             var userData = {email: data.email, password: data.password, status: 'Enabled', type: 'student' ,fileName : insertfilename.filename ,department:data.department,percentage:data.percentage};
            }else if(data.type=='admin'){
                var userData = {email: data.email, password: data.password, status: 'Enabled', type: 'admin',fileName : insertfilename.filename};
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
                                  department:data.department,
                                  percentage:data.percentage
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