var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

var campgrounds = [
    {name : "Salmon Creek", image : "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"},
    {name : "Granite Hill", image : "http://www.freeguidetonwcamping.com/oregon_washington_main/Camping_Photos/Four_Seasons_Campground_4.jpg"},
    {name : "Mountain Goat's Rest", image : "http://www.acadiamagic.com/1170px/blackwoods-1197.jpg"},
    {name : "Salmon Creek", image : "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"},
    {name : "Granite Hill", image : "http://www.freeguidetonwcamping.com/oregon_washington_main/Camping_Photos/Four_Seasons_Campground_4.jpg"},
    {name : "Mountain Goat's Rest", image : "http://www.acadiamagic.com/1170px/blackwoods-1197.jpg"},
    {name : "Salmon Creek", image : "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"},
    {name : "Granite Hill", image : "http://www.freeguidetonwcamping.com/oregon_washington_main/Camping_Photos/Four_Seasons_Campground_4.jpg"},
    {name : "Mountain Goat's Rest", image : "http://www.acadiamagic.com/1170px/blackwoods-1197.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds : campgrounds});
});

app.post("/campgrounds", function(req, res) {
    //Get data from form
    var name = req.body.name;
    var image = req.body.image;

    //Add camp to array
    var newCamp = {name : name, image : image};
    campgrounds.push(newCamp);

    //Redirect to Campgrounds Page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//Need to user process.env.* for Cloud9 IDE
var port = process.env.PORT ? process.env.PORT : 3000;
var ip = process.env.IP ? process.env.IP : "0.0.0.0";

//Tell Express to listen for requests (start server)
app.listen(port, ip, function(){
    console.log(port);
    console.log(ip);
    console.log("Yelp Camp v1 -> Server has started on " + ip + ":" + port);
});
