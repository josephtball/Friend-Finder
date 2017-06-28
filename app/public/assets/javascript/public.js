$(document).ready(function() {
	$('select').material_select();

	$('#submit').on('click', function() {
		event.preventDefault();

		function validate() {
			var valid = true;

			$('.required').each(function() {
				if ($(this).val() === "") {
					valid = false;
				}
			});

			$('select').each(function() {
				if ($(this).val() === null) {
					valid = false;
				}
			});

			return valid;
		}

		if (validate() === true) {
			var userInfo = {
				name: $('#name').val().trim(),
				photo: $('#photo').val().trim(),
				scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val(),],
				add: $('#addData').prop('checked')
			};
			
			var currentURL = window.location.origin;

			$.post(currentURL+'/api/friends', userInfo, function(response) {
				console.log(response);

				$('#matchName').text(response.name);
				$('#matchPhoto').attr('src', response.photo);

				$('.modal').modal('open');
			});


		} else {
			alert('Please fill out all fields before submitting.')
		}
	});
});