const router = require('express').Router();
const { createPatient, getPatientbyId, updatePatientbyId } = require('../../../controllers/patientController');
// /api/patient
router.post('/', createPatient);
router.get('/:patientId', getPatientbyId);
router.patch('/:patientId', updatePatientbyId);
module.exports = router;

