var express = require("express");
var io = require("socket.io")();
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port);

app.get("/api", function (req, res) {
    res.json({
        Name: "Kyle",
        Age: 20
    });
});

console.log("app.js running");