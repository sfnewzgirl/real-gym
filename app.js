// sanity check
console.log('app.js is liked');

// require dependencies
var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

// homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//signup
app.get('/signup', function (req, res) {
  console.log('this is the sign up page');
});

//create user
app.post('/users', function (req, res) {
  console.log('create user route');
})

//login
app.get('/login', function (req, res) {
  console.log('this is the login page');
});

//show user profile
app.get('/users/:username', function (req, res) {
  console.log('this is the user profile page');
});

//edit user profile
app.put('/users/:username', function (req, res) {
  console.log('edit user profile here');
})

//exercise index
app.get('/exercises', function (req, res) {
  console.log('this is the exercise index page');
});

app.get('/exercises/:exerciseId', function (req, res) {
  console.log('this is one exercise page');
});

//server listening
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
