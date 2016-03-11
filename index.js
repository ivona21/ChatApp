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

app.get('/js/build/client.min.js', function(req, res){
    res.sendFile(__dirname + '/js/build/client.min.js');
});



io.on('connection', function(socket){
    io.emit('user connected');

    socket.on('send', function(message, nickname){
        if (nickname){
            message = nickname + ': ' + message;
        }
        socket.broadcast.emit('received', message);
    });

    socket.on('typing', function(nickname){
        var message = nickname + ' typing...';
        socket.broadcast.emit('typing2', message);
    });

    socket.on('disconnect', function(){
        io.emit('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('go to localhost:3000');
});