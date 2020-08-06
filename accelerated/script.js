

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