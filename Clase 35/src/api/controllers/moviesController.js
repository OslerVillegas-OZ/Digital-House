const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie

const moviesAPIController = {
	create: (req, res) => {	
		Movies
			.create({
				title: req.body.title,
				rating: req.body.rating,
				awards: req.body.awards,
				release_date: req.body.release_date,
				length: req.body.length,
				genre_id: req.body.genre_id
			})
			.then(movie => {
				return res.json({
					data: movie,
					status: 200,
					created: 'ok'
				})
			})
	},
	destroy: (req, res) => {
		/*
		let movieDeleted = Movie.findByPk(req.params.id)
			.then((movie) => {
				return movie.title
			})
		//	*/
		Movies
			.destroy({
				where: { id: req.params.id}
			})
			.then((response) => {
				return res.json(response)
			})	
	},
}

module.exports = moviesAPIController;