$(document).ready(() => {

    let
        win = $(window),

        navItem = $('nav .navbar-nav .nav-item'),

        nav = $('nav');

    win.on('load', function () {
        let load = $('.loader');
        load.delay(1000).fadeOut(500, () => {load.remove()})
    });

    win.scroll(function() {
        
        // Add/Remove Active From Navbar
        if (win.scrollTop() >= 100) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }

        // Nav Links add/remove active for items
        $('.nav-add-act').each(function () {
            
            let th = $(this),// Cashing This
                
                target = '#' + th.attr('id');
            
            
            if (win.scrollTop() <= win.height()) {// Add Active To Home
                
                navItem.eq(0).addClass('active').siblings().removeClass('active');
                
            } else if (win.scrollTop() >= th.offset().top) {// Add Active To Anothers Links
                
                $(`nav .nav-item[data-scroll='${target}']`).addClass('active').siblings().removeClass('active');
                
            }
        });
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

        // Accordion

        let accrH3 = $('.accordion .item h3');
        
        accrH3.click(function () {
            let h3 = $(this);
            
            h3.parent().toggleClass('active').siblings().removeClass("active");
            
            h3.parent().siblings().find('section').slideUp(500);
            
            h3.next().slideToggle(500);
            
        });
    

});