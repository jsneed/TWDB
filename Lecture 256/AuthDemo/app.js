var express               = require("express"),
    app                   = express(),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine", "ejs");

app.use(require("express-session")({
    secret : "Fly you fools!",
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended : true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* -------------------------------------------------------------------------------------------- */
//Routes
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

/* -------------------------------------------------------------------------------------------- */
//Auth Routes

//Show register form
app.get("/register", function(req, res) {
    res.render("register");
});

//Create registered user
app.post("/register", function(req, res) {
    var tempUser = new User({username : req.body.username});
    User.register(tempUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

/* -------------------------------------------------------------------------------------------- */
//Login Routes

//Show login form
app.get("/login", function(req, res) {
    res.render("login");
});

//Log the user in
app.post("/login", passport.authenticate("local", {
    successRedirect : "/secret",
    failureRedirect : "/login"
}), function(req, res) {

});

/* -------------------------------------------------------------------------------------------- */
//Logout Routes
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});
/* -------------------------------------------------------------------------------------------- */
//Middleware ???
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
    console.log("Auth Demo-> Server has started on " + ip + ":" + port);
});
