/*jslint browser: true */
/*devel: true */
/*global $, jQuery, define, require, requirejs */

require(['jquery', 'modules/image-cover', 'modules/menu-color'], function($,imageCover, toggleMenuColor) {


	$(document).ready(function() {
		$('*').css('outline','1px solid transparent');
		imageCover($('.detail'));

		$(document).on('scroll', function(){
			toggleMenuColor();
		});


	});
});