var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "blah blah blah"
    }
];

function seedDB() {
    //Remove All Campgrounds
    Campground.remove({}, function(err){
        if(err) console.log(err);
        else {
            console.log("Removed Campgrounds collection");

            //Add a Few Campgrounds
            data.forEach(function(seed)
            {
                Campground.create(seed, function(err, camp)
                {
                    if(err) console.log(err);
                    else
                    {
                        console.log("added camp");

                        //Create a Comment
                        Comment.create({text : "I hate camping", author : "Everbody"},
                            function(err, comment)
                            {
                                if(err) console.log(err);
                                else
                                {
                                    camp.comments.push(comment);
                                    camp.save();
                                    console.log("created new comment");
                                }
                            }
                        );
                    }
                });
            });
        }
    });
}



module.exports = seedDB;
