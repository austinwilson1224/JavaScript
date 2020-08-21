// symbols

let symbol = Symbol('debug');
console.log(symbol);
console.log(symbol.toString());
console.log(typeof symbol);
let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol);