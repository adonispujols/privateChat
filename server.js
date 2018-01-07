// set up express server
var app = require('express')();
var http = require('http').Server(app);   // Ensure we're using HTTPS
var io = require('socket.io')(http);

// serving initial files from server to client (upon request/site load)
// (dynamic/non-static site, so files *must* be served)
app.get('/', function(req, res){          // GET okay here (just serving html)?
    // serve index
    res.sendFile(__dirname + '/index.html');
});

// once user joins, do function
io.on('connection', function(socket){
    console.log('a user connected');  // logs to node.js server/terminal
    // once user disconnect, do functino
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
});

// http server listens to certain port
http.listen(3000, function(){
    console.log('listening on *:3000');  // log upon starting
});