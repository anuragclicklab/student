var controller = require('../../controllers');

var login = {
             method:'GET',
             path:'/login',
             config:{
                 description:'login view',
                 handler:function(error,reply){
                     reply.view('login/login.ejs'); //reply("asdsadasd");
                 }
             }
}

var auth ={
            method:'POST',
            path:'/auth',
            config:{
                description:'check users details',
                handler:function(request,reply) {
                    //console.log("ddd",request.payload);//reply(request.payload);
                    controller.login.auth(request.payload,function(error,success){
                       if(error)
                         return reply(error);
                       else
                         return reply(success);
                    });
                }
            }
}
module.exports=[login,auth];