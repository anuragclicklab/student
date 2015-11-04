var hapi = require('hapi');
var routes = require('./routes');
var path = require('path');
var server = new hapi.Server();
var Ejs = require('ejs');
var mongoose = require('mongoose');
var Plugins = require('./plugins');
var jwt= require('hapi-auth-jwt2');
server.connection({ port: 2002 });


var privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';
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
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
    //console.log("aasas",server.auth.default('jwt'));
    mongoose.connect('mongodb://localhost/student');
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

