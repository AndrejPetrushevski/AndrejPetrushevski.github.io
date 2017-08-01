//Screen-wide navigation on mobile
$(document).ready(function() {
    $('span .fa-bars').click(function() {
        $('.nav-item').css({
            'background-color' : 'rgba(178,34,34,0.3)',
            'width' : '100%',
            'height' : '100%',
            'color' : '#fff',
            'text-align' : 'center'
        });
        $('.nav-link').css({
          'background-color' : 'rgba(255,255,255,0.3)',
          'color' : '#fff'
        });
        $('.navbar.navbar-toggleable-lg').css({
            'height' : '100%',
            'width' : '100%'
        });
    });
});



//Fade in for the main text
$(document).ready(function() {
    $(".home-main-text").hide().fadeIn(2000);
});

//Change the navbar css on scroll down
$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $('.navbar').css({
                    'background-color':'rgba(255, 255, 255, 0.5)',
                    'box-shadow': '0 0 10px rgba(0,0,0,0.2'
                });
                $('.navbar-brand').css({
                    'font-size': '25px',
                    'transition': '0.5s'
                });
                $('.nav-link').css({
                    'font-size': '20px',
                    'transition': '0.5s'
                });
                $('.nav-link').css('color', '#000').hover(function() {
                    $(this).css('color', 'firebrick');
                }, function() {
                    $(this).css('color', '#000');
                });
                $('.navbar-brand').css('color', '#000');
                $('.navbar-brand strong').css('color', 'firebrick');
                $('span .fa-bars').removeClass('fa-3x')
                    .addClass('fa-2x').css({
                        'transition': '0.5s',
                        'color': 'rgba(178,34,34,0.8)',
                        'margin-bottom': '5px'
                })
                .hover(function(){
                    $(this).css('color','firebrick');
                }, function(){
                    $(this).css('color','rgba(178,34,34,0.5)');
                });
                $('.nav-item .active').css('color','firebrick');
                $('.skills-portrait').removeClass('animatable').addClass('animated');

            } else {
                $('.navbar').css({
                    'background-color': 'transparent',
                    'box-shadow': 'none'
                });
                $('.navbar-brand').css({
                    'font-size': '40px',
                    'transition': '0.5s'
                });
                $('.nav-link').css({
                    'font-size': '25px',
                    'transition': '0.5s'
                });
                $('.nav-link').css('color', '#fff').hover(function(){
                    $(this).css('color', 'firebrick');
                }, function(){
                    $(this).css('color', '#fff');
                })
                $('.navbar-brand').css('color', '#fff');
                $('.navbar-brand strong').css('color', 'firebrick');
                $('span .fa-bars').removeClass('fa-1x')
                    .addClass('fa-3x').css({
                        'transition': '0.5s',
                        'color': 'rgba(255,255,255,0.5)'
                })
                .hover(function(){
                    $(this).css('color','white');
                }, function(){
                    $(this).css('color', 'rgba(255,255,255,0.5)');
                });

            }
        });
    }
});


$(document).ready(function() {
    //Smooth scroll on click
    //Home section
    $('.nav-link-home').click(function() {
        $('html,body').animate({
            scrollTop: $('.home-section').offset().top},
            'slow');
    });
    //Skills section
    $('.nav-link-skills').click(function() {
        $('html,body').animate({
            scrollTop: $('.skills-section').offset().top},
            'slow');
    });
    //Work section
    $('.nav-link-work').click(function() {
        $('html,body').animate({
            scrollTop: $('.work-section').offset().top},
            'slow');
    });
    //Contact section
    $('.nav-link-contact, .home-button').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact-section').offset().top},
            'slow');
    });

});


// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.skills-block', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.projects-outer', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});
