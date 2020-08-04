// "use strict"

// console.log("hello");

// numbers
var variable = 5;
console.log(variable);
variable--;
console.log(variable);


// strings
let text = "text";
console.log(text);
text = "text2";
console.log(text);
console.log(typeof(text));


// booleans
var bool = true;
console.log(bool);
bool = !bool;
console.log(!bool)


// floats
var float = 3.3;
console.log(typeof(float));
float = 3;
console.log(typeof(float));


// array
var array = [1,2,3,'4',true];
console.log(array);
console.log(array[0])
console.log(typeof(array));

// null, undefined, NaN
// console.log(aray[4])
var var1 = undefined;
console.log(var1);
var1 = null;
console.log(var1);

console.log(null == undefined);
console.log(null === undefined);

// NaN
var1 = NaN; 
console.log(var1);
console.log(typeof(NaN));
console.log(typeof(null));
console.log(typeof(undefined));

// objects
var1 = {
    name: 'Austin'
};

console.log(var1);
console.log(var1.name);
console.log(var1['name']);
console.log(typeof(var1));

// strict mode\
// automatically creates var2 and we don't have to have semi-colons
var2 = 1
var1 = 4
console.log(var1)


// dynamic typing
var Var1 = 10;
console.log(Var1);
console.log(typeof Var1)
console.log(var1);

Var1 = "10";
console.log(Var1);
console.log(typeof Var1);

// hoisting
var var2;


// functions -- can call if before decleration ...
calc();
function calc() {
    console.log("this code is inside function");
}
calc();

var calc1 = function() {
    console.log("Inside another function");
}
calc1;
var anotherFunction = calc;
anotherFunction();
calc1(); // to call the variable which has function attached 


// returning stuff
function returned() {
    var str = "insid3 function";
    return str;
    // return "inside function";
}

function calc3(num1,num2) {
    return num1 + num2;
}

var result = calc3(10,8);
console.log(result);
var calculator = calc3;
console.log(calculator(19,2));


// control structures
var condition = true;
condition = 1;
var anotherCondition = !true;
if (condition) {
    console.log("Executed!");
} else if (anotherCondition) {
    console.log("still executed!");
} else {
    console.log("Other block exectued");
}

console.log(1 == true);
console.log(2 == true);


// switch case 
console.log("SWITCH CASE:")
var luckNumber = 10;

switch(luckNumber) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 10:
        console.log(luckNumber);
        break;
    default:
        console.log("nothing");
        break;
}



// for loop 
console.log("FOR LOOP");
for(var i = 0; i < 5;i++) {
    console.log(i);
}
// nested loop
for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 2; j++) {
        console.log(i,j)
    }
}


// controlling loops
for(var i = 0; i < 4; i++) {
    if(i == 1) {
        break;
    }
    console.log(i);
}
for(var i = 0; i < 5; i++) {
    if(i == 2) {
        // console.log("whatver");
        continue;
    }
    console.log(i);
}

for(var i = 0; i < 10; i += 3) {
    console.log(i);
}

array = [1,2,3,4,5];
console.log("ARRAY loops");
for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("NEWKN")
array.forEach(element => {
    console.log(element);
});

// while loops 
console.log("WHILE");
var i = 0;
var condition2 = true;

while (condition2) {
    ++i;
    console.log(i + "ehllo")
    if(i > 20) {
        condition2 = false;
    }
}











