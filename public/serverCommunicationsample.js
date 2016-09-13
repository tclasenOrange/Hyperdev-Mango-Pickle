$('#button1').click(function(){

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
if(xhr.readyState == 4 && xhr.status == 200) {
aTO( xhr.responseText );
    }
};

xhr.open('GET', './demo.txt');

xhr.send();     


});

function aTO(text){
  $('#output-list').append(addLi(text));
}

function addLi(text) {
  return '<li>' + text + '</li>';
}

$('#button2').click(function(){
  $.get('./demo.txt').done(function(data){
    aTO( data);
  });
  
});

 //var socket = new WebSocket('./demo.txt');
  
  //socket.onmessage = function(e) {
  //  aTO(e.data);
  //};
  
  //socket.onopen = function(){
    //$('#button3').removeAttr('disabled');
  //};
  
//$('#button3').click(function(){
 
  
  //socket.send('hello, world!');
//});
