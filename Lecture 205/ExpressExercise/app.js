var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        dog : "Woof Woof!",
        cow : "Moo!",
        pig : "Oink!",
        cat : "I hate you human...",
        goldfish : "..."
    };
    var animal = req.params.animal;
    res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/repeat/:str/:numStr", function(req, res) {
    var num = Number(req.params.numStr);
    var printStr = "";
    for(var i = 0; i < num; i++)
    {
        printStr += req.params.str + " ";
    }
    res.send(printStr);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
//Need to user process.env.* for Cloud9 IDE
app.listen(3000, function() {
    console.log("Express Exercise -> Server has started on port: " + process.env.PORT);
});
