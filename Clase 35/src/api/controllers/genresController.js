const db = require('../../database/models');
const sequelize = db.sequelize;

const Genres = db.Genre

const genresAPIController = {
	list: (req, res) => {
		Genres.findAll()
			.then(genres => {
				return res.json({
					meta: {
						status: 200,
					total: genres.length,
					url: res.url	
					}
				})
			})
	},
	detail: (req, res) => {
		Genres.findByPk(req.params.id)
			.then(genre => {
				return res.json({
					data: {
						0: {
							genre
						}
					}
				})
			})
	}
}

module.exports = genresAPIController