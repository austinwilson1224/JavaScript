// timers and intervals
setTimeout(function() {
    console.log("finished");
}, 2000);

var interval = setInterval(function() {
    console.log("again?")
}, 500);

setTimeout(function() {
    clearInterval(interval);
}, 3000);

var a = '5';
var b = 'FBB123';
var c = 10;
var d = 10.3;
console.log(a);
console.log(parseInt(b,16));
console.log(c.toString());
console.log(d.toFixed());
console.log(d.toFixed(3));


// string functions 
var string = 'Any text';
console.log(string);
console.log(string.length);
console.log(string[2]);
console.log(string.charAt(2));
var string2 = string.concat(', and some more text!');
console.log(string2.toUpperCase());
console.log(string.split(' '));

var string3 = '        Any     text    ';
console.log(string3.trim());