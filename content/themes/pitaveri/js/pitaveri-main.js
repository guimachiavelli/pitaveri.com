(function(){
    /* global $ */
    'use strict';

    function isElementOnScreen(el) {
        var viewport = {}, bounds, winHeight, navHeight;

        winHeight = window.innerHeight;
        navHeight = document.querySelector('.menu-item').clientHeight;

        viewport.top = document.body.scrollTop;
        bounds = el.getBoundingClientRect();

        viewport.bottom = viewport.top + winHeight;

        return !(viewport.top < bounds.top + viewport.top - navHeight ||
                 viewport.top > bounds.bottom + viewport.top - navHeight);
    }

    var toggleMenuColor = function() {
        if ($(document).scrollTop() <= $('.detail')[0].clientHeight - 55) {
            $('.primary-nav').addClass('white');
            return;
        }

        $('.detail').each(function(){
            if (isElementOnScreen(this)) {
                $('.primary-nav').addClass('white');
                return false;
            }

            $('.primary-nav').removeClass('white');
        });
    };

    var projectListImage = function($detail_img) {
        var $image, imageSrc, srcIndex;

        $detail_img.each(function(){
            $image = $(this).find('img'),
            imageSrc = $image.attr('srcset');

            if (typeof imageSrc !== 'undefined') {
                imageSrc = imageSrc.split(', ');
                srcIndex = window.devicePixelRatio > 1.5 ? 1 : 0;
                imageSrc = imageSrc[srcIndex].split(' ')[0];
            } else {
                imageSrc = $image.attr('src');
            }

            $(this).css('background-image', 'url("' + imageSrc + '")')
                   .find('img')
                   .remove();
        });
    };

    function init() {
        if (!('ontouchstart' in window)) {
            $('html').addClass('no-touch');

            if ($('body').hasClass('single') || $('body').hasClass('home')) {
                toggleMenuColor();
                $(document).on('scroll', toggleMenuColor);
            }
        }

        projectListImage($('.project-list-image'));
    }

    $(document).ready(init);
}());
