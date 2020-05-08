(function ($) {
    'use strict';

    var rehomes_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    rehomes_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#rehomesNav').classyNav();
    }

    // *************************
    // :: 3.0 Sticky Active Code
    // *************************

    rehomes_window.on('scroll', function () {
        if (rehomes_window.scrollTop() > 200) {
            $('.main-header-area').addClass('sticky slideInDown');
        } else {
            $('.main-header-area').removeClass('sticky slideInDown');
        }
    });

    // *************************************
    // :: 4.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testimonialArea = $('.testimonial-area');
        testimonialArea.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            nav: true,
            navText: [('<i class="fa fa-chevron-left" aria-hidden="true"></i>'), (' <i class ="fa fa-chevron-right" aria-hidden="true"></i>')]
        });
    }

    // *******************************
    // :: 5.0 Blog Slides Active Code
    // *******************************
    if ($.fn.owlCarousel) {
        var blogSlides = $('.blog-slider');
        blogSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            nav: true,
            navText: [('<i class="fa fa-chevron-left" aria-hidden="true"></i>'), (' <i class ="fa fa-chevron-right" aria-hidden="true"></i>')]
        });
    }

    // ***************************************
    // :: 6.0 Relatest Post Slides Active Code
    // ***************************************
    if ($.fn.owlCarousel) {
        var relatestSlider = $('.relatest-post-slider');
        relatestSlider.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            smartSpeed: 1000,
            nav: true,
            navText: [('<i class="fa fa-chevron-left" aria-hidden="true"></i>'), (' <i class ="fa fa-chevron-right" aria-hidden="true"></i>')],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    // ********************************
    // :: 7.0 Partner Slide Active Code
    // ********************************
    if ($.fn.owlCarousel) {
        var partnerSlider = $('.partner-logo-slide');
        partnerSlider.owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            margin: 0,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 3
                },
                480: {
                    items: 4
                },
                576: {
                    items: 5
                }
            }
        });
    }

    // *********************************
    // :: 8.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // **************************
    // :: 9.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 10.0 WOW Active Code
    // ***********************
    if (rehomes_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 11.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 12.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        rehomes_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // *********************************
    // :: 13.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // *******************************
    // :: 14.0 Nice Select Active Code
    // *******************************
    if ($.fn.countdown) {
        $('select').niceSelect();
    }

    // *********************************************
    // :: 15.0 Price & Size Range Slider Active Code
    // *********************************************
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + "[" + ui.values[0] + ' - ' + ui.values[1] + "]" + unit;
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    })

    $('.slider-range-size').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + "[" + ui.values[0] + ' - ' + ui.values[1] + "]" + unit;
                t.closest('.slider-range').find('.range-size').html(result);
            }
        });
    })

    // ****************************************
    // :: 16.0 Contact Bottom Arrow Active Code
    // ****************************************
    $(".bottom-arrow").on("click", function () {
        $(".contact-maps").toggleClass("minimize");
    });

})(jQuery);