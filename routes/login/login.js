var controller = require('../../controllers');
var Joi        = require('joi');
var util       = require('../../Utilities/utili');
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
        description:'login',
            handler:function(request,reply) {
            //console.log("ddd",request.payload);reply(request.payload);
            controller.login.auth(request.payload,function(error,success) {
                if (error) {
                   return reply(error);
                } else {
                   /* if(success.length>0)
                    { //console.log("if");
                        var msg={'status':true,'data':success};
                        //reply.view("login/test.ejs",msg);
                        return reply(success);
                    }else { //console.log("else");
                        var msg={'status':false,'data':success}
                        //reply.view("login/login.ejs",{'msg':msg});
                        return reply(msg);
                    }*/

                    return reply(success);
                }
            });
        },
        validate: {
            payload: {
                email:Joi.string().email().required().trim(),
                password: Joi.string().required().trim(),
                usertype: Joi.string().required().trim(),

            },failAction:util.failActionFunction

            /*failAction:function(request, reply, source, error){
                console.log("req",request);
                console.log("reply",reply);
                console.log("source",source);
                console.log("error",error);


            }*/
        }
    }
}

module.exports=[login,auth];