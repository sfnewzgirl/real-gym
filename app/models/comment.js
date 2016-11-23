var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
  username: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  commentText: String
});

var Comnent = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
