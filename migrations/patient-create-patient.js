const {
  v4: UUIDV4
} = require('uuid');
module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patient', [{
        patientId: UUIDV4(),
        patientName: 'Brett Favre',
        illness: 'Gunslinger',
        doctorNotes: 'Do not turn the ball over.'
      },
      {
        patientId: UUIDV4(),
        patientName: 'John Elway',
        illness: 'Pidgeon Toed',
        doctorNotes: 'I love Peyton Manning!!'
      },
      {
        patientId: UUIDV4(),
        patientName: 'Peyton Manning',
        illness: 'Huge Forehead',
        doctorNotes: 'Chicken Parm you taste so good!!!'
      },
      {
        patientId: UUIDV4(),
        patientName: 'Troy Aikman',
        illness: 'Foot in Mouth',
        doctorNotes: 'Stop Talking!'
      },
    ]);
  },
  down: async function (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patient', null, {});
  }
};