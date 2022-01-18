const path = require('path');

const menuItems = require('../public/data/menuItems');

const mainController = {
	index: (req, res) => {
		res.render('index', { 'menuItems': menuItems });
	}
}

module.exports = mainController;