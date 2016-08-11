var express = require("express");
var app = express();
var request = require('request');

app.set("view engine", "ejs");

var url = "http://www.omdbapi.com/?s=";

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {

    var searchQuery = req.query.search;

    request(url + searchQuery, function (error, response, body) {
        if(!error && response.statusCode == 200)
        {
            //Convert to object since what we get back is a string
            var data = JSON.parse(body);
            //console.log(parsedData);
            //res.send(parsedData["Search"][0]["Title"]);
            res.render("results", {data : data});
        }
    });
});


//Tell Express to listen for requests (start server)
//Need to user process.env.* for Cloud9 IDE
var port = 3000; //process.env.PORT)
app.listen(port, function() {
    console.log("Movie Search -> Server has started on port: " + port);
});
