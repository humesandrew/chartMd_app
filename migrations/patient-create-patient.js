const { v4: UUIDV4 } = require('uuid');
module.exports = {
    up: async function (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Patient', [
        {
            patientId: UUIDV4(),
            patientName: 'Joe Montana',
            illness: 'Finger Blister',
            doctorNotes: 'Steve Young sucks!!'
        },
        {
            patientId: UUIDV4(),
            patientName: 'John Elway',
            illness: 'Pidgeon Toed',
            doctorNotes: 'Dan Marino sucks!!'
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
            illness: 'Small Hands',
            doctorNotes: 'Emmitt Smith is the only reason I am in the hall of fame!!'
        },
      ]);
    },
    down: async function (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Patient', null, {});
    }
  };