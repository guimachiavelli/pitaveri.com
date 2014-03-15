/*jslint browser: true */
/*devel: true */
/*global $, jQuery, define */

define(['jquery'], function() {

	'use strict';

	var imageCover = function($detail_img) {
		$detail_img.each(function(){
			var $image = $(this).find('img'),
				image_src = $image.attr('src');
			$(this).css('background-image', 'url("'+image_src+'")').find('img').remove();
		});
	};


	return imageCover;

});

