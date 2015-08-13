var jsonServer = require('json-server');
var frisby = require('frisby');

var server = jsonServer.create(); // Returns an Express server
server.use(jsonServer.defaults); // logger, static and cors middlewares
server.listen(3000);

describe("Services specs", function() {

  var router = jsonServer.router('services.json'); // Returns an Express router
  server.use('/api', router); // Mount router on '/'

  it("retrive a list of services", function() {

    frisby.create('Get single-deck')
        .get("http://localhost:3000/api/services/")
        .expectStatus(200)
        .toss();
  });
});
