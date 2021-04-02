$(document).ready(() => {

    let
        win = $(window),

        nav = $('nav');


    win.scroll(function() {
        if (win.scrollTop() >= 100) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }
    });

    nav.headroom();

    // Trigger FitText
    $('header article h1').fitText(1.1, { minFontSize: '25px', maxFontSize: '60px' });

    // Trigger VenoBox
    $('.venobox').venobox();


    // Smooth Scroll
    $('[data-scroll]').on('click', function () {
        
        let target = $(this).data('scroll');
        
        if (target == 'top') {
            $('body, html').animate({
                scrollTop: 0
            }, 600);
        } else {
            $('body, html').animate({
                scrollTop: $(target).offset().top + 1
            }, 200);
        }        
    });

    // Stuffs Slider
    $('.testimonials .buttons button').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        let target = $(this).data('show');

        $('.testimonials .stuffs .stuff').not(target).fadeOut(1000, () => {
            $(target).fadeIn(1000);
        });

    });




});