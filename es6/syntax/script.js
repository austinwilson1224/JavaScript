

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
var button = document.querySelector('button');
button.addEventListener('click', fn22);


function fn() {
    console.log(this);
}

fn();

var fn22 = () => console.log(this);

fn2();

// functions and default parameters 
function isEqualTo(number = 0, compare = 0) {
    return number == compare;
}

console.log(isEqualTo(10,10));
console.log(isEqualTo(10)); // default value
console.log(isEqualTo());

// object literal extensions 
let namee = 'Austin';
let agee = 27;
let ageField = "age";
let obj = {
    namee: 'Austin2',
    agee,
    [ageField]: 28,
    greet() {
        console.log(this.namee +','+ this.agee);
    },
    "greet me"() {
        console.log('ello puppet');
    }
}
console.log(obj);
obj.greet();
obj["greet me"];

// rest operator

let array = [1,2,3,4,5];
function sumup(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    return result;
}
let result = sumup(111,1,112,1);
console.log(result);

// spread operator
let number2 = [1,2,3,4,5];
console.log(Math.max(number2)); // doesn't work


console.log(...number2);
console.log(Math.max(...number2))

// for of loop
let testResults = [1.2,3.4,22.4,124.2];
for(let testResult of testResults) {
    console.log(testResult);
}


// template literals 
let description = `
Like this! Hello I'm ${name + "!!!"}
\${name} this backslash will escape the template literal
`;

console.log(description);

// destructuring arrays 
let numbars = [1,2,3];
let [a, b] = numbars;
let [c, ... d] = numbars;
console.log(d)
console.log(a,b);

let e = 4;
let ff = 7;
[ff, e] = [e, ff];
console.log(ff,e);