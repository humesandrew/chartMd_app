$(document).ready(function () {
	const patientNameField = $('#patientNameField');
	const illnessField = $('#illnessField');
	const doctorNotesField = $('#doctorNotesField');
	const addPatientBtn = $("#addPatientBtn");
	const addNotesBtn = $(".addNotes");
	const saveNotesBtn = $("#saveNotesBtn");

	addPatientBtn.on('click', async function (event) {
		event.preventDefault();
		await $.post('/api/patients', {
			patientName: patientNameField.val(),
			illness: illnessField.val(),
			doctorNotes: doctorNotesField.val(),
		});
		window.location.reload();
	});

	addNotesBtn.on('click', async function (event) {
		event.preventDefault();
		const patientId = $(this).attr('data-id');
		$.getJSON('/api/patients/' + patientId, async function (data) {
			console.log(data);
			$('#pm-patientName').html(data.patientName);
			$('#pm-patientIllness').html(data.illness);
			$('#saveNotesBtn').attr('data-id', data.patientId);
		})
	});

	saveNotesBtn.on('click', async function (event) {
		const patientId = $(this).attr('data-id')
		console.log(patientId);
		await $.ajax({
			type: 'PUT',
			url: '/api/patients/' + patientId,
			contentType: 'application/json',
			data: JSON.stringify({
				patientName: $('#pm-patientName').text(),
				patientIllness: $('#pm-patientIllness').text(),
				doctorNotes: $('#newNoteid').val(),
			}),
		})
		window.location.reload();
	});
});