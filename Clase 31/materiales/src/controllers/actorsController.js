const db = require('../database/models');


const actorsController = {
	list: (req, res) => {
		db.Actors.findAll()
			.then( actors => { return res.render('actorsList', { actors }) })

	},
}

module.exports = actorsController;