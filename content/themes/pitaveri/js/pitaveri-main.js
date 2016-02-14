(function(){
    /* global $ */
    'use strict';

    var lastScroll = 0;

    $.fn.isOnScreen = function(){
        var $window, viewport = {}, bounds = {}, winHeight, elHeight;

        $window = $(window);
        winHeight = $window.height();
        elHeight = this.height();

        viewport.top = $window.scrollTop();
        bounds.top = this.offset().top;

        viewport.bottom = viewport.top + winHeight - elHeight + 55;
        bounds.bottom = bounds.top + elHeight - 100;

        return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
    };

    var toggleBackgroundColor = function(event) {
        event = event || {};

        if (event.timeStamp - lastScroll < 500) {
            return;
        }

        $('p').each(function(){
            if ($(this).isOnScreen()) {
                $('body').addClass('fade-image');
                return false;
            }

            $('body').removeClass('fade-image');
            lastScroll = event.timesStamp;

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

    var featuredImage = function($image) {
        var imageSrc, srcIndex;

        imageSrc = $image.find('img').attr('srcset');

        if (typeof imageSrc !== 'undefined') {
            imageSrc = imageSrc.split(', ');
            srcIndex = window.devicePixelRatio > 1.5 ? 1 : 0;
            imageSrc = imageSrc[srcIndex].split(' ')[0];
        } else {
            imageSrc = $image.find('img').attr('src');
        }

        $image.remove();
        $('body').css('background-image', 'url("' + imageSrc + '")');

        return imageSrc;
    };

    $(document).ready(function() {
        projectListImage($('.project-list-image'));
        featuredImage($('.featured-image'));
        toggleBackgroundColor();

        $(document).on('scroll', toggleBackgroundColor);
    });
}());
