module.exports = (sequelize, DataTypes) => {

	let alias = "Actors";

	let cols = {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoincrement: true
		},
		first_name: {
			type: DataTypes.STRING(100),	
		},
		last_name: {
			type: DataTypes.STRING(100)
		},
		rating: {
			type: DataTypes.DECIMAL
		},
		favorite_movie_id: {
			type: DataTypes.INTEGER.UNSIGNED,
		}
	}

	let config = {
		tableName: "actors",
		timestamps: false
	}

	const Actor = sequelize.define(alias, cols, config);

	return Actor
}