var models = require('./models');

module.exports = function(app) {

  //homepage
  app.get('/', function (req, res) {
    res.sendfile('./public/views/index.html');
  });

  //signup
  app.get('/signup', function (req, res) {
    console.log('get sign up page');
  });

  //create user
  app.post('/users', function (req, res) {
    console.log('create user profile');
  });

  //login
  app.get('/login', function (req, res) {
    console.log('create session - login page');
  });

  //show user profile
  app.get('/users/:username', function (req, res) {
    console.log('show user profile');
  });

  //edit user profile
  app.put('/users/:username', function (req, res) {
    console.log('edit user profile');
  });

  //delete user profile
  app.delete('/users/:username', function (req, res) {
    console.log('delete user profile');
  });

  //exercise index
  app.get('/exercises', function (req, res) {
    console.log('show all exercises');
  });

  //show one exercise
  app.get('/exercises/:exerciseId', function (req, res) {
    console.log('show one exercise');
  });

  // redirect all other paths to index
  app.get('*', function homepage (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
  });
}
