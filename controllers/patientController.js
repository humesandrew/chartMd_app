const {
	Patient
} = require('../models');
module.exports = {
	getAllPatients: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const doctorPatientData = await Patient.findAll();
			res.render('patients', {
				doctorPatients: doctorPatientData.map(doctorPatient => doctorPatient.get({
					plain: true
				})),
				doctor: req.session.doctor,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createPatient: async (req, res) => {
		const {
			patientName,
			illness,
			doctorNotes
		} = req.body;
		try {
			const newPatient = await Patient.create({
				patientName,
				illness,
				doctorNotes,
			});
			res.json({
				newPatient
			});
		} catch (e) {
			res.json(e);
		}
	},
	getPatientbyId: async (req, res) => {
		const {
			patientId
		} = req.params;
		const patient = await Patient.findByPk(patientId);
		res.json(patient);
	},
	updatePatientbyId: async (req, res) => {
		try {
			const {
				patientId
			} = req.params;
			console.log(patientId, req.body)
			const patient = await Patient.update({
				...req.body,
			}, {
				where: {
					patientId,
				}
			})
			console.log(patient);
			res.json(patient)
		} catch (error) {
			console.log(error);
			res.json(error)
		}
	}
}