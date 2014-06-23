$.fn.isOnScreen = function(){
	var win, viewport, bounds;

	win = $(window);

	viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};

	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height() - this.height() + 55;

	bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


var toggleMenuColor = function() {
	if ($(document).scrollTop() < $('.detail').height()) {
		$('#primary-nav').addClass('white');
		return;
	}

	$('.detail').each(function(){
		if ($(this).isOnScreen()) {
			$('#primary-nav').addClass('white');
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
		$(this).attr('data-cover-ratio', 1.1);
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

