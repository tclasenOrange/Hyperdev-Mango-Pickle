function processMessage(message){
  var deferred = $.Deferred();
  
  var worker = new Worker('worker2.js');
  
  worker.onmessage = function(e){
    deferred.resolve(e.data.message);
  };
  
  worker.postMessage({message:message});
  
  return deferred.promise();
}