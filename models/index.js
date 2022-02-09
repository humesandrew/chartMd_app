const Patient = require('./Patient');
const Doctor = require('./Doctor');
Doctor.hasMany(Patient, {
	foreignKey: 'doctorId',
	onDelete: 'CASCADE',
});
Patient.belongsTo(Doctor, {
	foreignKey: 'doctorId'
});
module.exports = {
	Patient,
	Doctor,
}