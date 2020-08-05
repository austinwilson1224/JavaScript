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


