// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });


});

$("a.popup").click(function(event){
  event.preventDefault();
  var link = this;
  var href = link.getAttribute('href');
  var height = link.getAttribute('data-height');
  var width = link.getAttribute('data-width');
  window.open(href, "popup", "height=" + height + ",width=" + width+ "");
});

