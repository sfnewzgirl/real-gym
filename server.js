// sanity check
console.log('server.js is liked');

// require dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = require('./config/database');
mongoose.connect(db.url);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

//require server side controllers??

// load the routes
var routes = require('./app/routes.js');
app.use('/routes', routes);

//server listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
