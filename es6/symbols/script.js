// symbols

let symbol = Symbol('debug');
console.log(symbol);
console.log(symbol.toString());
console.log(typeof symbol);
let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol);

let obj = {
    name: 'max',
    [symbol]: 22
}

console.log(obj);

// shared symbos
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2);

let person = {
    name: 'Austin',
    age: 30

}

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 27;
}

makeAge(person);
console.log(person[symbol1])
console.log(person['age']);

// well known symbols 
class Person1 {

}
Person1.prototype[Symbol.toStringTag = 'Person']
let person1 = new Person1();
console.log(person1);

let numbers = [1, 2, 3];
numbers[Symbol.toPrimitive] = function() {
    return 999;
}
console.log(numbers + 1);
