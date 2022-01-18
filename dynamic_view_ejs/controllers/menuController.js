const path = require('path');

const menuItems = require('../public/data/menuItems');

const menuController = {
	detalle: (req, res) => {
		let plato = menuItems.find(plato => plato.id === req.params.id);
		res.render('detalleMenu', { 'plato': plato });
	}
}

module.exports = menuController;