const express = require("express");
const path = require("path");
var app = express();
var server = app.listen(3000, function(){
    console.log("listening on port 3000");
});

const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname, "")));
