const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class Patient extends Model {}
Patient.init(
	{
		patientId: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		patientName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		illness: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hasBeenSeen: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		doctorNotes: {
			type: DataTypes.STRING,
		},
		doctorId: {
			type: DataTypes.UUID,
			references: {
				model: 'doctor',
				key: 'id',
			}
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'patient'
	}
);
module.exports = Patient;