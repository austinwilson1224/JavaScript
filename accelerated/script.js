

// object basics and literal notation
var person = {
    name: "Austin",
    age : 270,
    details: {
        hobbies: ['sprots','cooking'],
        location: "USA"
    },
    greet: function hello() {
        console.log("hello!");
        console.log("hello, I am " + this.name); // need this for scope issues 
        console.log("I am " + this.age + " years old");
    },
    "weight-1": 200
}

var field = 'name';
console.log(person);
console.log(person.age);
console.log(person['name']);
console.log(person[field]);
console.log(person.details.hobbies);
person.greet();
console.log(typeof person);
console.log(typeof person.name);
console.log(person["weight-1"]);

// properties and "this"
person.name = "Anna";
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