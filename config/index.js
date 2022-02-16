require('dotenv').config();
const Sequelize = require('sequelize');
let sequelize;
// this will only run in production
// this environmental variable only exists in production
if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD, {
			host: 'localhost',
			dialect: 'mysql',
			port: 3306
		}
	);
}
module.exports = sequelize;