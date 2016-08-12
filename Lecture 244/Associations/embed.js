var mongoose          = require("mongoose");

//DB Config
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content (since this is embedded in User it must come first)
var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email : String,
    name : String,
    posts : [postSchema]
});

var User = mongoose.model("User", userSchema);









/*
var newUser = new User({
    email : "charlie.brown@dispostable.com",
    name : "Charlie Brown"
});
*/
/*
var newUser = new User({
    email : "snoopy@dispostable.com",
    name : "Snoopy"
});
newUser.posts.push({
    title : "Huh?",
    content : "Where's Woodstock?"
});
*/
/*
newUser.save(function(err, user){
    if(err) console.log(err);
    else console.log(user);
});
*/
/*
var newPost = new Post({
    title : "I hate Lucy",
    content : "I really really hate Lucy"
});

newPost.save(function(err, post){
    if(err) console.log(err);
    else console.log(post);
});
*/

User.findOne({name: "Charlie Brown"}, function(err, user) {
    if(err) console.log(err);
    else {
        console.log(user);
        user.posts.push({
            title : "I still hate Lucy",
            content : "I really really really hate Lucy"
        });
        user.save(function(err, user) {
            if(err) console.log(err);
            else console.log(user);
        });
    }
});
