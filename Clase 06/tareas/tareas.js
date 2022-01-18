const fs = require('fs');

let archivoTareas = {
	archivo: 'tareas.json',
	leer: function () {
			return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
	},
	escribeJSON: function (arrTarea){
		fs.writeFileSync(this.archivo, JSON.stringify(arrTarea, null, 2), function(err){
			if(err) return console.error(err);
		});
	},
	guardarTarea: function (objTarea){
		let tareasJSONTemp = archivoTareas.leer();
		tareasJSONTemp.push(objTarea)
		this.escribeJSON(tareasJSONTemp);
	},
	filtrarPorEstado: function(JSONTemp, filtro){
		let tareasFiltradas = JSONTemp.filter(function(index){
			return index.estado == filtro;
		});
		return tareasFiltradas
	},
	leerPorEstado: function(arrFiltro){
		let tareasJSONTemp = archivoTareas.leer();
		return this.filtrarPorEstado(tareasJSONTemp,arrFiltro);
	}
}


module.exports = archivoTareas;