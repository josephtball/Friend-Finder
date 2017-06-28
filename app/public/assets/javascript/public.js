$(document).ready(function() {
	// javascript for materialize css
	$('select').material_select();

	// function to run when user submits survey
	$('#submit').on('click', function() {
		event.preventDefault();

		// function to validate all fields in survey where filled out
		function validate() {
			// set 'valid' to true, if all fields are filed out true will be returned
			var valid = true;

			// if any inputs with class .required are empty false will be returned
			$('.required').each(function() {
				if ($(this).val() === "") {
					valid = false;
				}
			});

			// if any <select> elements have not been selected false will be returned
			$('select').each(function() {
				if ($(this).val() === null) {
					valid = false;
				}
			});

			return valid;
		}

		// run if all fields in survey are filled out, else alert user
		if (validate() === true) {
			// setup user object
			var userInfo = {
				name: $('#name').val().trim(),
				photo: $('#photo').val().trim(),
				scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val(),],
				add: $('#addData').prop('checked')
			};
			
			// get currentURL
			var currentURL = window.location.origin;

			// send user object to server to get friend match back
			$.post(currentURL+'/api/friends', userInfo, function(response) {

				// fill out modal with matched friend info
				$('#matchName').text(response.name);
				$('#matchPhoto').attr('src', response.photo);

				// open modal
				$('.modal').modal('open');
			});


		} else {
			alert('Please fill out all fields before submitting.')
		}
	});
});