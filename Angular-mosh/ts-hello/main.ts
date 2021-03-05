let a: number;
let b:boolean;
let c:string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };

let backgroundColor = Color.Red;



// type assertions

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// arrow functions 

let log = function(message) {
    console.log(message);
}
let doLog = message => console.log(message);