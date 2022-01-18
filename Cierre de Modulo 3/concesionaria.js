let autos = require('./autos')

const concesionaria = {
	autos:  autos,
	buscarAuto: function(strPatente){
		let auto = this.autos.filter(function(index){
			return index.patente == strPatente;
		});
		return (auto.length > 0) ? auto : null;
	},
	venderAuto: function(strPatente){
		let auto = this.buscarAuto(strPatente);
		if (auto.length > 0){
			auto[0].vendido = true;
			return auto
		} else {
			return null
		}
	}
};


console.log(concesionaria.venderAuto('APL123'));