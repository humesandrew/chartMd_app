const { Patient } = require('../models');
module.exports = {
	getAllPatients: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const doctorPatientData = await Patient.findAll({
				where: {
					doctorId: req.session.doctor.id,
				}
			});
			res.render('patients', {
				doctorPatients: doctorPatientData.map(doctorPatient => doctorPatient.get({ plain: true })),
				doctor: req.session.doctor,
			});
		} catch (e) {
			res.json(e);
		}
	},
	// createPatient: async (req, res) => {
	// 	const { patientComments, illness } = req.body;
	// 	try {
	// 		const newTodo = await Todo.create({
	// 			task,
	// 			userId: req.session.user.id,
	// 		});
	// 		res.json({ newTodo });
	// 	} catch (e) {
	// 		res.json(e);
	// 	}
	// },
}