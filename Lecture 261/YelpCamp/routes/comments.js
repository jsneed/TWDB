var express = require("express");
var router  = express.Router({mergeParams : true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//Comment Routes

//Comment Create Form
router.get("/new", isLoggedIn, function(req, res) {
    //Find Campground in MongoDB
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
        if(err) {
            console.log(err);
        }
        else {
            //Redirect to Comments New Page
            res.render("comments/new", {campground : foundCamp});
        }
    });
});

//Save the Comment to MongoDB
router.post("/", isLoggedIn, function(req, res) {
    //Find Campground in MongoDB
    Campground.findById(req.params.id, function(err, foundCamp) {
        if(err) {
            console.log(err);
            res.redirect("/campgrounds");
        }
        else {
            Comment.create(req.body.comment, function(err, comment){
                if(err) {
                    console.log(err);
                }
                else {
                    //Add username and ID to comment
                    comment.author.username = req.user.username;
                    comment.author.id = req.user._id;
                    comment.save();

                    //Add comment to array
                    foundCamp.comments.push(comment);
                    foundCamp.save();

                    //Redirect to Comments New Page
                    res.redirect("/campgrounds/" + foundCamp._id);
                }
            });

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
