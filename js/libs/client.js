//client code

var socket = io();

$('form').submit(function(){
    socket.emit('send', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('received', function(message){
    $('#messages').append($('<li>').text(message));
});

