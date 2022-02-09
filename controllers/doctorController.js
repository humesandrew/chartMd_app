const {
	Doctor
} = require('../models');
module.exports = {
	createDoctor: async (req, res) => {
		const { username, email, password } = req.body;
		if (!username || !email || !password ) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
		}
		try {
			const doctor = await Doctor.create({
				username,
				email,
				password,
			});
			res.json(doctor);
		} catch (e) {
			res.json(e);
		}
	},
//	getting doctors
	renderHomePage: async (req, res) => {
		res.render('homepage');
	},
	getDoctorById: async (req, res) => {
		try {
			const doctorData = await Doctor.findByPk(req.params.doctorId);
			const doctor = doctorData.get({ plain: true });
			res.render('singleDoctor', {
				doctor
			});
		} catch (e) {
			res.json(e);
		}
	},
	login: async (req, res) => {

		console.log(req.body);
		try {
			//	first find the user with the given email address
			const doctorData = await Doctor.findOne({
				where: {
					username: req.body.username
				}
			});
			const doctorFound = doctorData.get({ plain: true });

			console.log(doctorFound);
			//	check if the password from the form is the same password as the user found
			//	with the given email
			//	if that is true, save the user found in req.session.user
			console.log(doctorFound.password, 72);
			console.log(req.body.password, 73);
			if (doctorFound.password === req.body.password) {
				req.session.save(() => {
					req.session.loggedIn = true;
					req.session.user = doctorFound;
					res.json({ success: true });
				});
			}
		} catch (e) {
			console.log(e);
			res.json(e);
		}
	},
	signupHandler: async (req, res) => {
		const { email, username, password } = req.body;
		try {
			const createdDoctor = await Doctor.create({
				email,
				username,
				password,
			});
			const doctor = createdDoctor.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = doctor;
				res.redirect('/patients');
			});
		} catch (e) {
			res.json(e);
		}
	},
	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/patients');
		}
		res.render('login');
	},
	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/patients');
		}
		res.render('signUp');
	},
	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({ status: true });
		});
	},
}