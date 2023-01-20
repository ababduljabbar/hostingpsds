$(document).ready(function () {
    
$('.brand-active').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.sliders-active').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true
  });
  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<div class="prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="next"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false, 
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
       
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $("body").niceScroll({
    cursorcolor:"#002bb7",

    cursorwidth: "10px",
    scrollspeed: 100,
  
  });
  jQuery('.main-menu').meanmenu({
    
    meanMenuContainer: '.resp-menu',
    meanScreenWidth: "4800",
    meanDisplay: "none",
    meanNavPush: "false"
 
});
$('html').smoothScroll(2000);
$('.call-top').smoothScroll(3000);
$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 300) {
        $('.call-top').fadeIn(500);
    } else {
        $('.call-top').fadeOut(500);
    }
});
});
 