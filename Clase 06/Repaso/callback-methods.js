// FILTER
let estudiantes = [
	{nombre: 'John', promedio: 8.5, aprobado: true},
	{nombre: 'Jane', promedio: 7, aprobado: true},
	{nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(index){
	return index.aprobado == true
});

let desaprobados = estudiantes.filter(function(index){
	return index.aprobado == false
});

console.log(aprobados);
console.log(desaprobados);

// MAP
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(index){
	return index + 1
});

console.log(horariosAtrasados)

// Reduce
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(acc, index){
	return acc + index
})

console.log(totalVueltas);

// FOR EACH
let listaDeSuperMercado = [
	'Bife de chorizo', 
	'Coca Cola', 
	'Bananas', 
	'Lechuga', 
	'Chimichurri', 
	'Lata de tomates', 
	'Arvejas', 
	'Cereales', 
	'Pechuga de pollo', 
	'Leche'
];

listaDeSuperMercado.forEach(function(index){
	console.log(index)
});