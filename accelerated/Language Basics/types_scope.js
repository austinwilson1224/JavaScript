var aNumber = 4;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);
aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);


// primitive vs reference types
var array = [1,2,3];
console.log(typeof array);
var anotherArray = array;
console.log(anotherArray);
array.push(4);
console.log(array);
console.log(anotherArray);
array = ['a','b'];
console.log(array);
console.log(anotherArray);

// global vs local
var test = 'Global scope';

function localScope() {
    var test = "Local scope";
    test2 = "localscope";
    console.log(test);
}

localScope();
console.log(test);
console.log(test2)