var controller = require('../../controllers');
var Joi        = require('joi');
var util       = require('../../Utilities/utili');
var Config = require('../../config/config.js');
var configConstants   =  Config.Constants;
var studentDepartment =  configConstants.STUDENT_DEPARTMENT;
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
           //console.log("fjdwbkgfdsg",request);
            /*var data = { 'companyName':request.payload.companyName,
                'companydetails':request.payload.companydetails,
                'backlog':request.payload.backlog,
                'jobvVcancies':request.payload.jobvVcancies,
                'minimumpercentage':request.payload.minimumpercentage,
                'maximumpercentage':request.payload.maximumpercentage,
                'status':request.payload.status,
                'department':request.payload.department,
                'department1':request.payload.department1,
                'accesstoken':request.headers.accesstoken,
            };*/
            var accesstoken = request.headers.accesstoken;
            //console.log("headers",data); reply(request.payload);
            controller.jobC.insertjobs(request.payload,accesstoken ,function (error, success) {
                if (error)
                {
                    reply(error);
                }else {
                    reply(success);
                }
            });
        },
        validate: {
                   headers: Joi.object({
                    accesstoken: Joi.string().required()
                }).unknown(), //Allow unknown headers
               payload: {
                companyName:Joi.string().required().trim(),
                companydetails:Joi.string().required().trim(),
                backlog:Joi.string().required().trim(),
                jobvVcancies:Joi.number().integer().required(),
                minimumpercentage:Joi.number().integer().required(),
                maximumpercentage:Joi.number().integer().required(),
                status:Joi.string().required().trim(),
                department: Joi.string().required().valid(studentDepartment.CSE,
                    studentDepartment.ECE,
                    studentDepartment.ME,
                    studentDepartment.IT
                ),
                department1:Joi.array().required().unique(),
                //accessToken:Joi.string().required(),

            },
            failAction:util.failActionFunction
        },
        plugins: {
            'hapi-swagger': {
                //payloadType: 'form',
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
        validate: {
            headers: Joi.object({
                accesstoken: Joi.string().required()
            }).unknown() //Allow unknown headers
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