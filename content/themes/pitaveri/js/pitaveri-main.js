(function(){
    /* global $ */
    'use strict';

    var lastResize = 0,
        lastScroll = 0;

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

    function retinaImage(imageUrl) {
        var extension, extensionIndex, extensionlessImage;

        extensionIndex = imageUrl.lastIndexOf('.');
        extension = imageUrl.substr(extensionIndex);
        extensionlessImage = imageUrl.substr(0,
                                             imageUrl.length - extension.length);

        return extensionlessImage + '@2x' + extension;
    }

    function pickedImageSrc(imageSrcs) {
        var i, len, imageSrc, innerWidth, pixelRatio, biggestImage;

        innerWidth = window.innerWidth;
        pixelRatio = window.devicePixelRatio;

        for (i = 0, len = imageSrcs.length; i < len; i += 1) {
            imageSrc = imageSrcs[i].split(' ');
            biggestImage = imageSrc;

            if (parseInt(imageSrc[1], 10) < innerWidth * pixelRatio) {
                continue;
            }

            return imageSrc[0];
        }

        if (pixelRatio !== 1) {
            biggestImage[0] = retinaImage(biggestImage[0]);
        }

        return biggestImage[0];
    }

    var projectListImage = function($detail_img) {
        var $image, imageSrc;

        $detail_img.each(function(){
            $image = $(this).find('img');
            imageSrc = $image.attr('srcset');

            if (typeof imageSrc !== 'undefined') {
                imageSrc = pickedImageSrc(imageSrc.split(', '));
            } else {
                imageSrc = $image.attr('src');
            }

            $(this).css('background-image', 'url("' + imageSrc + '")')
                   .find('img')
                   .remove();
        });
    };

    function setupMenuColorToggling() {
        var now = new Date().getTime();

        if (window.innerHeight < 576 || now - lastScroll < 100) {
            return;
        }

        toggleMenuColor();
        $(document).on('scroll', toggleMenuColor);

        lastScroll = now;
    }

    function onResize() {
        var now = new Date().getTime();

        if (now - lastResize < 200) {
            return;
        }

        $(document).off('scroll', toggleMenuColor);
        setupMenuColorToggling();

        lastResize = now;
    }

    function init() {
        if (!('ontouchstart' in window)) {
            $('html').addClass('no-touch');
        }

        if (window.innerWidth < 576) {
            return;
        }

        if ($('body').hasClass('single') || $('body').hasClass('home')) {
            setupMenuColorToggling();
        }

        projectListImage($('.project-list-image'));
        $(document).on('resize', onResize);

    }

    $(document).ready(init);
}());
