

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