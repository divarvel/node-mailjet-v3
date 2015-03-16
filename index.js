var request = require('request');
var Promise = require('bluebird');

var MailjetClient = module.exports = function(key, secret) {
  return {
    makeRequest: function(endpoint, args, method) {
      return new Promise(function(resolve, reject) {
        var baseUrl = 'https://api.mailjet.com/v3/REST/';
        args.output = 'json';
        var opts = {
          auth: {
            user: key,
            pass: secret
          },
          qs: args
        };

        request(baseUrl + endpoint, opts, function(err, r, b) {
          if(err) reject(err);
          else resolve([r, b]);
        });
      })
      .then(function(r) {
        return {
          status: r[0].statusCode,
          headers: r[0].headers,
          body: JSON.parse(r[1] || '{}')
        }
      });
    }
  };
};
