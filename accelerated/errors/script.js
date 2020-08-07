var a = 2;
var b = 5;
var c;
var d = 1000;

for(var i = 0; i <= 4; i++) {
    if (i > a && i < b) {
        c = 1000;
    }
    if (i === 3) {
         d *= 2;
    }
}


console.log(a);
console.log(b);
console.log(c);
console.log(d);


// try, catch, finally 
try {
    test();
} catch(error) {
    console.log(error);
} finally {
    console.log("Finally!");
}




