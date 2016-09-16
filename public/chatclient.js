var socket = io();

  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  
    socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  
  socket.on('chat', function (data) {
    var zeit = new Date(data.zeit);
    $('#messages').append(
        $('<li></li>').append(
            // Uhrzeit
            $('<span>').text('[' +
                (zeit.getHours() < 10 ? '0' + zeit.getHours() : zeit.getHours())
                + ':' +
                (zeit.getMinutes() < 10 ? '0' + zeit.getMinutes() : zeit.getMinutes())
                + '] '
            ),
            // Name
            $('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
            // Text
            $('<span>').text(data.text))
    );
    // nach unten scrollen
    $('body').scrollTop($('body')[0].scrollHeight);
});

function senden(){
	// Eingabefelder auslesen
	var name = $('#name').val();
	var text = $('#text').val();
	// Socket senden
	socket.emit('chat', { name: name, text: text });
	// Text-Eingabe leeren
	$('#text').val('');
}

 $('#senden').click(senden);
    // oder mit der Enter-Taste
    $('#text').keypress(function (e) {
        if (e.which == 13) {
            senden();
        }
    });