const { sum, sum2 } = require("./helpers");
const express = require("express");
const path = require('path');
const fs = require("fs");


const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());
// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

console.log("node js async programming");


// fs.watch(fileName, () => {
//     console.log(`File changed!`);
// })

// const app = express();
// app.get('/', (req, res) => {
//     res.send("hey what's up from epxress");
// })
// app.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, "/test.html"));
// })
// app.listen(3000);
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end('hello world from nodejs');
// })

// server.listen(3000);




