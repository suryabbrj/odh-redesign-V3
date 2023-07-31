"use strict";

// Preloader
/* $(window).on('load', function () {
    $(".se-pre-con").fadeOut("slow");;
});
 */
//Image popup onload
$(function() {
    $("#imageModal").modal("show");
    $("#landingModal").modal("show");
});

// Sticky header
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("fixHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Back to top
var btn = $('#backToTop');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// Nav bar
jQuery(document).ready(function($) {
    $('.menu').responsiveMenu({
        breakpoint: '992'
    });
});

// Exp center slider
$('.exp-sldr').slick({
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 767,
        settings: {
            centerMode: false,
            centerPadding: '0px'
        }
    }]
});

// Celebrity video slider
$('.celeb-video').slick();

// Gallery slider
$('.glry-sldr').slick({
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 767,
        settings: {
            centerMode: false,
            centerPadding: '0px'
        }
    }]
});