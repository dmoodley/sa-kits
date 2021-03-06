var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = Schema({
  created_at: {type:Date, default: new Date()}, 
  name  : String,
  email   : String,
  optin: {type: Boolean, default: false},
  notes: String,
  createdAt: Date,
  dropboxLink: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
