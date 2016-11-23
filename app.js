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

//api endpoints
app.get('/api', controllers.api.index);

app.get('/api/users', controllers.users.index);
app.get('/api/users/:username', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.delete('/api/users/:username', controllers.users.destroy);
app.put('/api/users/:usersname', controllers.users.update);

app.get('/api/exercises', controllers.exercises.index);
app.get('/api/exercises/:exerciseId', controllers.exercises.show);
app.post('/api/exercises', controllers.exercises.create);
app.delete('/api/exercises/:exerciseId', controllers.exercises.destroy);
app.put('/api/exercises/:exerciseId', controllers.exercises.update);

app.get('/api/exercises/:exerciseId/comments', controllers.exerciseComments.index);
app.post('/api/exercises/:exerciseId/comments', controllers.exerciseComments.create);
app.delete('/api/exercises/:exerciseId/comments/:commentId', controllers.exerciseComments.destroy);
app.put('/api/exercises/:exerciseId/comments/:commentId', controllers.exerciseComments.update);

//server listening
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
