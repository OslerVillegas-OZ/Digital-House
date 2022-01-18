/*
let fileSystem = require('fs');
let moment = require('moment');

let data = fileSystem.readFileSync(__dirname + '/prueba.txt', 'utf-8');
 
console.log(data)

console.log(moment().format('DD MM YY'));
*/

let heroes = require('./superheroes');

console.log(heroes);