// Generated by CoffeeScript 1.8.0
(function() {
  var request;

  request = require('request');

  request.get('http://ipinfo.io/8.8.8.8', {
    json: true
  }, function(e, r, details) {
    return console.log(details);
  });

}).call(this);
