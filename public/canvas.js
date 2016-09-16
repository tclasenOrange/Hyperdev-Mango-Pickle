//Mongo SPike
  var canvas = document.getElementById('my_canvas');
if(canvas.getContext){
  var context = canvas.getContext('2d');
context.moveTo(190,400);
context.lineTo(250,10);
context.lineTo(310,400);
context.lineWidth = 7;
context.stroke();
     var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 100;
var grd = context.createLinearGradient(0,0,0,450);
grd.addColorStop(0,"#40ff00");
grd.addColorStop(0.25,"yellow");
grd.addColorStop(0.5, "orange");
grd.addColorStop(1,"red");


      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = grd;
      context.fill();
}
  var canvas = document.getElementById('logo');
if(canvas.getContext){
  var context = canvas.getContext('2d');
  
  var grd = context.createLinearGradient(0,0,0,40);
grd.addColorStop(0,"red");
grd.addColorStop(0.5,"orange");
grd.addColorStop(0.75, "yellow");
grd.addColorStop(1,"#40ff00");
context.fillStyle = grd;
context.strokeStyle = grd;

context.lineWidth = 1;
context.beginPath();
context.moveTo(0,40);
context.lineTo(30,0);
context.lineTo(60,40);
context.lineTo(285, 40);

context.stroke();
context.closePath();
context.font = "italic 40px 'Comic Sans MS'";
 	
context.fillText("Mango-Spike", 60, 36);
	
context.save();
 	
context.translate(20,20);
 	
context.fillRect(0,0,20,20);
context.fillStyle    = "#FFFFFF";
 	
context.strokeStyle = "#FFFFFF";
 	

 	
context.lineWidth = 2;
 	
context.beginPath();
 	
context.moveTo(0, 20);
 	
context.lineTo(10, 0);
 	
context.lineTo(20, 20 );
 	
context.lineTo(0, 20 );
 	

 	
context.fill();
 	
context.closePath();
 	
context.restore();

    var bar = new RGraph.Bar('test', [50,25,15,10]);
    bar.Set('chart.gutter', 100);
    bar.Set('chart.colors', [ 'yellow','green']);
    bar.Set('chart.title', "A bar graph of my favorite pies");
    bar.Set('chart.labels', ["Banana Creme", "Pumpkin", "Apple", "Cherry"]);
    bar.Draw();
    
   
}else{
  
}


