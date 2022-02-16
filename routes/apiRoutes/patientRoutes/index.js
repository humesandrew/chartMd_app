const router = require('express').Router();
const {
    createPatient,
    getPatientbyId,
    updatePatientbyId
} = require('../../../controllers/patientController');

router.post('/', createPatient);
router.get('/:patientId', getPatientbyId);
router.put('/:patientId', updatePatientbyId);
module.exports = router;