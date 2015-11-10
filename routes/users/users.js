 var controller = require('../../controllers');
var createuser = { method:'POST',
    path:'/createuser',
    config:{
        description:'insert into db',
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
        /*validate: {
            payload: { fname: Joi.string().required().trim(),
                email: Joi.string().email().required().trim(),
            },
            failAction: function (request, reply, source, error) {

                error.output.payload.message = 'custom';
                //return reply(error).code(400);
                return reply(error);
            }
        }*/
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