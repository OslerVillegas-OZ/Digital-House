module.exports = (sequelize, DataTypes) => {
	let alias = 'Genres';
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
		name: {
			type: DataTypes.STRING(100),
		},
		ranking: {
			type: DataTypes.INTEGER.UNSIGNED,
		},
		active: {
			type: DataTypes.BOOLEAN,
		},
	};
	let config = {
		tableName: "genres",
		timestamps: false
	}; 
	const Genre = sequelize.define(alias, columns, config);

	return Genre
} 