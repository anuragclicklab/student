var Joi        = require('joi');
var failActionFunction = function(request, reply, source, error){
    if (error.isBoom) {

        delete error.output.payload.validation;
        delete error.output.payload.error;
        delete error.output.payload.statusCode;

        if (error.output.payload.message.indexOf("authorization") !== -1) {
            error.output.statusCode = STATUS_CODE.UNAUTHORIZED;
            // error.output.payload.statusCode = STATUS_CODE.UNAUTHORIZED;
            return reply(error);
        }
        var details = error.data.details[0];
        if (details.message.indexOf("pattern") > -1 && details.message.indexOf("required") > -1 && details.message.indexOf("fails") > -1) {
            error.output.payload.message = "Invalid " + details.path;
            return reply(error);
        }
    }
    var customErrorMessage = '';
    if (error.output.payload.message.indexOf("[") > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
    } else {
        customErrorMessage = error.output.payload.message;
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '');
    customErrorMessage = customErrorMessage.replace('[', '');
    customErrorMessage = customErrorMessage.replace(']', '');
    error.output.payload.message = customErrorMessage;
    delete error.output.payload.validation;
    delete error.output.payload.error;
    delete error.output.payload.statusCode;
    return reply(error);

}
var authorizeHeader = Joi.object({
    accesstoken: Joi.string().required(),
}).unknown();
module.exports = {
    failActionFunction: failActionFunction,authorizeHeader:authorizeHeader

}