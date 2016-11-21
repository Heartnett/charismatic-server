var express = require("express");
var app = express();
var browserSync = require("browser-sync");

var port = 4003;

app.use("/", function(request, response) {
    response.sendFile(__dirname + "/src/index.html");
});

app.listen(port, function() {
    console.log("Charismatic-Server listening on port " + port);
    browserSync({
        proxy: "localhost:" + port,
        files: ["src/**/*.{html,js,css}"]
    });
});
