// sanity check
console.log('app.js is liked');

var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
