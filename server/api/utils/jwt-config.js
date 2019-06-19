var jwt = require('jsonwebtoken');
var Promise = require('bluebird');

var createToken = function (payload) {
  return new Promise(function (resolve, reject) {
    try {
      var token = jwt.sign(payload, process.env.SECRET_JWT, {
          expiresIn: '1d' // expires in 24 hours
          // expiresIn: 60 // test
        });
      resolve(token);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

var createRenewToken = function (payload) {
  return new Promise(function (resolve, reject) {
    try {
      var token = jwt.sign(payload, process.env.SECRET_JWT, {
          expiresIn: '365d' // expires in 1 year
        });
      resolve(token);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

var authentication = function (token) {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, process.env.SECRET_JWT, function(err, decoded) {
      if (err) {
        return reject(err);
      } else {
        return resolve(decoded);
      }
    });
  });
};

module.exports = {
  createToken: createToken,
  createRenewToken: createRenewToken,
  authentication: authentication
};
