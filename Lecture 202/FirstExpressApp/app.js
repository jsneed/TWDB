var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("Roof!");
});

//Tell Express to listen for requests (start server)
//Need to user process.env.* for Cloud9 IDE
app.listen(3000, function(){
    console.log("Server has started on port: " + process.env.PORT);
});
