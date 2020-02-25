

$(document).ready(function () {

    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plan').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-feature').offset().top }, 1000);
    });


    /* for sticky navigation */
    $('.js--section-feature').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    }
    )

    /* navigation scroll */

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $('.js-animate1').waypoint(function (direction) {
        $('.js-animate1').addClass('animated bounceIn')
    }, {
        offset: '50%'
    })

    $('.js-animate2').waypoint(function (direction) {
        $('.js-animate2').addClass('animated fadeInUpBig')
    }, {
        offset: '100%'
    })

    $('.js-animate3').waypoint(function (direction) {
        $('.js-animate3').addClass('animated fadeInLeftBig')
    }, {
        offset: '100%'
    })

    $('.js-animate4').waypoint(function (direction) {
        $('.js-animate4').addClass('animated fadeInUpBig')
    }, {
        offset: '100%'
    })

    $('.js-animate5').waypoint(function (direction) {
        $('.js-animate5').addClass('animated fadeInRightBig')
    }, {
        offset: '100%'
    })


    $('.js-animate6').waypoint(function (direction) {
        $('.js-animate6').addClass('animated rubberBand')
    }, {
        offset: '50%'
    })


    //  mobile nav

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        }else{
            icon.removeClass('ion-close-round')
            icon.addClass('ion-navicon-round')
        }
    })


})