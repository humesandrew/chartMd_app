const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const {
    Patient,
    Doctor,
} = require('./../models');
const { renderHomePage, loginView, signupView } = require('../controllers/doctorController');
const { getAllPatients } = require('../controllers/patientController');
router.get('/', renderHomePage);
router.get('/patients', getAllPatients);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

router.get('/seed', async (req, res) => {
    const patientsToCreate = [
        {
            patientName: 'Joe Montana',
            illness: 'CTE',
            doctorNotes: 'Steve Young sucks!!'
        },
        {
            patientName: 'John Elway',
            illness: 'pidgeon toed',
            doctorNotes: 'Dan Marino sucks!!'
        },
        {
            patientName: 'Peyton Manning',
            illness: 'Huge Forehead',
            doctorNotes: 'Chicken Parm you taste so good!!!'
        },
        {
            patientName: 'Troy Aikman',
            illness: 'small hands',
            doctorNotes: 'Emmitt Smith is the only reason I am in the hall of fame!!'
        },
    ];

    const patients = await Patient.bulkCreate(patientsToCreate);
    res.json({patients});
})

module.exports = router;
