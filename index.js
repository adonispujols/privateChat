// set up express server
var app = require('express')();
var http = require('http').Server(app);   // Are we using HTTPS?
// connect socket.io to express/http server.
var io = require('socket.io')(http);


// serving initial files from server to client (upon request/site load, via express)
// (dynamic/non-static site, so files *must* be served)
app.get('/', function(req, res){          // GET okay here (just serving html)?
    // serve index
    res.sendFile(__dirname + '/index.html');
});

// when client connects, do actions and register .on event handlers for clients events
io.on('connection', function(socket){
    console.log('a user connected');  // logs to node.js server/terminal
    // when client disconnects, do x
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
});

// http server listens to certain port (via express)
http.listen(3000, function(){
    console.log('listening on *:3000');  // log upon starting
});