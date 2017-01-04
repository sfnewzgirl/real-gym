var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

router.route('/')
  // get all users
  .get(function(request, response){

  })
  // create a user
  .post(parseUrlencoded, function(request, response){

  });

router.route('/:username')
  // show one user
  .get(function(request, response){

  })
  // delete one user
  .delete(function(request, response){

  })

module.exports = router;
