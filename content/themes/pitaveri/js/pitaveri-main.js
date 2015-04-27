(function(){
    /* global $ */
    'use strict';

    $.fn.isOnScreen = function(){
        var $window, viewport = {}, bounds = {}, winHeight, elHeight;

        $window = $(window);
        winHeight = $window.height();
        elHeight = this.height();

        viewport.top = $window.scrollTop();
        bounds.top = this.offset().top;

        viewport.bottom = viewport.top + winHeight - elHeight + 55;
        bounds.bottom = bounds.top + elHeight - 45;

        return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
    };

    var toggleMenuColor = function() {
        if ($(document).scrollTop() < $('.detail').height() - 55) {
            $('.primary-nav').addClass('white');
            return;
        }

        $('.detail').each(function(){
            if ($(this).isOnScreen()) {
                $('.primary-nav').addClass('white');
                return false;
            } else if (!$(this).isOnScreen()) {
                $('.primary-nav').removeClass('white');
            }
        });
    };

    var imageCover = function($detail_img) {
        var $image, imageSrc, srcIndex;
        $detail_img.each(function(){
            $image = $(this).find('img');
            imageSrc = $image.attr('srcset');

            if (typeof imageSrc !== 'undefined') {
                imageSrc = imageSrc.split(', ');
                srcIndex = window.devicePixelRatio > 1.5 ? 1 : 0;
                imageSrc = imageSrc[srcIndex].split(' ')[0];
            } else {
                imageSrc = $image.attr('src');
            }

            $(this).attr('data-image', imageSrc).find('img').remove();
        });

        $detail_img.imageScroll({
            coverRatio: 1,
            speed: 0,
            mediaWidth: 1400,
            mediaHeight: 933
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


    $(document).ready(function() {
        if (!('ontouchstart' in window)) {
            $('html').addClass('no-touch');
            imageCover($('.detail'));
            toggleMenuColor();
            if ($('body').hasClass('single') || $('body').hasClass('home')) {
                $(document).on('scroll', function(){
                    toggleMenuColor();
                });
            }
        }

        //projectListImage($('.project-list-image'));
    });
}());
