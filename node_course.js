const fs = require('fs');
fs.writeFileSync('node_txt.txt','My name is sujith');
fs.appendFileSync('node_txt.txt','. I live in mangalore');

const vald = require("validator")

const vald = require("chalk")


 const no = require('./utils.js');

 console.log("hi iam node_1a")
 const sum = no (20,5);
 console.log(sum)

console.log(vald.isEmail('hha@dg.com'));

console.log(vald.isURL('http://hha@dg.com'));

console.log(vald.red.bgBlue.bold("success"));

console.log(vald.blue.bold.inverse("updated :-)"));