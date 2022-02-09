$(document).ready(function() {
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const signinBtn = $('#signinBtn');
	const logoutBtn = $('#logout');
	signinBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/doctors/login', {
			email: emailField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/patients';
	});
	logoutBtn.on('click', async function() {
		await $.post('/api/doctors/logout');
		window.location.href = '/';
	});
});