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

var insertsubcategories = { method:'GET',
    path:'/api/category/insertsubcategories',
    config:{
        description:'insert category into db',
        handler: function(request,reply){
            //console.log("fjdwbkgfdsg",request.query);
            //reply("insertsubcategories");
            controller.category.insertsubcategories(request.query, function (error, success) {
                if (error)
                {
                    reply(error);
                }else {
                    reply(success);
                }
            });
        }
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

var subcategorieslist = { method:'GET',
    path:'/subcategorieslist',
    config:{
        description:'category list',
        handler:function(error,reply){
            //console.log("kjhkjhkj");
            //reply("userlist");
            controller.category.subcategorieslist(function (error,sucess){
                if(error)
                    reply(error);
                else
                    reply(sucess);
            });
        }
    }
}

var allcategory = {
    method:'GET',
    path:'/api/allcategory',
    config:{
        description:'category list',
        tags: ['api','api categoty'],
        handler:function(error,reply){
            //console.log("kjhkjhkj");
            //reply("userlist");
            controller.category.allcategory(function (error,sucess){
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

var abc = [insertcategory,category,insertsubcategories,subcategorieslist,allcategory];
module.exports = abc;