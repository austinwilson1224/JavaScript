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