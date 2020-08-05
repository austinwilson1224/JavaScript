var array = [1,2,3];
array[3] = 100;
console.log(array.length);
console.log(array[1]);
console.log(array[3]);
array[6] = 23;
console.log(array);

// forEach
array = [1,2,3];
array.forEach(function(element) {
    console.log(element);
});
array.push(4);
console.log(array);
array = [1,2,3,];
console.log(array);
array.push(4);
console.log(array);
array = [1,2,3,,];
console.log(array);
array.push(4);
console.log(array);
console.log(array.pop());
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift("new element");
console.log(array);


// splice and slice 
console.log(array.indexOf(2));
array[array.indexOf("new element")] = "old";
console.log(array);

var newArray = array.splice(0,1);

console.log(newArray);
console.log(array);

var newArray2 = newArray.slice(0);
console.log(newArray2);

// filter
array = ['old',1,2,3,4];
console.log(array.filter(function(value) {
    return value > 2;
}));


// map
console.log(array.map(function(value) {
    return value * 2;
}));

// reverse 
console.log(array.reverse());
console.log(array);

// concat and join
var array2 = [1,2,3,4];
var array3 = ["join","me"];
console.log(array.concat(array3));
console.log(array2);
console.log(array3);

console.log(array2.join(array3));
console.log(array2.join(', ')); // turns array into a string ...

// reduce method
console.log(array.pop());
console.log(array.reduce(function(total, value) {
    console.log("total: " + total + " value: " + value);
    return total + value;
}));

