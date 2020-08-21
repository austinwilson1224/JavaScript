// generators
function *select() {
    yield 'House';
    yield 'Garage';
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

let obj = {
    [Symbol.iterator]: gen
}

function *gen(end) {
    for (let i = 0; i < end; i++) {
        yield i;
    }
    // yield 1;
    // yield 2;
}

let it2 = gen(10);
console.log(it2.next());
console.log(it2.throw());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
// for (let element of obj) {
//     console.log(element);
// }