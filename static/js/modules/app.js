require([
		'jquery',
		'stellar'
		], 
		function(
			$,
			stellar
		) {


	$(document).ready(function() {
		
		$.stellar({
			positionProperty: 'transform',
			hideDistantElements: false,
//			horizontalScrolling: false
		});

	});
});
