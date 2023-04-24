$(document).ready(function() {
	// Get the modal elements
	var mercuryModal = $('#mercuryModal');
	var venusModal = $('#venusModal');
	var earthModal = $('#earthModal');
	var marsModal = $('#marsModal');
	var jupiterModal = $('#jupiterModal');

	// When a planet card is clicked, show the corresponding modal
	$('.planet-card').click(function() {
		var modalId = $(this).data('target');
		$(modalId).modal('show');
	});

	// When a modal is shown, play its corresponding video
	$('.modal').on('shown.bs.modal', function() {
		var videoId = $(this).data('video');
		if (videoId) {
			$(videoId).get(0).play();
		}
	});

	// When a modal is hidden, pause its corresponding video
	$('.modal').on('hidden.bs.modal', function() {
		var videoId = $(this).data('video');
		if (videoId) {
			$(videoId).get(0).pause();
		}
	});

	// When the Mercury modal is shown, set its video source and play it
	mercuryModal.on('show.bs.modal', function() {
		var video = $('#mercuryVideo');
		video.attr('src', 'videos/mercury.mp4');
		video.get(0).play();
	});

	// When the Venus modal is shown, set its video source and play it
	venusModal.on('show.bs.modal', function() {
		var video = $('#venusVideo');
		video.attr('src', 'videos/venus.mp4');
		video.get(0).play();
	});

	// When the Earth modal is shown, set its video source and play it
	earthModal.on('show.bs.modal', function() {
		var video = $('#earthVideo');
		video.attr('src', 'videos/earth.mp4');
		video.get(0).play();
	});

	// When the Mars modal is shown, set its video source and play it
	marsModal.on('show.bs.modal', function() {
		var video = $('#marsVideo');
		video.attr('src', 'videos/mars.mp4');
		video.get(0).play();
	});

	// When the Jupiter modal is shown, set its video source and play it
	jupiterModal.on('show.bs.modal', function() {
		var video = $('#jupiterVideo');
		video.attr('src', 'videos/jupiter.mp4');
		video.get(0).play();
	});
});
