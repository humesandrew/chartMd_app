const router = require('express').Router();
const doctorRoutes = require('./doctorRoutes');
const patientRoutes = require('./patientRoutes');
router.use('/doctors', doctorRoutes);
router.use('/patients', patientRoutes);
module.exports = router;