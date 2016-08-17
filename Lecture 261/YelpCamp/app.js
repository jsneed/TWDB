var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local");

var Comment          = require("./models/comment"),
    Campground       = require("./models/campground"),
    User             = require("./models/user"),
    seedDB           = require("./seeds"),
    seedDB2          = require("./seeds2");

var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    indexRoutes      = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp_v4");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

seedDB2();

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
//Adds user info to every route
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

/* -------------------------------------------------------------------------------------------- */
app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

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
