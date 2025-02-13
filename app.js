const port = process.env.PORT || 3000,
  http = require("http"),
  fs = require("fs"),
  html = fs.readFileSync("index.html");

var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(port);
