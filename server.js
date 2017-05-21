var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use("/", express.static(__dirname + "/public/views"));
app.use("/libs", express.static(__dirname + "/public/libs"));
app.use("/img", express.static(__dirname + "/build/img"));
app.use("/css", express.static(__dirname + "/build/css"));
app.use("/js", express.static(__dirname + "/build/js"));


app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/public/views" });
});

app.listen(PORT, "127.0.0.1", function (err, success) {
    err ? console.log("error occured") : console.log("server starting...");
});