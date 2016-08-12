var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name : String,
    age: Number,
    temperament : String
});

var Cat = mongoose.model("Cat", catSchema);

//Create a new Cat
/*
var george = new Cat({
    name: "Mrs. Norris",
    age: 11,
    temperament: "evil"
});

//Add a Cat to Mongo
george.save(function(err, cat){
    if(err) console.log("Something went wrong");
    else
    {
        console.log("Cat Saved: ");
        console.log(cat);
    }
});
*/

//Create & Save a Cat
Cat.create({
    name: "Misty",
    age: 4,
    temperament: "sedate"
}, function(err, cat) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(cat);
    }
});

//Get All Cats
Cat.find({}, function(err, cats){
    if(err)
    {
        console.log("Something went wrong");
        console.log(err);
    }
    else
    {
        console.log("All Cats Found: ");
        console.log(cats);
    }
})
