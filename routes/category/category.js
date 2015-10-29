 var controller = require('../../controllers');
var insertcategory = { method:'GET',
    path:'/insertcategory',
    config:{
        description:'insert category into db',
        handler: function(request,reply){
            //console.log("fjdwbkgfdsg",request.query);
            //reply("dasasdasd");
           controller.category.insertcategory(request.query, function (error, success) {
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

 var category = { method:'GET',
     path:'/categorylist',
     config:{
     description:'category list',
     handler:function(error,reply){
         //console.log("kjhkjhkj");
         //reply("userlist");
         controller.category.categorylist(function (error,sucess){
            if(error)
              reply(error);
            else
             reply(sucess);
         });
       }
     }
 }
/*
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

 }*/
var abc = [insertcategory,category];
module.exports = abc;