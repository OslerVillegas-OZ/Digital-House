const addition = require('./add');
const subtraction = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const add = addition(10, 2);
const sub = subtraction(10, 2);
const mult = multiply(10, 2);
const div = divide(10, 2);


console.log(add);
console.log(sub);
console.log(mult);
console.log(div);