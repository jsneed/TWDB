var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");

//Campground Routes

//Index - Show All Campgrounds
router.get("/", function(req, res) {
    //Print user info from passport
    //console.log(req.user);

    //Get All Cats
    Campground.find({}, function(err, camps){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("campgrounds/index", {campgrounds : camps});
        }
    })
});

//Create a new campground
router.post("/", isLoggedIn, function(req, res) {
    //Get data from form
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;

    var author = {
        id: req.user._id,
        username: req.user.username
    };
    //Create new camp object
    var newCamp = {name : name, image : image, description : description, author : author};

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

router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

//Show - Display one Campground
router.get("/:id", function(req, res) {
    //Find Campground in MongoDB
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
        if(err) {
            console.log(err);
        }
        else {
            //Redirect to Campgrounds Page
            res.render("campgrounds/show", {campground : foundCamp});
        }
    });
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
