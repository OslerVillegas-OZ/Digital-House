module.exports = (sequelize, DataTypes) => {
	let alias = 'Movies';
	let columns = {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoincrement: true
		},
		created_at: {
			type: DataTypes.DATE,
		},
		updated_at: {
			type: DataTypes.DATE,
		},
		title: {
			type: DataTypes.STRING(500),
		},
		rating: {
			type: DataTypes.DECIMAL,
		},
		awards: {
			type: DataTypes.INTEGER.UNSIGNED,
		},
		release_date: {
			type: DataTypes.DATE,
		},
		length: {
			type: DataTypes.INTEGER.UNSIGNED,
		},
		genre_id: {
			type: DataTypes.INTEGER.UNSIGNED,
		}
	};
	let config = {
		tableName: "movies",
		timestamps: false
	}; 
	const Movie = sequelize.define(alias, columns, config);

	return Movie
}