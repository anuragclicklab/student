 var controller = require('../../controllers');
var createuser = { method:'GET',
    path:'/createuser',
    config:{
        description:'insert into db',
        handler: function(request,reply){
            //console.log("fjdwbkgfdsg",request.query);

           controller.user.createuser(request.query, function (error, success) {
                if (error)
                {
                     reply(error);
                }else {
                    reply(success);
                }
            } );
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
}
var abc = [createuser,userlist,updateuser];
module.exports = abc;