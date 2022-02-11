const { Patient } = require('../models');
module.exports = {
	getAllPatients: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const doctorPatientData = await Patient.findAll({
				// where: {
				// 	doctorId: req.session.doctor.id,
				// }
			});
			res.render('patients', {
				doctorPatients: doctorPatientData.map(doctorPatient => doctorPatient.get({ plain: true })),
				doctor: req.session.doctor,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createPatient: async (req, res) => {
		const { patientName, illness, doctorNotes } = req.body;
		try {
			const newPatient = await Patient.create({
				patientName,
				illness,
				doctorNotes,
			});
			res.json({ newPatient });
		} catch (e) {
			res.json(e);
		}
	},
}