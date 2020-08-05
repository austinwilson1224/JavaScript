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
