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