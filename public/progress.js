$( document ).ready(function() {
 
    $( "a" ).click(function( event ) {
 
        alert( "Thanks for visiting!" );
 
    });
 
});

var progressBar = document.getElementById("progressbar");

function resetProgressbar(){
  progressBar.value = progressBar.getAttribute("min");
}
       
       function incrementProgressbar(){
         progressBar.value += 25;
       }

