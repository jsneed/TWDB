var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there!");
});


//Tell Express to listen for requests (start server)
//Need to user process.env.* for Cloud9 IDE
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started on port: " + process.env.PORT);
});
