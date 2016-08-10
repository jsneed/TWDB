var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//Include request body parsing package
app.use(bodyParser.urlencoded({extended : true}));

//Use .ejs extension for views (render)
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

var friends = ["Sam", "Jillan", "Linda", "Justin", "Tony"];

app.get("/friends", function(req, res) {
    res.render("friends", {friends, friends});
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.params.newFriend;
    console.log(req.body);
    friends.push(req.body.newFriend);
    res.redirect("friends");
});

app.listen(3000, function() {
    console.log("PostRequestDemo -> server started...");
});
