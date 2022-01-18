let sum = (num1, num2) => num1 + num2;
let rest = (num1, num2) => num1 - num2;
let mult = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

let calculator = (num1, num2, operation) => operation(num1, num2);

console.log(calculator(18, 3, sum))
console.log(calculator(18, 3, rest))
console.log(calculator(18, 3, mult))
console.log(calculator(18, 3, div))