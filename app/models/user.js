var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required.']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.']
  },
  email: {
    type: String,
    required: [true, 'An email is required.']
  },
  username: {
    type: String,
    required: [true, 'A username is required.']
  },
  password: {
    type: String,
    required: [true, 'A password is required.']
  },
  description: String,
  userPhoto: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
