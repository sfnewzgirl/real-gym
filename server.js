// sanity check
console.log('server.js is linked');

// require dependencies
var express = require('express');
var app = express();

app.use(express.static('public'));

var users = require('./routes/users');
var exercises = require('./routes/exercises');

app.use('/users', users);
app.use('/exercises', exercises);

var mongoose = require('mongoose');
var db = require('./config/database');
mongoose.connect(db.url);

//require server side controllers??

//server listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
