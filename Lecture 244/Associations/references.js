var mongoose          = require("mongoose");

//DB Config
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require('./models/post');
var User = require('./models/user');




/*
User.create({
    email : "james.brown@dispostable.com",
    name : "James Brown"
}, function(err, user){
    if(err) console.log(err);
    else console.log(user);
});
*/
/*
Post.create({
    title : "Best Song Ever",
    content : "I like 'This is a Man's World'. But I like Joss Stone's version better."
}, function(err, post){
    if(err) console.log(err);
    else {
        console.log(post);
        User.findOne({name: "James Brown"}, function(err, foundUser) {
            if(err) console.log(err);
            else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err) console.log(err);
                    else console.log(data);
                });
            }
        });
    }
});
*/

User.findOne({name: "James Brown"}).populate("posts").exec(function(err, user) {
    if(err) console.log(err);
    else {
        console.log(user);
    }
});
