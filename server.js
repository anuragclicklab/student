var hapi = require('hapi');
var routes = require('./routes');
var path = require('path');
var server = new hapi.Server();
var Ejs = require('ejs');
var mongoose = require('mongoose');
var Plugins = require('./plugins');
//var jwt= require('hapi-auth-jwt2');
var jwt= require('jsonwebtoken');
var Config = require('./config/config.js');
var fs = require('fs');
var Token = require('./Utilities/TokenManager');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Some debug messages");
server.connection({ port: 2007 });

var timestamp_new = new Date().getTime();
var profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    _id: "563af35f026aff2802e4ba82",
    timestamp:timestamp_new
};
var token = Token.generateToken(profile); //jwt.sign(profile, privateKey);
// Plugins, register hapi-auth-jwt to server
server.register(Plugins, function (err) {
    if (err) {
        server.error('Error while loading plugins : ' + err)
    } else {
        server.log('info', 'Plugins Loaded')
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

/** fetch all routes **/
routes.forEach(function (api) {
    server.route(api);
    //console.log(api);
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
    //console.log("token",token);
    mongoose.connect('mongodb://localhost/student1');
});

var cipherToken = function (tokenData) {
    return jwt.sign(tokenData, privateKey);
};

server.views({
    engines: {
        ejs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './Views'
}); 

