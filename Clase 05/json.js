let ninjas = ['Naruto', 'Saske', 'Sakura']

let ninjasJSON = JSON.stringify(ninjas);

let amigosJS = JSON.parse(ninjasJSON);

console.log(ninjasJSON);
console.log(amigosJS);

let prota = {
	name : 'Naruto',
	jutsu : 'Raserngan',
	chunin : true,
	age : 18
}

let protaJSON = JSON.stringify(prota);

console.log(protaJSON);