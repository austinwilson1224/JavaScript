function generator(input) {
    var number = input;
    return function() {
        return number * 2;
    };
}

var calc = generator(900);
console.log(calc());

var obj = {};


// IIFE = imediately invoded function expression 
(function calc() {
    var number = 10;
    console.log("calc");
    console.log(number);
    obj.name = "Austin";
})(obj);

console.log(obj);

// built in method and properties
function message(message, numbers) {
    console.log(arguments);
    console.log(message);
    console.log(arguments[1])
}

message("hi!",10);

var msg = message;
console.log(msg.name);
console.log(msg.length);

var msgg = function(message) {
    console.log(message);
    console.log(this.name);
}
msgg('test');
console.log(msgg.name);


