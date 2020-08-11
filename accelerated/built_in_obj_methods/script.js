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

// math object 
var pi = 3.14;
var e = Math.E;
pi = Math.PI;
console.log(pi, e);

a = -3;
console.log(Math.abs(a));
a = 1.23232
console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.exp(2) + "what"); // this is e^x
console.log(Math.log(e));
console.log(Math.max(1,111,41,234324,5))
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);


// date objects ...
var today = new Date();
console.log(today);
var tomorrow = new Date(2020,7,12);
console.log(tomorrow);
var theNextDay = new Date('2020/08/13');
console.log(theNextDay);
console.log(Date.parse('2020/08/14'));
console.log(today.getDate());




// regex
var string4 = 'abcab';
var pattern = /ab/;
console.log(pattern);
console.log(pattern.exec(string4));
console.log(pattern.test(string4));
console.log(string4.match(pattern));



