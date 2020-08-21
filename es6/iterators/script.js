// iterator basics 
let array = [1,2,3];
// console.log(typeof array[Symbol.iterator]);
// let it = array[Symbol.iterator]();
// console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// iterators in action 
array[Symbol.iterator] = function() {
    let nextValue = 10;
    return {
        next: function() {
            nextValue++;
            return {
                done: nextValue > 15? true : false,
                value: nextValue
            }
        }
    }
}
// let it = array[Symbol.iterator]();
// console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for (let element of array) {
    console.log(element);
}


let person = {
    name: 'Austin',
    hobbies: ['sports', 'cooking'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                return {
                    done: i > hobbies.length? true : false,
                    value: 10
                }
            }
        }
    }
}

for (let hobby of person) {
    console.log(hobby);
}