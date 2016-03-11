//client code

var socket = io();

$('#massage-area').submit(function(){
    socket.emit('send', $('#message').val(), $('#nickname').val());
    $('#messages').append($('<li class="myMessage">').text('Me: ' + $('#message').val()));
    $('#message').val('');
    $('.area').text('');
    return false;
});

$('#message').keyup(function(){
    socket.emit('typing', $('#nickname').val());
});

socket.on('typing2',function(message){
    $('.area').text(message);
    setTimeout(function(){
        $('.area').text('');
    }, 2000)
});

socket.on('received', function(message){
    $('#messages').append($('<li>').text(message));
});

socket.on('user connected', function(){
    $('#messages').append($('<li>').text('Someone entered the room'));
});

socket.on('user disconnected', function(){
    $('#messages').append($('<li>').text('Someone left the room'));
});

