var controller =  require('../../controllers');
var Joi        =  require('joi');
var util       =  require('../../Utilities/utili');
var Config     =  require('../../config/config.js');
var configConstants = Config.Constants;
var studentStatus = configConstants.STUDENT_STATUS;
var studentDepartment = configConstants.STUDENT_DEPARTMENT;

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
        tags: ['api','insert new Student'],
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
        validate: {
            payload: {
                studentName:Joi.string().required().trim(),
                fatherName: Joi.string().required().trim(),
                mothertName: Joi.string().required().trim(),
                startingYear: Joi.number().required(),
                endYear: Joi.number().required(),
                totalbacklocks: Joi.number().required(),
                studentclass: Joi.string().required().trim(),
                rollName: Joi.number().required(),
                //status: Joi.string().required().trim(),
                status: Joi.string().required().valid(  studentStatus.ENABLED,
                                                        studentStatus.DISABLED,
                                                        studentStatus.PURSUING,
                                                        studentStatus.PASSOUT
                 ),
                department: Joi.string().required().valid( studentDepartment.CSE,
                                                           studentDepartment.ECE,
                                                           studentDepartment.ME,
                                                           studentDepartment.IT
                ),
                percentage:Joi.number().required(),
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
        validate: {
            payload: {
                id:Joi.string().required().trim(),
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

//var abc        = [insertcategory,category,insertsubcategories,subcategorieslist,allcategory];
var module_arr = [studentlist,insertstudent,studentjobs];
module.exports = module_arr;