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
        this.name = 'Austin';
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