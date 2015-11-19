var jwt    = require('jsonwebtoken');
var Config = require('../config/config.js');
var jwtPrivateKey = Config.Constants.jwt_privateKey;

var generateToken = function (tokenData) {
    return jwt.sign(tokenData,jwtPrivateKey);
};
module.exports ={ generateToken:generateToken,

}