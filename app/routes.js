var express = require('express');
var router = express.Router();
module.exports = router;

var models = require('./models');
var path = require('path');
var db = require('../config/database');

function() {

  //login
  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', '/views/login.html'));
  });

  //create user profile
  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', '/views/signup.html'));
  });

  //show user profile NEEDS TESTING!!!
  app.get('/api/users/:username', function (req, res) {
    db.User.findOne({_username: req.params.username}, function(error, user) {
      if (error) {
        res.send('Something went wrong' + error);
      }
      res.json(user);
    });
  });

  //edit user profile

  //delete user profile

  //exercise index
  app.get('/api/exercises', function (req, res) {
    db.Exercise.find(function(error, exercises) {
      if (error) {
        res.send('Something went wrong' + error);
      }
      res.json(exercises);
    });
  });

  //create exercise

  //show exercise
  app.get('/api/exercises/:exerciseId', function (req, res) {
    db.Exercise.findOne({_id: req.params.id}, function(error, exercise) {
      if (error) {
        res.send('Something went wrong' + error);
      }
      res.json(user);
    });
  });

  //edit exercise

  //delete exercise

  // redirect all other paths to index
  app.get('*', function homepage (req, res) {
    res.sendFile(path.join(__dirname, '../public', '/views/index.html'));
  });
}
