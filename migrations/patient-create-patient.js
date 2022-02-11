const { v4: UUIDV4 } = require('uuid');
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Patient', [
        {
            patientId: UUIDV4(),
            patientName: 'Joe Montana',
            illness: 'CTE',
            doctorNotes: 'Steve Young sucks!!'
        },
        {
            patientId: UUIDV4(),
            patientName: 'John Elway',
            illness: 'pidgeon toed',
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
            illness: 'small hands',
            doctorNotes: 'Emmitt Smith is the only reason I am in the hall of fame!!'
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patient', null, {});
    }
  };