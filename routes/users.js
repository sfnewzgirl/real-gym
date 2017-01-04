var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

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
    db.User.findOne({_username: request.params.username}, function(error, user) {
      if (error) {
        response.send('Something went wrong' + error);
      }
      ressponse.json(user);
    });
  })
  // delete one user
  .delete(function(request, response){

  })

module.exports = router;
