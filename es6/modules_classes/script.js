import { keyValue as key} from './external.js';
import { test } from './external.js';
import { otherStuff, something } from './external.js';
import abc from 'external.js'; // this will be ab from external because that is the default
import * as imports from './external.js';
console.log(imports);

console.log(key);
test();
console.log(key);
console.log(otherStuff, something);
console.log(abc);


// class basics 

class Helper {
    static logTwice(message) {
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice('austin!');


class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length >= 2) {
            this._name = value;
        }
        console.log('rejected');
    }

    greet() {
        console.log('hello my name is ' + this.name);
    }
}

let person = new Person();
console.log(person);
person.greet();
console.log(person.name);

console.log(person.__proto__ === Person.prototype);

class Austin extends Person {
    constructor(age) {
        super('saustin');
        this.age = 12;
    }

    greet() {
        console.log("hello");
    }
}

let austin = new Austin(23);
austin.greet();
console.log(austin.age);
console.log(austin.name);


// extending built-in objects aka subclassing 
class ConvertableArray extends Array {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted' + value));
        return returnArray;
    }
}
let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray.convert());


