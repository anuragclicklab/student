var hapi = require('hapi');
var routes = require('./routes');
var path = require('path');
var server = new hapi.Server();
var Ejs = require('ejs');
var mongoose = require('mongoose');
var Plugins = require('./plugins');
server.connection({ port: 2000 });
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


routes.forEach(function (api) {
    server.route(api);
});
//console.log('sdas');
server.start(function () {
    console.log('Server running at:', server.info.uri);
    mongoose.connect('mongodb://localhost/Userdata');
});
server.views({
    engines: {
        ejs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './Views'
});

