var app = require('express')();
var http = require('http');

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});