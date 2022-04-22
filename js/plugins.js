(function($) {

    if(!$) {
        return;
    }

    ////////////
    // Plugin //
    ////////////

    $.fn.headroom = function(option) {
        return this.each(function() {
        var $this   = $(this),
            data      = $this.data('headroom'),
            options   = typeof option === 'object' && option;

        options = $.extend(true, {}, Headroom.options, options);

        if (!data) {
            data = new Headroom(this, options);
            data.init();
            $this.data('headroom', data);
        }
        if (typeof option === 'string') {
            data[option]();

            if(option === 'destroy'){
            $this.removeData('headroom');
            }
        }
        });
    };

    //////////////
    // Data API //
    //////////////

    $('[data-headroom]').each(function() {
        var $this = $(this);
        $this.headroom($this.data());
    });

}(window.Zepto || window.jQuery));



(function( $ ){
  
    $.fn.fitText = function( kompressor, options ) {
  
      // Setup options
      var compressor = kompressor || 1,
          settings = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, options);
  
      return this.each(function(){
  
        // Store the object
        var $this = $(this);
  
        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
          $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        };
  
        // Call once to set.
        resizer();
  
        // Call on resize. Opera debounces their resize by default.
        $(window).on('resize.fittext orientationchange.fittext', resizer);
  
      });
  
    };

})( jQuery );

$(document).ready(() => {

    let
        win = $(window),

        topBtn = $('.top-btn'),

        navItem = $('nav .navbar-nav .nav-item'),

        nav = $('nav');

    win.on('load', function () {
        let load = $('.loader');
        load.delay(1000).fadeOut(500, () => {
            load.remove();
            // Trigger AOS
            AOS.init({
                offset: 250, // offset (in px) from the original trigger point
                delay: 0, // values from 0 to 3000, with step 50ms
                duration: 800, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false // whether animation should happen only once - while scrolling down
            });
        });
    });

    win.scroll(function() {
        
        // Add/Remove Active From Navbar
        if (win.scrollTop() >= 100) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }

        // Scroll Top Btn
        if (win.scrollTop() >= 1000) {
            topBtn.css('bottom', '20px');
        } else {
            topBtn.css('bottom', '-45px');
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

    // Trigger NiceScroll
    $("body").niceScroll({
        cursorcolor: $(':root').css('--colorOne'),
        cursorwidth: "13px",
        cursorborderradius: "6px",
        cursorborder: "none",
        zindex: 9
    });

    $('.main-h, .main-h + p').attr('data-aos', "flip-down")

    nav.headroom();

    $('.navbar-toggler').click(() => {
        $('.navbar-nav').slideToggle(500);
    });

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

    $('.gallary .owl-carousel button.owl-dot').attr('aria-label', "Center Align")

        // Accordion

        let accrH3 = $('.accordion .item h3');
        
        accrH3.click(function () {
            let h3 = $(this);
            
            h3.parent().toggleClass('active').siblings().removeClass("active");
            
            h3.parent().siblings().find('section').slideUp(500);
            
            h3.next().slideToggle(500);
            
        });
    

});