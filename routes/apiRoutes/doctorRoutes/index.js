const router = require('express').Router();
const {
	createDoctor,
	// getDoctorById,
	login,
	signupHandler,
	logout,
} = require('../../../controllers/doctorController');

router.route('/')
	.post(createDoctor);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

// router.route('/:doctorId')
// 	// .get(getDoctorById);
// // /api/doctors/:doctorId
// // router.route('/:doctorId')
// // 	.delete(deleteDoctorById)
// // 	.get(getDoctorById)
// // 	.put(updateDoctorById)
module.exports = router;