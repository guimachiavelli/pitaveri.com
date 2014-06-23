$.fn.isOnScreen = function(){
	var win, viewport, bounds;

	win = $(window);

	viewport = {
		top : win.scrollTop(),
	};

	viewport.bottom = viewport.top + win.height() - this.height() + 55;

	bounds = this.offset();
	bounds.bottom = bounds.top + this.outerHeight() - 45;

	return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);

};


var toggleMenuColor = function() {


	if ($(document).scrollTop() < $('.detail').height() - 55) {
		$('#primary-nav').addClass('white');
		return;
	}

	$('.detail').each(function(){
		if ($(this).isOnScreen()) {
			console.log('on screen');
			$('#primary-nav').addClass('white');
			return false;
		} else if (!$(this).isOnScreen()) {
			$('#primary-nav').removeClass('white');
		}
	});
};


var imageCover = function($detail_img) {
	$detail_img.each(function(){
		var $image = $(this).find('img'),
			image_src = $image.attr('src');
		//$(this).css('background-image', 'url("'+image_src+'")').find('img').remove();
		$(this).attr('data-image', image_src).find('img').remove();
	});
	$detail_img.imageScroll();
};


$(document).ready(function() {
	//why the hell did I add this?
	//$('*').css('outline','1px solid transparent');
	if ($('html').hasClass('no-touch')) {
		imageCover($('.detail'));
	}

	if ($('body').hasClass('single') || $('body').hasClass('home')) {
		$(document).on('scroll', function(){
			toggleMenuColor();
		});
	}
});

