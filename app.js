// Node requirements
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/src'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/:id', function(req, res) {
    res.render('pages/details');
});

app.listen(3000);
