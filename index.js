const { mainModule } = require("process");

let tasks = ['create a function that takes in a number',
        'pass back the lowest root greater then 1 if not prime',
        'pass back 1 if the number is prim'];

let hint = 'make use of the % operator ';

let stretchTask = 'create unit tests the function';

function main() {
    item = 501;
    console.log(`lowest root of ${item} is ${numberCheck(item)}`);
}

function numberCheck(input) {
    for(let i = 2; i<input; i++) {
        if(input%i===0){
            return i;
        }
        return 1;
    }
} 