var mongoose          = require("mongoose");

//POST - title, content (since this is embedded in User it must come first)
var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

var Post = mongoose.model("Post", postSchema);
module.exports = Post;
