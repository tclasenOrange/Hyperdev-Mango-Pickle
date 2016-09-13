self.addEventListener('message', function (e) {
     var messageObj = e.data;
    if(messageObj.status === "START"){
      self.postMessage('Started!');
    }else{
      self.postMessage(messageObj.message + ' - Processed!');
    }
   
    
}); 