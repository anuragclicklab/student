var controller = require('../../controllers');
var Joi        = require('joi');
var util       = require('../../Utilities/utili');
var Config = require('../../config/config.js');
var configConstants   =  Config.Constants;
var studentStatus     =  configConstants.STUDENT_STATUS;
var studentDepartment =  configConstants.STUDENT_DEPARTMENT;
var userType          =  Config.Constants.USER_TYPE;
var studentStatus     =  Config.Constants.STUDENT_STATUS
var createuser = { method:'POST',
    path:'/createuser',
    config:{

        description:'insert new user',
        tags: ['api','insert new user'],
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        },
        handler: function(request,reply){
            //console.log("route",request.payload); reply(request.payload);
           controller.user.createuser(request.payload, function (error, success) {
                if (error)
                {
                     reply(error);
                }else {
                    reply(success);
                }
            });
        },
        validate: {
            payload: {  fatherName: Joi.string().required().trim(),
                        mothertName: Joi.string().required().trim(),
                        email: Joi.string().email().required().trim(),
                        //type: Joi.string().required().optional(['admin','student']).trim(),
                         type: Joi.string().required().valid(userType.FACULTY,
                            userType.ADMIN,
                            userType.STUDENT
                         ),
                        department: Joi.string().required().valid(studentDepartment.CSE,
                         studentDepartment.ECE,
                         studentDepartment.ME,
                         studentDepartment.IT
                         ),
                        studentName: Joi.string().required().trim(),
                        password: Joi.string().required().trim(),
                        userImage: Joi.object().meta({swaggerType: 'file'}).optional().allow(''),
                        percentage: Joi.number().integer().required(),
                        startingYear: Joi.number().integer().required(),
                        endYear: Joi.number().integer().required(),
                        rollName: Joi.number().integer().required(),
                        totalbacklocks: Joi.number().integer().required(),
                        studentclass: Joi.string().required().trim(),
                        status: Joi.string().required().valid(studentStatus.DISABLED,
                            studentStatus.ENABLED,
                            studentStatus.PASSOUT,
                            studentStatus.PURSUING
                        )
                        //userImage: Joi.any()
                        // .meta({swaggerType: 'file'})
                        // .required()
                        // .description('image file')

            },
            failAction:util.failActionFunction /*function (request, reply, source, error) {

                error.output.payload.message = 'custom';
                //return reply(error).code(400);
                return reply(error);
            }*/
        },
        plugins: {
            'hapi-swagger': {
                responseMessages: [
                    {code: 200, message: 'OK'},
                    {code: 400, message: 'Bad Request'},
                    {code: 404, message: 'Login Error'},
                    {code: 500, message: 'Internal Server Error'}
                ]
            }
        }
    }
}

 var userlist = { method:'GET',
     path:'/userlist',
     config:{
     description:'user list',
     handler:function(error,reply){
         //console.log("kjhkjhkj");
         //reply("userlist");
         controller.user.userlist(function (error,sucess){
            if(error)
              reply(error);
            else
             reply(sucess);
         });
       }
     }
 }

 var userdetaillist = { method:'GET',
     path:'/userdetaillist',
     config:{
         description:'user list',
         tags: ['api','all users details'],
         handler:function(error,reply){
             //console.log("kjhkjhkj");
             //reply("userlist");
             controller.user.userdetaillist(function (error,sucess){
                 if(error)
                     reply(error);
                 else
                     reply(sucess);
             });
         },
         plugins: {
             'hapi-swagger': {
                 responseMessages: [
                     {code: 200, message: 'OK'},
                     {code: 400, message: 'Bad Request'},
                     {code: 404, message: 'Login Error'},
                     {code: 500, message: 'Internal Server Error'}
                 ]
             }
         }
     }
 }

 var updateuser = { method:'GET',
    path:'/update',
    config:{
           description:'update user data',
           handler: function(request,reply)
           {
               //562f3d78d734b9ba37eac961
               var conditions = { "_id": request.query.id }
               var data       = { "phoneNumber":request.query.phoneNumber};
              controller.user.userupdate(conditions,data,function(error,sucess){
                   if (error)
                       reply(error);
                   else
                       reply(sucess);
               });
               //reply(request.query.id);
           }
    }
};

 var delete_data = { method:'GET',
     path:'/deleteuser',
     config:{
             description :'Delete user ',
             handler:function(request,reply)
             { var conditions={'_id':request.query.id};
                 //console.log("route",request.query);
               controller.user.delete_user(conditions,function(error,sucess){
                  if(error)
                    reply(error);
                  else
                    reply(sucess);
               });
                   //reply("asdsads");
             }
     }

 }
var abc = [createuser,userlist,updateuser,delete_data,userdetaillist];
module.exports = abc;