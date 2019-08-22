var express = require("express");
bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.use("/", function(req, res, next) {
    console.log("Authentication of user");
    next();
});
app.use("/", function(req, res, next) {
    console.log("Checking your details...");
    next();
});
app.use("/store", function(req, res, next) {
    console.log("I am an intermediary when requesting /store.");
    next();
});

app.get("/", function(req, res) {
    res.send("Hello world");
});

app.get("/store", function(req, res) {
    res.send("This is shop");
});

app.listen(3000, "127.0.0.1", function(err) {
    console.log("Opened server on Store");
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, we could not find what you want!");
});
