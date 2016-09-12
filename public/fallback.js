function hasColorSupport(){
  element = document.createElement("input");
  element.setAttribute("type", "color");
  var hasColorType = (element.type==="color");
  if(hasColorType){
    var testString="foo";
    element.value=testString;
    hasColorType = (element.value != testString);
  }
  return (hasColorType);
}

var applyColorPicker = function(){
 $('input[type=color]').simpleColor(); 
};

Modernizr.load({
      test:Modernizr.inputtypes.color,
      nope:"javascripts/jquery.simple-color.js",
      callback: function(url, result){
        if(!result){
          applyColorPicker();
        }
      }
    }
  );

if(!Modernizr.autofocus){
  $('input[autofocus]').focus();
}

