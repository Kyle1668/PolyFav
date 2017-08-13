
var express = require("express");
var app = express();
var io = require("socket.io")();

var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.listen(port);

console.log("app.js running");