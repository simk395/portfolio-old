var github = require('octonode');
var client = github.client();

client.get('/users/simk395', {}, function(err, status, body, headers) {
  console.log(body); //json object
});
