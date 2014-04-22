/*jslint browser: true */
/*devel: true */
/*global $, jQuery, define */

define(['jquery'], function() {

	'use strict';

	$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height() - this.height() + 55;

		var bounds = this.offset();
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


	return toggleMenuColor;

});


