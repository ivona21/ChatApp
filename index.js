var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//getting files
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.get('/css/build/site.css', function(req, res){
   res.sendFile(__dirname + '/css/build/site.css');
});

app.get('/js/libs/client.js', function(req, res){
   res.sendFile(__dirname + '/js/build/client.min.js');
});



io.on('connection', function(socket){
   console.log('user connected');
    socket.on('send', function(message){
       io.emit('received', message);
    });

    socket.on('disconnect', function(){
       console.log('user disconnected');
    });
});

http.listen(3000, function(){
   console.log('go to localhost:3000');
});