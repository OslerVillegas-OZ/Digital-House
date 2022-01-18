let notas = [10, 4, 5, 8, 9, 2, 7];

let notasBase100 = notas.map(function(item){
	return item*10
});

console.log(notasBase100);

let notasAprobadas = notas.filter(function(item){
	return item >= 7;
});

console.log(notasAprobadas);

let sumaNotas = notas.reduce(function(acc, item){
	return acc + item
});

console.log(sumaNotas);

notas.forEach(function(item, index){
	console.log('En la posicion ' + index + ' tengo el valor ' + item)
})
