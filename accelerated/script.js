


// object basics and literal notation
var person = {
    name: "Austin",
    age : 270,
    details: {
        hobbies: ['sprots','cooking'],
        location: "USA"
    }
    // },
    // greet: function hello() {
    //     console.log("hello!");
    //     console.log("hello, I am " + this.name); // need this for scope issues 
    //     console.log("I am " + this.age + " years old");
    // },
    // "weight-1": 200
}

var field = 'name';
console.log(person);
console.log(person.age);
console.log(person['name']);
console.log(person[field]);
console.log(person.details.hobbies);
//person.greet();
console.log(typeof person);
console.log(typeof person.name);
console.log(person["weight-1"]);

// properties and "this"
// person.name = "Anna";
console.log(person);

// alternative ways of creating objects
var anotherPerson = Object();
anotherPerson.name = "Saustin";
anotherPerson.age = 23;
anotherPerson.details = {
    hobbies: [],
    location : ""
}
console.log(anotherPerson);

// objects are reference types
var person1 = {
    name: "austin",
    age: 12
}
var person2 = {
    name: "austin",
    age: 12
}
console.log(person1 == person2)

// object.create()
var person3 = Object.create(null);
person3.name = 'austin';
console.log(person3)

var person4 = Object.create({name:'austin'});
var person5 = Object.create(person);
console.log(person5);
console.log(person.__proto__);
Object.prototype.greet = function() {
    console.log("hello there, I am " + this.name);
}
person.greet();

var austin = Object.create(person);
var anna = Object.create(person);
console.log(austin.name);
anna.name = "Anna";
anna.greet();
austin.greet();

console.log(anna.__proto__ == person);
console.log(anna.__proto__.__proto__ == Object.prototype);

console.log(Object.getPrototypeOf(anna) == person);

// cunstructor
function Person() {
    this.name = '';
    this.greet = function () {
        console.log('hello this is ' + this.name);
    }
}


var person6 = new Person();
person6.name = "Austin";
console.log(person6);
console.log(person6.__proto__ == Object.prototype);
person6.greet();

console.log(person6 instanceof Person);


// constructor functions and arguments
function Person123(name, age) {
    this.name = name;
    this.age = age;
}
var test = new Person123('Austin',27);
console.log(test);
console.log(test instanceof Object);


// this and strange behavior
function fn(message) {
    console.log(message + this);
}
fn();

var obj = {
    fn: fn,
    obfn: fn
}
obj.fn();
obj.obfn();
// obj.obfn.bind(person);

var person123 = {
    name: "Austin",
    age: 27
}
obj.obfn.bind(person, 'Hello')();
obj.obfn.call(person, "helloo:':");
obj.obfn.apply(person, ["helloooo"]);


// creating properties with the defineProperty() method
var account = {
    cash: 1200,
    _name: 'Default',
    withdraw: function(amount) {
        this.cash -= amount;
        console.log("Withdrew" + amount + ", new cash reserve is" + this.cash);
    }
}
 account.withdraw(100);
 Object.defineProperty(account, 'deposit', {
     value: function(amount) {
         this.cash += amount;
     }
 });

 Object.defineProperty(account, 'name', {
    //  value: "ID000-1",
    //  writable: true,
     get: function() {
         return this._name
     },
     set: function(name) {
         this._name = name
     }
 });
console.log(account.name);
account.name = "ID000-2";
console.log(account.name);


// built-in methods
var person21 = {
    name: "austin",
    age: 27,
    greet: function() {
        console.log("hello");
    }
}

// delete person21.name;
console.log(person21);
console.log('name' in person21);
console.log('age' in person21);
for(var field in person21) {
    console.log(field + ":" + person21[field]);
    // console.log(person21[field])
}






