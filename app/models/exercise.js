var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Comment = require('./comment.js');

var ExerciseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for your exercise.']
  },
  description: {
    type: String,
    required: [true, 'Please describe your exercise.']
  },
  photos: Array,
  comment: [ Comment.schema ]
});

var Exercise = mongoose.mode('Exercise', ExerciseSchema);
module.exports = Exercise;
