var controller = require('../../controllers');

var studentlist = { method:'GET',
    path:'/studentlist',
    config:{
        description:'all student',
        tags: ['api','all student'],
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

var insertstudent = { method:'POST',
    path:'/insertstudent',
    config:{
        description:'insert new student',
        handler: function(request,reply){
            //console.log("route",request.payload); //reply("dasasdasd");
            controller.studentC.insertstudent(request.payload, function (error, success) {
                if (error)
                {
                    reply(error);
                }else {
                    reply(success);
                }
            } );
        },

    }
}

var studentjobs = {
    method:'POST',
    path:'/studentjobs',
    config:{
        description:'student jobs',
        tags: ['api','student jobs'],
        handler:function(request,reply){
            //console.log("kjhkjhkj"); //reply("studentjobs");
            controller.studentC.studentjobs(request.payload,function (error,sucess){
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

//var abc        = [insertcategory,category,insertsubcategories,subcategorieslist,allcategory];
var module_arr = [studentlist,insertstudent,studentjobs];
module.exports = module_arr;