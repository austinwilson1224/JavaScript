var name = 'Austin';
console.log(name);


// let has block scope
let name1 = 'Austin';
console.log(name1);

if (true) {
    var name3 = 'aa';
    let name4 = 'bb';
}
console.log(name3);
// will throw error
// console.log(name4);

let age = 30;
if (true) {
    let age = 27;
    console.log(age);
}
console.log(age);

// const 
const AGE = 27;
// AGE = 27; won't work
console.log(AGE);
const AGES = [27, 29, 31];
console.log(AGES);
AGES.push(25);
console.log(AGES);


const OBJ = {
    age: 27
};

console.log(OBJ);

OBJ.age = 30;
console.log(OBJ);

// hoisting
// have to declare things before actually using them
function doSomething() {
    age2 = 27;
}
let age2;
doSomething();
console.log(age);

// arrow functions
function fn() {
    console.log('hello1');
}

fn();

var fn2 = () => {
    console.log('hello2');
}
fn2();
var fn3 = () => console.log('hello3');
fn3();
var fn4 = () => 'hello4';
console.log(fn4());

var add = (a,b) =>  a + b;
console.log(add(3,2));

var subtract = a => a - 2;
console.log(subtract(2));