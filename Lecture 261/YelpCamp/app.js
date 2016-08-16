var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),

    Comment       = require("./models/comment"),
    Campground    = require("./models/campground"),
    User          = require("./models/user"),
    seedDB        = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp_v4");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

seedDB();

/* -------------------------------------------------------------------------------------------- */
//Passport Configuration

app.use(require("express-session")({
    secret: "habadashery is passe...",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Has to go below passport config calls above
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    console.log("User");
    console.log(req.user);
    next();
});

/* -------------------------------------------------------------------------------------------- */
//Campground Routes

app.get("/", function(req, res) {
    res.render("landing");
});

//Index - Show All Campgrounds
app.get("/campgrounds", function(req, res) {
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
    res.render("campgrounds/new");
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
            res.render("campgrounds/show", {campground : foundCamp});
        }
    });
});

/* -------------------------------------------------------------------------------------------- */
//Comment Routes

//Comment Create Form
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
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

//
app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
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

/* -------------------------------------------------------------------------------------------- */
//Auth Routes

//Show register form
app.get("/register", function(req, res){
    res.render("register");
});

//Handle sign up logic
app.post("/register", function(req, res){
    var newUser = new User({username : req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        });
    });
});

//Show login form
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){

});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

/* -------------------------------------------------------------------------------------------- */
//Middleware

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

/* -------------------------------------------------------------------------------------------- */

//Need to user process.env.* for Cloud9 IDE
var port = process.env.PORT ? process.env.PORT : 3000;
var ip = process.env.IP ? process.env.IP : "0.0.0.0";

//Tell Express to listen for requests (start server)
app.listen(port, ip, function(){
    console.log(port);
    console.log(ip);
    console.log("Yelp Camp v4 -> Server has started on " + ip + ":" + port);
});
