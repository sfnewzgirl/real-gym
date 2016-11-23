// sanity check
console.log('app.js is liked');

// require dependencies
var express = require('express');
var app = express()
var mongoose = require('mongoose');

var database = require('./config/database');
mongoose.connect(database.url);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public')); 

// load the routes
require('./app/routes')(app);

//server listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
