(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".services_wrp").owlCarousel({
    loop: false,
    margin: 10,
    items: 2,
    stagePadding: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50
      },
      370: {
        items: 2
      }
    }
  });

  // owlCarousel
  $(".social_Slider").owlCarousel({
    loop: false,
    margin: 20,
    items: 5,
    nav: true,
    dots: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
  });


  // owlCarousel
  $(".Testimonial_Slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    nav: false,
    dots: true
  });

  // owlCarousel
  $(".Gallery_wrp").owlCarousel({
    loop: false,
    margin: 10,
    items: 2,
    stagePadding: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
        stagePadding: 0
      },
      390: {
        items: 2
      }
    }
  });

  // owlCarousel
  $(".Products_wrp").owlCarousel({
    loop: false,
    margin: 10,
    items: 2,
    stagePadding: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60
      },
      350: {
        items: 1,
        stagePadding: 80
      },
      390: {
        items: 2
      }
    }
  });

  // owlCarousel
  $(".app_slider").owlCarousel({
    loop: false,
    margin: 15,
    items: 6,
    mouseDrag:false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 4
      },
      350: {
        items: 5
      },
      390: {
        items: 6
      }
    }
  });



  $('select').niceSelect();
})(jQuery);
