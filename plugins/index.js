/*module.exports = [
    {register: require('inert')},
    {register: require('vision')},
    {register:require('hapi-auth-jwt2')},
    {register:require('hapi-swagger')}

];
*/
var Pack = require('package');
var Good = require('good');
var swaggerOptions = {
    apiVersion:"0.4.0",//Pack.version
    pathPrefixSize: 2
};
var pluginsArray = [
    {
        register: require('hapi-swagger'),
        options: swaggerOptions /*{
            tags: {
                'foobar/test': 'Example foobar description'
            },
            info: {
                title: 'Example API',
                description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
                version: '1.0'
            }
        }  *///swaggerOptions
    },
    {
        register: Good,
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: {
                    response: '*',
                    log: '*'
                }
            }]
        }
    },
    {
        register: require('inert'),
        options: {

        }
    },
    {
        register: require('vision'),
        options: {

        }
    },
    {
        register:  require('hapi-auth-jwt2'),
        options: {

        }
    },
];

module.exports=pluginsArray;