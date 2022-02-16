const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const {
    Patient,
    Doctor,
} = require('./../models');
const {
    renderHomePage,
    loginView,
    signupView
} = require('../controllers/doctorController');
const {
    getAllPatients
} = require('../controllers/patientController');
router.get('/', renderHomePage);
router.get('/patients', getAllPatients);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;