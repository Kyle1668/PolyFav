
var express = require("express");
var app = express();
var io = require("socket.io")();

app.use(express.static("public"));
app.listen(3000);

console.log("app.js running");