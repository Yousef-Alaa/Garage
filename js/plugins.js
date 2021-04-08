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
    $('.venobox').venobox({
        bgcolor: '',
        overlayColor: 'rgba(6, 12, 34, 0.85)',
        closeBackground: '',
        closeColor: '#fff'
    });


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

    // Set Height Of Map
    $('.our-products iframe').height( $('.our-products article').innerHeight() );

    // Trigger Owl Carousel
    $('.gallary .owl-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        center:true,
        margin: 5,
        responsive: {
            0: { items: 1 },
            450: { items: 2 },
            660: { items: 3 },
            880: { items: 4 },
            1200: {items: 5}
        }
    });
    

});