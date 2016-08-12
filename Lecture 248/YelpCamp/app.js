var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB     = require("./seeds");
    //Comment    = require("./models/comment"),
    //User       = require("./models/user");

mongoose.connect("mongodb://localhost/yelp_camp_v3");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

seedDB();

/*
Campground.create({name : "Fisher's Creek", image : "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg", description : "Shitty campground"}, function(err, camp){
    if(err) console.log(err);
    else console.log(camp);
});
*/

//Index - Show All Campgrounds
app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    //Get All Cats
    Campground.find({}, function(err, camps){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("index", {campgrounds : camps});
        }
    })
});

app.post("/campgrounds", function(req, res) {
    //Get data from form
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;

    //Create new camp object
    var newCamp = {name : name, image : image, description : description};

    //Add camp to array
    //campgrounds.push(newCamp);

    //Add camp to Mongo
    Campground.create(newCamp, function(err, camp){
        if(err) {
            console.log(err);
        }
        else {
            //Redirect to Campgrounds Page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//Show - Display one Campground
app.get("/campgrounds/:id", function(req, res) {
    //Find Campground in MongoDB
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
        if(err) {
            console.log(err);
        }
        else {
            //Redirect to Campgrounds Page
            res.render("show", {campground : foundCamp});
        }
    });
});

//Need to user process.env.* for Cloud9 IDE
var port = process.env.PORT ? process.env.PORT : 3000;
var ip = process.env.IP ? process.env.IP : "0.0.0.0";

//Tell Express to listen for requests (start server)
app.listen(port, ip, function(){
    console.log(port);
    console.log(ip);
    console.log("Yelp Camp v2 -> Server has started on " + ip + ":" + port);
});
