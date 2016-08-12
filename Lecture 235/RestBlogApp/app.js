var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

//App Config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

//DB Config
mongoose.connect("mongodb://localhost/rest_blog_app");

//Model Config
var blogSchema = new mongoose.Schema({
    title : String,
    image : String,
    body: String,
    created: {type : Date, default : Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/*
Blog.create({
    title : "Huawei Watch - 439759", body : "This is a Huawei Watch. It comes with Android Wear. I really like this one...",
    image : "http://consumer.huawei.com/ucmf/groups/public/documents/webasset/hw_439759.jpg"
}, function(err, blog){
    if(err) console.log(err);
    else console.log(blog);
});
*/

//REST Routes

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

//Get all Posts
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
        if(err) {
            console.log(err);
        }
        else {
            res.render("index", {blogs : blogs});
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
    console.log("Rest Blog App -> Server has started on " + ip + ":" + port);
});
