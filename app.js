/* Node requirements */
var express = require('express');
var app = express();
var server = require('http').createServer(app);

/* Initialisation */

function init() {
  app.use(express.static(__dirname + '/src'));

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/views/index.html');
  });

  server.listen(8080);

}

init();
