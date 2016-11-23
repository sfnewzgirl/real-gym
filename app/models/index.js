var mongoose = require("mongoose");
mongoose.connect( process.env.PORT || 'mongodb://localhost/real_gym');

module.exports.User = require("./user.js");
module.exports.Exercise = require("./exericse.js");
module.exports.Exercise = require("./comment.js");
