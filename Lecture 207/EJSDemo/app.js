var express = require("express");
var app = express();

//Serve the content in the public directory
app.use(express.static("public"));

//Use .ejs extension for views (render)
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title : "Post 1", author : "Suzy"},
        {title : "Post 2", author : "fdsfdsfs"},
        {title : "Post 3", author : "hghgfhgfhghfg"}
    ];
    res.render("posts", {posts : posts});
});

app.listen(3000, function() {
    console.log("server is listening...");
});
