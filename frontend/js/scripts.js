(function($) {

    'use strict';

    var host = window.location.origin;
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

    var url = window.location;
    // var pathArray = new URL(url).pathname.split( '/' );
    var pathArray = window.location.pathname.split('/');
    var notFound = true;
    var iltration = pathArray.length;
    var strict = false;



    function addActiveClassToChild(li) {
        li.closest('.menu-has-children').addClass('is-active');
        li.addClass('is-active');
    }

    function locatActiveMenu(path) {
        $('.nav-menu a, #mobile-nav a').each(function() {
            if (this.href === path) {
                notFound = false;
                if (pathArray.length === iltration || !strict) {
                    var li = $(this).closest('li')
                    addActiveClassToChild(li)
                }
            }
        });
        if (notFound) {
            if (iltration > 0) {
                var p = '';
                for (var i = 1; i < iltration; i++) {
                    p += '/' + pathArray[i];
                }
                path = host + p;
                iltration--;
                locatActiveMenu(path);
            }
        }
    }

    locatActiveMenu(path)


}).apply(this, [jQuery]);


//
if ($(window).width() < 767) {
    $('.stay-wrap').removeClass('row');
    $('.stay-wrap .col-md-4').wrap('<div class="slider-item"></div>');
    $('.stay-wrap').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
}