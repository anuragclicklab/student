var controller = require('../../controllers');

var login = {
             method:'GET',
             path:'/login',
             config:{
                 description:'login view',
                 handler:function(error,reply){
                     reply("asdsadasd");
                 }
             }
}
module.exports=[login];