var hapi = require('hapi');
var routes = require('./routes');
var path = require('path');
var server = new hapi.Server();
var Ejs = require('ejs');
var mongoose = require('mongoose');
server.connection({ port: 3200 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});
//console.log('sdas');
server.start(function () {
    console.log('Server running at:', server.info.uri);
    mongoose.connect('mongodb://localhost/Userdata');
});


