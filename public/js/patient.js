$(document).ready(function() {
	const patientNameField = $('#patientNameField');
    const illnessField = $('#illnessField');
    const doctorNotesField = $('#doctorNotesField');
	const addPatientBtn = $("#addPatientBtn");
	const addNotesBtn = $("#addNotesBtn");

	addPatientBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/patients', {
			patientName: patientNameField.val(),
            illness: illnessField.val(),
            doctorNotes: doctorNotesField.val(),
		});

		
		window.location.reload();
	})

	addNotesBtn.on('click', async function(event) {
		event.preventDefault();
		await $.patch('/api/patients', {
			patientName: patientNameField.val(),
            illness: illnessField.val(),
            doctorNotes: doctorNotesField.val(),
		});
		
		
		window.location.reload();
	})

	
});


