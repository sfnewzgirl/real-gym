var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route('/')
  // get all exercises
  .get(function(request, response){

  })
  // create an exercise
  .post(parseUrlencoded, function(request, response){

  });

router.route('/:exerciseId')
  // show one exercise
  .get(function(request, response){

  })
  // delete one exercise
  .delete(function(request, response){

  })

module.exports = router;
