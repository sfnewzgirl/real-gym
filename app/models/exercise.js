var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Comment = require('./comment.js');

var ExerciseSchema = new Schema({
  title: String,
  description: String,
  photos: Array
})
