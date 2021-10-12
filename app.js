const { mainModule } = require("process");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let tasks = ['create a function that takes in a number',
        'pass back the lowest root greater then 1 if not prime',
        'pass back 1 if the number is prim'];

let hint = 'make use of the % operator ';

let stretchTask = 'create unit tests the function';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    item = 22;
    res.end(`lowest root of ${item} is ${numberCheck(item)}`);
  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });



function numberCheck(input) {
    for(let i = 2; i<input; i++) {
        if(input%i===0){
            return i;
        }
        return 1;
    }
} 