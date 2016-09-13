var vegetable = function () {
    this.type = "Veggie";
}

vegetable.prototype.print = function () {
    console.log(this.type + " is good for you!");
}

var carrot = new vegetable();

carrot.print();

vegetable.prototype.color = "green";
carrot.color = "orange";

console.log(carrot.color);

var person = function (firstname) {
    this.firstName = firstname;
};

person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

function Student(firstname, subject) {
    person.call(this, firstname);
    this.subject = subject;
}

Student.prototype = Object.create(person.prototype);

Student.prototype.constructor = Student;

Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();

console.log(student1 instanceof person);
console.log(student1 instanceof Student);

var worker = new Worker('worker.js');

worker.onmessage = function (e) {
    var message = e.data;

    
    $('#message-list').append('<li>' + message + '</li>');
};

$('#send-message').click(function() {
      var message = $('#message').val();
      var messageObject = {message:message};
  worker.postMessage(messageObject);
});

worker.postMessage({status:"START"});