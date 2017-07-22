/**
 * Created by kyleobrien on 7/22/17.
 */

var express = require("express");
var app = express();

// app.get('/', function(req, res){
//     res.send("Hello, World!");
// });

app.use(express.static("public"));

app.listen(3000);
console.log("app.js running");