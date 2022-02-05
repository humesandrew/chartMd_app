const Todo = require('./Todo');
const User = require('./User');
User.hasMany(Todo, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Todo.belongsTo(User, {
	foreignKey: 'userId'
});
module.exports = {
	Todo,
	User,
}