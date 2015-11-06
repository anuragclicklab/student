var controller = require('../../controllers');
var Joi        = require('joi');
var util       = require('../../Utilities/utili');
var insertcategory = { method:'POST',
    path:'/insertcategory',
    config:{
        description:'insert category into db',
        tags: ['api','api insert Category'],
        handler: function(request,reply){
           // console.log("fjdwbkgfdsg",request.payload);//reply("dasasdasd",request.payload);
           controller.category.insertcategory(request.payload, function (error, success) {
                if (error)
                {
                     reply(error);
                }else {
                    reply(success);
                }
            });
        },
        validate: {
            payload: {
                categoryName:Joi.string().required().trim(),
                status:Joi.string().required().trim(),
            },failAction:util.failActionFunction
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

var insertsubcategories = { method:'POST',
    path:'/insertsubcategories',
    config:{
        description:'insert category into db',
        tags: ['api','api insert subcategories'],
        handler: function(request,reply){
            //console.log("fjdwbkgfdsg",request.payload);reply("insertsubcategories");
            controller.category.insertsubcategories(request.payload, function (error, success) {
                if (error)
                {
                    reply(error);
                }else {
                    reply(success);
                }
            });
        },
        validate: {
            payload: {
                categoryName:Joi.string().required().trim(),
                parentcategoryId:Joi.string().required().trim(),
                status:Joi.string().required().trim(),
            },failAction:util.failActionFunction
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