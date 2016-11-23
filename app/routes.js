var models = require('./models');

module.exports = function(app) {

  //homepage
  app.get('/', function (req, res) {
    res.sendfile('./public/views/index.html');
  });

  //signup
  app.get('/signup', function (req, res) {
    res.sendfile('./public/views/signup.html');
  });

  //login
  app.get('/login', function (req, res) {
    res.sendfile('./public/views/login.html');
  });

  //show user profile
  app.get('/users/:username', function (req, res) {
    res.sendfile('./public/views/user.html');
  });

  //exercise index
  app.get('/exercises', function (req, res) {
    res.sendfile('./public/views/exercise_index.html');
  });

  //show one exercise
  app.get('/exercises/:exerciseId', function (req, res) {
    res.sendfile('./public/views/exercise.html');
  });

  // redirect all other paths to index
  app.get('*', function homepage (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
  });
}
