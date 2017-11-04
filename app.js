let express = require("express");
let io = require("socket.io")();
let app = express();

let port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port);

app.get("/api", function (req, res) {
    res.json({
        Name: "Kyle",
        Age: 20
    });
});

console.log("app.js running");