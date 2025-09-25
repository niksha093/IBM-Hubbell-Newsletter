
var width = $(window). width();
// AOS.init({
//     delay: 50,
//     duration: 600,
//     offset: 0,
//     once: true
// });
$(document).ready(function () {
    var width = $(window).width();
    var headerHeight = $('header').height();
    $('body').css({ "margin-top": headerHeight });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });
    
    width < 990 &&
        (

            $('ul.main-nav').css({ "margin-top": headerHeight }),
            $(".menu").click(function () {
                $(this).toggleClass("open"), $(this).siblings('.navmenu').find(".main-nav").toggleClass("menu-open");
            }),
            $(".subnav-arrow").click(function () {
                $(this).toggleClass("open"), $(this).siblings("ul.sub-menu-block").toggleClass('active');
            }),
            $(".sub-menu-block .subnav-arrow").click(function () {
                $(this).toggleClass("open");
                $(this).parent("li").toggleClass('active');
            })
        );
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('header').addClass('fixedHeader');
            $('.back-to-top').fadeIn('slow');
            // $('.fixed-buttons').css("bottom", 45);
        } else {
            $('header').removeClass('fixedHeader');
            $('.back-to-top').fadeOut('slow');
            // $('.fixed-buttons').css("bottom", 0);
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.moreless-button').click(function(e) {
        e.preventDefault();
        $('.moretext').slideToggle();
        if ($('.moreless-button').text() == "Read More") {
          $(this).text("Read more")
        } else {
          $(this).text("Read less")
        }
      }); 
   
});

$(window).ready(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    // alert(path);
    $('.main-nav li a').each(function() {
     if (this.href === path) {
        $(this).parent().addClass('active');
        $(this).closest('.top-level-link').addClass('active');
        $(this).parent().parent().addClass('active');
     }
    });
});

$(window).scroll(function() {
    if(width < 991) {
        $('ul.resp-tabs-list > li[aria-controls="tab_item-0"]').addClass("resp-tab-active");     
        $('div.resp-tabs-container > h2[aria-controls="tab_item-0"]').addClass("resp-tab-active");     
        $('div.resp-tabs-container > div[aria-labelledby="tab_item-0"]').addClass("resp-tab-content-active");    
        // $('div.resp-tabs-container > div[aria-labelledby="tab_item-0"]').show();
        }
    
});
