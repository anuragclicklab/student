var controller = require('../../controllers');

var studentlist = { method:'GET',
    path:'/studentlist',
    config:{
        description:'category list',
        handler:function(error,reply){
            //console.log("kjhkjhkj");
            //reply("userlist");
            controller.studentC.studentlist(function (error,sucess){
                if(error)
                    reply(error);
                else
                    reply(sucess);
            });
            //reply("studentlist");
        }
    }
}

var insertjobs = { method:'POST',
    path:'/insertjobs',
    config:{
        description:'insert new job ',
        tags: ['api','api insert jobs'],
        handler: function(request,reply){
           // console.log("fjdwbkgfdsg",request.payload); reply("insertjobs routes");
            controller.jobC.insertjobs(request.payload, function (error, success) {
                if (error)
                {
                    reply(error);
                }else {
                    reply(success);
                }
            } );
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

var allcategory = {
    method:'GET',
    path:'/alljobs',
    config:{
        description:'jobs list',
        tags: ['api','api jobs'],
        handler:function(error,reply){
            //console.log("kjhkjhkj");
            //reply("userlist");
            controller.jobC.alljobs(function (error,sucess){
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

var module_arr = [insertjobs,allcategory];
module.exports = module_arr;