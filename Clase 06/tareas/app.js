// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

const { connect } = require('tls');
const { guardarTarea } = require('./tareas');
let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
			console.log('Listado de tareas');
			let tareas = archivoTareas.leer();
			tareas.forEach(function(tarea, index) {
				console.log(index + '. ' + tarea.titulo + ' - ' + tarea.estado);
			});
			
      console.log()
      break;
		case 'crear':
			if(process.argv[3] != undefined){
				let nueva_tarea = {
					titulo: process.argv[3],
					estado: 'pendiente'
				}
				archivoTareas.guardarTarea(nueva_tarea);
				console.log('Nueva tarea guardada\n')
			} else {
				console.log('Necesito el nombre de la tarea')
			}
			break
		case 'filtrar':
			// Revisar que el filtro no este vacio
			if(process.argv[3] != undefined){
				// Revisar que el filtro sea uno de los requeridos
				if(process.argv[3] != 'terminada' && process.argv[3] != 'en progreso' && process.argv[3] != 'pendiente'){
					console.log('Estado de la tarea no valido\nLos estados de las tareas son en-progeso, pendiente, terminada\n')
				} else {
					// Imprimir listado de tareas pendientes
					console.log('Listado de tareas en estado "' + process.argv[3] + '"');
					let tareasFiltradas = archivoTareas.leerPorEstado(process.argv[3]);
					tareasFiltradas.forEach(function(index){
						console.log('- ' + index.titulo)
					});
					console.log('')
				}
			} else {
				console.log('Necesito el estado de la tarea para filtrar')
			}
			break
    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        break;
}
